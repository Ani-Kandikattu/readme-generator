// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (!license) {
    return "";
  } else {
    licenseBadge = `![License Badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
    return licenseBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (!license) {
    return "";
  } else {
    return `[${license}](https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
if (!license) {
  return "";
} else {
  return `## [License]
  This project is licensed under ${license}:
  ${renderLicenseLink(license)}
    `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Table-of-Contents
  
  -[Installation](#installation)
  -[Usage](#usage)
  -[Credits](#credits)
  -[License](#license)
  -[Tests](#tests)
  -[Questions](#questions)

  ##[Description]

  ${data.description}

  ##[Installation]

  ${data.install}

  ##[Usage]

  ${data.usage}

  ##[Credits]

  ${data.contribution}

  ##[License]

  ${renderLicenseSection(data.license)}

  ##[Tests]

  ${data.test}

  ##[Questions]

  Contact Me:

  GitHub: ${data.name}

  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
