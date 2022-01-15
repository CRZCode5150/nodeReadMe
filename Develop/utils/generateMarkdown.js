function renderLicenseBadge(license) {
console.log(license.license);
const licenseType = license.license;
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache License 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  if (licenseType === "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  return licenseString
  };
  

function generateMarkdown(license) {
    return `# ${license.title}

    ## Table of Contents:
    1. [Description](#description) 
    2. [Installation](#Installation)
    3. [Usage](#Usage)  
    4. [Contributing](#Contributing)
    5. [Tests](#Tests)
    6. [License](#License)
    7. [GitHub](#GitHub)
    8. [E-mail](#E-mail)

  ## Description
  ${license.description} 

  ## Installation
  ${license.installation}

  ## Usage
  ${license.usage}

  ## Contributing
  ${license.contributing}

  ## Tests
  ${license.tests}

  ## License
  ${renderLicenseBadge(license.license)}

  ## GitHub
  ${license.github}

  ## E-mail
  ${license.email}`
  }
    module.exports = generateMarkdown;
    
