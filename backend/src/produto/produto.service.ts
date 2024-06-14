import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProdutoDto) {
    const produtoCriado = await this.prisma.produto.create({ data });
    return produtoCriado;
  }

  async findAll() {
    const produtos = await this.prisma.produto.findMany();
    return produtos;
  }

  async findOne(id: number) {
    const produto = await this.prisma.produto.findUnique({ where: { id } });
    return produto;
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    const produtoAtualizado = await this.prisma.produto.update({
      where: {id}, 
      data: updateProdutoDto
    });
    return produtoAtualizado;
  }

  async remove(id: number) {
    await this.prisma.produto.delete({ where:{ id } });  
    return 'Produto removido com sucesso!';
  }
}
