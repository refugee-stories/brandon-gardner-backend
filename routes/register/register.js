const bcrypt = require("bcryptjs");

const db = require("../../data/config");

module.exports = {
  addUser
};

async function addUser(user) {
  user.password = bcrypt.hashSync(user.password, 8);
  const id = await db("accounts").insert(user).returning("id");
  return id[0]
}
