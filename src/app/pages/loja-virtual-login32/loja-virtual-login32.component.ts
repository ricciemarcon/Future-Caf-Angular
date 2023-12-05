import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'loja-virtual-login32',
  templateUrl: 'loja-virtual-login32.component.html',
  styleUrls: ['loja-virtual-login32.component.css'],
})
export class LojaVirtualLogin32 {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Loja-Virtual-Login32 - Future Café')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
      {
        property: 'og:title',
        content: 'Loja-Virtual-Login32 - Future Café',
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
