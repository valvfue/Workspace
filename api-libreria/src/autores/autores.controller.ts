import { Controller, Get } from '@nestjs/common';
import { AutoresService } from './autores.service';

@Controller('autores')
export class AutoresController {
    constructor(private autoresService: AutoresService) {}

    @Get('/')
    getHome() {
        return 'Sección de autores';
    }

    @Get('listar')
    getAll() {
        return this.autoresService.getAll();
    }
}
