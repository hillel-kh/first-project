<template>
  <ProjectLayout title="Todo List" bgcolor="lightgreen" color="navy">
    <div id="todo">
      <h1>My Todo App!</h1>
    </div>
    <TodoList></TodoList>
  </ProjectLayout>
</template>

<script>
import ProjectLayout from './ProjectLayout.vue';
import TodoList from './todo/TodoList.vue'

export default {
	components: { ProjectLayout, TodoList }
}
</script>

<style scoped>

*, *::before, *::after {
	box-sizing: border-box;
}

#todo {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

h1 {
	text-align: center;
}
</style>