import {FC} from "react";
import styles from './postCard.module.scss'
import {Link} from "react-router-dom";

type PostCardsProps = {
  title: string
  body: string
  userId: number
  id: number
}

const PostCards: FC<PostCardsProps> = ({title, body, id}) => {
  return (
      <div className={styles.card}>
        <Link to={`post/${id}`}>
          <h2 className={styles.title}>Post Title: {title}</h2>
          <p className={styles.body}>{body}</p>
        </Link>
      </div>
  );
};

export default PostCards;
