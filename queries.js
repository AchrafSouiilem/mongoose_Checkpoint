const Person = require("./personModel");

let person = new Person({
  name: "achraf",
  age: 26,
  favoriteFoods: ["healthy Food", "spicy Food"],
});

const createAndSavePerson = async () => {
  try {
    await person.save();
  } catch (error) {
    console.log(error);
  }
};

const ArrayOfPepole = [
  {
    name: "Ahmed",
    age: 26,
    favoriteFoods: ["healthy Food", "Spicy Food"],
  },
  {
    name: "Mahmoud",
    age: 20,
    favoriteFoods: ["healthy Food", "Spicy Food"],
  },
  {
    name: "Achraf",
    age: 23,
    favoriteFoods: ["healthy Food", "Spicy Food"],
  },
];

const CreateManyPeople = async () => {
  try {
    await Person.create(ArrayOfPepole);
  } catch (error) {
    console.log(error);
  }
};

const SearchByName = async (name) => {
  try {
    const data = await Person.find({ name: `${name}` });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const SearchByFood = async (food) => {
  try {
    const data = await Person.findOne({ favoriteFoods: `${food}` });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const SearchByID = async (id) => {
  try {
    const data = await Person.findById(`${id}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const ClassicUpdate = async (id) => {
  try {
    const data = await Person.findById(`${id}`);
    data.favoriteFoods.push("Hamburger");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const FindAndUpdateAge = async (personName) => {
  try {
    const data = await Person.findOneAndUpdate(
      { name: `${personName}` },
      { age: 20 },
      { new: true }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const SearchByIDAndRemove = async (id) => {
  try {
    await Person.findByIdAndRemove(`${id}`);
    console.log("Person Removed");
  } catch (error) {
    console.log(error);
  }
};

const DeleteManyPeople = async(name) => {
  try {
    await Person.deleteMany({name: `${name}`})
    console.log("People Deleted")
  } catch (error) {
    console.log(error)
  }
};

const ChainSearch = async() => {
  try {
    const data = await Person.find({favoriteFoods: `Spicy Food`})
          .sort("name")
          .limit(2)
          .select("-age")
          .exec()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
};


module.exports = {
  createAndSavePerson,
  CreateManyPeople,
  SearchByName,
  SearchByFood,
  SearchByID,
  ClassicUpdate,
  FindAndUpdateAge,
  SearchByIDAndRemove,
  DeleteManyPeople,
  ChainSearch,
};
