import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BooksService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createBooksDto: Prisma.BooksCreateInput) {
    return this.databaseService.books.create({
      data: createBooksDto,
    });
  }

  async findAll() {
    return this.databaseService.books.findMany();
  }

  async findOne(id: number) {
    const book = await this.databaseService.books.findUnique({
      where: {
        id,
      },
    });
    if (!book) throw new NotFoundException(`Book with ID ${id} not found`);
    return book;
  }

  async update(id: number, updateBooksDto: Prisma.BooksUpdateInput) {
    return this.databaseService.books.update({
      where: {
        id,
      },
      data: updateBooksDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.books.delete({
      where: {
        id,
      },
    });
  }
}
