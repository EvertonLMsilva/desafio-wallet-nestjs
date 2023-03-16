import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';

export const SequelizeAdapter = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize(
                {
                    dialect: process.env.DATABASE_DIALECT as Dialect,
                    host: process.env.DATABASE_HOST,
                    port: parseInt(process.env.DATABASE_PORT),
                    username: process.env.DATABASE_USER,
                    password: process.env.DATABASE_PASSWORD,
                    database: process.env.DATABASE_NAME,
                });
            sequelize.addModels([]);
            await sequelize.sync();
            return sequelize;
        },
    },
];