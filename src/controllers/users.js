// import users data
const users = require("../data/users.json");

// get all user
getAllUsers = () => {
  return users;
};

// get a specific user
getUserById = (userId) => {
  return users.filter((x) => x.id == userId); // filters
};

// export methods
module.exports = {
  getAllUsers,
  getUserById,
};
