//import { NoteType } from './../../model/note-type';
import {MatPaginator} from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NoteTypeService } from 'src/app/shared/note-type.service';
import { AddTypeComponent } from './add-type/add-type.component';

export interface categorieElement {
  categorie: string;
}
/*
const ELEMENT_DATA: categorieElement[] = [
  { categorie: "Hotel" },
  { categorie: "Carburant" },
  { categorie: "Restauration" },
  { categorie: "Transport" },
  { categorie: "Téléphone" },
  { categorie: "Abonnement" },
  { categorie: "Déplacement" },
];
*/
@Component({
  selector: 'app-type-frais',
  templateUrl: './type-frais.component.html',
  styleUrls: ['./type-frais.component.css']
})
export class TypeFraisComponent implements OnInit {

  listData = new MatTableDataSource(this.typeFraisList);

  displayedColumns: string[] = ['nomCategorie','state', 'actions'];

  isPopupOpened = false;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dialog?: MatDialog,
    private _noteTypeService?: NoteTypeService) { }


  ngOnInit() {
    
  }

  get typeFraisList() {
    return this._noteTypeService.getAllTypes();
  }

  addContact() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(AddTypeComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.listData = new MatTableDataSource(this.typeFraisList);
      this.table.renderRows();
      this.listData.paginator = this.paginator;
      this.isPopupOpened = false;
    });
  }
}
