var router = require('express').Router();

router.post("/login", (req, res, next) => {
	
});

router.post("/logout", (req, res, next) => {

})

router.get("*",(req, res) => {
  res.status(403).end("Unauthorized");
})

module.exports = router;
