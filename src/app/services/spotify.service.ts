import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // aqui le dice que esta proveido, ya no hay que ponerlo en app.module.ts como provider por el decorador
})
export class SpotifyService {

  constructor(private _http:HttpClient) { 
    console.log("Spotify Service listo")
  }
  getNewReleases(){
    const headers=new HttpHeaders({
     'Authorization':'Bearer BQBEHlMNvD8mN_14MSj_FnE09G3TTXu2mvv9fjXoaCnEvoDMnE5wPf0tNfzHh0I25f-vVvkUVge6UD6O3zc'
    })
    this._http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).subscribe(data=>{
      console.log(data);
    })
  }
}
