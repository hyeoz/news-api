import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

// 카테고리 생성
const categories = [
  {
    name: "all",
    text: "전체 보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

// const Category = styled.div`
// NavLink 활용
const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursur: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: aqua;
  }
  // 특정 카테고리가 선택됐을 때 디자인 다르게
  /* ${(props) =>
    props.active && // does not exist 라고 뜨는데 실행은 됨..
    css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
    `} */

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;
// props 받아오기
// const Categories = ({ onSelect, category }) => {
const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((cat) => {
        return (
          // <Category
          //   key={cat.name}
          //   // App 에서 받아오는 props 들
          //   active={category === cat.name}
          //   onClick={() => onSelect(cat.name)}
          // >
          // styled(NavLink) 사용
          <Category
            key={cat.name}
            // active={(cat) => cat.name === category}
            className={({ isActive }) => (isActive ? "active" : "")}
            to={cat.name === "all" ? "/" : `/${cat.name}`}
          >
            {cat.text}
          </Category>
        );
      })}
    </CategoriesBlock>
  );
};

export default Categories;
