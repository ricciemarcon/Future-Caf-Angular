import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { LojaVirtualVinhos32 } from './loja-virtual-vinhos32.component'

const routes = [
  {
    path: '',
    component: LojaVirtualVinhos32,
  },
]

@NgModule({
  declarations: [LojaVirtualVinhos32],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LojaVirtualVinhos32],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LojaVirtualVinhos32Module {}
