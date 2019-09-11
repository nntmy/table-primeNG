export class Todo {
    public id: number;
    public title: string;
    public date: string;
    public status: boolean;
    public block: string;
  
    constructor( title: string, date: string, status: boolean, block: string) {
      
      this.title = title;
      this.date = date;
      this.status = status;
      this.block = block;
    }
  }
  