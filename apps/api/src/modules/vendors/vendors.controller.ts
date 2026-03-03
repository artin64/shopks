import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vendors')
@Controller('vendors')
export class VendorsController {
  @Get('health')
  health() {
    return { module: 'vendors', status: 'ok' };
  }
}

