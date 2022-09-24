const fs = require("fs");

const generatePage = require("./src/page-template.js");

const profileDataArgs = process.argv.slice(2);

const [userName, github] = profileDataArgs;
// console.log(profileDataArgs);
const pageHTML = generatePage(userName, github);
// const printProfileData = (profileDataArr) => {
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

fs.writeFile("./index.html", pageHTML, (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete! Checkout index.html to see the output!");
});
