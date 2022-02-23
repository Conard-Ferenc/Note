<template>
  <div class="container">
    <todo-item
      v-for="item in list"
      :key="item.title"
      :title="item.title"
      :content="item.content"
      :tag="item.tag"
    />
  </div>
</template>
<script>
import TodoItem from "./todolist__item.vue";
export default {
  components: {
    TodoItem
  },
  data() {
    return {
      list: [
        {
          title: "Ajax封装md优化",
          content: "修改文章",
          tag: ['屯文']
        },
        {
          title: "看字节视频",
          content: "HTML、JS、React、canvas、node",
          tag: ['学习提升']
        },
        {
          title: "Third",
          content: "no content",
          tag: ['test']
        },
        {
          title: "Fourth",
          content: "no content",
          tag: ['test']
        },
        {
          title: "Fifth",
          content: "no content",
          tag: ['test']
        },
        {
          title: "Sixth",
          content: "no content",
          tag: ['test']
        },
      ]
    }
  },
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  display: grid;
  grid-template-columns: repeat(3, minmax(30%, 50%));
  grid-gap: 1em;
  gap: 1em;
}
@media screen and (max-width: 760px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>