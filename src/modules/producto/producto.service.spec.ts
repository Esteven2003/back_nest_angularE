import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { ProductoService } from './producto.service';

const mockProductoRepository = {};

describe('ProductoService', () => {
  let service: ProductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductoService,
        {
          provide: getRepositoryToken(Producto),
          useValue: mockProductoRepository,
        },
      ],
    }).compile();

    service = module.get<ProductoService>(ProductoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
