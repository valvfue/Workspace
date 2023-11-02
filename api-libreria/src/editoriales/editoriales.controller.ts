import { Controller, Get } from '@nestjs/common';
import { EditorialesService } from './editoriales.service'; 

@Controller('editoriales')
export class EditorialesController {
    constructor(private editorialesService: EditorialesService) {}

    @Get('/')
    getHome() {
        return 'Sección de editoriales';
    }

    @Get('listar')
    getAll() {
        return this.editorialesService.getAll();
    }
}

