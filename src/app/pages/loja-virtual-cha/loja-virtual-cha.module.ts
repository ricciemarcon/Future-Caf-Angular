import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { LojaVirtualCha } from './loja-virtual-cha.component'

const routes = [
  {
    path: '',
    component: LojaVirtualCha,
  },
]

@NgModule({
  declarations: [LojaVirtualCha],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LojaVirtualCha],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LojaVirtualChaModule {}
