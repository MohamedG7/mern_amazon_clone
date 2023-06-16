const createOne = (Model) => async (values) => {
  const data = new Model(values);
  return await data.save();
};
    
const findAll = (Model) => () => {
  return Model.find({});
};

const findById = (Model) => async (id) => {
  return await Model.findById(id);
};

const findOne = (Model) => async (one) => {
  return await Model.findOne({ one });
};

const updateById = (Model) => async (id, updates, val) => {
  const updatedModel = await Model.findByIdAndUpdate(
    id,
    {
      $set: updates
    },
    { new: true }
  );
  const response = {
    res: `${val} with id ${id} has been updated`,
    updatedModel
  };
  return response;
};

const deleteById = (Model) => async (id, val) => {
  await Model.findByIdAndDelete(id);
  return `${val} with id ${id} has been deleted`;
};
    
const ModelServices = (Model) => {
  return {
    createOne: createOne(Model),
    findAll: findAll(Model),
    findById: findById(Model),
    findOne: findOne(Model),
    updateById: updateById(Model),
    deleteById: deleteById(Model)
  }
}

module.exports = {
  ModelServices
};
