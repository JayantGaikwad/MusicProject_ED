import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../services/musicData.service';
import { IMusicModel } from '../model/music.model';
import { ArtistModel } from '../model/artist.model';
import { ActivatedRoute } from '@angular/Router';
import { Router } from '@angular/Router';
import { switchMap } from 'rxjs/operators';
import { ParamMap } from '@angular/Router';

@Component({
  selector: 'app-music-album',
  templateUrl: './music-album.component.html',
  styleUrls: ['./music-album.component.css']
})
export class MusicAlbumComponent implements OnInit {

  musicData :IMusicModel;
  artistArray: ArtistModel[];
  artistId :Number
  currentArtistAlbum : ArtistModel;
  constructor(private musicDataService : MusicDataService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    console.log("hit and run");
    this.musicDataService.getMusic().subscribe(jsonData =>{ this.musicData=jsonData;
      console.log("jsonn",jsonData);
      console.log("music Array",this.musicData);
      
     this.artistId= this.route.snapshot.params['id'];
     console.log("artist ID ------->>>>",this.artistId);
     this.processMusicData(this.musicData,this.artistId);
    });
  }
  
  processMusicData(musicData:IMusicModel,artistID : Number)
  {
      console.log("musicModel",musicData);
      this.musicData =musicData[0];
      this.artistArray = this.musicData['artists']
      console.log("music artists----", this.musicData['artists']);
      //this.artistArray.findIndex(this.artistId);
       this.artistArray.forEach((value,index) => {
         if(index == artistID)
         {
          console.log("value--",value); 
          console.log("index--",index); 
          this.currentArtistAlbum = value;
          console.log("current Artist array"+this.currentArtistAlbum.bio);
          console.log("current Artist array"+this.currentArtistAlbum.albums[0]['price']);
        }
        }); 
  }

}
