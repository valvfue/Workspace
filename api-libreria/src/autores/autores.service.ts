import { Injectable } from '@nestjs/common';

@Injectable()
export class AutoresService {
    getAll() {
        // Se comunica con el SGBD a través de TypeORM o realiza alguna lógica para obtener la lista de autores
        //pasar los datos a typeorm
        //typeorm <-> SGBD
        // recibe la DATA de TypeORM
        //devuelve la DATA al cliente (móvil...)
        return 'Listado de todos los autores desde el servicio'; 
    }
}
