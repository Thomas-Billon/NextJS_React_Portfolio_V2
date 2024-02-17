export enum TagEnum {
    None = 0,
    CSharp = 1 << 0,
    DotNet = 1 << 1,
    Javascript = 1 << 2,
    All = Number.MAX_SAFE_INTEGER
}

export namespace TagEnum {
    export function toString(tag: TagEnum): string {
        return TagEnum[tag];
    }
}