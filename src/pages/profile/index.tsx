import Footer from "components/footer";
import Header from "components/header";
import PostList from "components/PostList";
import Profile from "components/Profile";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <Profile />
      <PostList hasNavigation={false} defaultTab="my" />
      <Footer />
    </>
  );
}
