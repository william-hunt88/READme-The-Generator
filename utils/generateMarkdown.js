const moment = require('moment');
const fs = require('fs');
const path = require('path')

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
  const MIT = `MIT License

  Copyright (c) ${moment().format('Y')} 
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.`
  // return template literal to inject in generateMarkDown if user did not select none
  if(license != "None") {
    console.log(license)
    if(license[0] === 'MIT') {
      fs.writeFileSync(path.join(process.cwd(), "LICENSE.txt"), MIT)
      return `Licensed under the MIT license`
    } else if (license[0] === 'Apache License 2.0') {
      return ``
    } else if (license[0] === 'GPLv3') {
      return ``
    } else if (license[0] === 'GPLv2') {
      return ``
    } else if (license[0] === 'BSD') {
      return ``
    }  
  } else {
    return
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  console.log(data.usage)
  console.log("hooray we got here")
  return ` # ${data.title}
  
  ### Table of Contents
  * [Description](#project-description) 
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ### Project Description
  ${data.description}

  
  ### Usage
  <img src = "${data.usage}" >
  

  
  ### Credits

  
  ${renderLicenseSection(data.license)}
`
}


module.exports = generateMarkdown;
