export enum ProductCategory {
  ELECTRONICS = "ELEKTRONIK",
  ACCESSORIES = "AKSESORIS",
  GADGETS = "GAJET",
}


export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  category?: ProductCategory;
}

export class InventoryManager {
  private products: Product[] = [];

  constructor() {
    console.log("Inventory Manager diinisialisasi!");
  }

  public addProduct(product: Product): void {
    this.products.push(product);
    console.log(`Produk "${product.name}" berhasil ditambahkan.`);
  }

  public listProducts(): void {
    if (this.products.length === 0) {
      console.log("Inventaris masih kosong.");
      return;
    }
    console.log("Daftar Produk di Inventaris:");
    this.products.forEach(p => this.printProductInfo(p)); // Kita akan pindahkan fungsi ini juga
  }
  private printProductInfo(product: Product): void {
    console.log(`- [${product.category}] ${product.name}, Stok: ${product.quantity}`);
  }
}
