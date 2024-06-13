import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products = [];

  create(createProductDto: CreateProductDto) {
    const product = { id: Date.now(), ...createProductDto };
    this.products.push(product);
    return product;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string) {
    return this.products.find(product => product.id === +id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const index = this.products.findIndex(product => product.id === +id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updateProductDto };
      return this.products[index];
    }
    return null;
  }

  remove(id: string) {
    const index = this.products.findIndex(product => product.id === +id);
    if (index !== -1) {
      const [removedProduct] = this.products.splice(index, 1);
      return removedProduct;
    }
    return null;
  }
}