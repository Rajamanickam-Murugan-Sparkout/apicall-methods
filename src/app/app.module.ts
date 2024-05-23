import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetMethodComponent } from './get-method/get-method.component';
import { DataService } from './services/data.service';
import { PostMethodComponent } from './post-method/post-method.component';

@NgModule({
  declarations: [
    AppComponent,
    GetMethodComponent,
    PostMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
