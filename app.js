const inquirer = require("inquirer");

// const fs = require("fs");

// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(userName, github);

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));

// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw new Error(err);

//   console.log("Portfolio complete! Checkout index.html to see the output!");
// });
