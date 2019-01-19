const express = require("express");
const router = express.Router();
const handlers = require("../handlers/api")

router.get("/ping", (req, res) => {
    res.send("Pong!");
});

router.post("/judging", handlers.evaluateEntry);
router.post("/update-entries", handlers.updateEntries);
router.post("/whitelistUser", handlers.whitelistUser);
router.post("/removeWhitelistedUser", handlers.removeWhitelistedUser);
router.post("/editUser", handlers.editUser);

module.exports = router;
