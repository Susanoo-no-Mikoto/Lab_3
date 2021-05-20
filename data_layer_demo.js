//const DB = require ('./api/DB/db.js');
const ContentfulAPI = require ('./api/contentful.js');

//let dataUsers = DB.gsrun();
//console.log(dataUsers);

const dataCoursesList = ContentfulAPI.coursesList();
//let dataCoursesAll = ContentfulAPI.coursesAll();
console.log(dataCoursesList);
//console.log(dataCoursesAll);