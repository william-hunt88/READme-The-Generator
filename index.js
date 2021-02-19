// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown.js');
var path = require('path');
const { SlowBuffer } = require("buffer");

// TODO: Create an array of questions for user input     /// ask user what license they wish to add
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your full name"
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message:
        "Provide a description of your project. (What, Why and How?) (Required)",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please provide a description of your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "Link",
      message: "Please provide a link to your deployed project. (Required)",
      validate: (linkInput) => {
        if (linkInput) {
          return true;
        } else {
          console.log("Please provide a valid link to your deployed project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "If you would like to add an image, please provide a link using the relative filepath (relative to READme Gen)"
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please pick a license, if any",
      choices: ["MIT", "Apache License 2.0", "GPLv3", "BSD 2-Clause", "None"]
    }
    // Installation instructions?
    // instructions and examples for use
    // image - "![alt text](assets/images/screenshot.png"
    // License?
  ]);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  //join current working directory with whatever fileName is passed thru
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

promptUser()
  .then(promptInfo => {
      return writeToFile("READme.md", generateMarkdown(promptInfo))
  }).then(() => {
    console.log("hooray!")
  })





    // let fileName = promptInfo.title + " - README.md"
    // const pageTxt = writeToFile(fileName, promptInfo)
    // fs.writeFile("./" + fileName, pageTxt, err => {
    //   if (err) throw new Error(err);

    //   console.log("gooray!")
    // })
