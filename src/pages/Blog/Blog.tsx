import Footer from "@/components/organisms/Footer/Footer";
import Navbar from "@/components/organisms/Navbar/Navbar";
import s from "./Blog.module.scss";
import BlogHeader from "./BlogHeader";
import HeroBlobLeft from "@/components/atoms/Svgs/HeroBlobLeft";
import HeroBlobRight from "@/components/atoms/Svgs/HeroBlobRight";
import BlogContents from "./BlogContents";

import { Navigate } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
const Blog = () => {
  const {isAuthenticated} = useAuthentication();
  if(!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className={s._Wrapper}>
      <Navbar />
      <HeroBlobLeft className={s._HeroBlobLeft} />
      <HeroBlobRight className={s._HeroBlobRight} />
      <span className={s._LeftCircle}></span>
      <span className={s._RightCircle}></span>
      <main className={s._Container}>
        <BlogHeader />
        <BlogContents />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
