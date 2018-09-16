import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  // url = 'https://rss.itunes.apple.com/api/v1/th/apple-music/hot-tracks/all/25/explicit.json'
  url = 'https://rss.itunes.apple.com/api/v1/th/itunes-music/hot-tracks/all/25/explicit.json'
  constructor(private http : HttpClient) { }

  getMusic(){
   return this.http.get(this.url);
  }
}
