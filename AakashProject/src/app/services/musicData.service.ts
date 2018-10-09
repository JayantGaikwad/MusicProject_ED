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
constructor(private http:Http,private httpCommon:HttpClient)
{

}

getMusic():Observable<any>
{
   return this.httpCommon.get('https://ngmusicdb.herokuapp.com/api/getMusic');
}

}