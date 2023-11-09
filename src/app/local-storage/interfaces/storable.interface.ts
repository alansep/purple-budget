export interface Storable {

    readFromLocalStorage(key: string): string;

    saveOnLocalStorage(key: string, value: string): void;

}