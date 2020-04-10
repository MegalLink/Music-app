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
  error:boolean=false;
  msgErro:string="";
  constructor(private _spotify: SpotifyService) {
    this.loading = true;
  }
  buscar(termino: string) {
    if(termino.length>0){
      this._spotify.getArtistas(termino).subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      },(erroS)=>{
        this.error=true;
        this.msgErro=erroS.error.error.message;
      });
    }
    
  }
  ngOnInit() {}
}
