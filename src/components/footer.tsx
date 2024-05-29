import { Link } from "react-router-dom";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { useContext } from "react";
import ThemeContext from "context/ThemeContext";

export default function Footer() {
  const context = useContext(ThemeContext);

  return (
    <footer>
      <Link to="/posts/new">글쓰기</Link>
      <Link to="/posts">게시글</Link>
      <Link to="/profile">프로필</Link>
      <div onClick={context.toggleMode}>
        {context.theme === "light" ? (
          <AiOutlineSun className="footer__theme-btn" />
        ) : (
          <AiOutlineMoon className="footer__theme-btn" />
        )}
      </div>
    </footer>
  );
}
