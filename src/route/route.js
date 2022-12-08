let express= require('express')
let router=express.Router()
let {getData}=require('../../controller/getData')


router.get('/assets',getData)

module.exports=router