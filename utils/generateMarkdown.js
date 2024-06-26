// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPL 3.0':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
        return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    default:
        return ' ';
}
}
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    if (license !== "none") {
      return `\n* [License](#license)\n`;
    }
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
      return `## License
      This project is licensed under the ${license} license.`;
    }
    return "";
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Project Title 
  ${data.title}
  ## License
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [How to Use This Application](#usage)
  * [Contributing](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## How to Use This Application:
  ${data.usage}
  ## Contributors
  ${data.contributing}
  ## Testing
  ${data.testing}
  ## Questions
  Please send your questions @ Email: ${data.email} or 
  Visit GitHub: (https://github.com/${data.creator}).
  `;
}

module.exports = generateMarkdown;
