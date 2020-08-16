import { EntityRepository, Repository } from 'typeorm';
import { Catalog } from './catalog.entity';
import { CatalogDto } from './dto/catalog.dto';

@EntityRepository(Catalog)
export class CatalogRepository extends Repository<Catalog> {

	constructor(){
		super();
	}

	async new(catalogDto: CatalogDto){
		return await this.save(catalogDto);
	}

	async all(){
		return await this.find();
	}

}