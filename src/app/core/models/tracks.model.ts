import { ArtisModel } from "./artis.model";

export interface TrackModel {
    name: string;
    album: string;
    cover: string;    
    url: string;
    _id: string | number;
    atist?: ArtisModel;
}