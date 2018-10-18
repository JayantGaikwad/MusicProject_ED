import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../services/musicData.service';
import { IMusicModel } from '../model/music.model';
import { ArtistModel } from '../model/artist.model';
import { ActivatedRoute } from '@angular/Router';
import { Router } from '@angular/Router';
import { switchMap } from 'rxjs/operators';
import { ParamMap } from '@angular/Router';
import { AlbumModel } from '../model/album.model';

@Component({
  selector: 'app-music-album',
  templateUrl: './music-album.component.html',
  styleUrls: ['./music-album.component.css']
})
export class MusicAlbumComponent implements OnInit {

  musicData :IMusicModel;
  artistArray: ArtistModel[];
  artistId :Number;
  currentArtistAlbum : ArtistModel;
  lastData : ArtistModel;
  albumData : AlbumModel[];
  constructor(private musicDataService : MusicDataService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    console.log("hit and run");
    this.musicDataService.getMusic().subscribe(jsonData =>{ this.musicData=jsonData;
      //console.log("jsonn",jsonData);
    //  console.log("music Array",this.musicData);
      
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
      console.log("music artists----",  this.artistArray);
       this.artistArray.forEach((value,index) => {
        this.currentArtistAlbum = value;
        console.log("this.currentArtistAlbum.id=======",this.currentArtistAlbum.id);
        console.log("this.artistID=======",artistID);
        var checkEqual = this.checkEqualIndex(this.currentArtistAlbum.id,artistID);
         if(checkEqual)
         {
          console.log("checkEqual````````````````",checkEqual);
          console.log("trueeeeeeeee",this.currentArtistAlbum.id);
          console.log("trueeeeeeeee",artistID);
          console.log("value--",value); 
          console.log("index--",index); 
          console.log("current Artist array id----"+this.currentArtistAlbum.id);
          console.log("current Artist array"+this.currentArtistAlbum.bio);
          console.log("current Artist array price"+this.currentArtistAlbum.albums[index]['price']);
          console.log("images-------->>>>"+this.currentArtistAlbum.image);
          this.albumData = this.currentArtistAlbum.albums;
          console.log("currentAlbum---00000000000----->>>>"+this.albumData);
          this.lastData = value;
        }
      
        }); 

  }
  
  checkEqualIndex(currentIndex:Number,artistidFromComponent:Number) :boolean
  {
    if(currentIndex ==artistidFromComponent )
    {
     return true;
    }
    else
    {
      return false;
    }
  }

}
