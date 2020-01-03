<template>
  <li>
      <button @click="$emit('remove', todo.id)">
      X
    </button>
    {{ todo.text }}

  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>