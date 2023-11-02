import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola mundo desde Nest';
  }
  getAll(){
    return 'Listado de Libros';
  }
}
