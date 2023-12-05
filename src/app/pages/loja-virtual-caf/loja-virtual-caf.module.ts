import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { LojaVirtualCaf } from './loja-virtual-caf.component'

const routes = [
  {
    path: '',
    component: LojaVirtualCaf,
  },
]

@NgModule({
  declarations: [LojaVirtualCaf],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LojaVirtualCaf],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LojaVirtualCafModule {}
