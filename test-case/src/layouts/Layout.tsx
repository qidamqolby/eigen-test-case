import { Layout } from "antd";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

export default function LayoutProvider({ content }: { content: ReactNode }) {
  const navigate = useNavigate();
  return (
    <>
      <Layout className="layout">
        <Header className="header">
          <a onClick={() => navigate("/")}>News App</a>
        </Header>
        <Content className="site-layout-content" style={{ padding: "0 50px" }}>
          {content}
        </Content>
      </Layout>
    </>
  );
}
