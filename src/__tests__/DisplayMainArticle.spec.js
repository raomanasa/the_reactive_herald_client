import React from "react";
import { shallow } from "enzyme";

import DisplayCurrentArticle from "../components/DisplayCurrentArticle";

describe("<DisplayCurrentArticle />", () => {
  let describedComponent;
  describe("displays the requested article from API", () => { 
    beforeAll(() => {
      describedComponent = shallow(
        <DisplayCurrentArticle id="1" />
      );
    });

    it("and returns the article in the div", () => {
      expect(describedComponent.find("main-article-div").text()).toEqual("Article 1")
      expect(describedComponent.find("main-article-div").text()).toEqual("Body Text 1");
    })
