import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../services/musicData.service';
import { IMusicModel } from '../model/music.model';
import { ArtistModel } from '../model/artist.model';

@Component({
  selector: 'app-music-album',
  templateUrl: './music-album.component.html',
  styleUrls: ['./music-album.component.css']
})
export class MusicAlbumComponent implements OnInit {

  musicData :IMusicModel;
  artistArray: ArtistModel[];
  constructor(private musicDataService : MusicDataService) { }

  ngOnInit() {
    console.log("hit and run");
    this.musicDataService.getMusic().subscribe(jsonData =>{ this.musicData=jsonData;
      console.log("jsonn",jsonData);
      console.log("music Array",this.musicData);
      this.processMusicData(this.musicData);
    });
  }
  
  processMusicData(musicData:IMusicModel)
  {
      console.log("musicModel",musicData);
      this.musicData =musicData[0];
      this.artistArray = this.musicData['artists']
      console.log("music artists----", this.musicData['artists']);
       this.artistArray.forEach((value,index) => {
          console.log("value--",value); 
          console.log("index--",index); 
        }); 
  }

}
