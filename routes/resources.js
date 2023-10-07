var express = require("express");
var router = express.Router();
const { resourceController } = require("../controller/index");
router.get("/", resourceController.getResources);
router.get("/:id", resourceController.getResourcesById);
router.post("/CreateResources", resourceController.createResources);
router.put("/updateResources/:id", resourceController.updateResources);

router.delete("/deleteResources/:id", resourceController.deleteResources);

module.exports = router;
