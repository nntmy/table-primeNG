import { Component, OnInit } from "@angular/core";
import { TodoServerService } from "../todo-server.service";
import { Todo } from "../todo";
import { SelectItem } from "primeng/api";
import { Message } from "primeng//api";
import { MessageService } from "primeng/api";
//import { DialogService } from "primeng/api";

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
  minDate: Date;
  selectTitle: Todo;

  show: boolean = false;
  msgs: Message[] = [];
  //showcheck: boolean = true;

  tmp: SelectItem[];
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

    // this.status = [
    //   { label: "Complete", value: true },
    //   { label: "Watting", value: false }
    // ];
  }

  // selctTitle(array: Todo[]) {
  //   this.status = [];
  //   for (let i = 0; i < array.length; i++) {
  //     this.status.push({ label:array[i].status, value: array[i].id });
  //   }

  //   //console.log("jsonnnnnnnnnnnnnnnnnnnnn", JSON.stringify(array.length));
  // }

  selctStatus(array: Todo[]) {
    this.status = [];
    //kiem tra xem gia tri true da co trong mang status chua
    let a = this.status.find(item => item.value == true);
    //kiem tra xem gia tri false da co trong mang status chua
    let b = this.status.find(item => item.value == false);
    //duyet mang array
    for (let i = 0; i < array.length; i++) {
      //object.status = true va mang status chua co gia tri true
      if (array[i].status == true && a == null) {
        //push label va value vao mang
        this.status.push({ label: "Complete", value: true });
        //kiem tra lai xem gia tri true da co trong mang status chua
        a = this.status.find(item => item.value == true);
      } else if (array[i].status == false && b == null) {
        //push label va value vao mang
        this.status.push({ label: "Watting", value: false });
        //kiem tra lai xem gia tri false da co trong mang status chua
        b = this.status.find(item => item.value == false);
      }
    }
    // console.log("1111111111111111111111111111111", this.tmp);
    // let a = Array.from(new Set(this.tmp));
    // console.log("1111111111111111111111111111111", a);
    // this.status = a;
    // console.log("jsonnnnnnnnnnnnnnnnnnnnn", JSON.stringify(this.status.length));
  }

  //show value data of server
  showTodo(): void {
    this.todoSer.getTodo().subscribe(
      data => {
        //console.log(data);
        this.todoArray = data.sort((a, b) => b.id - a.id);
        //this.selctTitle(this.todoArray);
        this.selctStatus(this.todoArray);
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
