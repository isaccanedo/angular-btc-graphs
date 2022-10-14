import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoModule } from './crypto/crypto.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CryptoModule],
  exports: [CryptoModule],
})
export class FeaturesModule {}
