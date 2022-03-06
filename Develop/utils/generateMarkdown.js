// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
funct [ion renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// Adding in the criteria for the markdown 

  // function that generates the markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table-of-Contents

  * [Description](#description)
  * [Usage](#usage) 
  * [Installation](#installation)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)

  ## [Description]

  ${data.description}

  ## [usage]

  ${data.usage}

  ## [License]

  ${data.license}

  ## [Contributing]

  ${data.contribute}

  ## [Tests]
  ${data.tests}

  ## [Questions]

  If you have questions please contact me bellow:

  [Email: ${data.email}]


`;
}

module.exports = generateMarkdown;
