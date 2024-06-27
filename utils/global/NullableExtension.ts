export type NonNullableFields<T> = { [F in keyof T]-?: NonNullableFields<NonNullable<T[F]>> };

export const isNull = <T>(value: T | undefined | null): value is T => {
    return value === undefined || value === null;
}

export const isNotNull = <T>(value: T | undefined | null): value is T => {
    return !isNull(value);
}
