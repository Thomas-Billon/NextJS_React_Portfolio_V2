export function tw<T extends Record<string, (string | boolean)[] | ((...args: any[]) => (string | boolean)[])>>(styles: T): Record<keyof T, any> {
    const result: Partial<Record<keyof T, any>> = {};

    for (const key in styles) {
        const value = styles[key];

        if (typeof value === 'function') {
            result[key] = (...args: any[]) => twConcat([key, ...value(...args)]);
        }
        else if (Array.isArray(value)) {
            result[key] = twConcat([key, ...value]);
        }
    }

    return result as Record<keyof T, any>;
};

const twConcat = (args: (string | boolean)[]): string => {
    return args.filter((arg) => {
        return typeof arg === 'string';
    }).join(' ');
};
