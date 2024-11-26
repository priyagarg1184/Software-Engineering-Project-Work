const express = require('express');
const bcrypt = require('bcryptjs');
const Student = require('../models/student');
const router = express.Router();

router.post('/register', async (req, res) => {
  const {
    name,
    dob,
    gender,
    category,
    email,
    loginId,
    password,
    marks10,
    marks12,
    rollNumber12,
    course,
    branch,
    examName,
    examYear,
    nationality,
    abcId,
    countryCode,
    phone,
    address,
  } = req.body;

  try {
    // Validate if all required fields are present
    if (
      !name ||
      !dob ||
      !gender ||
      !email ||
      !loginId ||
      !password ||
      !course ||
      !branch ||
      !examName ||
      !examYear ||
      !countryCode ||
      !phone
    ) {
      return res.status(400).send('Missing required fields');
    }

    // Check if the student already exists based on email or loginId
    const existingStudent = await Student.findOne({
      $or: [{ email }, { loginId }],
    });
    if (existingStudent) {
      return res
        .status(400)
        .send('Student already registered with this email or login ID.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      name,
      dob,
      gender,
      category,
      email,
      loginId,
      password: hashedPassword,
      marks10,
      marks12,
      rollNumber12,
      course,
      branch,
      examName,
      examYear,
      nationality,
      abcId,
      countryCode,
      phone,
      address,
    });

   
    await newStudent.save();
    res.status(201).send('Student Registered Successfully');
  } catch (error) {
    console.error(error);
    res.status(400).send('Error registering student: ' + error.message);
  }
});

module.exports = router;
