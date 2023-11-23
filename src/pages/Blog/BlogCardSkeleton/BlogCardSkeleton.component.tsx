import s from './BlogCardSkeleton.module.scss';
const BlogCardSkeleton = () => {
    return (
      <div className={s._BlogCard}>
        <div className={s._Image}>
        </div>
        <div className={s._Content}>
          <h3 className={s._Title}></h3>
          <div className={s._Description}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={s._Date}>
          </div>
          <div className={s._ReadMore}
          >
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogCardSkeleton;