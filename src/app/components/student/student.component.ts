import { Component,OnInit } from '@angular/core';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList: Student[] = [];    // studentList is the objects of an Student  // This is used to hold the data in array of student in the empty array Student[] this is datatype of an student
  data: String = "";
  constructor(private studentService: StudentService){
      this.studentService.getAllStudent().subscribe((StudentHoldingData: Student[])=>{
          this.studentList = StudentHoldingData;
          console.log(this.studentList)
      })

      this.studentService.deleteStudent().subscribe((StringDataofDelete: String)=>{
        this.data = StringDataofDelete;
        console.log (this.data)
      })
  }

  

  ngOnInit(): void {                             // want to work after intilized project
     
  }

  

}
