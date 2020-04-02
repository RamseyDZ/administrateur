import { utilisateur } from './../../model/user';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { MatTableDataSource} from '@angular/material/table';


export interface user {
  nom: string;
  login: string;
  email: string;
  prenom: string;
}

const ELEMENT_DATA: user[] = [
  {login: "bouchram", nom: 'BOUCHAIR', email:'bouchairramzi@gmail.com', prenom: 'RAMZI'},
  {login: "dahmatina", nom: 'DAHMANI', email:'bouchairramzi@gmail.com', prenom: 'TINHINANE'},
  {login: "oufqumer", nom: 'OUFQUIR', email:'bouchairramzi@gmail.com', prenom: 'MEROUANE'},
  {login: "ezzahcha", nom: 'EZ-ZAHRI', email:'bouchairramzi@gmail.com', prenom: 'CHAYMAAE'},
  {login: "hemedabd", nom: 'HEMED', email:'bouchairramzi@gmail.com', prenom: 'ABDEL KARIM'},
  {login: "fouadzak", nom: 'FOUAD', email:'bouchairramzi@gmail.com', prenom: 'ZAKARYAE'},
  {login: "goudakar", nom: 'GOUDARD', email:'bouchairramzi@gmail.com', prenom: 'KARIM'},
  {login: "ramseybch", nom: 'BOUCHAIR', email:'bouchairramzi@gmail.com', prenom: 'RAMIRO'},
  {login: "dahmati", nom: 'DAHMANI', email:'bouchairramzi@gmail.com', prenom: 'TINA'},
  {login: "oufmerouan", nom: 'OUFQUIR', email:'bouchairramzi@gmail.com', prenom: 'MER1'},
];


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private service: ApiService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  listData = new MatTableDataSource(ELEMENT_DATA);
  
  // Pour changer entre l'affichage mobile et l'affichage desktop
  displayedColumnsDesktop: string[] = ['nom','prenom','login','email','actions'];
  displayedColumnsMobile: string[] = ['nom','prenom','login','actions'];
  displayedColumns:string[] = this.displayedColumnsDesktop;
   
  searchKey : string;

  applyFilter() {
    
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }
  ngOnInit(): void {
    this.service.GetUsers().subscribe();
  }

  ngAfterViewInit(){
    this.listData.paginator = this.paginator;
  }

  showColumns(): string[]{
    if (window.innerWidth < 600) {
      this.displayedColumns = this.displayedColumnsMobile;
    } else {
      this.displayedColumns = this.displayedColumnsDesktop
    }
    return this.displayedColumns;
  }

  lineClick(login){
    console.warn("l'utilisateur selectionner est "+login);
  }

}
