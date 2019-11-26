const storage = {
  set: (name, value) => {
    localStorage.setItem( name, JSON.stringify(value) );
    return Promise.resolve();
  },
  get: (name) => {
    return Promise.resolve(
      JSON.parse(
        localStorage.getItem(name)
      )
    );
  }
}

module.exports = storage;