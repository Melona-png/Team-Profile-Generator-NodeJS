questions = [
  {
    name: "Manager",
    message:"Enter Manager Name, Employee ID, Email, and Office number:",
    type: "input",
  },
  {
    name: "Options",
    message: "Choose an option from the list:",
    type: "list",
    choices: ["Add an engineer", "Add an intern", "Finish Building Team"],
  },
  {
    name: "Engineer",
    message:"Please enter the engineer's name, employee ID, email, Github Username: ",
    type: "input",
  },
  {
    name: "Intern",
    message:"Please enter the intern's name, employee ID, email, school:",
    type: "input",
  },
];

module.exports = {questions};