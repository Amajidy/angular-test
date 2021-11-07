import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes , RouterModule } from '@angular/router';

const routes: Routes = [
  // { path:'' , component: AppComponent },
  { path:'admin' , component: AdminComponent },
  { path:'user' , component: UserComponent },
  { path:'card' , component: CardComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
