import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AulaModule } from './aula/aula.module';

@Module({
  imports: [AulaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
