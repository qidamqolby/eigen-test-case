import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { List } from "antd";
import { articleType, articlesType } from "../../data/articlesType";
import { API } from "../../data/API";
import { NewsContext } from "../../contexts/NewsContext";

export default function ListNews({
  countryValue,
  categoryValue,
}: {
  countryValue: string;
  categoryValue: string;
}) {
  const navigate = useNavigate();

  const { setNewsContent }: any = useContext(NewsContext);

  const [article, setArticle] = useState<articleType>();
  async function fetchData() {
    await API.get("/top-headlines", {
      params: {
        country: countryValue,
        category: categoryValue,
        pageSize: 50,
      },
    })
      .then((response) => {
        const { data } = response;
        setArticle(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  useEffect(() => {
    fetchData();
  }, [countryValue, categoryValue]);

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 10,
        }}
        dataSource={article?.articles}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={250}
                height={150}
                alt="image here"
                src={item.urlToImage}
              />
            }
          >
            <List.Item.Meta
              title={
                <a
                  onClick={() => {
                    navigate(`/news/${item.title}`);
                    setNewsContent(item);
                  }}
                >
                  {item.title}
                </a>
              }
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </>
  );
}
