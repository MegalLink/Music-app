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
    "BQCi0u6PFROHAsF4ED_VujLZAdWWFK5D5UwbTE9W3Jzd0xRxMRUWsejk_Tr9V4GWiO5gUbYrmTqiqYQ0Y6c";
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
