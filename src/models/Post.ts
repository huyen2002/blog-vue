import type { List } from '@/models/List'

export interface Post {
  id: string
  topic: string
  lists: string[]
  author: string
  bio: string
  avatar: string
  title: string
  followers: number
  feature: string
  description: string
  publishedAt: string
  createdAt: string
  updatedAt: string
  content: string
}
