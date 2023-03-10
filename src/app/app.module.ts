import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SubmissionComponent } from './pages/submission/submission.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import {HttpClientModule} from '@angular/common/http';
import {RockstarService} from "./services/rockstar.service";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SubmissionComponent,
    ThankyouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [RockstarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
