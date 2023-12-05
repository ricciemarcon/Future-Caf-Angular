import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
})
export class Register {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Register - Future Café')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
      {
        property: 'og:title',
        content: 'Register - Future Café',
      },
      {
        property: 'og:description',
        content:
          'Projeto para a faculdade de Ciencias da Computacao da Cruzeiro do Sul.',
      },
    ])
  }
}
