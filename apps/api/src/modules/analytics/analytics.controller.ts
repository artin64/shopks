import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('analytics')
@Controller('analytics')
export class AnalyticsController {
  @Get('health')
  health() {
    return { module: 'analytics', status: 'ok' };
  }
}

