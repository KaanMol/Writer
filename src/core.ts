export class CoreAPI<T> {
    public id: string;
    public value: T;
    public listeners = {
        onValueChanged: (newValue: T) => { }
    };

    constructor(id: string, startupValue: T) {
        this.id = id;
        this.value = startupValue;
    }

    public setValueListener(valueChange: (newValue: T) => void) {
        this.listeners.onValueChanged = valueChange;
    }

    public setValue(newValue: T) {
        console.log(newValue)
        this.value = newValue;
        this.listeners.onValueChanged(newValue);
    }
};