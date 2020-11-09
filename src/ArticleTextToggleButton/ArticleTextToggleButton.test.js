import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe("ArticleTextToggleButton tests", () => {
    it("renders correctly", () => {
        const onClick = jest.fn();
        const { container } = render(<ArticleTextToggleButton buttonText={"Show more"} onClick={onClick}/>);
        expect(container).toMatchSnapshot();
    });
});