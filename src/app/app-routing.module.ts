import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './init/init.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio/1', pathMatch: 'full' },
  { path: 'inicio/:id', component: InitComponent },
  { path: '**', redirectTo: 'inicio/1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
