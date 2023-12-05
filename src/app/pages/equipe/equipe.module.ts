import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Equipe } from './equipe.component'

const routes = [
  {
    path: '',
    component: Equipe,
  },
]

@NgModule({
  declarations: [Equipe],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Equipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EquipeModule {}
