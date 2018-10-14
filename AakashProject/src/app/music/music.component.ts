import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../services/musicData.service';
import { IMusicModel } from '../model/music.model';
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
    
      console.log("music----music Array",this.musicData);
      this.artistArray = this.musicData[0]['artists'];
      console.log("artistArray-----jsonn",this.artistArray);
      console.log("artistArray-----jsonn element",this.artistArray[0]['name']);
               
  });
  }
  }

