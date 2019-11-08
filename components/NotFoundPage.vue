<template>
  <div>
    <h2>Sorry</h2>
    <h4>Looks like you're lost...</h4>
    <p>You can either return to the previous page or visit our homepage.</p>
    <a href="/" class="btn">go to homepage</a>
  </div>
</template>

<style scoped>
div {
  background: url(../img/error.jpg) no-repeat top;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 17px;
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  position: relative;
}
h2 {
  font-size: 5.5em;
  text-transform: uppercase;
  font-weight: 100;
  margin-bottom: 20px;
  margin-top: 500px;
}
h4 {
  font-size: 25px;
  line-height: 25px;
  color: #eee;
  font-weight: 400;
}
p {
  color: #c5c5c5;
  line-height: 25px;
  margin-top: 15px;
  margin-bottom: 30px;
}
.btn {
  cursor: pointer;
  position: relative;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  border: 2px solid #fff;
  padding: 10px 22px;
  font-size: 14px;
  border-radius: 40px;
  transition: all 0.3s ease;
  background: #fff;
  color: #050404;
}
.btn::before,
.btn::after {
  content: "";
  display: block;
  position: absolute;
  width: 10%;
  background: #222;
  height: 0.2em;
  transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
}

.btn::before {
  right: 20%;
  top: -0.21em;
  transform: skewX(-45deg);
}

.btn::after {
  left: 20%;
  bottom: -0.21em;
  transform: skewX(45deg);
}

.btn:hover::before {
  right: 80%;
}

.btn:hover::after {
  left: 80%;
}
</style>