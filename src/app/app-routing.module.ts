import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TextEditorComponent } from './component/text-editor/text-editor.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  //{ path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to 
  { path: 'text-editor', component: TextEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
