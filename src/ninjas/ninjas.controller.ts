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

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas --> []
  //  @Get() декорато що говорить що getNinjas() це GET метод
  //   @Get()
  //   getNinjas() {
  //     // метод
  //     return [];
  //   }
  //-------------------------------------------------------
  //  @Get() with Query params
  // GET /ninjas?type=fast
  @Get()
  getFilteredNinjas(@Query('type') type: string) {
    return [{ type }];
  }

  // GET /ninjas/:id --> {.....}
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }

  // POST/ninjas --> to create Ninja
  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return { name: createNinjaDto.name };
  }

  // PUT or PATCH /ninjas/:id --> {...} to update Ninja
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return { id, name: updateNinjaDto.name };
  }

  // DELETE /ninjas/:id
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return { id };
  }
}
