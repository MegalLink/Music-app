import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones:any[]=[];
  constructor(private _spotify:SpotifyService) { 
  this._spotify.getNewReleases().subscribe((data:any)=>{
    console.log(data.albums.items);
    this.nuevasCanciones=data.albums.items
  })
  }

  ngOnInit() {
  }

}
