import React from "react";
import { Link } from "react-router-dom";
import { News } from "../../reducers/news-reducer";

interface NewsListItemProps {
  news: News;
}

const NewsListItem = ({ news }: NewsListItemProps) => (
  <div className="item">
    <div className="image">
      <img src="https://picsum.photos/300/200/?random" alt="none" />
    </div>
    <div className="content">
      <Link to={`/posts/${news.nid}`} className="header">
        {news.nsubtitle}
      </Link>
      <div className="meta">
        <span>Description</span>
      </div>
      <div className="description">{news.ncontents}</div>
    </div>
  </div>
);

export default NewsListItem;
