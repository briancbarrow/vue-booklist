export type Book = {
  id: string
  createdTime: string
  fields: BookFields
}

export type BookFields = {
  Status: string
  Author: string
  Title: string
  Category: string
}
