const { Student } = require('./students');
const { Teacher } = require('./teacher');

Teacher.name = `Arpit Bharti`;
Student.name = `${yourName}`;

Workshop = {
    topic: Git,
    date: '10, July, 2018',
    starTime: '10:30 AM',
    endTime: '11:30 AM',
    location: library,
    result: (student, teacher) => student.learnFrom(teacher)
};
