import Dexie, { Table } from 'dexie';

export interface Document {
    id: string;
    components: {
        id: string,
        componentType: string,
        value: any
    }[]
}

export class Documents extends Dexie {
    // 'friends' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    documents!: Table<Document>;

    constructor() {
        super('app');
        this.version(1).stores({
            documents: '++id, components' // Primary key and indexed props
        });
    }
}

export const db = new Documents(); 