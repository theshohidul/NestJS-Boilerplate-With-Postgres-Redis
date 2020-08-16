import { Controller, Get, Inject, Req, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { Request } from 'express';

import { RedisService } from 'nestjs-redis';

import { CatalogService } from './catalog.service';
import { Catalog } from './catalog.entity';
import { CatalogDto } from './dto/catalog.dto';


@Controller('catalogs')
export class CatalogController {

    private client;

    constructor(
        private catalogsService: CatalogService,
        private redisService: RedisService
    ) {
        this.client = this.redisService.getClient();
    }


    @Get()
    async fetchAll(@Req() request: Request):Promise<Object>{

        let allCatalogs = await this.catalogsService.getAll();
        
        if (await this.client.exists('all_catalogs')){

            let cacheAllCatalogs =  await this.client.get('all_catalogs');

            return  JSON.parse(cacheAllCatalogs);

        }

        this.client.setex('all_catalogs', 120, JSON.stringify(allCatalogs ));

        return allCatalogs;
        
    }

    @Get(':id')
    fetchOne(@Param('id', ParseIntPipe) id: number) {
        return this.catalogsService.getOne(id);
    }

    @Post()
    create(@Req() request: Request, @Body() catalogDto: CatalogDto):Object{
        return  this.catalogsService.create(catalogDto);
    }

}
