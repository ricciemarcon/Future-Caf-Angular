import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw8coh: string = ' '
  raw36wv: string = ' '
  rawqsao: string = ' '
  rawu1ye: string = ' '
  raw4f0o: string = ' '
  rawags1: string = ' '
  raw3kba: string = ' '
  rawvm96: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Future Café')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
      {
        property: 'og:title',
        content: 'Future Café',
      },
      {
        property: 'og:description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
      {
        name: 'robots',
        content: 'noindex',
      },
    ])
  }
}
