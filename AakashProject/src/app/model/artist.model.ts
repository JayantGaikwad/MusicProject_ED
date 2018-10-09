import { AlbumModel } from "./album.model";

export interface ArtistModel
{
    id: Number,
    name:String,
    cover:String,
    bio:String,
    albums : AlbumModel[],
    genre :String
}