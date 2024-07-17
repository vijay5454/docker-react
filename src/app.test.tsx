import { test, expect } from "vitest";
import sum from "./sum";

test("add two numbers", () => {
  //Arrange
  const result = 3;
  //Act and Assert
  expect(sum(1, 2)).toBe(result);
});

test("add 2 numbers", () => {
  //Arrange
  const result = 5;
  //Act and Assert
  expect(sum(3, 2)).toBe(result);
});

test("add 2 numbers", () => {
  //Arrange
  const result = 5;
  //Act and Assert
  expect(sum(3, 2)).toBe(result);
});