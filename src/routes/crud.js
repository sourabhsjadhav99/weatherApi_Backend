let express = require("express")

const City = require("../connectionAndSchema/citySchema");
const router = express.Router();
router.use(express.json());


router.post("/", async (req, res) => {
  try {
    let data = await City.create(req.body);
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    let data = await City.find();
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.get("/:city", async (req, res) => {
  try {
    let data = await City.find({ city: req.params.city });
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});





router.delete("/:city", async (req, res) => {
  try {
    let data = await City.deleteOne({ city: req.params.city });
    res.send(data);
  } catch (e) {
    res.status(404).json({
      status: "Failed",
      message: e.message,
    });
  }
});

module.exports = router;