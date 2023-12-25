import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  // GET /ninjas --> []
  //  @Get() декорато що говорить що getNinjas() це GET метод
  //   @Get()
  //   getNinjas() {
  //     // метод
  //     return [];
  //   }
  //-------------------------------------------------------
  //  @Get() with Query params
  // GET /ninjas?weapon=stars
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'nunchucks') {
    // const service = new NinjasService() - але щоб це скрізь не робити є Constructor
    // return service.getNinjas(weapon);
    return this.ninjasService.getNinjas(weapon);
  }

  // GET /ninjas/:id --> {.....}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.ninjasService.getOneNinja(+id);
    //id is string so with '+' we conwert it to number
  }

  // POST/ninjas --> to create Ninja
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  // PUT or PATCH /ninjas/:id --> {...} to update Ninja
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(+id, updateNinjaDto);
    // return { id, name: updateNinjaDto.name };
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(+id);
  }
}
