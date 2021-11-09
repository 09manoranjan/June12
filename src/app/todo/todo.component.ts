import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList:any = [];searchText:any = "";
  constructor(private todoService:TodoService) { }
  defaultVal = "";
  ngOnInit() {
    this.getTodoList();
  }
  getTodoList(){
    this.todoService.getTodoList().subscribe((result)=>{
      console.log("get result-------------->",result);
      this.todoList = result;
    })
  }
  addTodoItems(val){
    if(val!=""){
      let obj = {title:val,status:"Incomplete"};
      console.log("value -------------->",obj);
      this.todoService.addTodoItem(obj).subscribe((result)=>{
        console.log("add result------------>",result);
        this.getTodoList();
        this.defaultVal = null;
      })
     }
  }
  deleteTodoItem(data){
    this.todoService.deleteTodoItem(data.id).subscribe((result)=>{
      console.log("delete result--------------->",result);
      this.getTodoList();
    })
  }
  changeStatus(data){
    data.status = data.status == "Incomplete" ? "Complete" : "Incomplete" ; 
    console.log("data----------->",data);
    this.todoService.updateTodoList(data.id,data).subscribe((result)=>{
      console.log("update Result------------->",result);
      this.getTodoList();
    })
  }
  searchItem(val){
    console.log("data----------->",val)
    if(this.searchText == ""){
      this.getTodoList();
    }
    else{
      console.log("inside else");
      this.todoList = this.todoList.filter(res=>{
          return res.title.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
      })
    }
  }
  reverse : boolean = false;
  orderByKey:string = "id";
  sortData(key){
    console.log("key----------->",key);
    this.orderByKey = key;
    this.reverse = !this.reverse;
  }
}
