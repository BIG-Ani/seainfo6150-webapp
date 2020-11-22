import React from "react";
import ArticleList from "./ArticleList";

describe("ArticleList tests", () => {
    it("renders correctly when has articles", () => {
        const articles = [
            {
                "title": "The Statue of Liberty's torch heads to new museum",
                "slug": "181122102925-statue-of-liberty-crown",
                "shortText": "The Statue of Liberty's original torch is getting a new home",
                "timeStamp": "2018-11-22T15:12:24.000Z",
                "displayDate": "November 22nd 2018, 7:12 am",
                image: {
                    _url: "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg",
                    _height: "619",
                    _width: "1100"
                }
            },
            {
                "title": "This Alaskan town won't see the sun for 65 days",
                "slug": "181120145100-02-alaskan-town-no-sun",
                "shortText": "If you're a night owl, you may want to consider spending your winters in northern Alaska.",
                "timeStamp": "2018-11-20T21:37:11.000Z",
                "displayDate": "November 20th 2018, 1:37 pm",
                image: {
                    _url: "https://cdn.cnn.com/cnnnext/dam/assets/181120145100-02-alaskan-town-no-sun-trnd-112018-super-169.jpg",
                    _height: "619",
                    _width: "1100"
                }
            }
        ];
        const { container } = render(<ArticleList articles={articles}/>);
        expect(container).toMatchSnapshot();
    });

    it("renders correctly when has no articles", () => {
        const { container } = render(<ArticleList articles={[]}/>);
        expect(container).toMatchSnapshot();
    });
});