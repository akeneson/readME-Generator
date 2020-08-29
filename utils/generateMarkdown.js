function grabLicense(license){
  return `![License](https://img.shields.io/badge/${license}-blue.svg)`


}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
  ${grabLicense(data.license)}

  ## Contributing
  ${data.contributin}

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
