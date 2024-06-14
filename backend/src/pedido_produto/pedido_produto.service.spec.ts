import { Test, TestingModule } from '@nestjs/testing';
import { PedidoProdutoService } from './pedido_produto.service';

describe('PedidoProdutoService', () => {
  let service: PedidoProdutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidoProdutoService],
    }).compile();

    service = module.get<PedidoProdutoService>(PedidoProdutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
