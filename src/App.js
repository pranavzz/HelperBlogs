import Header from "./components/Header"
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"

export default function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    // calling at first render
    fetchBlogPosts();
  },[])
  
  return (
    <div className="w-100 h-100 d-flex flex-column gap-1 justify-content-center align-items-center">
    {/* <h1>Hello World</h1> */}
    <Header/>
    <Blogs/>
    <Pagination/>
    </div>
  );
}
