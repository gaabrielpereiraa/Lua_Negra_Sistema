import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { PedidoModule } from './pedido/pedido.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { PedidoProdutoModule } from './pedido_produto/pedido_produto.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ProductsModule, ProductsModule, PedidoModule, FuncionarioModule, PedidoProdutoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
