import { Sequelize } from "sequelize";

const User = {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
}

export default User