const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const students = [];

    // Parsing CSV data, skipping the first line
    const lines = data.trim().split('\n');
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      const [firstname, lastname, age, field] = line.split(',').map((item) => item.trim());
      if (firstname && lastname && age && field) {
        students.push({
          firstname, lastname, age, field,
        });
      }
    }

    // Counting students in each field
    const fieldCounts = {};
    students.forEach((student) => {
      if (fieldCounts[student.field]) {
        fieldCounts[student.field] += 1;
      } else {
        fieldCounts[student.field] = 1;
      }
    });

    // Logging the number of students in each field and their first names
    console.log('Number of students:', students.length);
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        const studentsInField = students
          .filter((student) => student.field === field)
          .map((student) => student.firstname);
        console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${studentsInField.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
