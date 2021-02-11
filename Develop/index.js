// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
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
      name: "motivation",
      message:
        "What was your motivation to build this app? WHat needs does it address?",
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
    // Installation instructions?
    // instructions and examples for use
    // image - "![alt text](assets/images/screenshot.png"
    // License?
  ]);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  return `
  #${data.title}
  *${data.description}*
  `
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser()
  .then(promptInfo => {
    let fileName = promptInfo.title + " - README.md"
    const pageTxt = writeToFile(fileName, promptInfo)
    fs.writeFile("./" + fileName, pageTxt, err => {
      if (err) throw new Error(err);

      console.log("gooray!")
    })
  });

