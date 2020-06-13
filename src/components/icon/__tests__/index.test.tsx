import React from "react";
import { render } from "@testing-library/react";
import Icon, { Icons } from "..";

const rendered = (icon: Icons) => {
  const { getByAltText } = render(<Icon icon={icon} />);
  return getByAltText;
};

test("Icon render icon with alt Loading", () => {
  const getByAltText = rendered("LOADING");
  const iconElement = getByAltText(/Loading/i);
  expect(iconElement).toBeInTheDocument();
});

test("Icon render icon with alt Thunder", () => {
  const getByAltText = rendered("THUNDER");
  const iconElement = getByAltText(/Thunder/i);
  expect(iconElement).toBeInTheDocument();
});

test("Icon render icon with alt Rain", () => {
  const getByAltText = rendered("RAIN");
  const iconElement = getByAltText(/Rain/i);
  expect(iconElement).toBeInTheDocument();
});

test("Icon render icon with alt Snow", () => {
  const getByAltText = rendered("SNOW");
  const iconElement = getByAltText(/Snow/i);
  expect(iconElement).toBeInTheDocument();
});

test("Icon render icon with alt Clear", () => {
  const getByAltText = rendered("CLEAR");
  const iconElement = getByAltText(/Clear/i);
  expect(iconElement).toBeInTheDocument();
});

test("Icon render icon with alt Clouds", () => {
  const getByAltText = rendered("CLOUDS");
  const iconElement = getByAltText(/Clouds/i);
  expect(iconElement).toBeInTheDocument();
});

test("Icon render icon with alt No Location", () => {
  const getByAltText = rendered("NO_LOCATION");
  const iconElement = getByAltText(/No Location Found/i);
  expect(iconElement).toBeInTheDocument();
});
