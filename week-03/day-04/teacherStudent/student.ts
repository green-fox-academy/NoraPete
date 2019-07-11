'use strict';

import { Teacher } from './teacher';

class Student {


    learn() {
        console.log('The student is learning something.');
    }
    question(teacher: Teacher) {
        teacher.answer();
    }
}

export { Student };
