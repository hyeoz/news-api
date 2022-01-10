import axios from "axios";
// import { useEffect, useState } from "react";
import styled from "styled-components";
import usePromise from "../lib/usePromise";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// const sampleArticle = {
//   title: "제목",
//   description: "내용",
//   url: "https://naver.com",
//   urlToImage: "https://via.placeholder.com/160",
// };

const NewsList = ({ category }) => {
  // // 데이터 연동하기
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // async 사용하는 함수는 따로 선언하기
  //   const fetchData = async () => {
  //     // 데이터 받아오기 시작하면 로딩 = true
  //     setLoading(true);
  //     try {
  //       // 카테고리 설정하면 기사도 바뀌게 적용되도록
  //       const query = category === "all" ? "" : `&category=${category}`;
  //       const res = await axios.get(
  //         `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=20f4b285109346d8b4cea31bb0476630`
  //       );
  //       setArticles(res.data.articles); // 구조를 미리 알고있어야 바로 data.articles 찾을 수 있음!
  //     } catch (e) {
  //       console.error(e);
  //     }
  //     // 끝나면 로딩 = false
  //     setLoading(false);
  //   };
  //   // 정의한 함수 실행
  //   fetchData();
  // }, [category]); // category 가 바뀔 때마다 실행해줘야 함

  // usePromise 커스텀 훅 사용
  const [loading, res, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=20f4b285109346d8b4cea31bb0476630`
    );
  }, [category]);

  if (loading) {
    // 로딩중일때
    return <NewsListBlock>로딩 중...</NewsListBlock>;
  }
  // if (!articles) {
  //   // 아직 articles 값이 들어오지 않았을 때
  //   // return null;
  //   return <div>기사가 없어요!</div>;
  // }
  if (!res) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  const { articles } = res.data;

  // 로딩 끝, articles 값 들어왔을 때
  return (
    <NewsListBlock>
      {articles.map((article) => {
        return <NewsItem key={article.url} article={article} />;
      })}
    </NewsListBlock>
  );
};

export default NewsList;
