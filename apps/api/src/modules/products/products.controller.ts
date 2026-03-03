import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  @Get('health')
  health() {
    return { module: 'products', status: 'ok' };
  }
}

