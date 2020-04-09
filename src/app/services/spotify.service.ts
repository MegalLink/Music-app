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
    "BQCo6Rw2cA5AD5CSOX49Ja54tk-CA8iPucXDOqvEtuf6pckYVlM__cHHib1mEjwDIKJGAReldYlanadQax8";
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
  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map((data) => data["artists"].items)
    );
  }
}
