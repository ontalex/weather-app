<template>
    <div class="app">
        <div class="app__head">
            <h1 class="app__header">Weather</h1>
            <label class="app__search" for="search">
                <img src="/imgs/icon_search.svg" alt="">
                <input type="text" name="search" id="search" placeholder="Search for a city or airport"
                       autocomplete="address-level1">
            </label>
        </div>
        <div class="app__list">

            <WeatherCard
                v-for="card of data"
                :location="card.location"
                :temperature-high="card.temperatureHigh"
                :temperature-lower="card.temperatureLower"
                :temperature="card.temperature"
                :weather-state="card.weatherState"
            />

        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import WeatherCard from "../../components/WeatherCard.vue";

const data = ref([
    {
        temperature: 19,
        temperatureHigh: 24,
        temperatureLower: 18,
        location: "Bengaluru, India",
        weatherState: "Mid Rain"
    },
    {
        temperature: 22,
        temperatureHigh: 26,
        temperatureLower: 18,
        location: "Chennai, India",
        weatherState: "Fast Wind"
    },
    {
        temperature: 20,
        temperatureHigh: 16,
        temperatureLower: 23,
        location: "Mumbai, India",
        weatherState: "Thunderstorm"
    },
    {
        temperature: 29,
        temperatureHigh: 32,
        temperatureLower: 27,
        location: "Delhi, India",
        weatherState: "Cloudy"
    }
]);
</script>

<style lang="css" scoped>

.app {
    background: linear-gradient(180deg, #2E3358, #1C1B33);
    box-shadow: -40px 60px 150px 0px #3B267BB2;
    font-family: sans-serif;

    padding: 0 16px;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
}

.app__header {
    font-size: 28px;
    font-weight: 400;
    line-height: 34px;
    text-align: left;

    color: #fff;

    margin-left: 30px;

    font-family: var(--font-family-text);
}

.app__search {
    background: linear-gradient(180deg, #2E3358, #1C1B33);
    box-shadow: 0px 4px 4px 0px #00000040 inset;

    display: flex;
    align-items: center;
    gap: 5px;

    padding: 7px 8px;

    border-radius: 10px;
}

.app__search img {
    width: 15px;
}

.app__search input {
    width: 100%;
    background: transparent;
    border: 0;

    color: #EBEBF599;

    font-size: 17px;
    line-height: 20px;

    font-family: var(--font-family-text);
}

.app__search input:focus {
    border: 0;
    outline: 0;
}

.app__list {
    padding: 20px;
    overflow-y: auto;
    margin: 16px 0;
    border-radius: 40px;
    //background: #000;
}

.app__list::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}
.app__list::-webkit-scrollbar-track {
    background-color: transparent;
}
.app__list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.46);
    backdrop-filter: blur(2px);
}

</style>