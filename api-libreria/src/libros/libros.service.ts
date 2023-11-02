import { Injectable } from '@nestjs/common';
import { CreateLibroDTO } from 'src/dto/libro.dto';

@Injectable()
export class LibrosService {

    getAll() {
        return ('Listado de libros desde el servicio');
    }

    create(createLibroDto: CreateLibroDTO) {
        // Insertar en la BD
        return {
            data: createLibroDto,
            msg: "Libro creado correctamente",
            status: 200 
        };
    }
}