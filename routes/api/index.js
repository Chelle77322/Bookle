const router = require("express").Router();
const novelRoutes = require("./novel");

//This gets the novel route
router.use("/novels", novelRoutes);
module.exports = router;
