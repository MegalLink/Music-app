import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 artistas:any[]=[];
  constructor(private _spotify:SpotifyService) { }
  buscar(termino:string){
 this._spotify.getArtista(termino).subscribe((data:any)=>{
   
   this.artistas=data;
 })
  }
  ngOnInit() {
  }

}
