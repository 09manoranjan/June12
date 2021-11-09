import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  getTodoList(){
    return this.http.get("http://localhost:3000/todo");
  }
  deleteTodoItem(id){
    return this.http.delete("http://localhost:3000/todo/"+id);
  }
  addTodoItem(data){
    return this.http.post("http://localhost:3000/todo",data);
  }
  updateTodoList(id,data){
    return this.http.put("http://localhost:3000/todo/"+id,data)
  }
}
