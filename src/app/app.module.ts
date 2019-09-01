import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ElModule } from 'element-angular'
import 'element-angular/theme/index.css';
import { BookListingComponent } from './pages/book-listing/book-listing.component';
import { GeneralLayoutComponent } from './layout/general-layout/general-layout.component';
import { SampleDirectiveComponent } from './pages/sample-directive/sample-directive.component';
import { ChangeTextDirective } from './directives/change-text.directive'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BookListingComponent,
    GeneralLayoutComponent,
    SampleDirectiveComponent,
    ChangeTextDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GeneralLayoutComponent]
})
export class AppModule { }
