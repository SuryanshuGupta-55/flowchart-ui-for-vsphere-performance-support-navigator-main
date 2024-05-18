import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowPageComponent } from './flow-page/flow-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component:HomePageComponent},             // Routing path for home-page component
  { path: 'flowpage', component:FlowPageComponent}      // Routing path for flow-page component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
