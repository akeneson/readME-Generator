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
  ${data.license}

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
