import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    // FormsModule,
    RouterOutlet,
    SharedModule,
    TasksModule,
  ],
})
export class AppModule {}
