interface AnimationProcess {
    element: HTMLElement,
    property: string,
    intervalId: NodeJS.Timeout,
    onComplete?: (element?: HTMLElement) => void;
}

let currentAnimations: AnimationProcess[] = [];

const getCurrentAnimations = (element: HTMLElement): AnimationProcess[] => {
    let animations: AnimationProcess[] = [];

    for (let currentAnimation of currentAnimations) {
        if (currentAnimation.element.isEqualNode(element)) {
            animations.push(currentAnimation);
        }
    }
    
    return animations;
}

const getCurrentAnimation = (element: HTMLElement, property: string): AnimationProcess | undefined => {
    return currentAnimations.find((currentAnimation) => {
        return currentAnimation.element.isEqualNode(element) && currentAnimation.property === property;
    });
}

interface AnimatePropertyOptions {
    duration?: number;
    step?: number;
    unit?: string;
    onComplete?: (element?: HTMLElement) => void;
}

export const startPropertyAnimation = (element: HTMLElement, property: string, target: number, { duration = 250, step = 5, unit = 'px', onComplete = () => {} }: AnimatePropertyOptions = {}): void => {
    let i: number = 0;
    const origin: number = parseFloat(element.style.getPropertyValue(property));

    const intervalId = setInterval(() => {
        i++;
        
        let newValue: number = origin + (target - origin) / duration * (step * i);
        element.style.setProperty(property, `${newValue}${unit}`);

        if (i >= duration / step) {
            stopPropertyAnimation(element, property);
        }
    }, step);

    currentAnimations.push({element, property, intervalId, onComplete});
}

export const stopPropertyAnimation = (element: HTMLElement, property: string = ''): void => {
    let animations: AnimationProcess[] = [];

    if (property === '') {
        animations = getCurrentAnimations(element);
    }
    else {
        const currentAnimation = getCurrentAnimation(element, property);
        if (currentAnimation) {
            animations.push(currentAnimation);
        }
    }
    
    for (let animation of animations) {
        animation.onComplete?.(element);
        
        clearInterval(animation.intervalId);

        currentAnimations.splice(currentAnimations.indexOf(animation), 1);
    }
}

export const isAnimationRunning = (element: HTMLElement, property: string = ''): boolean => {
    if (property === '') {
        return getCurrentAnimations(element).length > 0 ? true : false;
    }
    else {
        return getCurrentAnimation(element, property) ? true : false;
    }
}