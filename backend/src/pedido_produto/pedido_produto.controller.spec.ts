import { Test, TestingModule } from '@nestjs/testing';
import { PedidoProdutoController } from './pedido_produto.controller';
import { PedidoProdutoService } from './pedido_produto.service';

describe('PedidoProdutoController', () => {
  let controller: PedidoProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidoProdutoController],
      providers: [PedidoProdutoService],
    }).compile();

    controller = module.get<PedidoProdutoController>(PedidoProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
