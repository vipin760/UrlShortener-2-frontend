import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ShortUrlComponent } from './components/pages/short-url/short-url.component';
import { UnshortUrlComponent } from './components/pages/unshort-url/unshort-url.component';
import { UrlAnalalyticsComponent } from './components/pages/url-analalytics/url-analalytics.component';

const routes: Routes = [
  {path:'home', component:ShortUrlComponent },
  {path:'short-url/:id', component:ShortUrlComponent },
  {path:'short-url',component:ShortUrlComponent},
  {path:'unshort-url', component:UnshortUrlComponent}, 
  {path:'url-clicks-counter',component:UrlAnalalyticsComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
