export class CoreAPI {
    public id: string;
    public value: any;
    public listeners = {
        onValueChanged: (newValue: any) => { }
    };

    constructor(id: string, startupValue: string) {
        this.id = id;
        this.value = startupValue;
    }

    public setValueListener(valueChange: (newValue: any) => void) {
        this.listeners.onValueChanged = valueChange;
    }

    public setValue(newValue: any) {
        console.log(newValue)
        // this.value = newValue;
        this.listeners.onValueChanged(newValue);
    }
};