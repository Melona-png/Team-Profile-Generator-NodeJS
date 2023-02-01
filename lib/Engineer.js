const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name,id,email)
        this.school = github;

    }
   getGithub(){
    return this.github;
   }
   getRole(){
    return "Engineer";
   }
}

module.exports = Engineer;