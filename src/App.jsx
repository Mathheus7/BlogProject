import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/post/:postId" element={<Post/>}/>
            </Routes>
        </Router>
    )
}