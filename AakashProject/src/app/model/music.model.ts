import { ArtistModel } from "./artist.model";

export interface IMusicModel
{
  _id : String,
  artists :ArtistModel[]
}