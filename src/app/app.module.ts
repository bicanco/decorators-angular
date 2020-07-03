import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeComponent } from './attribute/attribute.component';
import { ContentComponent } from './content/content.component';
import { ExampleDirective } from './example.directive';
import { HostComponent, ParentCmp, ChildDirective } from './host/host.component';
import { SelfComponent } from './self/self.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    ContentComponent,
    ExampleDirective,
    HostComponent,
    ParentCmp,
    ChildDirective,
    SelfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
