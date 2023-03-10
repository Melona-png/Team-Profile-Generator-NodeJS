//Vars
const inquirer = require("inquirer");
const fs = require("fs");
const {generateHTML} = require("./src/generateHtml");


const Manager = require("./lib/Manager")
const Intern =require("./lib/Intern")
const Engineer =require("./lib/Engineer")
const Employee =require("./lib/Employee")

//storing user input
const employees = [];
const managers = [];
const engineers = [];
const interns = [];


//prompt function
function start () {
  inquirer.prompt([
     {
    name: "name",
    message:"Enter Manager Name",
    type: "input",
  },
  {
    name: "id",
    message: "Enter Manager Id",
    type: "input",
    
  },
  {
    name: "email",
    message:"Enter Manager Email",
    type: "input",
  },
  {
    name: "office",
    message:"Enter Manager Office Number",
    type: "input",
  },
  ]).then(function(answers){
    const manager = new Manager(answers.name,answers.id,answers.email,answers.office)
    managers.push(manager);
    menu();
  })
}

start();

function menu(){
  inquirer.prompt([
    {
      name: "choice",
      message:"Choose an option from the list.",
      type:"list",
      choices: ["Add an engineer", "Add an intern", "Finish Building Team"]
    }
  ]).then(function(answers){
    console.log(answers)
    switch (answers.choice) {
      case "Add an engineer":
        createEngineer();
      break;
      case "Add an intern":
      createIntern();
      break;
      default: 
      createTeam();
    }
  })
}



function createEngineer(){
  inquirer.prompt([
  {
   name: "name",
   message:"Enter Engineer Name",
   type: "input",
 },
 {
   name: "id",
   message: "Enter Engineer Id",
   type: "input",
   
 },
 {
   name: "email",
   message:"Enter Engineer Email",
   type: "input",
 },
 {
   name: "github",
   message:"Enter Engineer Github",
   type: "input",
 },
 ]).then(function(answers){
   const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github)
   engineers.push(engineer);
   menu();
 })
}

function createIntern(){
  inquirer.prompt([
    {
   name: "name",
   message:"Enter Intern Name",
   type: "input",
 },
 {
   name: "id",
   message: "Enter Intern Id",
   type: "input",
   
 },
 {
   name: "email",
   message:"Enter Intern Email",
   type: "input",
 },
 {
   name: "school",
   message:"Enter Intern School",
   type: "input",
 },
 ]).then(function(answers){
   const intern = new Intern(answers.name,answers.id,answers.email,answers.school)
   interns.push(intern);
   menu();
 })
}

function createTeam() {
  const html = generateHTML(managers, engineers, interns, employees);
  fs.writeFile("team.html", html, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
};
