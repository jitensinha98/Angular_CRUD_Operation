import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {

  sex = "Male";
 
  constructor(public dialogRef: MatDialogRef<ModalComponentComponent>) 
  {
  }

  ngOnInit(): void {

  }
  closeform()
  {
   this.dialogRef.close();
  }
  submit(val:any) 
  {
    alert("Submission Successful");
    this.dialogRef.close(val);
  }
}
