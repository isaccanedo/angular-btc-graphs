import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [],
  providers: [HttpService],
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {}
