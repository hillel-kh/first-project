<template>
      <tr>
        <td @click="showModalWindow">{{ user.name }}</td>
        <td @click="showModalWindow">{{ user.username }}</td>
        <td @click="showModalWindow">{{ user.email }}</td>
        <td @click="showModalWindow">{{ user.website }}</td>
        <td><button class="removeButton removeUser" @click.prevent="removeUser">X</button></td>
      </tr>
</template>

<script>
    export default {
        name: "User",
        props: {
          user: {
            type: Object,
            required: true
          },
          index: {
            type: Number,
            required: true
          }
        },
      methods: {
        removeUser() {
          this.$emit('delete')
        },
        showModalWindow() {
          this.$emit('showModalWindow')
        }
      }
    }
</script>

<style scoped>
  td {
    padding: 5px;
    border-top: 1px solid #A9A9A9;
  }

  .removeButton:active {
    top: .1em;
    left: .1em;
    box-shadow: 0 0 0 60px rgba(0,0,0,.05) inset;
  }

  .removeButton:hover {
    cursor: pointer;
  }

  .removeButton {
    display: block;
    width: 30px;
    margin: 5% auto;
    position: relative;
    line-height: 1.8em;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 -1px 1px #777;
    color: #fff;
    outline: none;
    border: 2px solid #F64C2B;
    border-radius: 50px;
    box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) inset, .1em .1em .2em #800;
    background: #F64C2B;
    font-weight: bold;
    font-size: 0.9em;
  }
</style>
