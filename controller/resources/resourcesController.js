const resourceService = require("../../service/resourceService");
const Joi = require("joi");

const resourceSchema = Joi.object().keys({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
});
module.exports = {
  getResources: (req, res) => {
    const data = resourceService.getResources();
    res.send(data);
  },
  getResourcesById: (req, res) => {
    const id = req.params.id;
    const data = resourceService.getResourcesById(id);
    if (data.error) {
      res.status(404).send(data);
    } else {
      res.send(data);
    }
  },
  updateResources: (req, res) => {
    const id = req.params.id;
    const data = resourceService.updateResources(id, req.body);
    if (data.error) {
      res.status(404).send(data);
    } else {
      res.send(data);
    }
  },
  deleteResources: (req, res) => {
    const id = req.params.id;
    const data = resourceService.deleteResources(id);
    if (data.error) {
      res.status(404).send(data);
    } else {
      res.send(data);
    }
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
