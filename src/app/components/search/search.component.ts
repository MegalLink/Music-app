import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean;
  constructor(private _spotify: SpotifyService) {
    this.loading = true;
  }
  buscar(termino: string) {
    if(termino.length>0){
      this._spotify.getArtista(termino).subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      });
    }
    
  }
  ngOnInit() {}
}
