const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  category: { type: String },
  email: { type: String, required: true, unique: true },
  loginId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  marks10: { type: Number, required: false }, 
  marks12: { type: Number, required: false }, 
  rollNumber12: { type: String, required: false }, 
  course: { type: String, required: true }, 
  branch: { type: String, required: true }, 
  examName: { type: String, required: true }, 
  examYear: { type: Number, required: true }, 
  nationality: { type: String },
  abcId: { type: String, required: false },
  countryCode: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
