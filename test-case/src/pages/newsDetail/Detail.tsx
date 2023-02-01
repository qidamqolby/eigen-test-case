import { useContext } from "react";
import { NewsContext } from "../../contexts/NewsContext";
import moment from "moment";

export default function DetailPage() {
  const { newsContent }: any = useContext(NewsContext);
  console.log(newsContent);

  return (
    <>
      <div className="detail-content">
        <div className="detail-title">
          <h1 style={{ fontSize: "28px" }}>{newsContent.title}</h1>
          <p>{moment(newsContent.publishedAt).format("dddd, DD MMMM YYYY")}</p>
        </div>
        <div className="detail-body">
          <img src={newsContent.urlToImage} className="img-detail" />
          <p>{newsContent.content}</p>
          <a href={newsContent.url}>Source</a>
        </div>
      </div>
    </>
  );
}
