import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { GoogleAuthGuard } from './google-auth.guard';
import { GoogleState } from './google-state.decorator';

@Controller('google')
export class GoogleController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(
    @Req() req: Request,
    @Res() res: Response,
    @GoogleState('redirectTo') redirectTo: string,
  ) {
    console.log('tesT', redirectTo);
    res.redirect(
      `${redirectTo}?accessToken=${(req.user as unknown as any).accessToken}`,
    );
    return this.authService.googleLogin(req);
  }
}
