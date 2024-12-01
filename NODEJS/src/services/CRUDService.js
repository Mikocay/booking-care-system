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

let getAllUsers = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

let getUserInfoById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });
      if (data) {
        resolve(data);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
};

let updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.update(
        {
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
        },
        {
          where: { id: data.id },
        }
      );
      resolve('Update user data success');
    } catch (error) {
      reject(error);
    }
  });
};

let deleteUserById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.destroy({
        where: { id: userId },
      });
      resolve('Delete user success');
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
  getAllUsers: getAllUsers,
  getUserInfoById: getUserInfoById,
  updateUserData: updateUserData,
  deleteUserById: deleteUserById,
};
