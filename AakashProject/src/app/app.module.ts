import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MusicComponent } from './music/music.component';
import {RouterModule} from '@angular/Router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { AboutComponent } from './about/about.component'
import { MusicDataService } from './services/musicData.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    HomeComponent,
    VideoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
     { path:'home' ,component :HomeComponent},
      {path:'music' ,component :MusicComponent},
      {path:'video' ,component :VideoComponent},
      {path:'about' ,component :AboutComponent}
    ])
  ],
  providers: [MusicDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
