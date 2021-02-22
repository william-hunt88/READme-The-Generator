// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
var path = require("path");
const { SlowBuffer } = require("buffer");

// prompts with the various questions to ask the user
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your full name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your full name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please provide your email address.",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please provide an email address!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please provide a github username!");
          return false;
        }
      },
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
      name: "link",
      message:
        "Please provide a link to this projects github repo in the follwing format. (https://github.com/'your username'/'repo name') (Required)",
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
      name: "installation",
      message: "Please enter instructions for installation",
      validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please provide a installation instructions!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message:
        "Provide a youtube link, or plain text demonstrating the app in use",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please provide examples of usage!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributions",
      message:
        "Please enter rules, expectations or any details regarding outside contributions to this code.",
      validate: (contributionsInput) => {
        if (contributionsInput) {
          return true;
        } else {
          console.log(
            "Please provide rules for contributions to this project!"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tests",
      message: "Detail any tests that may exist for this app.",
      validate: (testsInput) => {
        if (testsInput) {
          return true;
        } else {
          console.log(
            "Please provide details about any tests that are provided for this app"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "image",
      message:
        "If you would like to add an image, please provide a link using the relative filepath. (relative to the final destination of the READme)",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please pick a license, if any",
      choices: ["MIT", "Apache License 2.0", "GPLv3", "BSD 2-Clause", "None"],
      validate: (licenseInput) => {
        if (licenseInput) {
          return true;
        } else {
          console.log("Please provide an answer!");
          return false;
        }
      },
    },
  ]);
};


const writeToFile = (fileName, data) => {
  //join current working directory with whatever fileName is passed thru
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

promptUser()
// data from prompts passed to be processed and printed
  .then((promptInfo) => {
    return writeToFile("READme.md", generateMarkdown(promptInfo));
  })
  .then(() => {
    console.log("READme.md and LICENSE.txt succesfully printed");
  });


