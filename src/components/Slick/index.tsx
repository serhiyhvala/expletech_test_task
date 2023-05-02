import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss'
import {settings} from "@constants/settings.ts";
import {useAppSelector} from "@hooks/useAppSelector.ts";
import {useAppDispatch} from "@hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {fetchPosts} from "@store/posts/posts.slice.ts";
import PostCard from "@components/PostCard";

const Slick = () => {
  const dispatch = useAppDispatch()
  const {posts, loading} = useAppSelector(state => state.posts)
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])
  if(loading){
    return <h2 className='loading'>Please Wait..</h2>
  }
  return (
      <Slider {...settings}>
        {posts.map(item => (
            <PostCard key={item.userId} {...item} />
        ))}
      </Slider>
  );
};

export default Slick;
