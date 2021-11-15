// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== 'No license') {
    return `<img src= "https://img.shields.io/badge/license-${license}-green>`
  }
  
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/licenses/${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return`
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n

  ${renderLicenseBadge(data.license)}

  # Description:\n
  ${data.description}\n

  # Table of Contents:\n
  - [Description](#description)\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Contribution](#contribution)\n
  - [Tests](#tests)\n
  - [License](#license)\n
  - [Questions](#questions)\n

  # Installation:\n
  ${data.installation}\n
  # Usage:\n
  ${data.usage}\n
  # Contribution:\n
  ${data.contribution}\n
  # Test:\n
  ${data.tests}\n
  # License: \n
  ${renderLicenseSection(data.license)}\n
  # Questions:\n
  ${data.questions}\n

  My Github: [${data.username}(http://github.com/${data.username})]
  My Email: ${data.email}
`;
}

module.exports = generateMarkdown;
