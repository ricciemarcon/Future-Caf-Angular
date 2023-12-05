import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-franquias',
  templateUrl: 'franquias.component.html',
  styleUrls: ['franquias.component.css'],
})
export class Franquias {
  raw15cw: string = ' '
  rawcikp: string = ' '
  raw5agi: string = ' '
  rawxe1g: string = ' '
  rawshf7: string = ' '
  rawbj3o: string = ' '
  rawlys9: string = ' '
  rawrsgu: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Franquias - Future Café')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
      {
        property: 'og:title',
        content: 'Franquias - Future Café',
      },
      {
        property: 'og:description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
    ])
  }
}
