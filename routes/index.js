const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//Specifies the api routes used
router.use("/api", apiRoutes);

//If you don't get to any API routes send the default REACT App opening page instead
router.use(function(request, result){
    result.sendFile(path.join(__dirname, "/goobooks/build/index.html"));
});
module.exports = router;