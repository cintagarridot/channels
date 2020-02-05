/*import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NestMiddleware, HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { TagService } from './tag.service';


@Injectable()
export class TagMiddleware implements NestMiddleware {
  constructor(private readonly tService: TagService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    
      const t = await this.tService.findById(req.body.id);

      if (!t) {
        throw new HttpException('tag not found.', HttpStatus.UNAUTHORIZED);
      }
      
      req.body.tag = t.tag;
      next();

    
  }
}

*/