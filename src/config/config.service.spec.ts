import { Test, TestingModule } from '@nestjs/testing';
import * as fs from 'fs';
import { ConfigService } from './config.service';

jest.mock('fs', () => ({
  existsSync: jest.fn(),
  readFileSync: jest.fn(),
}));

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    (fs.existsSync as jest.Mock).mockReturnValue(true);
    (fs.readFileSync as jest.Mock).mockReturnValue('KEY=value');

    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigService],
    }).compile();

    service = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
