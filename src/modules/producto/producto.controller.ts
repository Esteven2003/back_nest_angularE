import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ApiTags } from '@nestjs/swagger';
import type { Request } from 'express';
import { Req } from '@nestjs/common';


@ApiTags('producto')
@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.productoService.create(createProductoDto);
  }

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Get('back')
  async backend(@Req() req: Request) {
  const builder = await this.productoService.queryBuilder('productos');
  if (req.query.q) {
    // Corregido: :q en lugar de LIKE: q
    builder.where("productos.nombre LIKE :q", { q: `%${req.query.q}%` });
  }

  const sort:any =req.query.sort
  if (sort){
    builder.orderBy("productos.precio", sort.toUpperCase())
  }

  const page:number = parseInt(req.query.page as any) || 1; //si no existe nada captura la pagina 1

  const limit = 3; //limite de productos por pagina

  builder.offset((page-1)*limit).limit(limit); //a partir de que dato vamos a mostrar la información
                                              //si page es 1 entonces a partir de 0 me muestra 10

  const total=await builder.getCount();

  return {
    data: await builder.getMany(),
    total:total,
    page,
    last_page: Math.ceil(total/limit)
  }
  //return await builder.getMany()
} 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productoService.update(+id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}
