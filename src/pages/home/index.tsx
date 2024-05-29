import Header from "components/header";
import Footer from "components/footer";
import PostList from "components/PostList";
import Carousel from "components/Carousel";

const images = [
  "https://images.unsplash.com/photo-1715645943394-af1c45668000?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1715985884284-3885ea1731b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1687308458927-9e67142990f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel images={images} />
      <PostList />
      <Footer />
    </div>
  );
}
