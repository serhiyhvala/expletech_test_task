import {FC} from "react";
import styles from './postCard.module.scss'
import {cropText} from "@utils/cropText.ts";
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
        <div className={styles.text}>
          <h2 className={styles.title}>{cropText(title, 30)}</h2>
          <p className={styles.body}>{cropText(body, 100)}</p>
        </div>
        <Button link={`/post/${id}`}>Read More</Button>
      </div>
  );
};

export default PostCards;
