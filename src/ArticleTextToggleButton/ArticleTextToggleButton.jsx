import React, {useState} from 'react'

import style from './ArticleTextToggleButton.module.css'

const ArticleTextToggleButton = (props) => {

    const [showMore, setShowMore] = useState(false);

    const {btnText, loadContentHandler} = props;

    // toggle the button status
    const btnToggleChange = () => {
        setShowMore(!showMore);
        loadContentHandler(showMore);
    }

    return (
        <button id={style.ArticleTextToggleButton} onClick={() => btnToggleChange()}>{btnText}</button>
    )

}

export default ArticleTextToggleButton;