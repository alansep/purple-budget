import { Injectable } from '@angular/core';
import { Storable } from './interfaces/storable.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements Storable{
  
  constructor() { }

  readFromLocalStorage(key: string): string {
    let value = localStorage.getItem(key);

    if(!value){
      throw new Error('No item has been found');
    }

    return value;
  }
  
  saveOnLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  

}
