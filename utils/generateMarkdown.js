// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
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
  ## Deployed Application URL
  ${data.link}
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
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  Please send your questions @ Email: ${data.email} or visit GitHub: (https://github.com/${data.creator}).
  `;
}

module.exports = generateMarkdown;
