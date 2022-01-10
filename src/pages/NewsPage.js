import { useParams } from "react-router";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

const NewsPage = () => {
  const { category } = useParams(); // 사용되는 이름을 직접 useParams 로 선언해주어야 하는 듯!!
  // console.log(category);
  const categorySelected = category || "all"; // 카테고리 선택되지 않았으면 기본으로 all: ;
  // console.log(category);

  return (
    <>
      <Categories />
      <NewsList category={categorySelected} />
    </>
  );
};

export default NewsPage;
