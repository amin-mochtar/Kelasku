const router = require('express').Router();;
const professor = require('../controllers/professor');


// COURSES
router.post("/course", professor.createCourse);

router.get('/course/:id_c', professor.readCourse);

router.put('/course/:id_c', professor.updateCourse);

router.delete('/course/:id_c', professor.deleteCourse);

router.post('/my-courses', professor.getCourses);

// ASSIGNMENTS
router.post('/assignment/:id_c', professor.createAssignment);

router.get('/course-assignments/:id_c', professor.getAssginments);

// DELIVERIES
router.get('/deliveries/:id_a', professor.getDeliveries);

module.exports = router;
