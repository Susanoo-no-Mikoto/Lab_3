const contentfulAPI = require('../contentful');

//const getCoursesList = require('../contentful');
//console.log(ContentfulAPI);
//обработчики
const data = contentfulAPI.coursesList();
console.log(data);

exports.getAll = function(req, res){
    // как-то используем функцию contentfulAPI.getCoursesList() и, возможно, другие
    
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    
    res.send( JSON.stringify(data) );
}

exports.getOne = function(req, res){
    // как-то используем функцию contentfulAPI.getCoursesList() и, возможно, другие
    res.send();
}

