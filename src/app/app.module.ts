import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClarityModule } from "@clr/angular";
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FlowPageComponent } from './flow-page/flow-page.component';


// NgModule decorator is added so that the class AppModule is identified as a angular module
@NgModule({
  declarations: [
    AppComponent,  // So that angular can locate its selector
    HomePageComponent, FlowPageComponent
  ],
  imports: [
    BrowserModule, // The external modules that we want available to all of the components that belongs to this angular module. This module maybe be privided by third party, angular. This ensures applications run properly in the browser
    ClarityModule,
    RouterModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent] // Defines the starter component of our application. Must contain the seclector to be defined in the HTML page.
})

// Root angular module
export class AppModule { }

