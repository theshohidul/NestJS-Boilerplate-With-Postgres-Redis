import { Injectable, Body } from '@nestjs/common';
import { Catalog } from './catalog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CatalogRepository } from './catalog.repository';
import { CatalogDto } from './dto/catalog.dto';


@Injectable()
export class CatalogService {
    
    constructor(
        @InjectRepository(CatalogRepository)
        private catalogRepository: CatalogRepository, 
    ) {}

    async getAll() {
        return this.catalogRepository.all();
    }

    async getOne(id: number) {
        return this.catalogRepository.findByIds([id]);
    }

    async create(catalogDto: CatalogDto) {
        return this.catalogRepository.new(catalogDto);
    }

}
