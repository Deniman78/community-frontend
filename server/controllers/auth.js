const User = require('../models/user')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const user = require('../models/user')


module.exports = {
    login: async(req, res) => {
        try{
            const {email, password} = req.body
            
            const isUserExists = await User.findOne({email})

            if(!isUserExists){
                return res.status(400).json({message: 'User not found'})
            }

            const isMatchPasswords = await bcrypt.compare(password, user.password)

            if(!isMatchPasswords){
                res.status(400).json({message: 'Wrong password'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )  
            
            res.json({token})
            
        }catch{
            return res.status(500).json({message: 'Something went wrong'})
        }
    },

    register: async(req,res) => {
        try{
            const {email, password} = req.body

            const isUserExists = await User.findOne({email})

            if(isUserExists){
                return res.status(400).json({message: 'User already exists'})
            }

            const hashedPassword = await bcrypt.hash(password, 12)

            const user = new User({email, password: hashedPassword})

            await user.save();

            res.status(201).json({message: 'User created'})
            
        }catch{
            return res.status(500).json({message: 'Something went wrong'})
        }
    }
}
