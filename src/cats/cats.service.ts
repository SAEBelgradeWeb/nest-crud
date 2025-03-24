import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats = ['Tom', 'Marcus', 'Lucy'];

  findAll(): string[] {
    return this.cats;
  }

  create(cat: string) {
    this.cats.push(cat);
    return `Added ${cat} a new cat`;
  }

  update(id: string, cat: string) {
    this.cats[id] = cat;
    return `Updated ${cat} a new cat`;
  }

  remove(id: string) {
    this.cats.splice(Number(id), 1);
    return `Removed ${id} a new cat`;
  }
}
