const contentful = require('contentful-management');
const { async } = require('regenerator-runtime');



let Connect = async () => {
    let client = contentful.createClient({
        accessToken: 'CFPAT-RohlYEQPj7FBKM_xaqr8UyrrljVlvBOn3l4MBwqkego'
    })
    let space = await client.getSpace('8utttqerkifu');
    return await space.getEnvironment("master");   
}

let getCoursesList = async (envi, idCoursesList) => {
    //envi = await Connect(); 
    //coursesList = '30NI1dtFXSqcCqsWcFI8q7';   
    let courses = await envi.getEntry(idCoursesList);
    courses = courses.fields.coursesList['en-US'];
    //console.log(courses);  
    return  courses;
}

let getCourseIntroductionToJavaScript = async (envi, courseIntroductionToJavaScript) => {
    let course1 = await envi.getEntry(courseIntroductionToJavaScript);
    course1 = course1.fields.introductionToJavaScript['en-US'];
    //console.log(course1);
    return course1;
}

let getCourseReferencesAndSpecifications = async (envi, courseReferencesAndSpecification) => {
    let course2 = await envi.getEntry(courseReferencesAndSpecification);
    course2 = course2.fields.referencesAndSpecifications['en-US'];
    //console.log(course2);
    return course2;
}

let getCourseCodeEditors = async (envi, courseCodeEditors) => {
    let course3 = await envi.getEntry(courseCodeEditors);
    course3 = course3.fields.codeEditors['en-US'];
    //console.log(course3);
    return course3;
}

let getCourseDeveloperConsole = async (envi, courseDeveloperConsole) => {
    let course4 = await envi.getEntry(courseDeveloperConsole);
    course4 = course4.fields.developerConsole['en-US'];
    //console.log(course4);
    return course4;
}

exports.coursesList = async () =>{
    const envi = await Connect();
    let res = await getCoursesList(envi, '30NI1dtFXSqcCqsWcFI8q7');
    //console.log(res);
    return res; 
}

exports.course1 = async() =>{
    const envi = await Connect();
    let res = await getCourseIntroductionToJavaScript(envi, '2uF1ZRqq0CuEX3gikbBGae');
    return res;   
}

exports.course2 = async() =>{
    const envi = await Connect();
    let res = await getCourseReferencesAndSpecifications(envi, 'KNLntgvu4w7TZZSmMF6pI');
    return res;   
}

exports.course3 = async() =>{
    const envi = await Connect();
    let res = await getCourseCodeEditors(envi, '6xp4qTDLVBpl9gdlmBL3lR');
    return res;   
}

exports.course4 = async() =>{
    const envi = await Connect();
    let res = await getCourseDeveloperConsole(envi, '5NgwR9jzSrob7zRDN68tVk');
    return res;   
}

    
        
        
    
    

/*

exports.getTestIntroductionToJavaScript = async () => {

}

exports. getTestReferencesAndSpecifications = async () => {
    
}

exports.getTestCodeEditors = async () => {

}

exports.getTestDeveloperConsole = async () => {

}*/