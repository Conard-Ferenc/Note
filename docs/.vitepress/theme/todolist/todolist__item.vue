<template>
  <a :href="`#${title}`" :id="title" class="card">
    <!-- <input type="checkbox" /> -->
    <div class="todolist__item-mark">
      <h1 class="todolist__item-markinfo">{{ title }}</h1>
    </div>
    <div class="todolist__item-info">
      <h1 class="todolist__item-title">{{ title }}</h1>
      <div class="todolist__item-content">{{ content }}</div>
      <ul class="todolist__item-tag">
        <li v-for="item in tag">
          <code>{{ item }}</code>
        </li>
      </ul>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "title"
    },
    content: {
      type: String,
      default: "content"
    },
    tag: {
      type: Array,
      default: ['one tag']
    }
  },
}
</script>
<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
  font-family: georgia, "华文行楷", serif;
}
.card {
  position: relative;
  max-width: 230px;
  min-height: 230px;
  overflow: hidden;
  background: var(--c-bg-secondary);
  border-radius: 10px;
  word-break: break-word;
  box-shadow: -8px 8px 8px -4px var(--c-divider-dark);
  color: inherit;
  text-decoration: inherit;
}
.card:hover .todolist__item-info,
.card:focus .todolist__item-info {
  transform: scale(1);
  filter: blur(0);
  opacity: 1;
}
.card:hover .todolist__item-mark,
.card:focus .todolist__item-mark {
  transform: scale(1.5);
  filter: blur(0.5em);
  opacity: 0;
}
.todolist__item-mark {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: all 1s;
}
.todolist__item-markinfo {
  position: relative;
  font-size: 2em;
  line-height: 1;
  top: 50%;
  transform: translateY(-50%);
}
.todolist__item-info {
  padding: 0 5%;
  opacity: 0;
  transform: scaleX(1.5);
  filter: blur(0.5em);
  height: 100%;
  display: grid;
  grid-template-rows: auto minmax(5.4em, 8.1em) auto;
  /* display: table-column; */
  transition: all 1s;
}
.todolist__item-title {
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.todolist__item-content {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-indent: 1em;
  line-height: 1.35em;
  background: -webkit-linear-gradient(
    top,
    transparent 1.25em,
    var(--c-divider-dark) 1.35em
  );
  background-size: 100% 1.35em;
}
.todolist__item-tag {
  padding: 0;
  list-style: none;
}
.todolist__item-tag > li {
  margin: 0 0.3em;
  display: inline;
}
@media screen and (max-width: 760px) {
  .card {
    max-width: initial;
    margin: 0 5%;
  }
}
</style>