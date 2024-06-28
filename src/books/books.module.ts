import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [BooksController],
  imports: [DatabaseModule],
  providers: [BooksService],
})
export class BooksModule {}
