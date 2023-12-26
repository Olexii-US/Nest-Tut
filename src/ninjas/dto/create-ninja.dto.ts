import { MinLength, IsEnum } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['stars', 'nunchucks'], { message: 'aaaaaaaaaaaaaaa' })
  weapon: 'stars' | 'nunchucks';
}
