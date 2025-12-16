const STORAGE_KEY = "basket";

export const basketApi = {
  getAll() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  },

  add(car) {
    const basket = this.getAll();

    basket.push({
      id: Date.now().toString(),
      ...car
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(basket));
  },

  remove(id) {
    const basket = this.getAll().filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(basket));
  },

  getById(id) {
    return this.getAll().find(item => item.id === id);
  }
};
