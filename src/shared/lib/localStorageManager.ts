export class LocalStorageManager<T> {
  constructor(public key: string) {
    this.key = key;
  }

  getData() {
    const serializedData = localStorage.getItem(this.key);

    if (!serializedData) return null;

    return JSON.parse(serializedData) as T;
  }

  setData(data: T) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  removeData() {
    localStorage.removeItem(this.key);
  }
}
