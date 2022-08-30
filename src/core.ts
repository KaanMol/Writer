export class CoreAPI {
    public id: string;
    public value: any;

    constructor(id: string, startupValue: string) {
        this.id = id;
        this.value = startupValue;
    }
};