const inquirer = require('inquirer');
const fs = require('fs');



inquirer
      .prompt([
            {
                  type: 'input',
                  message: 'What is the title of your application?',
                  name: 'title',
            },
            {
                  type: 'input',
                  message: "Where would you like to save your README file?  Specify the file path and name of the file you want created.  This will be the location where the README file is written.",
                  name: "location",
            },
            {
                  type: 'input',
                  message: 'Describe what your application is and does for your user:',
                  name: 'description',
            },
            {
                  type: 'list',
                  message: 'Select a license for your application:',
                  name: 'license',
                  choices: ["MIT", "Ceative Common Licesne Family", "Eclipse Public License", "GNU v3.0"],
            },
            {
                  type: 'input',
                  message: "Provide installation instructions:",
                  name: 'installation',
            },
            {
                  type: 'input',
                  message: 'Provide a description of how this application is supposed to be used:',
                  name: 'usage',
            },
            {
                  type: 'input',
                  message: "List out the contributors for this project.",
                  name: 'contributors',
            },
            {
                  type: 'input',
                  message: "Enter yout github username:",
                  name: 'username',
            },
            {
                  type: 'input',
                  message: 'enter your email address:',
                  name: 'email',
            },
      ]).then((response) => {
            console.log(response);
            console.log(response.title)

            fs.mkdir(response.location, { recursive: true }, (err) => {
                  if (err) throw err;

                  switch (response.license) {
                        case "MIT":
                              imageAddress = "https://img.shields.io/badge/License-MIT-yellow.svg";
                              break;
                        case "Creative Commons License Family":
                              imageAddress = "https://licensebuttons.net/l/zero/1.0/80x15.png";
                              break;
                        case "Eclipse Public License":
                              imageAddress = "https://img.shields.io/badge/License-EPL%201.0-red.svg";
                              break;
                        case "GNU v3.0":
                              imageAddress = "https://img.shields.io/badge/License-GPLv3-blue.svg";
                              break;
                  }

                  const readMeText = "# " + response.title + "\n \n" + "\n\n## License \n\n " + "Distributed under " + response.license + "      " + "\n ![" + response.license + "](" + imageAddress + ")\n" + "\n\n## Description \n\n" + response.description + "\n\n## Installation \n\n" + "```" + response.installation + "```" + "\n\n## Usage \n\n" + response.usage + "\n\n## Contributors \n\n" + response.contributors + "\n\n" + "\n\n## Contact \n\n" + "\n Below are two ways you can contact contributors of the project or submit bugs:\n" + "\n-" + response.username + "\n" + "\n-" + response.email + "\n"
                  fs.appendFile(response.location + '/README.md', readMeText,
                        (err) => err ? console.error(err) : console.log('Commit logged!')
                  );
            }
            )
      })