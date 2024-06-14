import { Module } from '@nestjs/common';
import { PedidoProdutoService } from './pedido_produto.service';
import { PedidoProdutoController } from './pedido_produto.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PedidoProdutoController],
  providers: [PedidoProdutoService , PrismaService],
})
export class PedidoProdutoModule {}
