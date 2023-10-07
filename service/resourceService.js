const Resources = [
  { id: 1, name: "Hat", quantity: "10" },
  { id: 2, name: "scarfs", quantity: "20" },
  { id: 3, name: "shirts", quantity: "20" },
  { id: 3, name: "pants", quantity: "35" },
  { id: 3, name: "shoes", quantity: "15" },
];
module.exports = {
  getResources: (data) => {
    return Resources;
  },
  getResourcesById: (data) => {
    const id = parseInt(req.params.id);
    const resource = Resources.find((resource) => resource.id === id);
    if (!resource) {
      res.status(404).json({ error: "Resource not found" });
    } else {
      return resource;
    }
  },
  createResources: (data) => {
    const resource = {
      id: Resources.length + 1, //increase the lenght and add the id next to lenght
      name: data.name,
      quantity: data.quantity,
    };
    Resources.push(resource);
    return resource;
  },
  updateResources: (data) => {
    const resource = Resources.find((c) => c.id === parseInt(data.id)); //find() return all boolean values
    if (!resource) {
      return "The Resource with the given ID was not found."; //404
    } else {
      resource.name = data.name;
      resource.quantity = data.quantity;
      return resource;
    }
  },
  deleteResources: (data) => {
    const resource = Resources.find((c) => c.id === parseInt(data.id));
    if (!resource) {
      return "The Resource with the given ID was not found."; //404
    } else {
      const index = Resources.indexOf(resource);
      Resources.splice(index, 1); //array me se remove krny k liye splice()
      return resource;
    }
  },
};
