import { Controller, Get, Redirect, Query } from '@nestjs/common';
import { NESTJSDOCSURL } from '../constants';

@Controller('docs')
export class DocsController {
  @Get('')
  @Redirect(NESTJSDOCSURL, 302)
  getDocs(@Query('version') version: string): string {
    if (version && version === '5') {
      return `${NESTJSDOCSURL}/v5/`;
    }
    return NESTJSDOCSURL;
  }
}
