import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';

export interface categorieElement {
  categorie: string;
}

const ELEMENT_DATA: categorieElement[] = [
  {categorie: "Hotel"},
  {categorie: "Carburant"},
  {categorie: "Restauration"},
  {categorie: "Transport"},
  {categorie: "Téléphone"},
  {categorie: "Abonnement"},
  {categorie: "Déplacement"},
];

@Component({
  selector: 'app-type-frais',
  templateUrl: './type-frais.component.html',
  styleUrls: ['./type-frais.component.css']
})
export class TypeFraisComponent implements OnInit {

  listData = new MatTableDataSource(ELEMENT_DATA);
  
  displayedColumns: string[] = ['categorie','actions'];

  constructor() { }


  ngOnInit(): void {
  }

}
