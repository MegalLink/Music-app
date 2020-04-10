import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";
import { timeInterval, timeout } from 'rxjs/operators';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  loading: boolean;
  error:boolean;
  msgErro:string="";
  nuevasCanciones: any[] = [];
  constructor(private _spotify: SpotifyService) {
    this.loading=true;
   this.error=false;
    this._spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading=false;
    },(errorServicio)=>{
      this.error=true;
      console.log(errorServicio)
      this.msgErro=errorServicio.error.error.message;
    });
  }

  ngOnInit() {}
}
