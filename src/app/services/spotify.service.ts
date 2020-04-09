import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // aqui le dice que esta proveido, ya no hay que ponerlo en app.module.ts como provider por el decorador
})
export class SpotifyService {

  constructor(private _http:HttpClient) { 
    console.log("Spotify Service listo")
  }
  private tokenSpo:string ="BQDNCmBRe1xbe6V4SuO0GaIt_1EejZNWLXveGpLkqL6lM--kTJwqo_K-Rmmq0j9C3BWUM4nuDJ0yj30OI3o";
  getNewReleases(){
    const headers=new HttpHeaders({
     'Authorization': `Bearer ${this.tokenSpo}`
    })
    //https://api.spotify.com/v1/browse/new-releases?limit=5
     return this._http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers})
  }
}
