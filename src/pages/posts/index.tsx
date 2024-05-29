import Footer from "components/footer";
import Header from "components/header";
import PostList from "components/PostList";

export default function PostsPage() {
  return (
    <>
      <Header />
      <PostList hasNavigation={false} />
      <Footer />
    </>
  );
}
