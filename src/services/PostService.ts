import type { Post } from '@/models/Post'
import { ListService } from '@/services/ListService'
import type { List } from '@/models/List'

export const PostService = {
  getAll: () => {
    return localStorage.getItem('posts')
      ? (JSON.parse(localStorage.getItem('posts') as string) as Post[])
      : []
  },

  getPostsByTopic: (topic: string) => {
    const posts = PostService.getAll()
    return posts.filter((post) => post.topic === topic)
  },
  getPostById: (id: string) => {
    const posts = PostService.getAll()
    return posts.find((post) => post.id === id)
  },

  create: (title: string, description: string, content: string, topic: string) => {
    const posts = PostService.getAll()
    posts.push({
      id: (posts.length + 1).toString(),
      topic: topic,
      lists: [],
      author: 'John Doe',
      bio: '',
      avatar: '/avatar.png',
      title: title,
      followers: 2,
      feature: '',
      description: description,
      publishedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      content: content
    })
    localStorage.setItem('posts', JSON.stringify(posts))
  },
  bookmarkPost: (postId: string, listId: string) => {
    const posts: Post[] = PostService.getAll()
    const post: Post | undefined = posts.find((post) => post.id === postId)
    const list: List | undefined = ListService.getOneWhereId(listId)
    if (post && list) {
      if (post?.lists.includes(listId)) {
        post.lists = post.lists.filter((listId) => listId !== list.id)
      } else {
        post.lists.push(listId)
      }
      localStorage.setItem('posts', JSON.stringify(posts))
    }
  }
}
