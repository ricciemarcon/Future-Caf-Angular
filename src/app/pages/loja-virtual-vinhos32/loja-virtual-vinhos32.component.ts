import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'loja-virtual-vinhos32',
  templateUrl: 'loja-virtual-vinhos32.component.html',
  styleUrls: ['loja-virtual-vinhos32.component.css'],
})
export class LojaVirtualVinhos32 {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Loja-Virtual-Vinhos32 - Future Café')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
      {
        property: 'og:title',
        content: 'Loja-Virtual-Vinhos32 - Future Café',
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
