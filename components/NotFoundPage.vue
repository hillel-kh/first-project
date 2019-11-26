<template>
  <div class="wrapper">
    <p class="title">Sorry</p>
    <p class="fw-400 fs-25 color-eee">Looks like you're lost...</p>
    <p class="color-c5">You can either return to the previous page or visit our homepage.</p>
    <a href="/" class="btn">go to homepage</a>
  </div>
</template>

<style lang="sass" scoped>

.wrapper
  height: 100vh
  display: flex
  flex-direction: column
  align-items: center
  position: relative
  background: url(../img/error.jpg) no-repeat top
  background-size: cover
  color: #ffffff
  p
    margin-bottom: 25px
    line-height: 25px
    text-align: center
  .title
    margin-top: 400px
    font-size: 90px
    text-transform: uppercase
    font-weight: 100
    line-height: 1em
  .fw-400
    font-weight: 400
  .color-eee
    color: #eee
  .fs-25
    font-size: 25px
  .color-c5
    color: #c5c5c5
  .btn
    cursor: pointer
    position: relative
    color: #fff
    text-transform: uppercase
    text-decoration: none
    border: 2px solid #fff
    padding: 10px 22px
    font-size: 14px
    border-radius: 40px
    transition: all 0.3s ease
    background: #fff
    color: #050404
  .btn::before, .btn::after
    content: ""
    display: block
    position: absolute
    width: 10%
    background: #222
    height: 0.2em
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1)
  .btn::before
    right: 20%
    top: -0.21em
    transform: skewX(-45deg)
  .btn::after
    left: 20%
    bottom: -0.21em
    transform: skewX(45deg)
  .btn:hover::before
    right: 80%
  .btn:hover::after
    left: 80%
</style>
