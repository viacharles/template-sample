import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexDBStorageService {

  constructor() {
    this.openDatabase();
  }

  private readonly dbName = 'DataBase';
  private readonly dbVersion = 1;
  private db?: IDBDatabase;

  initializeDatabase(dbName: string, storeame: string): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);

      request.onupgradeneeded = (event) => {
        const db = request.result;
        if (!db.objectStoreNames) {
          db.createObjectStore(dbName, { keyPath: 'id', autoIncrement: true });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    })
  }

  setItem(db: IDBDatabase, storeName: string, data: any): Promise<number> {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.add(data);

      request.onsuccess = () => resolve(request.result as number);
      request.onerror = () => reject(request.error)
    })
  }

  getItem() { }


  private openDatabase() {
    const request = indexedDB.open(this.dbName, this.dbVersion);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      // const result = request.result;
      if (db.objectStoreNames.contains('items')) {
        db.createObjectStore(this.dbName, { keyPath: 'id', autoIncrement: true });
      }
    }
    request.onsuccess = () => { }
  }
}
