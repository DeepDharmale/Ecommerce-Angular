import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import { FilterPipe } from './shared/filter.pipe';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'
//import { from } from 'rxjs';
@NgModule({ declarations: [
        AppComponent,
        CartComponent,
        HeaderComponent,
        ProductsComponent,
        FilterPipe
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule], providers: [
        provideClientHydration(),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
