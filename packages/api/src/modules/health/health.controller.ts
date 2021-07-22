import { Controller, Get } from '@nestjs/common';
import {
  DiskHealthIndicator,
  HttpHealthIndicator,
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator, TypeOrmHealthIndicator,
} from "@nestjs/terminus";


@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly dns: HttpHealthIndicator,
    private readonly database: TypeOrmHealthIndicator,
    private readonly memory: MemoryHealthIndicator,
    private readonly disk: DiskHealthIndicator,
  ) {
  }

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([
      async () => this.dns.pingCheck('google', 'https://google.com'),
      // async () => this.database.pingCheck('postgres', {}),
      async () => this.memory.checkHeap('memory_heap', 200 * 1024 * 1024),
      async () => this.memory.checkRSS('memory_rss', 3000 * 1024 * 1024),
    ]);
  }
}
