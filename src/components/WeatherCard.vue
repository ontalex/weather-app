<script setup>

import {computed} from "vue";

const props = defineProps({
    temperature: Number,
    temperatureHigh: Number,
    temperatureLower: Number,
    location: String,
    weatherState: String
})

const iconWeather = computed(() => {
    switch (props.weatherState) {
        case "Mid Rain":
            return "/imgs/wethers/icon_cloud_rain.png";
        case "Fast Wind":
            return "/imgs/wethers/icon_night_wind.png";
        case "Thunderstorm":
            return "/imgs/wethers/icon_cloud_storm.png";
        case "Cloudy":
            return "/imgs/wethers/icon_night_cloud_rain.png";
    }
})

</script>

<template>
    <div class="wether__card">
        <div class="card__header">
            <div class="card__temperature">{{temperature}}°</div>
            <img class="card__icon" :src="iconWeather" alt="mid rain icon">
        </div>
        <div class="card__main">
            <div class="card__minmax">
                <span class="temperature">H:{{ temperatureHigh }}°</span>
                <span class="temperature">L:{{ temperatureLower }}°</span>
            </div>
            <div class="card__info">
                <span class="info__location">{{ location }}</span>
                <span class="info__state">{{ weatherState }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wether__card {
    background-image: url("/imgs/bg_card.svg");
    background-position: bottom;
    background-size: contain;
    background-repeat: no-repeat;

    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;

    aspect-ratio: 1.581 / 1;

    position: relative;

    font-family: var(--font-family-display);
}

.card__header {
    display: flex;
    justify-content: space-between;
    align-items: end;
}

.card__temperature {
    font-family: sans-serif;
    font-size: 64px;
    font-weight: 400;
    line-height: 70px;
    letter-spacing: 0.37400001287460327px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    color: #fff;
}

.card__icon {
    max-width: 130px;
    min-width: 45px;
    margin-right: -20px;

    aspect-ratio: auto 1 / 1;
}

.card__main {
    margin-top: 20px;
}

.card__minmax {
    display: flex;
    gap: 10px;
}

.temperature {
    color: #EBEBF599;
    font-size: 13px;
}

.card__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;

    color: #fff;
}

.info__location {
    font-size: 17px;
}

.info__state {
    font-size: 13px;
}
</style>