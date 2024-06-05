import { Route, Routes } from "react-router-dom"
import Feed from "../pages/Feed"
import More from "../pages/More"
import Update from "../pages/Updates"
import Posts from "../pages/Posts"

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/more" element={<More/>}/>
        <Route path="/update" element={<Update/>}/>
    </Routes>
  )
}

export default AppRouter