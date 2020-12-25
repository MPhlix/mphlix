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
import { CoreModule } from './modules/core/core.module';

const appRoutes: Routes = [
  {
    path: 'products', loadChildren: () => import('./modules/products/products.module')
      .then(module => module.ProductsModule)
  },
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module')
      .then(module => module.HomeModule)
  },
  {
    path: 'liptrip', loadChildren: () => import('./modules/features/liptrip/liptrip.module')
      .then(module => module.LiptripModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    ProductsModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
