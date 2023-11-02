import { Module } from '@nestjs/common';
import { EditorialesService } from './editoriales.service';
import { EditorialesController } from './editoriales.controller';

@Module({
  providers: [EditorialesService],
  controllers: [EditorialesController]
})
export class EditorialesModule {}
