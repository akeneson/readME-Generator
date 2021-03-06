function grabLicense(license){
  return `[![License](https://img.shields.io/badge/license-${license.link}-${license.color}.svg)](${license.url})

  `;


}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ${grabLicense(data.license)}

  # ${data.title}
  ## Description
  ${data.description}
  ---
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
 ---
 ## Installation
  To in stall this blah
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ## License
  ${data.title} is ${data.license.name}

  ## Contributing
  ${data.contributing}

  ## Test

  \`\`\`
  ${data.testing}
  \`\`\`

  ## Questions
  For questions regarding this application, please email: 
  ${data.email}




`;
}

module.exports = generateMarkdown;
