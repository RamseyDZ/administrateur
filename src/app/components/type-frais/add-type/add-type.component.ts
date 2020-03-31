import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Form } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteTypeService } from 'src/app/shared/note-type.service';


@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.css']
})
export class AddTypeComponent implements OnInit {

  public _noteTypeForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddTypeComponent>,
    private _noteTypeService: NoteTypeService,
    @Inject(MAT_DIALOG_DATA) public data: any){}
    

    onNoClick(): void{
      this.dialogRef.close();
    }
  ngOnInit(): void {
    this._noteTypeForm = this._formBuilder.group({
      id:[],
      nomCategorie:['',[Validators.required]],
      state:[true,[Validators.required]]
    });
  }

  onSubmit(){
    console.warn(this._noteTypeForm.value);
    if (this._noteTypeForm.valid){
    this._noteTypeService.addType(this._noteTypeForm.value);
    this.dialogRef.close();
    }
  }



}
