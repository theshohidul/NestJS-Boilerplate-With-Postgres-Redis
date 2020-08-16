import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Catalog } from './catalog.entity';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
import { CatalogRepository } from './catalog.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Catalog, CatalogRepository])],
    providers: [CatalogService],
    controllers: [CatalogController],
  })

  
export class CatalogModule {}
