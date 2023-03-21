

const express = require('express');
const router = express.Router()
const UserController = require('../controllers/UserController');
const { authentication, authorizationCabang, authorizationPusat } = require('../middlewares/auth');


router.get('/download', UserController.downloadReport)
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.use(authentication)
router.post('/addVehicle', UserController.addVehicle);
router.get('/getVehicle', UserController.getVehicle);
router.get('/detailVehicle/:id', UserController.detailVehicle);
router.put('/editVehicle/:id', UserController.editVehicle);
router.delete('/deleteVehicle/:id', UserController.deleteVehicle);
//admin
router.post('/addRent', UserController.addRent);


//pihakMenyetujuiCabang
router.get('/getRentKantorCabang',authorizationCabang, UserController.requestRentKantorCabang);
router.patch('/acceptRequestKantorCabang/:id',authorizationCabang, UserController.acceptRequestKantorCabang);

//pihakMenyetujuiPusat
router.get('/getRentKantorPusat',authorizationPusat, UserController.requestRentKantorPusat);
router.patch('/acceptRequestKantorPusat/:id', authorizationPusat ,UserController.acceptRequestKantorPusat);

//reject
router.patch('/rejectRequest/:id', UserController.rejectRequest);

//history
router.get('/history', UserController.rentHistory);





module.exports=router;
