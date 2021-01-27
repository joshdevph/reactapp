const express = require('express')
const route = express.Router()
const CategorySchema = require('../models/Category')
const authAdmin = require('../middleware/auth_admin')
const auth = require('../middleware/auth')


route.get('/cat-list', async (req, res) => {
    try {
        const category = await CategorySchema.find()
        res.json(category)
    } catch (error) {
        return res.status(500).json({message:"Server Error"})
    }
})

route.post('/create-cat', auth, authAdmin, async (req, res) => {
    try {
        const { name } = req.body
        const category = await CategorySchema.findOne({name})
        if(category) return res.status(400).json({message : "Category is already saved"})
         const newCategory = new CategorySchema({name})

        await newCategory.save()
        res.json({message : "New Category successfully added!"})

    } catch (error) {
        return res.status(500).json({message:"Server Error"})
    }
})

route.delete('/delete-cat/:id', async (req, res) => {
    try {
        const category = await CategorySchema.findByIdAndDelete(req.params.id)
        res.json({message : "Deleted Successfully"})
    } catch (error) {
        return res.status(500).json({message:"Server Error"})
    }
})

route.put('/update-cat/:id', async (req, res) => {
    try {
        const { name } = req.body
        const category = await CategorySchema.findByIdAndUpdate({_id:req.params.id}, {name})
        res.json({message : "Updated Successfully"})
    } catch (error) {
        return res.status(500).json({message:"Server Error"})
    }
})
module.exports = route