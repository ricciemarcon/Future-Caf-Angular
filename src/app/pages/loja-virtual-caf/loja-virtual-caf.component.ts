import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'loja-virtual-caf',
  templateUrl: 'loja-virtual-caf.component.html',
  styleUrls: ['loja-virtual-caf.component.css'],
})
export class LojaVirtualCaf {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Loja-Virtual-Caf - Future Café')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
      {
        property: 'og:title',
        content: 'Loja-Virtual-Caf - Future Café',
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
