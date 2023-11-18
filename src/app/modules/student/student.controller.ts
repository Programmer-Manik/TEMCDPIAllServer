import {Request,Response} from 'express'
import { studentService } from './student.service';

const createStudent = async(req:Request, res:Response)=>{
try{
const {student:StudentData} = req.body;
// will call service func to send this data
const result = await  studentService.createStudentIntoBD(StudentData);
// send response 
res.status(200).json({
success:true,
message : "Students is created successfully",
data:result,
})
}catch(error){
console.log(error)
}
};

const getAllStudents = async(req:Request, res:Response)=>{
try{
const result = await studentService.getAllStudentsFromDB()
res.status(200).json({
success:true,
message : "student is created successfully",
data:result,
})

}catch(error){console.log(error)}
}


export const StudentControllers = {
createStudent,getAllStudents
}