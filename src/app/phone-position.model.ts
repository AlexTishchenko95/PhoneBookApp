export class PhonePosition {
    constructor(
        public surname: string,
        public name: string,
        public patronName: string,
        public telephone: string,
    ) { }
}

export interface PhonePosition {
    phonePos: PhonePosition[];
}
