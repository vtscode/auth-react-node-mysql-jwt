const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password },res) {
  const user = await db.User.scope('withHash').findOne({ where: { username } });
  
  if(!user) {
    res.status(404).json({ error: 'User Not found' })
  }

  if (!(await bcrypt.compare(password, user.password))) {
    res.status(400).json({ error: 'Password is incorrect' })
  }

  // authentication successful
  const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
  return { ...omitHash(user.get()), token };
}

async function getAll() {
    return await db.User.findAll();
}

async function getById(id,res) {
    return await getUser(id,res);
}

async function create(params,res) {
  // validate
  if (await db.User.findOne({ where: { username: params.username } })) {
    res.status(400).json({ error: `Username : ${params.username} is already taken` })
  }

  // hash password
  if (params.password) {
      params.password = await bcrypt.hash(params.password, 10);
  }

  // save user
  await db.User.create(params);
}

async function update(id, params,res) {
  const user = await getUser(id);

  // validate
  const usernameChanged = params.username && user.username !== params.username;
  if (usernameChanged && await db.User.findOne({ where: { username: params.username } })) {
    res.status(400).json({ error: `Username : ${params.username} is already taken` })
  }

  // hash password if it was entered
  if (params.password) {
      params.password = await bcrypt.hash(params.password, 10);
  }

  // copy params to user and save
  Object.assign(user, params);
  await user.save();

  return omitHash(user.get());
}

async function _delete(id,res) {
  const user = await getUser(id,res);
  await user.destroy();
}

// helper functions

async function getUser(id,res) {
  const user = await db.User.findByPk(id);
  if (!user) {
    res.status(404).json({ error: 'User Not found' })
  }
  return user;
}

function omitHash(user) {
  const { password, ...userWithoutHash } = user;
  return userWithoutHash;
}