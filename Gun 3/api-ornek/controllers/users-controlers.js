const users = require("../data/users.json")

getAllUsers = () => {
    return users;
}

module.exports = {getAllUsers}