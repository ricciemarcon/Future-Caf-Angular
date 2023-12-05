import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-localizao',
  templateUrl: 'localizao.component.html',
  styleUrls: ['localizao.component.css'],
})
export class Localizao {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Localizao - Future Café')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
      {
        property: 'og:title',
        content: 'Localizao - Future Café',
      },
      {
        property: 'og:description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
    ])
  }
}
