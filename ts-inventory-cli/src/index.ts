import { ProductCategory } from "./models/product.model.js";
import type { Product } from "./models/product.model.js";
import { InventoryManager } from "./services/inventory.service.js";
// src/index.ts

let inventoryName: string = "Gudang Elektronik";
let totalItems: number = 500;
let isOperational: boolean = true;
let availableBrands: string[] = ["Samsung", "LG", "Sony"];

console.log(`Selamat datang di ${inventoryName}!`);

// Coba buat kesalahan!
// totalItems = "lima ratus"; // TypeScript akan langsung error di sini!
async function main() {
  const manager = new InventoryManager();
  
  const tv: Product = {
    id: 1, name: "Smart TV 55 inch", brand: "Samsung",
    price: 7500000, quantity: 10, category: ProductCategory.ELECTRONICS
  };
  
  const mouse: Product = {
    id: 2, name: "Wireless Mouse", brand: "Logitech",
    price: 350000, quantity: 50, category: ProductCategory.ACCESSORIES
  };
  
  await manager.addProduct(tv);
  await manager.addProduct(mouse);

  const allProducts = await manager.listProducts();
  console.log("--- HASIL AKHIR ---");
  allProducts.forEach(p => console.log(`- ${p.name}`));
  
}
main()

type BrandInfo = {
  country: string;
  isPremium: boolean;
};

const brandCatalog = {
  Samsung: { country: "South Korea", isPremium: true },
  Logitech: { country: "Switzerland", isPremium: true }
  // Xiaomi: { country: "China" } // Error: Property 'isPremium' is missing.
} satisfies Record<string, BrandInfo>;

console.log(brandCatalog.Samsung.country);