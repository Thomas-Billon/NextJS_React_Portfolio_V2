import { useEffect, useRef } from "react";
import { useWindowSize } from '@/hooks/UseWindowSize';
import { animateProperty } from '@/utils/AnimateProperty';


interface CellPosition {
    x: number,
    y: number,
    width: number,
    height: number
}

export const useGridAnimation = (grid: HTMLElement | null): void => {
    if (grid == null) {
        return;
    }

    const observerRef = useRef<MutationObserver>();
    const cellPositions = useRef<CellPosition[]>([]);

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
        const gridCells = [...grid.children] as HTMLElement[]

        const newCellPositions: CellPosition[] = gridCells.map(cell => {
            return {
                x: cell.offsetLeft,
                y: cell.offsetTop,
                width: cell.offsetWidth,
                height: cell.offsetHeight
            };
        });

        cellPositions.current = newCellPositions;
    }, [size]);

    // Animates grid cells when class is updated
    const observerCallback = () => {
        const gridCells = [...grid.children] as HTMLElement[]

        for (let [i, cell] of gridCells.entries()) {
            const cellAnimated = cell.children[0] as HTMLElement;

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
        }
    }
}