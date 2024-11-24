var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var db = require('../models'); // Adjust the path as necessary

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashedPassword = await handleUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender === '1' ? true : false,
        roleId: data.roleId,
        phoneNumber: data.phoneNumber,
      });
      resolve('Create new user success');
    } catch (error) {
      reject(error);
    }
  });
};

let handleUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hash = await bcrypt.hashSync(password, salt);
      resolve(hash);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
};
