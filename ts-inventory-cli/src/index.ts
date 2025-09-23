// src/index.ts

let inventoryName: string = "Gudang Elektronik";
let totalItems: number = 500;
let isOperational: boolean = true;
let availableBrands: string[] = ["Samsung", "LG", "Sony"];

console.log(`Selamat datang di ${inventoryName}!`);

// Coba buat kesalahan!
// totalItems = "lima ratus"; // TypeScript akan langsung error di sini!