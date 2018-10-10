import { Injectable} from '@angular/core'
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IMusicModel } from '../model/music.model';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class MusicDataService
{
    productdata : any[];
constructor(private http:Http,private httpClient:HttpClient)
{

}

/** working fine but commenting becuase there is no image available in following UI so storing api data with image in assets/musicData.json  */
// getMusic():Observable<any>
// {
//    return this.httpClient.get('https://ngmusicdb.herokuapp.com/api/getMusic');
// }

getMusic():Observable<any> {
    return this.httpClient.get("assets/json/musicData.json");
  }

}
