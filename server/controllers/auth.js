const User = require('../models/user')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const vm = require('../vm/authVM');
const user = require('../models/user')


module.exports = {
    login: async(req, res) => {
        try{
            const {email, password} = req.body
            const user = await User.findOne({email})

            if(!user){
                return res.status(400).send(vm.error('User not found'))
            }

            const isMatchPasswords = await bcrypt.compare(password, user.password)

            if(!isMatchPasswords){
                return res.status(400).send(vm.error('Wrong password'))
            }
            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )  
            
            return res.send(vm.login({token, msg: 'You have been logged in!'}))
            
        }catch{
            return res.status(500).send(vm.error('Something went wrong'))
        }
    },

    register: async(req,res) => {
        try{
            const {email, password} = req.body
            
            const isUserExists = await User.findOne({email})

            if(isUserExists){
                return res.status(400).send(vm.error('User already exists'))
            }

            const hashedPassword = await bcrypt.hash(password, 12)

            const user = new User({email, password: hashedPassword})

            await user.save();

            return res.status(201).send(vm.register('User created'))
            
        }catch{
            return res.status(500).send(vm.error('Something went wrong'))
        }
    }
}
