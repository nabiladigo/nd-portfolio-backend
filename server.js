// this is the right portfolio
const express = require('express');
const app = express();

PORT=  process.env.PORT || 5000

require('./config/db.connection');

const Project= require('./models/project_model')
app.set('view engine' ,'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.render('home.ejs')
})
app.get('/about', (req, res)=>{
    res.render('about.ejs')
})
app.get('/contact',(req, res)=>{
  res.render('contact.ejs')
})
app.get('/projects', async(req, res)=>{
  const projects = await Project.find({})
  console.log(projects)
  res.render('index.ejs', {projects})

});

app.get('/projects/new', (req, res)=>{
  res.render('new.ejs')
});

app.post('/projects', async(req, res)=>{
  const newProject = new Project(req.body);
  await newProject.save()
  console.log(newProject);
  res.redirect('/projects')
})

app.get('/projects/:projectId', async(req, res)=>{
  const project = await Project.findById(req.params.projectId)
    res.render('show.ejs', {project})
})


app.listen(PORT, ()=>{
    console.log(`Listening for client requests on ${PORT}`);
})