import { useEffect, useRef } from "react";
import { useWindowSize } from '@/hooks/UseWindowSize';
import { animateProperty } from '@/utils/AnimateProperty';


interface CellPosition {
    x: number,
    y: number,
    width: number,
    height: number
}

export const useGridAnimation = (grid: Element | null): void => {
    const observerRef = useRef<MutationObserver>();
    const cellPositions = useRef<CellPosition[]>([]);

    // Runs only once
    useEffect(() => {
        setTimeout(() => {
            const observer: MutationObserver = new MutationObserver(observerCallback);
    
            // This ensure the observer is only run once and the animation doesn't flicker even with strict mode on
            observerRef.current?.disconnect();
            observerRef.current = observer;
            observerRef.current?.observe(grid as HTMLElement, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });
        }, 500)
    }, []);

    // Runs each time window size is changed
    const size = useWindowSize();
    useEffect(() => {
        const gridCells: HTMLElement[] = Array.prototype.slice.call(grid?.children); // TODO: Try to directly map with Array.from

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
        const gridCells: HTMLElement[] = Array.prototype.slice.call(grid?.children); // TODO: Try to convert with Array.from

        for (let [i, cell] of gridCells.entries()) {
            // TODO: Remove isActive and and cellContent
            // -> Will have to set size as fixed value for each breakpoint (not cool)
            // -> Try to figure out a way to set width differently (position absolute to grab grand parent width?)
            let isActive: boolean = false;
            if (cell.className == 'project-card active') {
                isActive = true;
            }

            const cellContainer: HTMLElement = cell.children[0] as HTMLElement;
            const cellContent: HTMLElement = cellContainer.children[0] as HTMLElement;

            if (cell.offsetWidth != cellPositions.current[i].width ||
                cell.offsetHeight != cellPositions.current[i].height) {
                const oldWidth: number = cellPositions.current[i].width;
                const oldHeight: number = cellPositions.current[i].height;
                const newWidth: number = cell.offsetWidth;
                const newHeight: number = cell.offsetHeight;
                
                cell.style.width = `${newWidth}px`;
                cell.style.height = `${newHeight}px`;
                cellContainer.style.width = `${oldWidth}px`;
                cellContainer.style.height = `${oldHeight}px`;
                cellContent.style.width = isActive ? `${newWidth}px` : `${oldWidth}px`;
                cellContent.style.height = isActive ? `${newHeight}px` : `${oldHeight}px`;

                animateProperty(cellContainer, 'width', newWidth, {onComplete : () => {
                    cell.style.width = '';
                    cellContainer.style.width = '';
                    cellContent.style.width = '';
                }});
                animateProperty(cellContainer, 'height', newHeight, {onComplete : () => {
                    cell.style.height = '';
                    cellContainer.style.height = '';
                    cellContent.style.height = '';
                }});

                cellPositions.current[i].width = newWidth;
                cellPositions.current[i].height = newHeight;
            }
        }
    }
}