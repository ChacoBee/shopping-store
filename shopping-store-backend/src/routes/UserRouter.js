const express = require("express");
const router = express.Router()
const userController = require('../controller/UserController');
const { authMiddleWare, authUserMiddleWare } = require("../middleware/authMiddleWare");

router.post('/sign-up', userController.createUser)
router.post('/sign-in', userController.loginUser)
router.put('/update-user/:id', authMiddleWare, userController.updateUser)
router.delete('/delete-user/:id',authMiddleWare, userController.deleteUser)
router.get('/getAll',authMiddleWare, userController.getAllUser)
router.get('/get-details/:id',authUserMiddleWare, authMiddleWare, userController.getDetailsUser)
router.post('/refresh-token', userController.refreshToken)


module.exports = router