import {useParams} from "react-router-dom";
import styles from './postItem.module.scss'
import {useAppSelector} from "@hooks/useAppSelector.ts";
import Button from "@ui/Button";
import {useAppDispatch} from "@hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {getComments} from "@store/posts/posts.slice.ts";

const PostItem = () => {
  const dispatch = useAppDispatch()
  const {comments} = useAppSelector(state => state.posts)
  const {posts} = useAppSelector(state => state.posts)
  const {id} = useParams()
  const {title, body, id: postId} = posts.find(item => item.id === +id!)!
  useEffect(() => {
    dispatch(getComments(id!))
  }, [dispatch])
  return (
      <section className={styles.container}>
        <h2>Post Number {postId}</h2>
        <div className={styles.card}>
          <h3>Post Title: <span className={styles.title}>{title}</span></h3>
          <h3>Post Descr: <span className={styles.text}>{body}</span></h3>
          <h3>Comments:</h3>
          <div className={styles.comments}>
            {comments.length === 0 ?
                <span className={styles.text}>This Post Don't have comments</span> : comments.map(item => (
                    <div key={item.postId} className={styles.item}>
                      <h4>Email: <span className={styles.text}>{item.email}</span></h4>
                      <h4>Username: <span className={styles.text}>{item.name}</span></h4>
                      <h4>Comment: <span className={styles.text}>{item.body}</span></h4>
                    </div>
                ))}
          </div>
        </div>
        <Button link='/'>Go Back</Button>
      </section>
  );
};

export default PostItem;
