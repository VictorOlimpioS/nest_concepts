import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('message')
export class MessageController {
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): string {
    return 'This route returns all messages';
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return `This route returns a route by id ${id}`;
  }

  @Post()
  create(@Body() body: unknown) {
    return body;
  }
}
