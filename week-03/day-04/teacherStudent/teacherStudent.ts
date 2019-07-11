'use strict';

import {Student} from './student';
import {Teacher} from './teacher';

let firstStudent: Student = new Student;
let firstTeacher: Teacher = new Teacher;

firstStudent.question(firstTeacher);
firstTeacher.teach(firstStudent);
