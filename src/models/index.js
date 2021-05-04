import sequelize from '../config'
import User from './user'

sequelize.define('user',User)

export default sequelize