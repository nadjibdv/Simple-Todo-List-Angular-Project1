import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolistp1';

  list:any[]=[];

  public addTask(Item:string){
      this.list.push({  id:this.list.length , name:Item   });
  }

  public removeTask(id:number){
    const index = this.list.findIndex(x => x.id == id);

    if( index > -1 ){
       
      this.list.splice(index ,1);

    }
  }


}
