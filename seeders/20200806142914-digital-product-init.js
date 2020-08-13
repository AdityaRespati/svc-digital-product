'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Products', [
    {
      "operator": "INDOSAT",
      "nama_produk": "IR100 Indosat Reg 100",
      "kelompok": "Pulsa",
      "denom": 100000,
      "nama_biller": "DAWANG",
      "harga_biller": 96850,
      "harga_duitin": 98500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT",
      "nama_produk": "IR50 Indosat Reg 50",
      "kelompok": "Pulsa",
      "denom": 50000,
      "nama_biller": "DAWANG",
      "harga_biller": 49050,
      "harga_duitin": 49500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT",
      "nama_produk": "IR30 Indosat Reg 30",
      "kelompok": "Pulsa",
      "denom": 30000,
      "nama_biller": "DAWANG",
      "harga_biller": 29700,
      "harga_duitin": 30000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT",
      "nama_produk": "IR25 Indosat Reg 25",
      "kelompok": "Pulsa",
      "denom": 25000,
      "nama_biller": "DAWANG",
      "harga_biller": 25050,
      "harga_duitin": 25200,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT",
      "nama_produk": "IR20 Indosat Reg 20",
      "kelompok": "Pulsa",
      "denom": 20000,
      "nama_biller": "DAWANG",
      "harga_biller": 20100,
      "harga_duitin": 20300,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT",
      "nama_produk": "IR12 Indosat Reg 12",
      "kelompok": "Pulsa",
      "denom": 12000,
      "nama_biller": "DAWANG",
      "harga_biller": 12150,
      "harga_duitin": 12500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT",
      "nama_produk": "IR10 Indosat Reg 10",
      "kelompok": "Pulsa",
      "denom": 10000,
      "nama_biller": "DAWANG",
      "harga_biller": 11000,
      "harga_duitin": 11250,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT",
      "nama_produk": "IR5 Indosat Reg 5",
      "kelompok": "Pulsa",
      "denom": 5000,
      "nama_biller": "DAWANG",
      "harga_biller": 6000,
      "harga_duitin": 6500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT DATA",
      "nama_produk": "IDM5 Data",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 49800,
      "harga_duitin": 59500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT DATA",
      "nama_produk": "IDM4 Data",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 39900,
      "harga_duitin": 45000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT DATA",
      "nama_produk": "IDM3 Data",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 30000,
      "harga_duitin": 35000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT DATA",
      "nama_produk": "IDM2 Data",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 20100,
      "harga_duitin": 24000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT DATA",
      "nama_produk": "IDM1 Data",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 10200,
      "harga_duitin": 12500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT DATA",
      "nama_produk": "IDM500 Data",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 5250,
      "harga_duitin": 9500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT DATA",
      "nama_produk": "IDM100 Data",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 1300,
      "harga_duitin": 3000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT FREEDOM",
      "nama_produk": "IF50 Freedom 50GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 150200,
      "harga_duitin": 151000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT FREEDOM",
      "nama_produk": "IFCL Freedom L",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 90200,
      "harga_duitin": 98000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT FREEDOM",
      "nama_produk": "IFCM Freedom M",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 60200,
      "harga_duitin": 64000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT FREEDOM",
      "nama_produk": "IF8 Freedom 8GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 33700,
      "harga_duitin": 35000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT FREEDOM",
      "nama_produk": "IF4 Freedom 4GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 25200,
      "harga_duitin": 25400,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT UNLIMITED",
      "nama_produk": "ID15 Unlimited 15GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 125200,
      "harga_duitin": 125400,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT UNLIMITED",
      "nama_produk": "ID10 Unlimited 10GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 100200,
      "harga_duitin": 100500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT UNLIMITED",
      "nama_produk": "ID7 Unlimited 7GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 80200,
      "harga_duitin": 80500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT UNLIMITED",
      "nama_produk": "ID3 Unlimited 3GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 60200,
      "harga_duitin": 60500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT UNLIMITED",
      "nama_produk": "ID2 Unlimited 2GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 40200,
      "harga_duitin": 40500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT UNLIMITED",
      "nama_produk": "ID1 Unlimited 1GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 25200,
      "harga_duitin": 25400,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT YELLOW",
      "nama_produk": "IY15 Yellow",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 12700,
      "harga_duitin": 13500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "INDOSAT YELLOW",
      "nama_produk": "IY7 Yellow",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 10200,
      "harga_duitin": 10400,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL",
      "nama_produk": "TB200 TELKOMSEL REG 200",
      "kelompok": "Pulsa",
      "denom": 200000,
      "nama_biller": "DAWANG",
      "harga_biller": 196200,
      "harga_duitin": 200000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL",
      "nama_produk": "TB150 TELKOMSEL REG 150",
      "kelompok": "Pulsa",
      "denom": 150000,
      "nama_biller": "DAWANG",
      "harga_biller": 147200,
      "harga_duitin": 150000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL",
      "nama_produk": "TB100 TELKOMSEL REG 100",
      "kelompok": "Pulsa",
      "denom": 100000,
      "nama_biller": "DAWANG",
      "harga_biller": 97000,
      "harga_duitin": 100000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL",
      "nama_produk": "TB75 TELKOMSEL REG 75",
      "kelompok": "Pulsa",
      "denom": 75000,
      "nama_biller": "DAWANG",
      "harga_biller": 73700,
      "harga_duitin": 75000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL",
      "nama_produk": "TB50 TELKOMSEL REG 50",
      "kelompok": "Pulsa",
      "denom": 50000,
      "nama_biller": "DAWANG",
      "harga_biller": 49300,
      "harga_duitin": 50000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL",
      "nama_produk": "TB40 TELKOMSEL REG 40",
      "kelompok": "Pulsa",
      "denom": 40000,
      "nama_biller": "DAWANG",
      "harga_biller": 39400,
      "harga_duitin": 40000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL",
      "nama_produk": "TB30 TELKOMSEL REG 30",
      "kelompok": "Pulsa",
      "denom": 30000,
      "nama_biller": "DAWANG",
      "harga_biller": 29600,
      "harga_duitin": 30000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL",
      "nama_produk": "TB25 TELKOMSEL REG 25",
      "kelompok": "Pulsa",
      "denom": 25000,
      "nama_biller": "DAWANG",
      "harga_biller": 24775,
      "harga_duitin": 25100,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL",
      "nama_produk": "TB20 TELKOMSEL REG 20",
      "kelompok": "Pulsa",
      "denom": 20000,
      "nama_biller": "DAWANG",
      "harga_biller": 20200,
      "harga_duitin": 20500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL",
      "nama_produk": "TB15 TELKOMSEL REG 15",
      "kelompok": "Pulsa",
      "denom": 15000,
      "nama_biller": "DAWANG",
      "harga_biller": 15100,
      "harga_duitin": 15400,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL",
      "nama_produk": "TB10 TELKOMSEL REG 10",
      "kelompok": "Pulsa",
      "denom": 10000,
      "nama_biller": "DAWANG",
      "harga_biller": 10500,
      "harga_duitin": 10800,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL",
      "nama_produk": "TB5 TELKOMSEL REG 5",
      "kelompok": "Pulsa",
      "denom": 5000,
      "nama_biller": "DAWANG",
      "harga_biller": 6100,
      "harga_duitin": 6300,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL DATA",
      "nama_produk": "S12GB DATA",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 103200,
      "harga_duitin": 103400,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL DATA",
      "nama_produk": "S8GB DATA",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 92300,
      "harga_duitin": 93000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "TELKOMSEL DATA",
      "nama_produk": "S3GB DATA",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 40300,
      "harga_duitin": 57000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "THREE INTERNET",
      "nama_produk": "RAON6",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 36923,
      "harga_duitin": 38000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "THREE INTERNET",
      "nama_produk": "RUL6",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 51810,
      "harga_duitin": 53500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "THREE INTERNET",
      "nama_produk": "RUL10",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 78700,
      "harga_duitin": 80000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "THREE REGULER",
      "nama_produk": "TRI100 TRI 100 Rb",
      "kelompok": "Pulsa",
      "denom": 100000,
      "nama_biller": "DAWANG",
      "harga_biller": 97713,
      "harga_duitin": 100000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "THREE REGULER",
      "nama_produk": "TRI50 TRI 50 Rb",
      "kelompok": "Pulsa",
      "denom": 50000,
      "nama_biller": "DAWANG",
      "harga_biller": 48957,
      "harga_duitin": 50000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "THREE REGULER",
      "nama_produk": "TRI20 TRI 20 Rb",
      "kelompok": "Pulsa",
      "denom": 20000,
      "nama_biller": "DAWANG",
      "harga_biller": 19703,
      "harga_duitin": 20200,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "THREE REGULER",
      "nama_produk": "TRI10 TRI 10 Rb",
      "kelompok": "Pulsa",
      "denom": 10000,
      "nama_biller": "DAWANG",
      "harga_biller": 10341,
      "harga_duitin": 10750,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "THREE REGULER",
      "nama_produk": "TRI5 TRI 5 RB",
      "kelompok": "Pulsa",
      "denom": 5000,
      "nama_biller": "DAWANG",
      "harga_biller": 5466,
      "harga_duitin": 5800,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "THREE REGULER",
      "nama_produk": "TRI2 TRI 2 RB",
      "kelompok": "Pulsa",
      "denom": 2000,
      "nama_biller": "DAWANG",
      "harga_biller": 2346,
      "harga_duitin": 2500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "THREE REGULER",
      "nama_produk": "TRI1 TRI 1 RB",
      "kelompok": "Pulsa",
      "denom": 1000,
      "nama_biller": "DAWANG",
      "harga_biller": 1370,
      "harga_duitin": 1800,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "AXIS REGULER",
      "nama_produk": "AXIS 100 K",
      "kelompok": "Pulsa",
      "denom": 100000,
      "nama_biller": "DAWANG",
      "harga_biller": 98800,
      "harga_duitin": 100000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "AXIS REGULER",
      "nama_produk": "AXIS 50 K",
      "kelompok": "Pulsa",
      "denom": 50000,
      "nama_biller": "DAWANG",
      "harga_biller": 49500,
      "harga_duitin": 50000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "AXIS REGULER",
      "nama_produk": "AXIS 25 K",
      "kelompok": "Pulsa",
      "denom": 25000,
      "nama_biller": "DAWANG",
      "harga_biller": 24900,
      "harga_duitin": 25100,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "AXIS REGULER",
      "nama_produk": "AXIS 10 K",
      "kelompok": "Pulsa",
      "denom": 10000,
      "nama_biller": "DAWANG",
      "harga_biller": 11000,
      "harga_duitin": 11500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "AXIS REGULER",
      "nama_produk": "AXIS 5 K",
      "kelompok": "Pulsa",
      "denom": 5000,
      "nama_biller": "DAWANG",
      "harga_biller": 6050,
      "harga_duitin": 6500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL REGULER",
      "nama_produk": "XL REG 100 Rb",
      "kelompok": "Pulsa",
      "denom": 100000,
      "nama_biller": "DAWANG",
      "harga_biller": 98600,
      "harga_duitin": 100000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL REGULER",
      "nama_produk": "XL REG 50 Rb",
      "kelompok": "Pulsa",
      "denom": 50000,
      "nama_biller": "DAWANG",
      "harga_biller": 49500,
      "harga_duitin": 50000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL REGULER",
      "nama_produk": "XL REG 25 Rb",
      "kelompok": "Pulsa",
      "denom": 25000,
      "nama_biller": "DAWANG",
      "harga_biller": 24900,
      "harga_duitin": 25100,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL REGULER",
      "nama_produk": "XL REG 10 Rb",
      "kelompok": "Pulsa",
      "denom": 10000,
      "nama_biller": "DAWANG",
      "harga_biller": 11000,
      "harga_duitin": 11500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL REGULER",
      "nama_produk": "XL REG 5 Rb",
      "kelompok": "Pulsa",
      "denom": 5000,
      "nama_biller": "DAWANG",
      "harga_biller": 6050,
      "harga_duitin": 6500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "AXIS DATA",
      "nama_produk": "AXIS BRONET 8GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 72100,
      "harga_duitin": 73000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "AXIS DATA",
      "nama_produk": "AXIS BRONET 5GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 52350,
      "harga_duitin": 53000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "AXIS DATA",
      "nama_produk": "AXIS BRONET 3GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 34600,
      "harga_duitin": 35000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "AXIS DATA",
      "nama_produk": "AXIS BRONET 2GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 25750,
      "harga_duitin": 26700,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL DATA",
      "nama_produk": "XL HOTROD 16GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 206100,
      "harga_duitin": 217000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL DATA",
      "nama_produk": "XL HOTROD 12GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 168700,
      "harga_duitin": 177000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL DATA",
      "nama_produk": "XL HOTROD 8GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 121900,
      "harga_duitin": 128000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL DATA",
      "nama_produk": "XL HOTROD 6GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 93800,
      "harga_duitin": 99000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL DATA",
      "nama_produk": "XL HOTROD 3GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 56350,
      "harga_duitin": 59000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL DATA",
      "nama_produk": "XL HOTROD 800MB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 29750,
      "harga_duitin": 30000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL XTRA COMBO",
      "nama_produk": "XTRA COMBO VIP 15GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 125400,
      "harga_duitin": 135000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL XTRA COMBO",
      "nama_produk": "XTRA COMBO VIP 10GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 88000,
      "harga_duitin": 93000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XL XTRA COMBO",
      "nama_produk": "XTRA COMBO VIP 5GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 59800,
      "harga_duitin": 65000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XTRA COMBO  REGULER",
      "nama_produk": "XTRA COMBO 35GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 223850,
      "harga_duitin": 235000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XTRA COMBO  REGULER",
      "nama_produk": "XTRA COMBO 20GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 172100,
      "harga_duitin": 177000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XTRA COMBO  REGULER",
      "nama_produk": "XTRA COMBO 15GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 120950,
      "harga_duitin": 127000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XTRA COMBO  REGULER",
      "nama_produk": "XTRA COMBO 10GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 83550,
      "harga_duitin": 86000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "XTRA COMBO  REGULER",
      "nama_produk": "XTRA COMBO 5GB",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 55450,
      "harga_duitin": 58000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "SMART REGULER",
      "nama_produk": "SMARTFREN 100.000",
      "kelompok": "Pulsa",
      "denom": 100000,
      "nama_biller": "DAWANG",
      "harga_biller": 98350,
      "harga_duitin": 98800,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "SMART REGULER",
      "nama_produk": "SMARTFREN 60.000",
      "kelompok": "Pulsa",
      "denom": 60000,
      "nama_biller": "DAWANG",
      "harga_biller": 59100,
      "harga_duitin": 59700,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "SMART REGULER",
      "nama_produk": "SMARTFREN 50.000",
      "kelompok": "Pulsa",
      "denom": 50000,
      "nama_biller": "DAWANG",
      "harga_biller": 49300,
      "harga_duitin": 49600,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "SMART REGULER",
      "nama_produk": "SMARTFREN 30.000",
      "kelompok": "Pulsa",
      "denom": 30000,
      "nama_biller": "DAWANG",
      "harga_biller": 29700,
      "harga_duitin": 30500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "SMART REGULER",
      "nama_produk": "SMARTFREN 25.000",
      "kelompok": "Pulsa",
      "denom": 25000,
      "nama_biller": "DAWANG",
      "harga_biller": 24950,
      "harga_duitin": 25500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "SMART REGULER",
      "nama_produk": "SMARTFREN 20.000",
      "kelompok": "Pulsa",
      "denom": 20000,
      "nama_biller": "DAWANG",
      "harga_biller": 19950,
      "harga_duitin": 20500,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "SMART REGULER",
      "nama_produk": "SMARTFREN 10.000",
      "kelompok": "Pulsa",
      "denom": 10000,
      "nama_biller": "DAWANG",
      "harga_biller": 10300,
      "harga_duitin": 10700,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "SMART REGULER",
      "nama_produk": "SMARTFREN 5.000",
      "kelompok": "Pulsa",
      "denom": 5000,
      "nama_biller": "DAWANG",
      "harga_biller": 5300,
      "harga_duitin": 5700,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "SMARTFREN INTERNET",
      "nama_produk": "SMART KUOTA 120GB (40GB 2",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 175800,
      "harga_duitin": 190000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "SMARTFREN INTERNET",
      "nama_produk": "SMART KUOTA 90GB (30GB 24",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 132000,
      "harga_duitin": 145000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "SMARTFREN INTERNET",
      "nama_produk": "SMART KUOTA 60GB (20GB 24",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 90500,
      "harga_duitin": 95000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "SMARTFREN INTERNET",
      "nama_produk": "SMART KUOTA 30GB (10GB 24",
      "kelompok": "Paket Data",
      "denom": 0,
      "nama_biller": "DAWANG",
      "harga_biller": 54000,
      "harga_duitin": 59000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "PLN TOKEN",
      "nama_produk": "PLN PRABAYAR ADMIN1600",
      "kelompok": "KWH",
      "denom": 200000,
      "nama_biller": "DAWANG",
      "harga_biller": 200225,
      "harga_duitin": 201000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "PLN TOKEN",
      "nama_produk": "PLN PRABAYAR ADMIN1600",
      "kelompok": "KWH",
      "denom": 100000,
      "nama_biller": "DAWANG",
      "harga_biller": 100225,
      "harga_duitin": 101000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "PLN TOKEN",
      "nama_produk": "PLN PRABAYAR ADMIN1600",
      "kelompok": "KWH",
      "denom": 50000,
      "nama_biller": "DAWANG",
      "harga_biller": 50225,
      "harga_duitin": 51000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    },
    {
      "operator": "PLN TOKEN",
      "nama_produk": "PLN PRABAYAR ADMIN1600",
      "kelompok": "KWH",
      "denom": 20000,
      "nama_biller": "DAWANG",
      "harga_biller": 20225,
      "harga_duitin": 21000,
      "createdAt": new Date(),
      "updatedAt": new Date()
    }
   ],{})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products',null,{})
  }
};
