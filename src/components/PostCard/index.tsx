import {FC} from "react";
import styles from './postCard.module.scss'
import Button from "@ui/Button";

type PostCardsProps = {
  title: string
  body: string
  userId: number
  id?: number
}

const PostCards: FC<PostCardsProps> = ({title, body, id}) => {
  return (
      <div className={styles.card}>
        <h2 className={styles.title}>Post Title: {title}</h2>
        <p className={styles.body}>{body}</p>
        <Button link={`post/${id}`}>Read Comments</Button>
      </div>
  );
};

export default PostCards;
