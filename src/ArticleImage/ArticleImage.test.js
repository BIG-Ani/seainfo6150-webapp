import React from 'react';
import ArticleImage from './ArticleImage'

describe("ArticleImage test", () => {

    it('renders correctly when has image params', () => {

        const props = {
            "article": {
                slug: "160315093137-beautiful-ireland",
                title: "The 32 most beautiful places to visit in Ireland",
                shortText: "From the dramatic Cliffs of Moher to regal Powerscourt Estate in Wicklow, escape to 32 of the most beautiful places to visit in Ireland.",
                text: "<p>Ireland might be famous for its pubs, but it offers much more spectacular views than the bottom of a pint glass.</p><p>There's the wild windswept west, with its Atlantic views, legendary surfing spots from Dingle to Donegal, live music and laid-back locals.</p><p>The ancient east, where Ireland's high kings once walked on Tara, aristocrats peacocked on the Powerscourt Estate, and today's elite cozy up in the seaside suburb of Killiney.</p><p>The sleek south, long a tourist mecca, where lakes, mountains, castles and stately homes dot the landscape all the way from Kerry to Killarney to Waterford.</p><p>And the sublime north, where the Mourne mountains and the Antrim coastline have inspired fantasy works from C. S. Lewis' Narnia to HBO's &ldquo;Game of Thrones.&rdquo;</p>",
                pubDate: "Thu, 22 Nov 2018 09:55:34 GMT",
                pubYear: "2018",
                author: "Delores Washington",
                authorEmail: "delores.washington@nytimes.com",
                image: {
                    _url: "https://cdn.cnn.com/cnnnext/dam/assets/160315093137-tollymore-forest-super-169.jpg",
                    _height: "619",
                    _width: "1100"
                },
                timeStamp: "2018-11-22T09:55:34.000Z",
                displayDate: "November 22nd 2018, 1:55 am"
            }
        };

        const { container } = render( <ArticleImage text={props.article.title} url={props.article.image._url}/>);

        expect(container).toMatchSnapshot();
    });

});