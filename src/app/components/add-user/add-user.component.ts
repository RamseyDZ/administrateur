import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})


export class AddUserComponent implements OnInit {
  masquer = true;
  masquerConfirm = true;
  @ViewChild('resetUserForm', { static: true }) myNgForm;
  userForm: FormGroup;
  
  userRole:string;

  ngOnInit() {
      this.submitBookForm();
  }
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private userApi: ApiService
  ) { }

  // Validators.compose([
    //                    Validators.required,
  //                      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')	]) 

  /* Reactive book form */
  public patternEmail='^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+([\.]{1}[a-zA-Z0-9]{2,6})+$';

  submitBookForm() {
      this.userForm = this.fb.group({
      nomUtilisateur: ['', [Validators.required]],
      prenomUtilisateur: ['', [Validators.required]],
      login:['', [Validators.required]],
      emailUtilisateur: ['', [Validators.pattern(this.patternEmail),
        Validators.required]],     
      roleUtilisateur :[''],
      passwordControl:['',[Validators.minLength(8),Validators.required]],
      cPassword:['']
    })
  }
 

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }  

  /* Submit book */
  
  /* Aprés avoir enregistré un utilisateur la liste de toutes les utilisateurs s'affiche */ 
  submitUserForm() {
    if (this.userForm.valid) {
     // this.userApi.AddUser(this.userForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/users-list'));
        console.warn(this.userForm.value);
     // });
    
    }
  }

}