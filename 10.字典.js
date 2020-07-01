class Dict {
  constructor() {
    this.datastore = [];
  }
  add(key, val) {
    this.datastore[key] = val;
  }
  find(key) {
    return this.datastore[key];
  }
  count() {
    return Object.keys(this.datastore).length;
  }
  clear() {
    for (let key in this.datastore) {
      delete this.datastore[key];
    }
  }
  remove(key) {
    delete this.datastore[key];
  }
  showAll() {}
}

const d = new Dict();
d.add("age", 10);
d.add("name", "zs");
console.log(d.count());
console.log(d.datastore);
