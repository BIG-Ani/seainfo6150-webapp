import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./Article/Article";
import DynamicArticle from "./DynamicArticle/DynamicArticle";
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();

      console.log("GET RESP", responseJson);
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);


  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route>
            <article>
              <header>
                <h1>{Object.values(fetchedData)[1].title}</h1>
                
                <address>
                  by {Object.values(fetchedData)[1].author} (
                  <a href={Object.values(fetchedData)[1].authorEmail}>{Object.values(fetchedData)[1].authorEmail}</a>)
                  <br />
                </address>

                <time datetime={Object.values(fetchedData)[1].timeStamp}>{Object.values(fetchedData)[1].displayDate} </time>
              </header>

              <div dangerouslySetInnerHTML = {{ __html: Object.values(fetchedData)[1].text }} />

            </article>
            
        </Route>
      </Switch>

    </div>
  );
}

export default App;
