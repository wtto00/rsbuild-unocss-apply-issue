<template>
  <div className="content">
    <h1>Rsbuild with React</h1>
    <p>Start building amazing things with Rsbuild.</p>
    <span className="hover:(c-red text-16) hover-font-bold hover:bg-pink">default style</span>
  </div>
</template>

<style>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>