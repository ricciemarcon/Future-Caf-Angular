import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Marketplace } from './marketplace.component'

const routes = [
  {
    path: '',
    component: Marketplace,
  },
]

@NgModule({
  declarations: [Marketplace],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Marketplace],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MarketplaceModule {}
