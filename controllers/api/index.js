const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const reviewRoutes = require('./reviewRoutes')

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/review', reviewRoutes);


module.exports = router;
