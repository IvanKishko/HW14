// TASK 1
const names = [
  { name: "Ivan", age: 25 },
  { name: "Vasyl", age: 30 },
  { name: "Mykola", age: 35 },
  { name: "Stepan", age: 35 },
];

const userNames = names.map((names) => names.name);
console.log(userNames);

// TASK 2
const users = [
  { name: "Ivan", eyeColor: "blue" },
  { name: "Vasyl", eyeColor: "brown" },
  { name: "Mykola", eyeColor: "green" },
  { name: "Stepan", eyeColor: "blue" },
];

function getUsersByEyeColor(users, eyeColor) {
  return users.filter((user) => user.eyeColor === eyeColor);
}

const blueEyedUsers = getUsersByEyeColor(users, "blue");
console.log(blueEyedUsers);

// TASK 3
const usersByGender = [
  { name: "Ivan", gender: "Male" },
  { name: "Vasyl", gender: "Male" },
  { name: "Maria", gender: "Female" },
  { name: "Yulia", gender: "Female" },
];

function getNamesByGender(users, targetGender) {
  return users
    .filter((user) => user.gender === targetGender)
    .map((user) => user.name);
}

const femaleUsers = getNamesByGender(usersByGender, "Female");
const maleUsers = getNamesByGender(usersByGender, "Male");

console.log(femaleUsers);
console.log(maleUsers);

// TASK 4
const activeUsers = [
  { name: "Ivan", isActive: true },
  { name: "Vasyl", isActive: false },
  { name: "Mykola", isActive: true },
  { name: "Stpan", isActive: false },
];

const inactiveUsers = activeUsers.filter(
  (activeUsers) => !activeUsers.isActive
);
console.log(inactiveUsers);

// TASK 5
const userEmails = [
  { name: "Ivan", email: "testemail@gmail.com" },
  { name: "Vasyl", email: "myemail@gmail.com" },
  { name: "Mykola", email: "mykola@gmail.com" },
  { name: "Stepan", email: "stepan@gmail.com" },
];

// TASK 6
const usersAge = [
  { name: "Ivan", age: 25 },
  { name: "Vasyl", age: 17 },
  { name: "Mykola", age: 32 },
  { name: "Stepan", age: 42 },
];

function getUsersInAgeRange(users, min, max) {
  return users.filter((user) => user.age >= min && user.age <= max);
}

const minAge = 20;
const maxAge = 35;

const usersInRange = getUsersInAgeRange(usersAge, minAge, maxAge);
console.log(usersInRange);
