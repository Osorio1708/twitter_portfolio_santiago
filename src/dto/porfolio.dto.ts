import { IsString, IsNotEmpty, Length, IsOptional } from 'class-validator';
export class CreatePortfolioDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  names: string;
  @Length(15)
  phone: string;
  @Length(10)
  @IsOptional()
  zip_code: string;
  @IsString()
  description: string;
  @IsString()
  image_url: string;
  @IsString()
  twitter_user_name: string;
  @IsString()
  tittle: string;
  @IsString()
  address: string;
  @IsString()
  email: string;
  @IsString()
  experience: string;
}
