import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ads')
@Controller('ads')
export class AdsController {
  @Get('health')
  health() {
    return { module: 'ads', status: 'ok' };
  }
}

