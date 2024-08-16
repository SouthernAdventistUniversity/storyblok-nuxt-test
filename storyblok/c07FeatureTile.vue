<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div class="third feature" v-editable="blok">
    <div class="feature-icon">
      <a :title="blok.title" target="" href="">
        <figure class="fa-solid" :class="`fa-${blok.icon}`"></figure>
      </a>
    </div>
    <div class="feature-title">
      <a title="" target="" class="feature-link" href="">{{ blok.title }}</a>
    </div>
    <p class="feature-description">{{ blok.description }}</p>
  </div>
</template>

<style scoped>
/* C7 Feature Tile Grid */
.feature-tile {
  flex-wrap: wrap;
}

.feature-tile .feature {
  text-align: center;
  padding: 30px 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-icon {
  transform: rotate(45deg);
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.feature-icon a {
  width: 70px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-evergreen);
  border: solid 3px var(--color-evergreen);
  transition: background-color 300ms;
  text-decoration: none;
  box-sizing: unset;
}

.feature-icon a:hover {
  transition: background-color 300ms;
  background-color: #fff;
}

.feature-icon a[href=""]:hover,
.feature-icon a[href="#"]:hover {
  background-color: var(--color-evergreen);
}

.feature-icon span {
  font-size: 38px;
  color: var(--color-lime);
  transform: rotate(-45deg);
}

.feature-icon figure {
  font-size: 38px;
  color: var(--color-lime);
  transform: rotate(-45deg);
}

.feature p {
  line-height: 1.5;
  font-size: 0.9em;
}

.feature .feature-title a {
  color: var(--color-evergreen);
  font-weight: 600;
  margin: 0 0 0 0;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 1.4;
}

.feature a[href=""] {
  cursor: default;
}

.feature .feature-title a:hover {
  text-decoration: underline;
}

.feature a[href=""]:hover,
.feature a[href="#"]:hover {
  text-decoration: none;
}

.feature-title p {
  font-weight: 600;
  margin: 0 0 5px 0;
}

@media (max-width: 900px) {
  .feature-tile {
    flex-direction: column;
    align-items: center;
  }

  .feature-tile .feature {
    width: 400px;
    max-width: 100%;
  }
}

@media (max-width: 400px) {
  .feature-tile .feature {
    padding: 30px 15px;
  }
}

@media not all and (min-resolution: 0.001dpcm) {
  .feature-icon {
    transform: rotate(45deg);
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  .feature-icon a {
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-evergreen);
    border: solid 3px var(--color-evergreen);
    transition: background-color 300ms;
    text-decoration: none;
  }

  .feature-icon figure {
    font-size: 38px;
    color: var(--color-lime);
    transform: rotate(-45deg);
  }
}

/* End C7 Feature Tile Grid */
</style>
