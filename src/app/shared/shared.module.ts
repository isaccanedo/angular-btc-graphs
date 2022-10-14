import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasModule } from './modules/canvas/canvas.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CanvasModule, CoreModule],
  exports: [CanvasModule],
})
export class SharedModule {}
