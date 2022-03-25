const { assert, expect } = require("chai");

let searchDishes;
const X = TEST_PREFIX;
try {
  const dishSource = require("../src/" + X + "dishSource.js");
  if (dishSource.searchDishes) searchDishes = dishSource.searchDishes;
  else searchDishes = dishSource.default.searchDishes;
} catch (e) {console.log(e);}

describe("TW2.2 searchDishes", function tw2_2_20() {
  this.timeout(200000);

  before(function tw2_2_20_before() {
    if (!searchDishes) this.skip();
  });

  function testPromise(text, p, searchq) {
    it(text, async function tw2_2_20_testPromise() {
      let start = new Date();
      let dishes = await p();
      let finish = new Date();
      expect(
        finish - start,
        "promise searchDishes should take minimum 2 ms"
      ).to.be.above(2);
      expect(
        dishes,
        "Did not receive an array of dishes. Did you properly check the result of the promise?"
      ).to.be.a("array");
        expect(dishes.length, "array must not be empty").to.not.equal(0);
      dishes.forEach((dish) => {
        expect(
          dish,
          "One of your dishes doesn't have the property id"
        ).to.have.property("id");
        expect(
          dish,
          "One of your dishes doesn't have the property title"
        ).to.have.property("title");
        expect(
          dish,
          "One of your dishes doesn't have the property image"
        ).to.have.property("image");
        expect(
          dish.title.toLowerCase(),
          "Did not properly give the search query to search dishes"
        ).to.contain(searchq);
      });
    }).timeout(4000);
  }
  testPromise(
    "searchDishes promise #1",
      function tw2_2_20_testPromise1(){return searchDishes({ query: "pizza", type: "main course" });},
    "pizza"
  );
});
