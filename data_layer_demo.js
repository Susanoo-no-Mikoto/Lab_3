//const DB = require ('./api/DB/db.js');
const { async } = require('regenerator-runtime');
const ContentfulAPI = require ('./api/contentful.js');
//let dataUsers = DB.gs();
//console.log(dataUsers);
let CoursesList = async () => {
    let dataCoursesList = await ContentfulAPI.coursesList();
    //console.log(dataCoursesList);
    
}

//let dataCoursesAll = ContentfulAPI.coursesAll();

//console.log(dataCoursesAll);