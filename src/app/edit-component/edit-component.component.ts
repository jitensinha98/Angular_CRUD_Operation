import { Component, OnInit , Inject } from '@angular/core';
import {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public editData : any,
  public dialogRef: MatDialogRef<EditComponentComponent>) { }

  name = this.editData.name;
  country = this.editData.country;
  city = this.editData.city;
  phone = this.editData.phone;
  sex = this.editData.sex;


  ngOnInit(): void {
    
  }
  submit(val:any) 
  {
    this.dialogRef.close(val);
    alert("Data updated Successfully");
  }

  closeform()
  {
   this.dialogRef.close();
  }


}
