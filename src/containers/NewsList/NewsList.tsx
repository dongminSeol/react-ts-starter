import React, { Component } from "react";
import { connect } from "react-redux";
import { News } from "../../reducers/news-reducer";
import NewsListItem from "../../components/NewsListItem";

interface NewsListProps {
  newslist: News[];
}
class NewsList extends React.Component<NewsListProps> {
  componentDidMount(): void {}
  renderNewsList(): JSX.Element[] | null {
    const { newslist } = this.props;
    if (!newslist) {
      return null;
    }
    return newslist.map((news: News) => {
      return <NewsListItem news={news} key={news.nid} />;
    });
  }
  render() {
    return <div>{this.renderNewsList()}</div>;
  }
}

export default connect()(NewsList);
