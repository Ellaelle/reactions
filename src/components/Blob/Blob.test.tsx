import { render } from "@testing-library/react";
import React from "react";
import Blob from "./Blob";

describe("Blob", () => {
  it("renders successfully", () => {
    const component = render(
      <Blob expression="sad" color="blue" isAnimated={true} />
    );
    expect(component).toBeDefined();
  });

  it("renders a sad face", () => {
    const { getByTestId } = render(
      <Blob expression="sad" color="blue" isAnimated={true} />
    );
    expect(getByTestId("sad")).toBeDefined();
  });

  it("renders a happy face", () => {
    const { getByTestId } = render(
      <Blob expression="happy" color="blue" isAnimated={true} />
    );
    expect(getByTestId("happy")).toBeDefined();
  });

  it("renders an angry face", () => {
    const { getByTestId } = render(
      <Blob expression="angry" color="blue" isAnimated={true} />
    );
    expect(getByTestId("angry")).toBeDefined();
  });

  it("renders a awestruck face", () => {
    const { getByTestId } = render(
      <Blob expression="awestruck" color="blue" isAnimated={true} />
    );
    expect(getByTestId("awestruck")).toBeDefined();
  });

  it("renders a indifferent face", () => {
    const { getByTestId } = render(
      <Blob expression="indifferent" color="blue" isAnimated={true} />
    );
    expect(getByTestId("indifferent")).toBeDefined();
  });

  it("renders a embarrassed face", () => {
    const { getByTestId } = render(
      <Blob expression="embarrassed" color="blue" isAnimated={true} />
    );
    expect(getByTestId("embarrassed")).toBeDefined();
  });

  it("renders a surprised face", () => {
    const { getByTestId } = render(
      <Blob expression="surprised" color="blue" isAnimated={true} />
    );
    expect(getByTestId("surprised")).toBeDefined();
  });

  it("renders a worried face", () => {
    const { getByTestId } = render(
      <Blob expression="worried" color="blue" isAnimated={true} />
    );
    expect(getByTestId("worried")).toBeDefined();
  });

  it("renders the non-animated embarrassed version of the blob", () => {
    const { getByTestId } = render(
      <Blob expression="embarrassed" color="blue" isAnimated={false} />
    );
    expect(getByTestId("embarrassed-face-no-animation")).toBeDefined();
  });

  it("renders the non-animated surprised version of the blob", () => {
    const { getByTestId } = render(
      <Blob expression="surprised" color="blue" isAnimated={false} />
    );
    expect(getByTestId("surprised-face-no-animation")).toBeDefined();
  });

  it("renders the non-animated worried version of the blob", () => {
    const { getByTestId } = render(
      <Blob expression="worried" color="blue" isAnimated={false} />
    );
    expect(getByTestId("worried-face-no-animation")).toBeDefined();
  });

  it("renders the non-animated indifferent version of the blob", () => {
    const { getByTestId } = render(
      <Blob expression="indifferent" color="blue" isAnimated={false} />
    );
    expect(getByTestId("indifferent-face-no-animation")).toBeDefined();
  });

  it("renders the non-animated happy version of the blob", () => {
    const { getByTestId } = render(
      <Blob expression="happy" color="blue" isAnimated={false} />
    );
    expect(getByTestId("happy-face-no-animation")).toBeDefined();
  });

  it("renders the non-animated angry version of the blob", () => {
    const { getByTestId } = render(
      <Blob expression="angry" color="blue" isAnimated={false} />
    );
    expect(getByTestId("angry-face-no-animation")).toBeDefined();
  });

  it("renders the non-animated awestruck version of the blob", () => {
    const { getByTestId } = render(
      <Blob expression="awestruck" color="blue" isAnimated={false} />
    );
    expect(getByTestId("awestruck-face-no-animation")).toBeDefined();
  });

  it("renders the non-animated sad version of the blob", () => {
    const { getByTestId } = render(
      <Blob expression="sad" color="blue" isAnimated={false} />
    );
    expect(getByTestId("sad-face-no-animation")).toBeDefined();
  });

  it("renders custom style", () => {
    const component = render(
      <Blob
        expression="indifferent"
        isAnimated={false}
        customStyle={{ fill: "#fff", stroke: "#000" }}
      />
    );
    expect(component).toBeDefined();
  });
});
