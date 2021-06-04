const router = require ("express").Router();
const novelControl = require( "../../controllers/novelControl");
//Gets and matches all books
router.route("/").get(novelControl.findAll)
//**THIS MAY BE CAUSING ISSUES */

//post(novelControl.create);

//Gets and matches books based on id
router.route("/:id").post(novelControl.create)
//**ALSO ISSUES */
//.get(novelControl.findById).put(novelControl.update).delete(novelControl.remove);

module.exports = router;