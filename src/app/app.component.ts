import { Component} from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import {MatTableDataSource} from '@angular/material/table';
import { EditComponentComponent } from './edit-component/edit-component.component';

export interface EntryElement {
  name: string;
  country: string;
  city: string;
  phone: string;
  sex: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InQube_Assignment';

 constructor(public dialog: MatDialog,){}

  formData: EntryElement[] = [];
  edit_index: number = -1;
  displayedColumns: string[] = ['name', 'country', 'city', 'phone' , 'sex' , 'action'];
  dataSource = new MatTableDataSource<EntryElement>();

  showForm()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(ModalComponentComponent,dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if(data != null){
          this.formData.push(data);
          console.log(this.formData);
          this.dataSource.data = this.formData;  
        }
        });
  }

  edit_data(val : EntryElement)
  {
    const dialogRef = this.dialog.open(EditComponentComponent,{disableClose:true,autoFocus:true,data:val});
    dialogRef.afterClosed().subscribe(
      data => {
        if(data != null){

          this.edit_index = this.formData.indexOf(val);
          this.formData[this.edit_index] = data;
          this.dataSource.data = this.formData;  
        }
        });
  }
  delete_data(val : EntryElement)
  {
    this.dataSource.data.splice(this.formData.indexOf(val),1);
    this.dataSource = new MatTableDataSource<EntryElement>(this.dataSource.data);
    alert("Row Deleted Successfully");
  }
}
