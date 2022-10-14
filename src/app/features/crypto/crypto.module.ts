import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoComponent } from './crypto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoService } from './services/crypto.service';

@NgModule({
  declarations: [CryptoComponent],
  providers: [CryptoService],
  imports: [CommonModule, SharedModule, CryptoRoutingModule],
})
export class CryptoModule {}
