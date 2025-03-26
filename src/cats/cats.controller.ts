import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './cat.entity';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto as Cat);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto): Promise<Cat> {
    return this.catsService.update(id, updateCatDto as Cat);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.catsService.remove(id);
  }
}
