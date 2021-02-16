// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if license does not equal "none" - as stated in choices array - return template literal // return an image -  badge - google this
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // return template literal to inject in generateMarkDown if user did not select none
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return ` # ${data.title}

  ## ${data-subtitle}
  
  ### Table of Contents
  * [Description](#project-description) 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ### Project Description
  ${data.description}
  
  ### Installation
  ${data.installation}
  
  ### Usage
  ${data.usage}
  
  ### Credits
  ${data.credits}
  
  ### License
  * ${renderLicenseSection}
  * ${renderLicenseLink()}
  * ${renderLicenseBadge (data.license)}
`
}

module.exports = generateMarkdown;
