import { NoteType } from './../model/note-type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteTypeService {
  _typeListe: NoteType[] = []; 
  constructor() { }

  addType(noteType: NoteType){
    this._typeListe.push(noteType);
  }

  removeType(id: Number){
    const note = this._typeListe.findIndex(n=>n._id===id);
    this._typeListe.splice(note,1);
  }

  updateType(noteType: NoteType){

  }

  getAllTypes(){
    return this._typeListe;
  }

  

}
