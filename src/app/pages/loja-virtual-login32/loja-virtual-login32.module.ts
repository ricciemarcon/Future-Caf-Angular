import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { LojaVirtualLogin32 } from './loja-virtual-login32.component'

const routes = [
  {
    path: '',
    component: LojaVirtualLogin32,
  },
]

@NgModule({
  declarations: [LojaVirtualLogin32],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LojaVirtualLogin32],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LojaVirtualLogin32Module {}
