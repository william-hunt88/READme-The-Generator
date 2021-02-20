const moment = require("moment");
const fs = require("fs");
const path = require("path");
const sendLicenseTxt = require("./storeLicenseTxt.js");

function renderLicenseBadge(license) {
  // if license does not equal "none" - as stated in choices array - return template literal with appropriate badge link
  if (license != "None") {
    console.log(license);
    if (license[0] === "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license[0] === "Apache License 2.0") {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license[0] === "GPLv3") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license[0] === "GPLv2") {
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    } else if (license[0] === "BSD 2-Clause") {
      return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    }
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, link) {
  // back tag for URL of input repo main branch where LICENSE.txt will be pushed
  let tag = "/blob/main/LICENSE.txt";
  // template literals used in markdown language style to create link
  return `[${license[0]}](${link + tag})`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name, link) {
  if (license != "None") {
    console.log(license);
    if (license[0] === "MIT") {
      fs.writeFileSync(
        path.join(process.cwd(), "LICENSE.txt"),
        sendLicenseTxt(license, name)
      );
      return `Licensed under the ${renderLicenseLink(license, link)} license`;
    } else if (license[0] === "Apache License 2.0") {
      fs.writeFileSync(
        path.join(process.cwd(), "LICENSE.txt"),
        sendLicenseTxt(license, name)
      );
      return `Licensed under the ${renderLicenseLink(license, link)} license`;
    } else if (license[0] === "GPLv3") {
      fs.writeFileSync(
        path.join(process.cwd(), "LICENSE.txt"),
        sendLicenseTxt(license, name)
      );
      return `Licensed under the ${renderLicenseLink(license, link)} license`;
    } else if (license[0] === "BSD 2-Clause") {
      fs.writeFileSync(
        path.join(process.cwd(), "LICENSE.txt"),
        sendLicenseTxt(license, name)
      );
      return `Licensed under the ${renderLicenseLink(license, link)} license`;
    }
  } else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return ` # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ### Table of Contents
  * [Description](#project-description) 
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ### Project Description
  ${data.description}

  
  ### Usage
  <img src = "${data.usage}" >
  

  ${renderLicenseSection(data.license, data.name, data.link)}
`
};

module.exports = generateMarkdown;
