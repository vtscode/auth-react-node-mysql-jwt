const db = require('_helpers/db');
const { Op } = require("sequelize");

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll(req) {
  // searching query for nama atau merk barang
  if(req.query.search){
    const data = await db.Barang.findAll({where : {
      [Op.or]: [
        {
          nama: {
            [Op.like]: `%${req.query.search}%`
          }
        },
        {
          merk: {
            [Op.like]: `%${req.query.search}%`
          }
        }
      ]
    } })
    return data;
  }
  return await db.Barang.findAll();
}

async function getById(id) {
  return await getBarang(id);
}
async function create(params) {
    // validate
    if (await db.Barang.findOne({ where: { nama: params.nama, merk : params.merk } })) {
      return {data : `Merk atau nama : ${params.merk} | ${params.nama} sudah ada`};
    }

    // save
    await db.Barang.create(params);
    return {data : 'Created successfully'};
}

async function update(id, params) {
    const obj = await getBarang(id);
    // copy params to user and save
    Object.assign(obj, params);
    await obj.save();
    return {data : 'Updated successfully'};
}

async function _delete(id) {
    const obj = await getBarang(id);
    await obj.destroy();
    return {data : 'Deleted successfully'};
}

// helper functions

async function getBarang(id) {
    const obj = await db.Barang.findByPk(id);
    if (!obj) return {data : 'Barang tidak ada'};
    return obj;
}