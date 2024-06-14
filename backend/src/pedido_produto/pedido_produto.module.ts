import { Module } from '@nestjs/common';
import { PedidoProdutoService } from './pedido_produto.service';
import { PedidoProdutoController } from './pedido_produto.controller';

@Module({
  controllers: [PedidoProdutoController],
  providers: [PedidoProdutoService],
})
export class PedidoProdutoModule {}
