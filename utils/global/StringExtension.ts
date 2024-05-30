// Extend StringConstructor class to include new methods as String.something()
declare interface StringConstructor {
    snakeCase(str: string): string;
    format(str: string, ...args: any[]): string;
    parseFloatArray(str: string): number[];
}

// Extend String class to include new methods as str.something()
declare interface String {
    snakeCase(): string;
    format(...args: any[]): string;
    parseFloatArray(): number[];
}


String.snakeCase = (str) => snakeCase(str);
String.prototype.snakeCase = function() {
    return snakeCase(this as string);
}

const snakeCase = (str: string): string => {
    return str
        .replace(/\W+/g, " ")
        .split(/ |\B(?=[A-Z])/)
        .map(word => word.toLowerCase())
        .join('_');
}

String.format = (str, ...args) => format(str, ...args);
String.prototype.format = function(...args) {
    return format(this as string, ...args);
};

const format = (str: string, ...args: any[]): string => {
    return str
        .replace(/{(\d+)}/g, (match, number) =>
            typeof args[number] != 'undefined'
                ? args[number] 
                : match
        );
}

String.parseFloatArray = (str) => parseFloatArray(str);
String.prototype.parseFloatArray = function () {
    return parseFloatArray(this as string);
};

const parseFloatArray = (str: string): number[] => {
    const regexIterable = str.matchAll(/[-\d.]+/g);
    const regexArray = [...regexIterable][0]

    return regexArray.map(item => parseFloat(item));
}