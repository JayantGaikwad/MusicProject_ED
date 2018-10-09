import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../services/musicData.service';
import { IMusicModel } from '../model/music.model';
import { HttpClient } from '@angular/common/http';
import { ArtistModel } from '../model/artist.model';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {


  musicData :IMusicModel;
  artistArray: ArtistModel[];
  constructor( private musicDataService : MusicDataService) 
  {

  }

  ngOnInit() 
  {
    this.musicDataService.getMusic().subscribe(jsonData =>{ this.musicData=jsonData;
      console.log("jsonn",jsonData);
      console.log("music Array",this.musicData);
      this.processMusicData(this.musicData);
    });
  }

  processMusicData(musicData:IMusicModel)
  {
      console.log("musicModel",musicData);
      console.log("music artists",musicData.artists)
      this.artistArray = musicData.artists;
      this.artistArray.forEach((value,index) => {
        console.log("value--",value); 
        console.log("index--",index); 
      });
      console.log("artistArray",this.artistArray);
  }
  }

