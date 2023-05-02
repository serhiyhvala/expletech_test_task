import axios from "axios";
import {BASE_URL} from "@constants/url.ts";
import {PostType} from "@type/post.type.ts";
import {CommentType} from "@type/comment.type.ts";

export const postsService = {
  async getPosts() {
    const {data} = await axios.get<PostType[]>(`${BASE_URL}/posts?_limit=20`)
    return data
  },
  async getComments(id: string) {
    const {data} = await axios.get<CommentType[]>(`${BASE_URL}/posts/${id}/comments`)
    return data
  }
}
