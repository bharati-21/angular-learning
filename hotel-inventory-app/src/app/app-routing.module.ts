import { Inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { localStorageToken } from './localstorage.token';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(@Inject(localStorageToken) private localStorage: Storage) {}
}
