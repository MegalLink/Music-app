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
  nuevasCanciones: any[] = [];
  constructor(private _spotify: SpotifyService) {
    this.loading=true;
   
    this._spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading=false;
    });
  }

  ngOnInit() {}
}
