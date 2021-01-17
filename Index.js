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
                  message: 'Please describe what your application is and does for your user.?',
                  name: 'description',
            },
            {
                  type: 'list',
                  message: 'Select a license for your application.',
                  name: 'license',
                  choices: ["MIT", "Ceative Common Licesne Family", "Eclipse Public License", "GNU v3.0"],
            },
            {
                  type: 'input',
                  message: "Enter yout github username",
                  name: 'username',
            },
            {
                  type: 'input',
                  message: 'enter your email address',
                  name: 'email',
            },
      ])
      .then((response) => {
            console.log(response);
            console.log(response.title)

            switch (response.license) {
                  case "MIT":
                        imageAddress = "https://img.shields.io/badge/License-MIT-yellow.svg)";
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

            fs.appendFile('Generated_README.md',
                  `#${response.title}
                  <br>
                  ##Description
                  ${response.description}
                  <br>
                  ##License
                  ![${response.license} image](${imageAddress})
                  This application use the ${response.license}  license.  
                  <br>
                  ##Questions
                  Below are two methods you can contact me about any questions you have, ideas, or issues you encounter using the application. The first link is to my github where you can post your question.  The other is my email where you can contact me directly. 
                  -[Github](https://github.com/${response.username})
                  -[email](${response.email})`,
                  (err) => err ? console.error(err) : console.log('Commit logged!')
            );
      }
      ); 