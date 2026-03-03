import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization as string | undefined;
    if (!authHeader?.startsWith('Bearer ')) throw new UnauthorizedException('Missing token');
    const token = authHeader.split(' ')[1];

    try {
      request.user = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret');
      return true;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
