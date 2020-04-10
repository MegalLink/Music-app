import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
artista:any={};
loadingArtist:Boolean;
  constructor(private _activeRoute:ActivatedRoute,private spotify:SpotifyService) { 
    this.loadingArtist=true;
    this._activeRoute.params.subscribe(params=>{
      //console.log(params['id'])
      this.getArtista(params['id']);
    })
  }
getArtista(id:string){
  this.loadingArtist=true;
this.spotify.getArtista(id).subscribe(datos=>{
  console.log(datos);
  this.artista=datos;
  this.loadingArtist=false;
})

}
  ngOnInit() {
  }

}
