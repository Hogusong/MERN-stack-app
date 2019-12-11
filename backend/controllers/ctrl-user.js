const uuid = require("uuid/v4");
const { validationResult } = require('express-validator');

const USERS = require("../dummy-data/users");
const HttpError = require("../models/http-error");

let usersData = [...USERS];

const login = (req, res, next) => {
  const { email, password } = req.body;
  const user = usersData.find(u => u.email === email);
  if (!user) throw new HttpError(401, "Email is not found.");
  else if (user.password != password) {
    throw new HttpError(401, "Could not identify user, credentials seem to be wrong.");
  } else {
    res.status(200).json(user);
  }
};

const signup = (req, res, next) => {
  const errors = validationResult(req).errors;
  if (errors.length > 0) {
    throw new HttpError(422, `Invalid inputs passed, please check ${errors[0].param}.`);
  }

  const { name, email, password } = req.body;
  if (usersData.find(u => u.email === email)) {
    throw new HttpError(422, "This email is already registered. Try another.");
  }
  const user = {
    id: uuid(),
    name,
    email,
    password,
    image: '',
    places: 0
  };
  usersData.push(user);
  res.status(201).json(user);
};

const getUsers = (req, res, next) => {
  if (usersData.length > 0) res.status(200).json(usersData);
  else throw new HttpError(404, "No user is founded...");
};

const updateUser = (req, res, next) => {
  const errors = validationResult(req).errors;
  if (errors.length > 0) {
    throw new HttpError(422, `Invalid inputs passed, please check ${errors[0].param}.`);
  }

  const { id, name, email, password } = req.body;
  let index = usersData.findIndex(u => u.email === email);
  if (index >= 0 && usersData[index].id != id) {
    throw new HttpError(404, "New email is already registered. Try another.");
  }
  index = usersData.findIndex(u => u.id === id);
  if (index < 0) throw new HttpError(404, `Can't find name: ${name}`);
  const user = { id, name, email, password };
  user.places = usersData[index].places;
  user.image = usersData[index].image;
  usersData[index] = user;
  res.status(200).json(user);
};

const deleteUser = (req, res, next) => {
  const userId = req.params.id;
  console.log(userId)
  const index = usersData.findIndex(u => u.id === userId);
  if (index < 0) {
    throw new HttpError(404, `Can't find user id: ${id}. Try again...`);
  }
  usersData.splice(index, 1);
  res.status(200).json(usersData);
};

module.exports = { login, signup, getUsers, updateUser, deleteUser };
