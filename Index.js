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
                  choices: ["MIT", "Ceative Common Licesne Family", "Eclipse Public License", "GNU v3.0"]
            },
            {
                  type: 'input',
                  message: "Enter yout github username",
                  name: 'license',
            },
            {
                  type: 'input',
                  message: 'enter your email address',
                  name: 'email',
            }
      ])
      .then((response) => {
            console.log(response);
            let stringResponse = JSON.stringify(response)
            fs.appendFile('log.txt', `${stringResponse}\n`, (err) =>
                  err ? console.error(err) : console.log('Commit logged!')
            );
      }
      );