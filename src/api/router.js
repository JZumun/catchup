var router = require('express').Router();

router.all('/user', require("./routes/user"));
router.all("/game", require("./routes/game"));

module.exports = router;
