import HeroBlobLeft from "@/components/atoms/Svgs/HeroBlobLeft";
import HeroBlobRight from "@/components/atoms/Svgs/HeroBlobRight";
import Footer from "@/components/organisms/Footer/Footer";
import Navbar from "@/components/organisms/Navbar/Navbar";
import { Navigate } from "react-router-dom";
import s from "./Blog.module.scss";
import BlogContents from "./BlogContents";
import BlogHeader from "./BlogHeader";

import { useAuthentication } from "../../hooks/useAuthentication";
const Blog = () => {
  const {isAuthenticated} = useAuthentication();
  console.log(isAuthenticated);
  
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
