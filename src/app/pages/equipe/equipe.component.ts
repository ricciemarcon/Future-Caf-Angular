import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-equipe',
  templateUrl: 'equipe.component.html',
  styleUrls: ['equipe.component.css'],
})
export class Equipe {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Equipe - Future Café')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
      {
        property: 'og:title',
        content: 'Equipe - Future Café',
      },
      {
        property: 'og:description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
    ])
  }
}
