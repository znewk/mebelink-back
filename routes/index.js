const {Router} = require('express')
const router = Router()

const controller = require('../controller')

router.post('/createNewApplication', controller.createNewApplication)
router.post('/createNewApplicationToConsultation', controller.createNewApplicationToConsultation)

module.exports = router;