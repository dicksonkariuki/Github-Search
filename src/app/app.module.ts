import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AboutComponent } from './about/about.component';
import { DateCountPipe } from './date-count.pipe';
import { StrikethroughDirectiveDirective } from './strikethrough-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
    AboutComponent,
    DateCountPipe,
    StrikethroughDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
