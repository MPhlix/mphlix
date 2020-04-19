// Importing Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importing our custom modules
import { ProductsModule } from './modules/products/products.module';
import { HomeModule } from './modules/home/home.module';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: 'products', loadChildren: () => import('./modules/products/products.module')
      .then(module => module.ProductsModule)
  },
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module')
      .then(module => module.HomeModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ProductsModule,
    HomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
