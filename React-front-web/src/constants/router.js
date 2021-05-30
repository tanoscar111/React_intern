export const ROUTERS = {

    HOME_PAGE: '/',

    //admin
    INFORMATION_ADMIN: '/admin/information',
    COMPANY_LIST: '/admin/company',
    SCHOOL_LIST: '/admin/school',
    LOGIN: '/login', 
    PRODUCT_LIST: '/product',
    PRODUCT_DETAIL: '/product/:id',

    //Manager
    INFORMATION_MANAGER: '/manager/information',
    TABLE: '/manager/table',
    INTERNS_MANAGER: '/manager/interns',
    
    //leader
    INFORMATION_LEADER: '/leader/information',
    INTERNS_LEADER: '/leader/interns',
    COURSE: '/leader/course',
    TASK: '/leader/task',
    QUESTION: '/leader/question',

    //school
    INFORMATION_PERSON_SCHOOL: '/school/information',
    INTERNS_SCHOOL: '/school/interns',
    INFORMATION_SCHOOL: '/school/facultyInformation',
    INFORMATION_FACULTY_OF_SCHOOL: '/school/facultysOfSchool',


    
    //Faculty
    INFORMATION_PERSON_FACULTY: '/faculty/information',
    INTERNS_FACULTY: '/faculty/interns',
    INFORMATION_FACULTY_SCHOOL: '/faculty/facultyInformation',
    
    REACT_BEAUTIFUL: '/leader/react-beautiful',

    //Intern
    INTERNS_INFORMATION: '/intern/information',
    COURSE_INFORMATION: '/intern/course',
    COURSE_RESULT: '/intern/result/:internId'

}