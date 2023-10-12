import React from "react";
import PropTypes from "prop-types";

const Cards = ({ title, content }) => {
    return <div>123</div>;
};

// 當其中有一條錯誤，則警告後就停止了
Cards.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    check: (props) => {
        // 馬上執行，函式名稱盡量明瞭
        console.log(props);
        return new Error("www");
    },
};

export default Cards;
