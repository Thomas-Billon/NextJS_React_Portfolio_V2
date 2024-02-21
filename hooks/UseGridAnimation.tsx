import { useEffect, useRef } from "react";
import { useWindowSize } from '@/hooks/UseWindowSize';
import { animateProperty } from '@/utils/AnimateProperty';

interface Vector2 {
    x: number,
    y: number
}

interface RectSize {
    width: number,
    height: number
}

interface Cell extends Vector2, RectSize {}

export const useGridAnimation = (grid: HTMLElement | null): void => {
    if (grid == null) {
        return;
    }

    const observerRef = useRef<MutationObserver>();
    const gridSize = useRef<RectSize>({ width: 0, height: 0 });
    const cellPositions = useRef<Cell[]>([]);

    // Runs only once
    useEffect(() => {
        const observer: MutationObserver = new MutationObserver(observerCallback);

        // This ensure the observer is only run once and the animation doesn't flicker even with strict mode on
        observerRef.current?.disconnect();
        observerRef.current = observer;
        observerRef.current?.observe(grid, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });
    }, []);

    // Runs each time window size is changed
    const size = useWindowSize();
    useEffect(() => {
        const gridContainer = grid.parentElement as HTMLElement;
        const gridCells = [...grid.children] as HTMLElement[]

        const newGridSize: RectSize = {
            width: gridContainer.offsetWidth,
            height: gridContainer.offsetHeight,
        }

        const newCellPositions: Cell[] = gridCells.map(cell => {
            return {
                x: cell.offsetLeft,
                y: cell.offsetTop,
                width: cell.offsetWidth,
                height: cell.offsetHeight
            };
        });

        cellPositions.current = newCellPositions;
        gridSize.current = newGridSize;
    }, [size]);

    // Animates grid cells when class is updated
    const observerCallback = () => {
        const gridContainer = grid.parentElement as HTMLElement;
        const gridCells = [...grid.children] as HTMLElement[]

        // Grid height
        if (gridContainer.offsetHeight != gridSize.current.height) {
            const oldHeight: number = gridSize.current.height;
            const newHeight: number = gridContainer.offsetHeight;
                
            gridContainer.style.height = `${oldHeight}px`;

            animateProperty(gridContainer, 'height', newHeight, {onComplete : () => {
                gridContainer.style.height = '';
            }});

            gridSize.current.height = newHeight;
        }

        for (let [i, cell] of gridCells.entries()) {
            const cellAnimated = cell.children[0] as HTMLElement;

            // Cells width & height
            if (cell.offsetWidth != cellPositions.current[i].width ||
                cell.offsetHeight != cellPositions.current[i].height) {
                const oldWidth: number = cellPositions.current[i].width;
                const oldHeight: number = cellPositions.current[i].height;
                const newWidth: number = cell.offsetWidth;
                const newHeight: number = cell.offsetHeight;
                
                cell.style.width = `${newWidth}px`;
                cell.style.height = `${newHeight}px`;
                cellAnimated.style.width = `${oldWidth}px`;
                cellAnimated.style.height = `${oldHeight}px`;

                animateProperty(cellAnimated, 'width', newWidth, {onComplete : () => {
                    cell.style.width = '';
                    cellAnimated.style.width = '';
                }});
                animateProperty(cellAnimated, 'height', newHeight, {onComplete : () => {
                    cell.style.height = '';
                    cellAnimated.style.height = '';
                }});

                cellPositions.current[i].width = newWidth;
                cellPositions.current[i].height = newHeight;
            }

            // Cells X & Y position
            if (cell.offsetLeft != cellPositions.current[i].x ||
                cell.offsetTop != cellPositions.current[i].y) {
                const oldPosX: number = cellPositions.current[i].x - cell.offsetLeft;
                const oldPosY: number = cellPositions.current[i].y - cell.offsetTop;
                const newPosX: number = cell.offsetLeft;
                const newPosY: number = cell.offsetTop;
                
                cellAnimated.style.position = 'relative';
                cellAnimated.style.left = `${oldPosX}px`;
                cellAnimated.style.top = `${oldPosY}px`;

                animateProperty(cellAnimated, 'left', 0, {onComplete : () => {
                    cellAnimated.style.position = '';
                    cellAnimated.style.left = '';
                }});
                animateProperty(cellAnimated, 'top', 0, {onComplete : () => {
                    cellAnimated.style.position = '';
                    cellAnimated.style.top = '';
                }});

                cellPositions.current[i].x = newPosX;
                cellPositions.current[i].y = newPosY;
            }
        }
    }
}