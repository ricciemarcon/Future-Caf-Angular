import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import 'dangerous-html'

import { ComponentsModule } from '../components/components.module'
import { Localizao } from './localizao.component'

const routes = [
  {
    path: '',
    component: Localizao,
  },
]

@NgModule({
  declarations: [Localizao],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Localizao],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LocalizaoModule {}
