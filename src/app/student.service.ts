import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Student } from './student';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }  // This private htt:: HttpClient --> This means injecting dependency in the project, this is done because studentService class need Http:HttpClient, HttpClient is class name and http is an object

  getAllStudent():Observable<Student[]>{   // getAllStudent is method name: Oberservable<Student>-- this are returnType
    return this.http.get<Student[]>('http://localhost:9092/student/getAll')     // this.http.get this means calling Http method <Student[]>-- This means type casting the methods,or we can specify returnType to <any> if you dont want to typecaste the methods,  so for Student getting data methods is always get methods ('http://localhost:9092/student/getAll') this means return request of all student data
  }

  deleteStudent():Observable<String>{
      return this.http.delete<String>('http://localhost:9092/student/delete')
  }




}
