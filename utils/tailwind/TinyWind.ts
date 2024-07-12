export const tw = (args: (string | boolean)[]): string => {
    const filteredArgs = args.filter((arg) => {
        return typeof arg === 'string';
    });
    return filteredArgs.join(' ');
};
