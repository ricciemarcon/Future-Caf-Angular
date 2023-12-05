import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-sobre',
  templateUrl: 'sobre.component.html',
  styleUrls: ['sobre.component.css'],
})
export class Sobre {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Sobre - Future Café')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
      {
        property: 'og:title',
        content: 'Sobre - Future Café',
      },
      {
        property: 'og:description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
    ])
  }
}
