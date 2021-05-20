import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthStrategy } from './auth/auth.strategy';

@Module({
  imports: [PassportModule],
  controllers: [AppController],
  providers: [AppService, AuthStrategy],
})
export class AppModule {
}
