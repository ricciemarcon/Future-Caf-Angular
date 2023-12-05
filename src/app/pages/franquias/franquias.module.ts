import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Franquias } from './franquias.component'

const routes = [
  {
    path: '',
    component: Franquias,
  },
]

@NgModule({
  declarations: [Franquias],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Franquias],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FranquiasModule {}
