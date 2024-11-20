<script setup>
</script>

<template>
    <div class="app">
        <div class="app-content">
            <div class="app-location">Москва</div>
            <div class="app-temperature">19°</div>
        </div>
        <img role="figure" src="/imgs/img_house.png" alt="house" class="house">
    </div>
</template>

<style scoped>
@import "src/fonts.css";

.app {
    background: url("/imgs/bg_sky.png");
    background-size: cover;
    box-shadow: -40px 60px 150px 0px #3B267BB2;
}

.app-content {
    color: white;
    text-align: center;

    font-family: var(--font-family-display);

    margin-top: 120px;

    z-index: 1000;
    position: relative;
}

.app-location {
    font-size: 34px;
    font-weight: 400;
}

.app-temperature {
    font-size: 96px;
    font-weight: 200;
}

.house {
    width: 100%;
    bottom: 0;
    position: absolute;
    margin-bottom: -20px;

    aspect-ratio: auto 2.16 / 1;
    z-index: 500;
}
</style>
