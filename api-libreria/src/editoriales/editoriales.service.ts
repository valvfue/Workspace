import { Injectable } from '@nestjs/common';

@Injectable()
export class EditorialesService {
    private editoriales: string[] = ['Editorial 1', 'Editorial 2', 'Editorial 3'];

    getAll(): string[] {
        
        return this.editoriales; 
    }
}
