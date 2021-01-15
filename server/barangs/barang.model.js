const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        nama: { type: DataTypes.STRING, allowNull: true },
        merk: { type: DataTypes.STRING, allowNull: true },
        keterangan: { type: DataTypes.TEXT, allowNull: true }
    };

    const options = {};

    return sequelize.define('Barang', attributes, options);
}