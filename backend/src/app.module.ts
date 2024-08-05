import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { GoogleController } from './auth/google/google.controller';
import { GoogleStrategy } from './auth/google/google.service';

@Module({
  imports: [],
  controllers: [AppController, GoogleController],
  providers: [AppService, GoogleStrategy, AuthService],
})
export class AppModule {}
