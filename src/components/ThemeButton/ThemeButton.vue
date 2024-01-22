<template>
    <div>
        <input @change="toggleTheme" id="checkbox" type="checkbox" class="switch-checkbox" />
        <label for="checkbox" class="switch-label">
            <span>🌙</span>
            <span>☀️</span>
            <div class="switch-toggle" :class="{ 'switch-toggle-checked': userTheme === 'dark' }"></div>
        </label>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const userTheme = ref('light')

const getThemeStorage = () => {
    return localStorage.getItem('user-theme')
}

const getMediaPreferenceDevice = () => {
    const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    return hasDarkPreference ? 'dark' : 'light'
}

const initUserTheme = getThemeStorage() || getMediaPreferenceDevice()

const toggleTheme = () => {
    const activeTheme = localStorage.getItem('user-theme')
    setTheme(activeTheme === 'light' ? 'dark' : 'light')
}

const setTheme = (theme) => {
    localStorage.setItem('user-theme', theme)
    userTheme.value = theme
    document.documentElement.className = theme
}

onMounted(() => {
    setTheme(initUserTheme)
})
</script>

<style scoped>
* {
    box-sizing: initial;
}

.switch-checkbox {
    display: none;
}

.switch-label {
    align-items: center;
    background: var(--color-text);
    border: calc(var(--element-size) * 0.025) solid var(--accent-color);
    border-radius: var(--element-size);
    cursor: pointer;
    display: flex;
    font-size: calc(var(--element-size) * 0.3);
    height: calc(var(--element-size) * 0.35);
    position: relative;
    padding: calc(var(--element-size) * 0.1);
    transition: background 0.5s ease;
    justify-content: space-between;
    width: var(--element-size);
    z-index: 1;
}

.switch-toggle {
    position: absolute;
    background-color: var(--color-background);
    border-radius: 50%;
    top: calc(var(--element-size) * 0.07);
    left: calc(var(--element-size) * 0.07);
    height: calc(var(--element-size) * 0.4);
    width: calc(var(--element-size) * 0.4);
    transform: translateX(0);
    transition:
        transform 0.3s ease,
        background-color 0.5s ease;
}

.switch-toggle-checked {
    transform: translateX(calc(var(--element-size) * 0.6)) !important;
}
</style>
