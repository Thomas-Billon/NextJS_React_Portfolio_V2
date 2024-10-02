export class DateOnly extends Date {
    constructor(year: number, month: number, day: number) {
        super(year, month - 1, day);
    }
};
