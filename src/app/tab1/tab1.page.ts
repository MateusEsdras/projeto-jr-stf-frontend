import { Component } from '@angular/core';
import { AutorService } from 'src/services/autor.service';
import { Autor } from 'src/model/autor';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  autores: Autor[];

  constructor(
    private autorService: AutorService) {
  }

  ngOnInit(){
    this.loadAutores();
  }

  loadAutores(){
    this.autorService.findAll().subscribe(
      response => {
        console.log(response);
        this.autores = response;
      },
      error => {}
    )
  }
}
