import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'loja-virtual-cha',
    loadChildren: () =>
      import('./pages/loja-virtual-cha/loja-virtual-cha.module').then(
        (m) => m.LojaVirtualChaModule
      ),
  },
  {
    path: 'localizao',
    loadChildren: () =>
      import('./pages/localizao/localizao.module').then(
        (m) => m.LocalizaoModule
      ),
  },
  {
    path: 'loja-virtual-maquinario32',
    loadChildren: () =>
      import(
        './pages/loja-virtual-maquinario32/loja-virtual-maquinario32.module'
      ).then((m) => m.LojaVirtualMaquinario32Module),
  },
  {
    path: 'loja-virtual-login32',
    loadChildren: () =>
      import('./pages/loja-virtual-login32/loja-virtual-login32.module').then(
        (m) => m.LojaVirtualLogin32Module
      ),
  },
  {
    path: 'franquias',
    loadChildren: () =>
      import('./pages/franquias/franquias.module').then(
        (m) => m.FranquiasModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('./pages/sobre/sobre.module').then((m) => m.SobreModule),
  },
  {
    path: 'loja-virtual-vinhos32',
    loadChildren: () =>
      import('./pages/loja-virtual-vinhos32/loja-virtual-vinhos32.module').then(
        (m) => m.LojaVirtualVinhos32Module
      ),
  },
  {
    path: 'marketplace',
    loadChildren: () =>
      import('./pages/marketplace/marketplace.module').then(
        (m) => m.MarketplaceModule
      ),
  },
  {
    path: 'equipe',
    loadChildren: () =>
      import('./pages/equipe/equipe.module').then((m) => m.EquipeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'loja-virtual-caf',
    loadChildren: () =>
      import('./pages/loja-virtual-caf/loja-virtual-caf.module').then(
        (m) => m.LojaVirtualCafModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
