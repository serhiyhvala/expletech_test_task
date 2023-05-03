import styles from './home.module.scss'
import Slick from "@components/Slick";
import {useEffect, useState} from "react";
import Button from "@ui/Button";
import Modal from "@components/Modal";
import CreatedPosts from "@components/CreatedPosts";
import {useAppDispatch} from "@hooks/useAppDispatch.ts";
import {getFromLocaleStorage} from "@store/posts/posts.slice.ts";

const Home = () => {
  const [modal, setModal] = useState(false)
  const dispatch = useAppDispatch()

  const handleModal = () => {
    setModal(!modal)
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("posts") || '{}')
    if (data.length > 0) {
      dispatch(getFromLocaleStorage(data))
    }
  }, [])

  return (
      <section className={styles.container}>
        <h1 className={styles.text}>All Posts</h1>
        <Slick/>
        <div className={styles.button}>
          <Button onClick={handleModal}>Create Task</Button>
        </div>
        <Modal handleClose={handleModal} open={modal}/>
        <CreatedPosts/>
      </section>
  );
};

export default Home;
