const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

document.addEventListener("DOMContentLoaded", function () {
    let course_filter = document.getElementById('courseCategoryButtons');
    let unique_ids = [];
    for (const course of courses) {
        if (!unique_ids.includes(course.subject)) {
            unique_ids.push(course.subject)
        }
    }

    for (const subject of unique_ids) {
        console.log(subject)
        const button = document.createElement("button");
        button.textContent = subject
        button.addEventListener('click', () => filter_courses(subject));
        course_filter.appendChild(button);

    }

    const button = document.createElement("button");
    button.textContent = "All Courses"
    button.addEventListener('click', () => filter_courses(button.textContent));
    course_filter.appendChild(button);
    filter_courses("All Courses")

});



function filter_courses(filter) {
    console.log(filter);
    const course_filter = document.getElementById('courseCategoryButtons');
    const course_container = document.getElementById('courseButtons');
    course_container.innerHTML = '';
    const filtered_courses = (filter === 'All Courses') 
    ? courses 
    : courses.filter(course => course.subject === filter);

    filtered_courses.forEach(course => {
        const button = document.createElement("button");
        button.textContent = `${course.subject} ${course.number}`;
        course_container.appendChild(button);

        if (course.completed) {
            button.style.backgroundColor = "orange";
        }
    });
    const totalCredits = filtered_courses.reduce((accumulator, course) => {
        return accumulator + course.credits;
    }, 0);
    const total_credits = document.getElementById("total-credits");
    total_credits.textContent = `The total number of credits is ${totalCredits}`
}