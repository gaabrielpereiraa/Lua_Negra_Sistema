import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePedidoDto) {
    const pedidoCriado = await this.prisma.pedido.create({ data });
    return pedidoCriado;
  }

  async findAll() {
    const pedidos = await this.prisma.pedido.findMany();
    return pedidos;
  }

  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id } });
    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    const pedidoAtualizado = await this.prisma.pedido.update({
      where: {id}, 
      data: updatePedidoDto
    });
    return pedidoAtualizado;
  }

  async remove(id: number) {
    await this.prisma.pedido.delete({ where:{ id } });  
    return 'Pedido removido com sucesso!';
  }
}
