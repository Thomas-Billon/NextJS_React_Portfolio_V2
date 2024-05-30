import '@/utils/global/StringExtension';


//#region Current Style Animation Processes

interface StyleAnimationProcess {
    element: HTMLElement;
    property: string;
    intervalId: NodeJS.Timeout;
    onComplete?: (element?: HTMLElement) => void;
}

let currentAnimations: StyleAnimationProcess[] = [];

const getCurrentAnimations = (element: HTMLElement): StyleAnimationProcess[] => {
    let animations: StyleAnimationProcess[] = [];

    for (let currentAnimation of currentAnimations) {
        if (currentAnimation.element.isEqualNode(element)) {
            animations.push(currentAnimation);
        }
    }
    
    return animations;
}

const getCurrentAnimation = (element: HTMLElement, property: string): StyleAnimationProcess | undefined => {
    return currentAnimations.find((currentAnimation) => {
        return currentAnimation.element.isEqualNode(element) && currentAnimation.property === property;
    });
}

//#endregion Current Style Animation Processes

interface AnimatePropertyOptions {
    duration?: number;
    step?: number;
    format?: string;
    onComplete?: (element?: HTMLElement) => void;
}

export const startAnimation = (element: HTMLElement, property: string, targets: number[], { duration = 250, step = 5, format = '{0}px', onComplete = () => {} }: AnimatePropertyOptions = {}): void => {
    const origins = element.style.getPropertyValue(property).parseFloatArray();

    if (origins.length != targets.length) {
        console.error(`Error - ${startAnimation.name} : Mismatch between origin (${origins}) & target (${targets}) on ${property} property`);
        return;
    }

    for (let i = 0; i < origins.length; i++)
    {
        const origin = origins[i];
        const target = targets[i];

        let j: number = 0;
        const intervalId = setInterval(() => {
            j++;
            
            let newValue: number = origin + (target - origin) / duration * (step * j);
            element.style.setProperty(property, String.format(format, newValue));
    
            if (j >= duration / step) {
                stopAnimation(element, property);
            }
        }, step);
    
        currentAnimations.push({element, property, intervalId, onComplete});
    }
}

export const stopAnimation = (element: HTMLElement, property: string = ''): void => {
    let animations: StyleAnimationProcess[] = [];

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