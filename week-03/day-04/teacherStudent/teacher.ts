'use strict';

import { Student } from './student';

class Teacher {


    teach(student: Student) {
        student.learn();
    }
    answer() {
        console.log('The teacher is answering a quenstion.');
    }
}

export { Teacher };
