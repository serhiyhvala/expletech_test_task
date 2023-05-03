import styles from './createdPosts.module.scss'
import {useAppSelector} from "@hooks/useAppSelector.ts";

const CreatedPosts = () => {
  const {createdPosts} = useAppSelector(state => state.posts)
  return (
      <section className={styles.container}>
        <h2 className={styles.text}>CreatedPosts</h2>
        {createdPosts.length === 0 ? <h2 className={styles.empty}>You Don't have any posts</h2> : <div className={styles.cards}>
          {createdPosts.map(item => (
              <div className={styles.card} key={item.userId}>
                <h2>Title: <span className={styles.textCard}>{item.title}</span></h2>
                <h2>Desc: <span className={styles.textCard}>{item.body}</span></h2>
              </div>
          ))}
        </div>}
      </section>
  );
};

export default CreatedPosts;
