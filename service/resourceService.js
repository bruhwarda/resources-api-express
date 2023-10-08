const Resources = [
  { id: 1, name: "Hat", quantity: "10" },
  { id: 2, name: "scarfs", quantity: "20" },
  { id: 3, name: "shirts", quantity: "20" },
  { id: 4, name: "pants", quantity: "35" },
  { id: 5, name: "shoes", quantity: "15" },
];
module.exports = {
  getResources: () => {
    return Resources;
  },
  getResourcesById: (id) => {
    id = parseInt(id);
    const resource = Resources.find((resource) => resource.id === id);
    if (!resource) {
      return { error: "Resource not found" };
    } else {
      return resource;
    }
  },
  createResources: (data) => {
    const resource = {
      id: Resources.length + 1,
      name: data.name,
      quantity: data.quantity,
    };
    Resources.push(resource);
    return resource;
  },
  updateResources: (id, data) => {
    id = parseInt(id);
    const resourceIndex = Resources.findIndex((c) => c.id === id);
    if (resourceIndex === -1) {
      return { error: "Resource not found" };
    } else {
      Resources[resourceIndex].name = data.name;
      Resources[resourceIndex].quantity = data.quantity;
      return Resources[resourceIndex]; // Return the updated resource
    }
  },
  deleteResources: (id) => {
    id = parseInt(id);
    const resource = Resources.find((c) => c.id === id);
    if (!resource) {
      return { error: "Resource not found" };
    } else {
      const index = Resources.indexOf(resource);
      Resources.splice(index, 1);
      return resource;
    }
  },
};
