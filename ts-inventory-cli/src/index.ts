// src/index.ts

let inventoryName: string = "Gudang Elektronik";
let totalItems: number = 500;
let isOperational: boolean = true;
let availableBrands: string[] = ["Samsung", "LG", "Sony"];

console.log(`Selamat datang di ${inventoryName}!`);

// Coba buat kesalahan!
// totalItems = "lima ratus"; // TypeScript akan langsung error di sini!

enum ProductCategory {
  ELECTRONICS = "ELEKTRONIK",
  ACCESSORIES = "AKSESORIS",
  GADGETS = "GAJET",
}


interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  category?: ProductCategory;
}

const firstProduct: Product = {
  id: 1,
  name: "Smart TV 55 inch",
  brand: "Samsung",
  price: 7500000,
  quantity: 10,
  category: ProductCategory.ELECTRONICS
};

function printProductInfo(product: Product): void {
  console.log(`- ${product.name} (${product.brand}), Harga: Rp${product.price}, Stok: ${product.quantity}`);
}

printProductInfo(firstProduct);