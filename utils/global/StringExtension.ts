// Extend StringConstructor class to include new methods as String.something()
declare interface StringConstructor {
    format(str: string, ...args: any[]): string;
    snakeCase(str: string): string;
    parseFloat(str: string): number | undefined;
    parseFloatArray(str: string): number[] | undefined;
}

// Extend String class to include new methods as str.something()
declare interface String {
    format(...args: any[]): string;
    snakeCase(): string;
    parseFloat(): number | undefined;
    parseFloatArray(): number[] | undefined;
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

String.parseFloat = (str) => parseFloatSingle(str);
String.prototype.parseFloat = function () {
    return parseFloatSingle(this as string);
};

const parseFloatSingle = (str: string): number | undefined => {
    const regexArray = str.match(/[-\d.]+/g);
    const regexString = regexArray?.[0];

    return regexString ? parseFloat(regexString) : undefined;
}

String.parseFloatArray = (str) => parseFloatArray(str);
String.prototype.parseFloatArray = function () {
    return parseFloatArray(this as string);
};

const parseFloatArray = (str: string): number[] | undefined => {
    const regexIterable = str.matchAll(/[-\d.]+/g);
    const regexArray = [...regexIterable]?.[0];

    return regexArray?.map(item => parseFloat(item));
}