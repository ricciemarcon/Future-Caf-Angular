import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-marketplace',
  templateUrl: 'marketplace.component.html',
  styleUrls: ['marketplace.component.css'],
})
export class Marketplace {
  raw6qsz: string = ' '
  raw7nl4: string = ' '
  rawrotl: string = ' '
  raws7w1: string = ' '
  rawwlea: string = ' '
  raw9ftk: string = ' '
  raw1s8j: string = ' '
  raw3q5a: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Marketplace - Future Café')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
      {
        property: 'og:title',
        content: 'Marketplace - Future Café',
      },
      {
        property: 'og:description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
    ])
  }
}
