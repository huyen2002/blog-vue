import type { List } from '@/models/List'
import { PostService } from '@/services/PostService'
import type { Post } from '@/models/Post'

export const ListService = {
  getAll: () => {
    return localStorage.getItem('lists')
      ? (JSON.parse(localStorage.getItem('lists') as string) as List[])
      : []
  },
  getOneWhereId: (listId: string) => {
    const lists = ListService.getAll()
    return lists.find((list) => list.id === listId)
  },
  getPostsForList: (listId: string) => {
    const list: List | undefined = ListService.getOneWhereId(listId)
    if (list) {
      const postIds: string[] = list.posts
      const posts: Post[] = PostService.getAll()
      return posts.filter((post) => postIds.includes(post.id))
    }
  },
  create: (list: List) => {
    const lists = ListService.getAll()
    lists.push(list)
    localStorage.setItem('lists', JSON.stringify(lists))
  },
  bookmarkList: (postId: string, listId: string) => {
    const post: Post | undefined = PostService.getPostById(postId)
    const lists: List[] = ListService.getAll()
    const list = lists.find((list) => list.id === listId)
    if (post && list) {
      if (list?.posts.includes(postId)) {
        list.posts = list.posts.filter((postId) => postId !== post.id)
      } else {
        list.posts.push(postId)
      }
      localStorage.setItem('lists', JSON.stringify(lists))
    }
  },
  delete: (listId: string) => {
    const lists = ListService.getAll()
    const list = lists.find((list) => list.id === listId)
    if (list) {
      lists.splice(lists.indexOf(list), 1)
      localStorage.setItem('lists', JSON.stringify(lists))
    }
  }
}
