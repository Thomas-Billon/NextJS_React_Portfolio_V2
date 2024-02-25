export enum TagEnum {
    None = 0,
    CSharp = 1 << 0,
    DotNet = 1 << 1,
    Javascript = 1 << 2,
    All = Number.MAX_SAFE_INTEGER
}

export namespace TagEnum {
    export const labels = new Map<number, string>([
        [TagEnum.CSharp, 'C#'],
        [TagEnum.DotNet, '.NET'],
        [TagEnum.Javascript, 'Javascript']
    ]);

    export function toString(tag: TagEnum): string {
        return labels.get(tag) ?? TagEnum[tag];
    }
}