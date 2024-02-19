interface AnimatePropertyOptions {
    duration?: number;
    step?: number;
    onComplete?: (element?: HTMLElement) => void;
}


export const animateProperty = (element: HTMLElement, property: string, target: number, { duration = 250, step = 5, onComplete = () => {} }: AnimatePropertyOptions = {}): void => {
    let i: number = 0;
    const origin: number = parseFloat(element.style.getPropertyValue(property));

    const intervalId = setInterval(() => {
        i++;
        
        let newValue: number = origin + (target - origin) / duration * (step * i);
        element.style.setProperty(property, `${newValue}px`);

        if (i >= duration / step) {
            onComplete(element);
            clearInterval(intervalId);
        }
    }, step);
}