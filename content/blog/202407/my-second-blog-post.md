---
title: What is a counter?
author: "@luisa"
dates:
  published: "2022-06-01"
description: This is a short description about my counter post.
category: other
tags: ["tutorial", "test"]
coverImage:
status: 'published'
isFeatured: true
---

## What is a counter?

It allows you to keep track of a number and increment it by clicking on a button.

Initially we manually inserted this counter component in a vue file.

```vue
<div class="counter">
    <p class="current-count">
        Current Count: <strong>{{ currentCount }}</strong>
    </p>
    <button @click="incrementCount">Add 1</button>
</div>
```

**Nuxt-content** can insert a vue component in the markdown file.

How to do that?

1. Create a new `components/content/Counter.vue` component for a counter.

```shell
components/
├── BlogPostList.vue
├── BlogPostMeta.vue
├── TheHero.vue
├── TheNavBar.vue
└── content
    └── Counter.vue

```

2. Add the content go `Counter.vue`:

```vue
<script setup>
const currentCount = ref(0)

const incrementCount = () => {
  currentCount.value++
}
</script>

<template>
    <div class="counter">
      <p class="current-count">
        Current Count: <strong>{{ currentCount }}</strong>
      </p>
      <button @click="incrementCount">Add 1</button>
    </div>  
</template>
...
```

3. Then you can insert your Counter directly in the markdown file by adding `<Counter></Counter>`, like the following:


