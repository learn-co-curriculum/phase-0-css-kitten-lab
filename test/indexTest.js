const fs = require("fs");
const path = require("path");
const chai = require("chai");
const CSSOM = require("cssom");
chai.use(require("chai-dom"));
const { expect } = chai;

const cssFile = fs.readFileSync(
  path.resolve(__dirname, "../css/place-kitty.css"),
  "utf-8"
);

function findRule(rules, cssSelector) {
  return rules.find((r) => r.selectorText === cssSelector);
}

describe("place-kitty.css", () => {
  let css;
  before(() => {
    css = CSSOM.parse(cssFile);
  });

  it("selects the image with a class of kitty-1", () => {
    const rule = findRule(css.cssRules, ".kitty-1");
    const hint =
      "Make sure you have a CSS selector that selects the image that has a class of kitty-1";
    expect(rule, hint).to.exist;
  });

  it("selects the image with an id of kitty-2", () => {
    const rule = findRule(css.cssRules, "#kitty-2");
    const hint =
      "Make sure you have a CSS selector that selects the image that has an id of kitty-2";
    expect(rule, hint).to.exist;
  });

  it("selects the image inside the element with an id of basket (via descendent relationship)", () => {
    const rule = findRule(css.cssRules, "#basket img");
    const hint =
      "Make sure you have a CSS selector that selects the image inside the element with an id of basket (via descendent relationship)";
    expect(rule, hint).to.exist;
  });

  it("selects the image based on the respective sibling element", () => {
    const rule = findRule(css.cssRules, "#ball + img");
    const hint =
      "Make sure you have a CSS selector that selects the image based on the respective sibling element";
    expect(rule, hint).to.exist;
  });

  it('Selects the image that has an alt attribute value matching "Kitty 5", via the attribute selector', () => {
    const rule = findRule(css.cssRules, 'img[alt="Kitty 5"]');
    const hint =
      "Make sure you have a CSS selector that selects the image that has an alt attribute value matching 'Kitty 5', via the attribute selector";
    expect(rule, hint).to.exist;
  });
});
