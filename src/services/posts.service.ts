import axios from "axios";
import {BASE_URL} from "@constants/url.ts";
import {PostType} from "@type/post.type.ts";

export const postsService = {
  async getPosts(){
    const {data} = await axios.get<PostType[]>(`${BASE_URL}/posts?_limit=20`)
    return data
  }
}
