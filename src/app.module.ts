import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import cacheConfig from './config/cache.config';

import { RedisModule} from 'nestjs-redis';
import { CatalogModule } from './catalog/catalog.module';

@Module({
	imports: [
    
  ConfigModule.forRoot({
    load: [appConfig, databaseConfig, cacheConfig],
    isGlobal: true,
  }),

  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory:  (configService: ConfigService) => {
     return configService.get('database');
    }
  }),

  RedisModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return configService.get('cache');
    },

  }),
  CatalogModule
  ],
	controllers: [],
	providers: [CatalogModule],
})


export class AppModule {
	constructor() {}
}

