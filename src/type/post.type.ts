export type PostType = {
  userId: number,
  title: string
  body: string
  id: number
}

export type PostCreateType = Omit<PostType, 'id'>
