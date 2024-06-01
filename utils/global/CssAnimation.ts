import '@/utils/global/StringExtension';
import { NonNullableFields } from '@/utils/global/NonNullableFields';


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

export function startCssAnimation(element: HTMLElement, property: string, target: number, options: AnimatePropertyOptions): void;
export function startCssAnimation(element: HTMLElement, property: string, targets: number[], options: AnimatePropertyOptions): void;

export function startCssAnimation(element: HTMLElement, property: string, targets: number | number[], { duration = 250, step = 5, format = '{0}px', onComplete = () => {} }: AnimatePropertyOptions): void {
    if (typeof targets == 'number') {
        targets = [targets]
    }
    
    const origins = element.style.getPropertyValue(property).parseFloatArray();

    if (!origins || origins.length != targets.length) {
        console.error(`Error - ${startCssAnimation.name} : Mismatch between origin (${origins}) & target (${targets}) on ${property} property`);
        return;
    }

    const intervalId = runCssAnimationOnProperty(element, property, origins, targets, {duration, step, format})

    addCurrentAnimation({element, property, intervalId, onComplete});
}

const runCssAnimationOnProperty = (element: HTMLElement, property: string, origins: number[], targets: number[], { duration, step, format }: NonNullableFields<Omit<AnimatePropertyOptions, 'onComplete'>>): NodeJS.Timeout => {
    let i: number = 0;
    const intervalId = setInterval(() => {
        i++;
        
        let newValues: number[] = [];
        for (let j = 0; j < origins.length; j++) {
            const origin = origins[j];
            const target = targets[j];

            const newValue: number = origin + (target - origin) / duration * (step * i);

            newValues.push(newValue);
        }

        element.style.setProperty(property, String.format(format, newValues));

        if (i >= duration / step) {
            stopCssAnimationOnProperty(element, property);
        }
    }, step);

    return intervalId;
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