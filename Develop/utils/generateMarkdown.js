// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "none") {
    return `[github license]`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license --- "none") {
    return `\n* [License](#license)\n`;
  }
  return "#${data.title}";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return`## License
    Licensed under the $(license) license.`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## video

  ## Installation
  ${data.instruction}

  ## Title
  ${data.title}

  ## Usage
  ${data.usage}

  ## Github 
  [${data.creator}]()

  ## Contributors
  ${data.contribution}
  ## Testing
  \`\`\`
  ${data.test}
  \`\`\`
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
