import { SampleDirectiveComponent } from './pages/sample-directive/sample-directive.component';
import { GeneralLayoutComponent } from './layout/general-layout/general-layout.component';
import { BookListingComponent } from './pages/book-listing/book-listing.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '', component: LandingComponent,
}, {
  path: 'menu', component: GeneralLayoutComponent,
  children: [
    {
      path: '', redirectTo: 'books', pathMatch: "full"
    },
    {
      path: 'books', component: BookListingComponent
    },
    {
      path: 'directive', component: SampleDirectiveComponent
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
