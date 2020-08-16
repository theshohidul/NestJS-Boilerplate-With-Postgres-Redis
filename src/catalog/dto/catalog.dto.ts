import { IsNotEmpty, IsDate, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CatalogDto {
  @IsNotEmpty()
  packTitle: string;

  @IsNotEmpty()
  packDescription: string;

  @IsOptional()
  isActive?: boolean;
}