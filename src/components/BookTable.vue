<template>
  <div class="max-w-7xl m-auto mt-8 rounded border border-blue-800 p-5">
    <div class="mx-auto max-w-7xl">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-2xl font-semibold leading-6 text-gray-900">{{ title }}</h1>
        </div>
      </div>
    </div>
    <div class="flow-root overflow-hidden">
      <div class="mx-auto max-w-7xl">
        <table class="w-full text-left">
          <thead class="bg-white">
            <tr>
              <th
                scope="col"
                class="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
              >
                Title
                <div
                  class="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200"
                />
                <div class="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
              </th>
              <th
                scope="col"
                class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Author
              </th>
              <th
                scope="col"
                class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell"
              >
                Status
              </th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Category
              </th>
              <th scope="col" class="relative py-3.5 pl-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="book in props.books"
              :key="book.id"
              :class="`${progressColors[book.fields.Status]}`"
            >
              <td class="relative py-4 pl-1 pr-3 text-sm font-medium text-gray-900">
                {{ book.fields.Title }}
                <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
              </td>
              <td class="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                {{ book.fields.Author }}
              </td>
              <td class="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">
                {{ book.fields.Status }}
              </td>
              <td class="px-3 py-4 text-sm text-gray-500">{{ book.fields.Category }}</td>
              <td class="relative py-4 pl-3 pr-1 text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900"
                  >Edit<span class="sr-only">, {{ book.fields.Title }}</span></a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Book } from '@/types/book'
import type { PropType } from 'vue'
const props = defineProps({
  title: String,
  books: Array as PropType<Book[]>
})
const progressColors: { [key: string]: string } = {
  'To Read': 'bg-white',
  'In Progress': 'bg-blue-100 text-blue-800',
  Finished: 'bg-green-100 text-green-800',
  "Won't Finish": 'bg-red-100 text-red-800'
}
</script>
