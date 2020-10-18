import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./Article/Article";
import DynamicArticle from "./DynamicArticle/DynamicArticle";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList";

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

  let displayContent;

   if (Object.keys(fetchedData).length) {
    displayContent = (
        <ArticleList articles={Object.values(fetchedData)} />
     );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <div className="App">
      <Switch>
        {/*<Route path="/" exact>*/}
        {/*  <DynamicArticle article={Object.values(fetchedData)[1]} />*/}
        {/*</Route>*/}

        <Route path="/articlelist">
          {displayContent}
        </Route>

      </Switch>

    </div>
  );
}

export default App;
