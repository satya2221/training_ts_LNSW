import type { Product } from "../models/product.model.js";
import { LogMethodCall, MeasureTime } from "../decorators/log.decorator.js";

class DatabaseConnection {
  connect() {
    console.log("LOG: Membuka koneksi database...");
  }

  // Ini adalah method spesial yang akan dipanggil otomatis oleh `using`
  [Symbol.dispose]() {
    console.log("LOG: Koneksi database ditutup secara otomatis!");
  }
}

export class InventoryManager {
  private products: Product[] = [];

  constructor() {
    console.log("Inventory Manager diinisialisasi!");
  }

  private simulateDbDelay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public async addProduct(product: Product): Promise<void> {
    await this.simulateDbDelay(2000); // Tunggu 500ms
    this.products.push(product);
    console.log(`Produk "${product.name}" berhasil ditambahkan ke database.`);
  }

  @LogMethodCall
  @MeasureTime
  public async listProducts(): Promise<Product[]> {
    using db = new DatabaseConnection();
    db.connect();

    await this.simulateDbDelay(2500);

    console.log("Mengambil daftar produk dari 'database'...");
    return this.products;
  }
  private printProductInfo(product: Product): void {
    console.log(`- [${product.category}] ${product.name}, Stok: ${product.quantity}`);
  }
}