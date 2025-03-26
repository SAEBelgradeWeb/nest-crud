import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  async create(cat: Cat): Promise<Cat> {
    const newCat = this.catsRepository.create(cat);
    return this.catsRepository.save(newCat);
  }

  async update(id: string, cat: Cat): Promise<Cat> {
    const catToUpdate = await this.catsRepository.findOneBy({ id: Number(id) });

    if (!catToUpdate) {
      throw new Error('Cat not found');
    }

    catToUpdate.name = cat.name;

    return this.catsRepository.save(catToUpdate);
  }

  async remove(id: string): Promise<void> {
    const result = await this.catsRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('Cat not found');
    }
  }
}
