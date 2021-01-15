const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
  return await db.Barang.findAll();
}

async function getById(id) {
  return await getBarang(id);
}

async function create(params) {
    // validate
    if (await db.Barang.findOne({ where: { nama: params.nama, merk : params.merk } })) {
      throw `Merk atau nama : ${params.merk} | ${params.nama} sudah ada`;
    }

    // save
    await db.Barang.create(params);
}

async function update(id, params) {
    const obj = await getBarang(id);

    // validate
    if (await db.Barang.findOne({ where: { nama: params.nama, merk : params.merk } })) {
        throw `Merk atau nama : ${params.merk} | ${params.nama} sudah ada`;
    }

    // copy params to user and save
    Object.assign(obj, params);
    await obj.save();
}

async function _delete(id) {
    const obj = await getBarang(id);
    await obj.destroy();
}

// helper functions

async function getBarang(id) {
    const obj = await db.Barang.findByPk(id);
    if (!obj) throw 'Barang tidak ada';
    return obj;
}