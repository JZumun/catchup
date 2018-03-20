var router = require('express').Router();

router.all("*",(req, res) => {
  res.status(403).end("Unauthorized");
})

module.exports = router;
