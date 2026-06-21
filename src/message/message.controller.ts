import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
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

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: unknown) {
    return `This route updates a message by id ${id} with the provided data: ${JSON.stringify(body)}`;
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This route removes a message with id: ${id}`;
  }
}
