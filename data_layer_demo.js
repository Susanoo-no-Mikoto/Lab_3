const DB = require ('./api/DB/db.js');
//const ContentfulAPI = require ('./api/contentful.js');

let dataUsers = DB.gs();
console.log(dataUsers);

//let dataCoursesList = ContentfulAPI.ex();
//let dataCoursesAll = ContentfulAPI.coursesAll();
//console.log(dataCoursesList);
//console.log(dataCoursesAll);