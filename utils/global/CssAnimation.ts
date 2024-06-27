import '@/utils/global/StringExtension';


//#region Current CSS Animation Processes

interface CssAnimationProcess {
    element: HTMLElement;
    property: string;
    intervalId: NodeJS.Timeout;
    onComplete?: (element?: HTMLElement) => void;
}

let currentAnimations: CssAnimationProcess[] = [];

const getCurrentAnimations = (element: HTMLElement): CssAnimationProcess[] => {
    let animations: CssAnimationProcess[] = [];

    for (let currentAnimation of currentAnimations) {
        if (currentAnimation.element.isEqualNode(element)) {
            animations.push(currentAnimation);
        }
    }
    
    return animations;
}

const getCurrentAnimationOnProperty = (element: HTMLElement, property: string): CssAnimationProcess | undefined => {
    return currentAnimations.find((currentAnimation) => {
        return currentAnimation.element.isEqualNode(element) && currentAnimation.property === property;
    });
}

const addCurrentAnimation = (animation: CssAnimationProcess): void => {
    currentAnimations.push(animation);
}

const removeCurrentAnimation = (animation: CssAnimationProcess): void => {
    animation.onComplete?.(animation.element);
    
    clearInterval(animation.intervalId);

    currentAnimations.splice(currentAnimations.indexOf(animation), 1);
}

//#endregion Current CSS Animation Processes

interface AnimatePropertyOptions {
    duration?: number;
    step?: number;
    format?: string;
    onComplete?: (element?: HTMLElement) => void;
}

export function startCssAnimation(element: HTMLElement, property: string, target: number, { duration = 250, step = 5, format = '{0}px', onComplete = () => {} }: AnimatePropertyOptions = {}): void {
    if (step <= 0) {
        console.error(`Error - ${startCssAnimation.name} : Step cannot be inferior or equal to 0`);
        return;
    }
    
    const origin = element.style.getPropertyValue(property).parseFloat() ?? 0;

    let i: number = 0;
    const intervalId = setInterval(() => {
        i++;

        let newValue: number = 0;
        if (duration <= 0) {
            newValue = target;
        }
        else {
            newValue = origin + (target - origin) / duration * (step * i);
        }

        element.style.setProperty(property, String.format(format, newValue));

        if (i >= duration / step) {
            stopCssAnimationOnProperty(element, property);
        }
    }, step);

    addCurrentAnimation({element, property, intervalId, onComplete});
}

export const stopCssAnimation = (element: HTMLElement): void => {
    const animations = getCurrentAnimations(element);
    
    for (let animation of animations) {
        removeCurrentAnimation(animation);
    }
}

export const stopCssAnimationOnProperty = (element: HTMLElement, property: string): void => {
    const animation = getCurrentAnimationOnProperty(element, property);
    
    if (animation) {
        removeCurrentAnimation(animation);
    }
}

export const isCssAnimationRunning = (element: HTMLElement): boolean => getCurrentAnimations(element).length > 0 ? true : false;

export const isCssAnimationRunningOnProperty = (element: HTMLElement, property: string): boolean => getCurrentAnimationOnProperty(element, property) ? true : false;