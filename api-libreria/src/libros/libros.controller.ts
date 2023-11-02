import { Controller, Get, Post } from '@nestjs/common';

@Controller('libros')
export class LibrosController {
    @Get('/')
    getHome() {
        return 'Seccion de libros';
    }

    @Get('listar')
    getAll() {
        return 'Listado de todos los libros';
    }

}
