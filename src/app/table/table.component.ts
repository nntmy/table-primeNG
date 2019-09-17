import { Component, OnInit } from "@angular/core";
import { TodoServerService } from "../todo-server.service";
import { Todo } from "../todo";
import { SelectItem } from "primeng/api";
import { Message } from "primeng//api";
import { MessageService } from "primeng/api";
//import { DialogService } from "primeng/api";
import { EditComponent } from "../edit/edit.component";
import { from } from "rxjs";
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
  providers: [MessageService]
})
export class TableComponent implements OnInit {
  todoArray: Todo[];
  cols: any[];
  //first: number = 0;
  status: SelectItem[];
  //title: SelectItem[];
  clonedCars: { [s: string]: Todo } = {};
  item: string;

  selectedStatus: string[] = [];
  //selectedTitle: string[] = [];
  selectedRow: Todo[] = [];
  //test: SelectItem[];
  date: Date;
  selectTitle: Todo;

  show: boolean = false;
  msgs: Message[] = [];
  //showcheck: boolean = true;
  constructor(
    public todoSer: TodoServerService,
    private messageService: MessageService //public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.showTodo();
    this.cols = [
      { field: "title", header: "Title" },
      { field: "date", header: "Date" },
      { field: "status", header: "Status" },
      { field: "block", header: "Block" },
      { field: "button", header: "" }
    ];

    this.status = [
      { label: "Complete", value: true },
      { label: "Watting", value: false }
    ];
  }

  // selctTitle(array: Todo[]) {
  //   this.title = [];
  //   for (let i = 0; i < array.length; i++) {
  //     this.title.push({ label: array[i].title, value: array[i].id });
  //   }

  //   //console.log("jsonnnnnnnnnnnnnnnnnnnnn", JSON.stringify(array.length));
  // }
  // chang(array) {
  //   this.test = [];
  //   for (let i = 0; i < array.length; i++) {
  //     this.test.push({ label: array[i].title, value: array[i].id });
  //     console.log("jsonnnnnnnnnnnnnnnnnnnnn", JSON.stringify(array[i].title));
  //   }
  // }

  // selctStatus(array: Todo[]) {
  //   this.status = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i].status == true) {
  //       this.status.push({ label: "complete", value: true });
  //     } else if (array[i].status == false) {
  //       this.status.push({ label: "Watting", value: false });
  //     }
  //   }

  //   console.log("jsonnnnnnnnnnnnnnnnnnnnn", JSON.stringify(array.length));
  // }
  //show value data of server
  showTodo(): void {
    this.todoSer.getTodo().subscribe(
      data => {
        //console.log(data);
        this.todoArray = data;
        //this.selctTitle(this.todoArray);
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
  onRowSelect(event) {
    this.messageService.add({
      severity: "info",
      summary: "Car Selected",
      detail: "Vin: " + event.data.vin
    });
  }
  showMes() {
    this.msgs.push({
      severity: "info",
      summary: "Info Message",
      detail: "PrimeNG rocks"
    });
  }
  // showDialog(selectTitle: Todo) {
  //   this.dialogService.open(EditComponent, {
  //     header: "Choose a Car",
  //     width: "70%",
  //     contentStyle: { "max-height": "350px", overflow: "auto" }
  //   });
  // }
}
