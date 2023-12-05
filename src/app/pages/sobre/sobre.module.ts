import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Sobre } from './sobre.component'

const routes = [
  {
    path: '',
    component: Sobre,
  },
]

@NgModule({
  declarations: [Sobre],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Sobre],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SobreModule {}
