import React from "react";
import { shallow } from "enzyme";
import { PageNotFound } from "../../components/404";
import toJson from "enzyme-to-json";

test("should render the 404 page", () => {
  const wrapper = shallow(<PageNotFound />);
  expect(toJson(wrapper, { mode: "deep" })).toMatchSnapshot();
});
