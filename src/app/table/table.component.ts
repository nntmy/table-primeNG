import { Component, OnInit } from "@angular/core";
import { TodoServerService } from "../todo-server.service";
import { Todo } from "../todo";
import { SelectItem } from "primeng/api";
import { MessageService } from "primeng/api";
import { Subscription } from 'rxjs';
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
  providers: [MessageService]
})
export class TableComponent implements OnInit {
  todoArray: Todo[];
  cols: any[];
  first: number = 0;
  status: SelectItem[];
  title:SelectItem[];
  clonedCars: { [s: string]: Todo } = {};
  item:string;
  public data: Subscription;
  selectedCars1: string[] = [];
  date:Date;

show:boolean=false;

  constructor(
    public todoSer: TodoServerService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.showTodo();
    this.cols = [
      { field: "title", header: "Title" },
      { field: "date", header: "Date" },
      { field: "status", header: "Status" },
      { field: "block", header: "Block" },

    ];

    this.status = [
      { label: "Complete", value: true },
      { label: "Watting", value: false }
    ];


  }

  selct(array:Todo[]){

    for( let i = 0;i <array.length;i++)
    {this.title.push({label:'item'+i,value:i})
    }
    console.log('hhhhhhhhhhhhhhh',this.title);


  }
  //show value data of server
  showTodo(): void {
    this.todoSer.getTodo().subscribe(
      data => {
        //console.log(data);
        this.todoArray = data;
      },
      error => {
        console.log(`error`);
      }
    );
  }

  onRowEditInit(task: Todo) {
    this.clonedCars[task.title] = { ...task };

    console.log("kkkkkkkkkkkkkkkkkkkkkkkk", task);
    console.log("gggggggggggggggg", this.status);
  }

  onRowEditSave(task: Todo) {
    if (task.date != null) {
      delete this.clonedCars[task.title];
      this.messageService.add({
        severity: "success",
        summary: "Success",
        detail: "Car is updated"
      });
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Year is required"
      });
    }
  }

  onRowEditCancel(car: Todo, index: number) {
    this.todoArray[index] = this.clonedCars[car.title];
    delete this.clonedCars[car.title];
  }
}
