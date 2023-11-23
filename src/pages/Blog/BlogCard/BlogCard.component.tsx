import IcCalendar from "@/components/atoms/Icons/IcCalendar";
import s from "./BlogCard.module.scss";
import formatIsoDate from "../../../utils/formatDate";
import { Link } from "react-router-dom";
type BlogCardProps = {
  title: string;
  description: string;
  image: string;
  date: string;
};

const BlogCard = ({ title, description, image, date }: BlogCardProps) => {
  const formatedDate = formatIsoDate(date);
  return (
    <div className={s._BlogCard}>
      <div className={s._Image}>
        <img src={image} alt={title} />
      </div>
      <div className={s._Content}>
        <h3 className="white">{title}</h3>
        <div className={s._Description}>{description}</div>
        <div className={s._Date}>
          <IcCalendar />
          <span className="white">{
            formatedDate
            }</span>
        </div>
        <Link to="/" className="secondary">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
