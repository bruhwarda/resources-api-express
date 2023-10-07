const resourceService = require("../../service/resourceService");
const Joi = require("joi");

const resourceSchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().required(),
});
module.exports = {
  getResources: (req, res) => {
    const data = resourceService.getResources(req.body);
    res.send(data);
  },
  getResourcesById: (req, res) => {
    const data = resourceService.getResourcesById(req.body);
    res.send(data);
  },
  updateResources: (req, res) => {
    const data = resourceService.updateResources(req.body);
    res.send(data);
  },
  deleteResources: (req, res) => {
    const data = resourceService.deleteResources(req.body);
    res.send(data);
  },
  createResources: (req, res) => {
    try {
      const validate = resourceSchema.validate(req.body);
      if (validate.error) {
        res.status(400).send(validate.error);
      }
      const data = resourceService.createResources(req.body);
      res.send(data);
    } catch {
      res.status(500).send("Something went wrong");
    }
  },
};
