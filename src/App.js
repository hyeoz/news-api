// import { useCallback, useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
// import Categories from "./components/Categories";
// import NewsList from "./components/NewsList";
import NewsPage from "./pages/NewsPage";

// ES6 promise
// function App() {
//   const [data, setData] = useState(null);
//   const onClick = () => {
//     axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
//       setData(res.data);
//     });
//   };

//   return (
//     <div className="App">
//       <div>
//         <button onClick={onClick}>불러오기 테스트</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
// }

//ES8 async/await
// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       // axios.get(url, config)
//       const res = await axios.get(
//         "https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=20f4b285109346d8b4cea31bb0476630"
//       );
//       setData(res.data);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기 테스트</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           // JSON.stringufy(data, placeholder, space)
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
// };

// 실습
const App = () => {
  // 카테고리 상태 관리
  // const [category, setCategory] = useState("all");
  // const onSelect = useCallback((category) => setCategory(category), []);

  return (
    // <>
    //   <Categories category={category} onSelect={onSelect} />
    //   <NewsList category={category} />
    // </>
    // 라우터 활용
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;
