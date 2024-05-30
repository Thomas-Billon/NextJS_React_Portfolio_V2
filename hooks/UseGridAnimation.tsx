import { useEffect, useRef } from 'react';
import { useWindowSize } from '@/hooks/UseWindowSize';
import { isAnimationRunning, startAnimation, stopAnimation } from '@/utils/global/StyleAnimation';


interface RectPosition {
    top: number;
    left: number;
}

interface RectSize {
    width: number;
    height: number;
}

interface Cell extends RectPosition, RectSize {}

interface UseGridAnimationProps {
    grid: HTMLElement | null;
    duration?: number;
}

export const useGridAnimation = ({ grid, duration = 250 }: UseGridAnimationProps): void => {
    const observerRef = useRef<MutationObserver>();
    const gridSize = useRef<RectSize>({ width: 0, height: 0 });
    const cellPositions = useRef<Cell[]>([]);

    // Runs only once
    useEffect(() => {
        if (grid == null) {
            return;
        }

        const observer: MutationObserver = new MutationObserver(observerCallback);

        // This ensure the observer is only run once and the animation doesn't flicker even with strict mode on
        observerRef.current?.disconnect();
        observerRef.current = observer;
        observerRef.current?.observe(grid, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });
    }, [grid]);

    // Runs each time window size is changed
    const size = useWindowSize();
    useEffect(() => {
        if (grid == null) {
            return;
        }

        const gridContainer = grid.parentElement as HTMLElement;
        const gridCells = [...grid.children] as HTMLElement[]

        const newGridSize: RectSize = {
            width: gridContainer.offsetWidth,
            height: gridContainer.offsetHeight,
        }

        const newCellPositions: Cell[] = gridCells.map(cell => {
            return {
                top: cell.offsetTop,
                left: cell.offsetLeft,
                width: cell.offsetWidth,
                height: cell.offsetHeight
            };
        });

        cellPositions.current = newCellPositions;
        gridSize.current = newGridSize;
    }, [grid, size]);

    // Animates grid & cells when class is updated
    const observerCallback = () => {
        if (isGridAnimationRunning()) {
            stopGridAnimation();
            return;
        }

        startGridAnimation();
    }

    const startGridAnimation = (): void => {
        if (grid == null) {
            return;
        }

        const gridContainer = grid.parentElement as HTMLElement;
        const gridCells = [...grid.children] as HTMLElement[]

        // Grid height
        startGridAnimationProperty(gridSize.current, 'height', gridContainer.offsetHeight,
            [{ element: gridContainer, oldValue: gridSize.current.height, newValue: gridContainer.offsetHeight, isAnimated: true }]
        );

        for (let [i, cell] of gridCells.entries()) {
            const cellAnimated = cell.children[0] as HTMLElement;

            // Cell width
            startGridAnimationProperty(cellPositions.current[i], 'width', cell.offsetWidth,
                [
                    { element: cellAnimated, oldValue: cellPositions.current[i].width, newValue: cell.offsetWidth, isAnimated: true },
                    { element: cell, oldValue: cell.offsetWidth, isAnimated: false }
                ]
            );

            // Cell height
            startGridAnimationProperty(cellPositions.current[i], 'height', cell.offsetHeight,
                [
                    { element: cellAnimated, oldValue: cellPositions.current[i].height, newValue: cell.offsetHeight, isAnimated: true },
                    { element: cell, oldValue: cell.offsetHeight, isAnimated: false }
                ]
            );

            // Cell pos Y
            startGridAnimationProperty(cellPositions.current[i], 'top', cell.offsetTop,
                [{ element: cellAnimated, oldValue: cellPositions.current[i].top - cell.offsetTop, newValue: 0, isAnimated: true }]
            );

            // Cell pos X
            startGridAnimationProperty(cellPositions.current[i], 'left', cell.offsetLeft,
                [{ element: cellAnimated, oldValue: cellPositions.current[i].left - cell.offsetLeft, newValue: 0, isAnimated: true }]
            );
        }
    }

    interface GridAnimationProperty {
        element: HTMLElement;
        oldValue: number;
        newValue?: number;
        isAnimated: boolean;
    }

    const startGridAnimationProperty = <T,>(ref: T, property: string, newValueRef: number, gridProperties: GridAnimationProperty[]): void => {
        // Skips animation if unnecessary
        for (let gridProperty of gridProperties) {
            if (gridProperty.isAnimated && gridProperty.oldValue == gridProperty.newValue) {
                return;
            }
        }

        // Sets & animates properties on grid & cells
        for (let gridProperty of gridProperties) {
            // Sets property to initial value
            gridProperty.element.style.setProperty(property, `${gridProperty.oldValue}px`);

            // Applies relative position style
            if (property == 'top' || property == 'left') {
                gridProperty.element.style.position = 'relative';
            }

            // Animates property to target value
            if (gridProperty.isAnimated && typeof gridProperty.newValue != 'undefined') {
                startAnimation(gridProperty.element, property, [gridProperty.newValue], {duration: duration, onComplete : () => {
                    for(let gridPropertyOnComplete of gridProperties) {
                        gridPropertyOnComplete.element.style.setProperty(property, '');
                    }

                    // Removes relative position style
                    if (property == 'top' || property == 'left') {
                        gridProperty.element.style.position = '';
                    }
                }});
            }
        }

        // Updates ref to new values
        ref[property as keyof T] = newValueRef as T[keyof T];
    }

    const stopGridAnimation = (): void => {
        if (grid == null) {
            return;
        }

        const gridContainer = grid.parentElement as HTMLElement;
        const gridCells = [...grid.children] as HTMLElement[]

        // Stops grid animations
        stopAnimation(gridContainer);
        
        // Updates grid ref to new values
        // Needs a timeout, for some reason offset values are off when read synchronously
        setTimeout(() => {
            gridSize.current.height = gridContainer.offsetHeight;
        }, 0);

        // Stops cells animations
        for (let cell of gridCells) {
            const cellAnimated = cell.children[0] as HTMLElement;

            stopAnimation(cellAnimated);
        }
        
        // Updates cells ref to new values
        // Needs a timeout, for some reason offset values are off when read synchronously
        setTimeout(() => {
            let i = 0;
            for (let cell of gridCells) {

                cellPositions.current[i].top = cell.offsetTop;
                cellPositions.current[i].left = cell.offsetLeft;
                cellPositions.current[i].width = cell.offsetWidth;
                cellPositions.current[i].height = cell.offsetHeight;

                i++;
            }
        }, 0);
    };

    const isGridAnimationRunning = (): boolean => {
        if (grid == null) {
            return false;
        }

        const gridContainer = grid.parentElement as HTMLElement;
        const gridCells = [...grid.children] as HTMLElement[]

        // Checks if grid animations are running
        if (isAnimationRunning(gridContainer)) {
            return true;
        }

        // Checks if cells animations are running
        for (let cell of gridCells) {
            const cellAnimated = cell.children[0] as HTMLElement;

            if (isAnimationRunning(cellAnimated)) {
                return true;
            }
        }

        return false;
    };
}