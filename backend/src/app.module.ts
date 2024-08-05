import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { GoogleController } from './auth/google/google.controller';
import { GoogleStrategy } from './auth/google/google.service';
import { MatchmakingGateway } from './websocket/websocket.service';
import { MatchmakingModule } from './matchmaking/matchmaking.module';

@Module({
  imports: [MatchmakingModule],
  controllers: [AppController, GoogleController],
  providers: [AppService, GoogleStrategy, AuthService, MatchmakingGateway],
})
export class AppModule {}
