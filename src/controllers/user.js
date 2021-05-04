import sequelize from '../models'
const findAll = async (req,res) =>{
    const users = await sequelize.models.user.findAll()
    res.json(users)
}
const findById = async (req,res) =>{
    const user = await sequelize.models.user.findOne({
        where:{
            id: req.params.id
        }
    })
    res.json(user)
}
const create = async (req,res) =>{
    const user = await sequelize.models.user.create(req.body)
    res.json(user)
}
const findByIdAndUpdate = async (req,res) =>{
    const user = await sequelize.models.user.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    res.json(user)
}
const findByIdAndDelete = async (req,res) =>{
    const users = await sequelize.models.user.destroy({
        where:{
            id: req.params.id
        }
    })
    res.json(users)
}

export default {
    findAll,
    findById,
    create,
    findByIdAndUpdate,
    findByIdAndDelete
}