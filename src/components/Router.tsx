import { Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/home";
import PostList from "pages/posts/index";
import PostDetail from "pages/posts/detail";
import PostNew from "pages/posts/new";
import PostEdit from "pages/posts/edit";
import Profile from "pages/profile/index";
import Login from "pages/login";
import SignUp from "pages/signup";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({ isAuthenticated }: RouterProps) {
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/" />} />
            {/* 정의하지 않은 경로 디폴트값 설정 */}
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
}
