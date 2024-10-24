export default class DB {
  private dbName: string;
  private db: any;
  constructor(dbName: string) {
    this.dbName = dbName;
  }

  // 打开数据库
  public openStore(storeName: string, keyPath: string, indexs?: Array<string>) {
    const request = window.indexedDB.open(this.dbName, 1);
    return new Promise((resolve, reject) => {
      request.onerror = (event) => {
        console.error("打开数据库失败：", event);
        reject(event);
      };

      request.onsuccess = (event) => {
        this.db = (event.target as any).result;
        resolve(true);
        console.log("数据库打开成功：");
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as any).result;
        console.log("数据库升级成功：", db);

        const store = db.createObjectStore(storeName, {
          keyPath,
          autoIncrement: true,
        });
        if (indexs && indexs.length > 0) {
          indexs?.map((v: string) => {
            store.createIndex(v, v, { unique: false });
          });
        }

        store.transaction.oncomplete = (event: any) => {
          console.log("创建对象仓库成功：", event);
        };
      };
    });
  }

  // 新增/修改数据库数据
  public updateItem(storeName: string, data: any) {
    const transaction = this.db.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);
    const request = store.put({ ...data, time: new Date().getTime() });

    request.onerror = (event: any) => {
      console.error("写入数据失败：", event);
    };

    request.onsuccess = (event: any) => {
      console.log("写入数据成功：", event);
    };
  }

  // 删除数据
  public deleteItem(storeName: string, key: any) {
    const transaction = this.db.transaction([storeName], "readwrite");
    const store = transaction.objectStore(storeName);
    const request = store.delete(key);

    request.onerror = (event: any) => {
      console.error("删除数据失败：", event);
    };

    request.onsuccess = (event: any) => {
      console.log("删除数据成功：", event);
    };
  }

  // 查询所有数据
  public getAllItems(storeName: string) {
    const transaction = this.db.transaction([storeName], "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.getAll();

    return new Promise((resolve, reject) => {
      request.onerror = (event: any) => {
        console.error("查询所有数据失败：", event);
      };

      request.onsuccess = (event: any) => {
        console.log("查询所有数据成功：", event);
        resolve(event.target.result);
      };
    });
  }

  // 查询某一条数据
  public getItem(storeName: string, key: any) {
    const transaction = this.db.transaction([storeName], "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.get(key);

    request.onerror = (event: any) => {
      console.error("查询某一条数据失败：", event);
    };

    request.onsuccess = (event: any) => {
      console.log("查询某一条数据成功：", event);
    };
  }
}
