import { ProductCategory } from "./InventoryManager.js";
import type { Product } from "./InventoryManager.js";
import { InventoryManager } from "./InventoryManager.js";
// src/index.ts

let inventoryName: string = "Gudang Elektronik";
let totalItems: number = 500;
let isOperational: boolean = true;
let availableBrands: string[] = ["Samsung", "LG", "Sony"];

console.log(`Selamat datang di ${inventoryName}!`);

// Coba buat kesalahan!
// totalItems = "lima ratus"; // TypeScript akan langsung error di sini!

const manager = new InventoryManager();

const tv: Product = {
  id: 1, name: "Smart TV 55 inch", brand: "Samsung",
  price: 7500000, quantity: 10, category: ProductCategory.ELECTRONICS
};

const mouse: Product = {
  id: 2, name: "Wireless Mouse", brand: "Logitech",
  price: 350000, quantity: 50, category: ProductCategory.ACCESSORIES
};

manager.addProduct(tv);
manager.addProduct(mouse);
manager.listProducts();