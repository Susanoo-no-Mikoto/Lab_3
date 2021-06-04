const { response } = require('express');
const express = require('express');
const { async } = require('regenerator-runtime');
const app = express()
const port = 3000


const DB = require('./DB/db.js');
const ContentfulAPI = require('./contentful');

app.get('/', (req, res) => {
  res.send('<a href="/courses">Список курсов</a> <a href="/users">Пользователи</a>');
})

app.get('/users', async (req, res) => {
  let users = await DB.gg();
  res.send(users);
})

app.get('/courses', async (req, res) => { 
  const courses = await ContentfulAPI.coursesList();
  res.send(`<a href="/course1">${courses[0]}</a><br /> <a href="/course2">${courses[1]}</a><br /> <a href="/course3">${courses[2]}</a><br /> <a href="/course4">${courses[3]}</a><br />`);
})


app.get('/course1', async (req, res) => {
  const course1 = await ContentfulAPI.course1();
  res.send(course1);
})

app.get('/course2', async (req, res) => {
  const course2 = await ContentfulAPI.course2();
  res.send(course2);
})

app.get('/course3', async (req, res) => {
  const course3 = await ContentfulAPI.course3();
  res.send(course3);
})

app.get('/course4', async (req, res) => {
  const course4 = await ContentfulAPI.course4();
  res.send(course4);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
