import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: "full"
  },

  {path: 'login',
    component:LoginComponent
  },
  {
    path: 'sidebar',
    component: SideNavComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'layout',
    component: LayoutComponent
  },




];
