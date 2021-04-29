// # User Factory!

// Look inside start.js - you will find a large array of data.This data describes users.Your job, should you choose to accept it, is to create a function (or functions) that covert this kind of data to user objects!

// Each user should contain the following properties; `id`, `fullName`, `initials`, `birthYear` and`departments`.The`department` property should contain an array of strings.If some of the information is not available, its corresponding property should have the value "Unknown".

// We need each user object to be stored in an array of users objects.Once you have ran your function (or functions), log the resulting array into your workstation terminal where a highly trained monkey will examine it for further processing.Perhaps even the very same monkey writing out these instructions.

// * bonus * We also need another, more different, function that gives us a list of all the departments found in the data dump, in alphabetical order.


// - 🐒

const userDataDump = [
  "1,Joel Peltonen,1921,Users|Admin|Sudo",
  "2,Joeltest Peltonentest,1921,Users",
  "3,Joeltest Peltonentest,,Users",
  "4,Leoj Nenotlep,,Users|Admin",
  "5,root,,Sudo|System",
  "6,Ryukahr,1901,Users|Admin",
  "7,Adamantium Claws,1332,Users",
  "8,The benevolent malevolence,,Users",
  "9,Jim Carrey,1961,Users|Admin",
  "A,Bela Lugosi,1666,Users",
  "B,Robert Smith,,Users|Admin|Sudo",
  "C,Fsh,,Users",
  "D,Racher Carson,,Users",
  "D,Cheesedude51,1951,Users",
  "E,cron,,System",
];

// const userObject = str => {
//   const data = str.split(",");
//   console.log(data);
//   for (let i = 0; i < data.length; i++) {
//     if (!data[i]) {
//       data[i] = "unknown";
//     }
//     if (i === data.length - 1) {
//       const roles = data[data.length - 1].split("|");
//       data[data.length - 1] = roles;
//     }

//   }
//   return {
//     id: data[0],
//     fullName: data[1],
//     birthday: data[2],
//     department: data[3],

//   };

// };

// const userFactory = arr => {
//   const user = [];
//   for (let i = 0; i < 2; i++) {
//     user.push(userObject(arr[i]));
//   }
//   return user;
// };
// console.log(userFactory(userDataDump));
// ===================================================================================


// The exercise joel solved

function getInitialsFromFullName(fullName) {
  const partsOfNameArray = fullName.split(" ");
  let initials = "";

  for (let i = 0; i < partsOfNameArray.length; i++) {
    const partOfName = partsOfNameArray[i];
    initials = initials + partOfName[0];
  }

  return initials;
}

function getDepartmentsFromData(departmentsString) {
  return departmentsString.split("|");
}

function convertUserCSVsToObjectsArray(data) {
  const arrayOfUsers = [];


  for (let i = 0; i < data.length; i++) {
    //i is the index number of the data..
    const userDataString = data[i];      //B,Robert smith ,users|admin\sudo===========================
    const userDataArray = userDataString.split(",");    // for example [ 'D', 'Cheesedude51', '1951', 'Users' ]


    const id = userDataArray[0];
    const fullName = userDataArray[1];
    const initials = getInitialsFromFullName(fullName);
    const birthYear = userDataArray[2] ? userDataArray[2] : "Unknown";
    const department = getDepartmentsFromData(userDataArray[3]);

    const userObject = { id, fullName, initials, birthYear, department };
    arrayOfUsers.push(userObject);
  }
  return arrayOfUsers;
}
const result = convertUserCSVsToObjectsArray(userDataDump);
console.log(result);




















// userObject = {
//   id: userDataDump[0].split(',')[0],
//   fullName: '',
//   initial: '',
//   dateOfBirth: '',
//   department: '',
// }
// console.log(userDataDump[0].split(','))

// console.log('userObject', userObject);




// userObject = {
//   id: userDataDump[1].split(',')[1],
//   fullName: '',
//   initial: '',
//   dateOfBirth: '',
//   department: '',
// }
// console.log(userDataDump[0].split(','))

// console.log('userObject', userObject);

























/* for (let i = 0; i < userDataDump.length; i++) {
  const element = userDataDump[i];

  for (let j = 0; j < element.length; j++) {
    const res = element[j];
    console.log(res);


    let myObject = {
      id: "name",
      fullName: "Totakhail khushal",
      age: 35,
    }
  }

}


const data = {
  name: "joel",
  fName: "Peltonen",
  dateOfBirth: 1921,
  user: "admin",
};

console.log(data); */








