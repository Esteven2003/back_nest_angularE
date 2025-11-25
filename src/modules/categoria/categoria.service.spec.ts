import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaService } from './categoria.service';

const mockCategoriaRepository = {};

describe('CategoriaService', () => {
  let service: CategoriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriaService,
        {
          provide: 'CATEGORIA_REPOSITORY',
          useValue: mockCategoriaRepository,
        },
      ],
    }).compile();

    service = module.get<CategoriaService>(CategoriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
