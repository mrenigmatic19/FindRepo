const express=require('express')
const {postResult, getResult}=require('../controller/resultController')
const router = express.Router()

router.post('/',postResult)
router.get('/', getResult);

module.exports=router
