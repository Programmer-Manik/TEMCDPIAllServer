import { Schema, model,   } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student/student.interface';

const userNameSchema = new Schema<UserName>(
	{
		Name:{
		 type:String,
		required:true,	
		},
		middleName:{
		 type:String,
		},
		lastName:{
		 type:String,
			required:true,
		},
	},)

const localGuardianSchema = new Schema<LocalGuardian>(
{
					firstName:{type:String ,required:true,},
					occupation: {type:String ,required:true,},
	                contactNO: {type:String ,required:true,},
})

const guardianSchema = new Schema<Guardian>({
			fatherName:{type:String ,required:true,},
			fatherOccupation:{type:String ,required:true,},
			fatherContactNO:{type:String ,required:true,},
			matherName:{type:String ,required:true,},
			matherOccupation:{type:String ,required:true,},
			matherContactNO:{type:String ,required:true,},
})

const studentSchema = new  Schema<Student>({
id:{type:String},
name:userNameSchema,
gender:["male","female"],
dateOfBirth:{type:String, required:true,},
email:{type:String ,required:true,},
contactNumber:{type:String ,required:true,},
emergencyContactNO:{type:String ,required:true,},
bloodGroup:['A' , 'B' , 'AB' , 'O' , 'Rh+ ' , 'Rh-'],
presentAddress:{type:String ,required:true,},
permanentAddress:{type:String ,required:true,},
guardian:guardianSchema,
localGuardian:localGuardianSchema,
profileImg:{type:String},
isActive : ['Active','inActive'],
})

// create model 
// import k hob Student ke 
const StudentModel = model<Student>('student', studentSchema)
export default StudentModel