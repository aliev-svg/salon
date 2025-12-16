const STORAGE_KEY = "orders";

function getOrders() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
}

export const basketApi = {
  getAll() {
    return getOrders();
  },

  getById(id) {
    return getOrders().find(o => o.id === id);
  },

  create(order) {
    const orders = getOrders();
    orders.push(order);
    saveOrders(orders);
  },

  update(id, updatedOrder) {
    const orders = getOrders().map(o =>
      o.id === id ? updatedOrder : o
    );
    saveOrders(orders);
  },

  remove(id) {
    const orders = getOrders().filter(o => o.id !== id);
    saveOrders(orders);
  }
};
