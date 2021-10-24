const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  null,
  null,
  {
    dialect: 'mysql',
    operatorsAliases: Sequelize.Op,
    logging: false,
    replication: {
      read: [
        {
          host: process.env.DB_HOST_READ,
          port: process.env.DB_PORT_READ,
          username: process.env.DB_USER_READ,
          password: process.env.DB_PASS_READ,
        },
      ],
      write: {
        host: process.env.DB_HOST_WRITE,
        port: process.env.DB_PORT_WRITE,
        username: process.env.DB_USER_WRITE,
        password: process.env.DB_PASS_WRITE,
      },
    },
  },
);

module.exports = sequelize;
