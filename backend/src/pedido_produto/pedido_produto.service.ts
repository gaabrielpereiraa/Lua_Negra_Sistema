import { Injectable } from '@nestjs/common';
import { CreatePedidoProdutoDto } from './dto/create-pedido_produto.dto';
import { UpdatePedidoProdutoDto } from './dto/update-pedido_produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PedidoProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePedidoProdutoDto) {
    const pedidoProdutoCriado = await this.prisma.pedidoProduto.create({ data });
    return pedidoProdutoCriado;
  }

  async findAll() {
    const pedidoProdutos = await this.prisma.pedidoProduto.findMany();
    return pedidoProdutos;
  }

  async findOne(id: number) {
    const pedidoProduto = await this.prisma.pedidoProduto.findUnique({ where: { id } });
    return pedidoProduto;
  }

  async update(id: number, updatePedidoProdutoDto: UpdatePedidoProdutoDto) {
    const pedidoProdutoAtualizado = await this.prisma.pedidoProduto.update({
      where: {id}, 
      data: updatePedidoProdutoDto
    });
    return pedidoProdutoAtualizado;
  }

  async remove(id: number) {
    await this.prisma.pedidoProduto.delete({ where:{ id } });  
    return 'Produto removido com sucesso!';
  }
}
