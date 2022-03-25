import { expect } from "chai";

const X = TEST_PREFIX;

describe("TW2.4 Current dish Promise State", function tw_2_4_20() {
  this.timeout(200000);

  let model;
  this.beforeEach(function tw_2_4_20_beforeEach() {
      const DinnerModel = require("../src/" + X + "DinnerModel.js").default;
      model = new DinnerModel();
  });
  it("Model initializes currentDishPromiseState correctly", function tw_2_4_20_1() {
    expect(
      model,
      "Does the model have a property called currentDishPromiseState?"
    ).to.have.property("currentDishPromiseState");
    expect(JSON.stringify(model.currentDishPromiseState)).to.equal(
      JSON.stringify({})
    );
  });

  it("Model sets currentDishPromiseState on valid dish id", async function tw_2_4_20_2() {
    expect(model).to.have.property("currentDishPromiseState");
    let dishId = 601651;
    let dishName = "Fruit Pizza";
    model.setCurrentDish(dishId);
    expect(
      model.currentDishPromiseState,
      "Does the currentDishPromiseState have a property called promise?"
    ).to.have.property("promise");
    expect(
      model.currentDishPromiseState.data,
      "Does the currentDishPromiseState have a property called data which is initially null?"
    ).to.be.null;
    expect(
      model.currentDishPromiseState.error,
      "Does the currentDishPromiseState have a property called error which is initially null?"
    ).to.be.null;
    expect(
      model.currentDishPromiseState.promise,
      "Does the currentDishPromiseState have a property called promise which is initially null?"
    ).to.not.be.null;
    let start = new Date();
    await model.currentDishPromiseState.promise;
    let finish = new Date();
    expect(finish - start, "promise should take minimum 2 ms").to.be.above(2);
    expect(
      model.currentDishPromiseState.data,
      "Does the current data in currentDishPromiseState have the property of id after a promise result?"
    ).to.have.property("id");
    expect(
      model.currentDishPromiseState.data,
      "Does the current data in currentDishPromiseState have the property of title after a promise result?"
    ).to.have.property("title");
    expect(
      model.currentDishPromiseState.data.id,
      "Does the current data in currentDishPromiseState have the correct dish id of: " +
        dishId
    ).to.equal(dishId);
    expect(
      model.currentDishPromiseState.data.title,
      "Does the current data in currentDishPromiseState have the correct dish title of: " +
        dishName
    ).to.equal(dishName);
  });

  it("Model does not initiate new promise when id is undefined", function tw_2_4_20_3() {
    model.setCurrentDish(undefined);
    expect(model).to.have.property("currentDishPromiseState");
    expect(
      JSON.stringify(model.currentDishPromiseState),
      "What should be done when you receive an undefined id in setCurrentDish?"
    ).to.equal(JSON.stringify({}));
  });

  it("Model does not initiate new promise when id is not changed", function tw_2_4_20_4() {
    let dishId = 601651;
    model.currentDish = dishId;
    model.setCurrentDish(dishId);
    expect(model).to.have.property("currentDishPromiseState");
    expect(
      JSON.stringify(model.currentDishPromiseState),
      "What should be done when you receive an id that is the same as the currentDishId in setCurrentDish?"
    ).to.equal(JSON.stringify({}));
  });
});
