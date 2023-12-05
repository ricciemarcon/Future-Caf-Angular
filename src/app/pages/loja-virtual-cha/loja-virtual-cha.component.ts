import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'loja-virtual-cha',
  templateUrl: 'loja-virtual-cha.component.html',
  styleUrls: ['loja-virtual-cha.component.css'],
})
export class LojaVirtualCha {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Loja-Virtual-Cha - Future Café')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
      {
        property: 'og:title',
        content: 'Loja-Virtual-Cha - Future Café',
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
