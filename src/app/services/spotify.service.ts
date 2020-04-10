import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root", // aqui le dice que esta proveido, ya no hay que ponerlo en app.module.ts como provider por el decorador
})
export class SpotifyService {
  constructor(private _http: HttpClient) {
    console.log("Spotify Service listo");
  }
  private tokenSpo: string =
    "BQBJLIvtDs59yNQdnuPwT6Ydos1-wXdMfimHgMv6LH5bqmLlbXkHxzufYe2_vMTydfS_0qvNJjsWGWtH5CA";
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.tokenSpo}`,
    });
    return this._http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=20").pipe(
      map((data) => data["albums"].items)
    );
  }
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data["artists"].items)
    );
  }
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    
  }
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map(tracks=>tracks['tracks']))
    
  }
}
