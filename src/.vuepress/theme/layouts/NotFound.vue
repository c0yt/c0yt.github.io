<template>
  <SkipLink />
  <CommonWrapper :noSidebar="true">
    <main class="page not-found" id="main-content" :style="background">
      <div class="not-found-content">
        <div class="not-found-hint">
          <p class="error-code" data-t="404">404</p>
          <h1 class="error-title">
            {{ getTitle }}
          </h1>
          <div class="terminal-message">
            <span class="terminal-prompt">&gt;</span>
            <span class="error-hint typewriter">{{ getMsg() }}</span>
            <span class="cursor"></span>
          </div>
        </div>
        <div class="actions">
          <button class="action-button left" @click="goBack">返回上一页</button>
          <button class="action-button right" @click="navigate">
            带我回家
          </button>
        </div>
      </div>
    </main>
  </CommonWrapper>
</template>
<script setup lang="ts">
import { useRouteLocale } from "vuepress/client";
import { useLink } from "vue-router";
import CommonWrapper from "@theme-hope/components/CommonWrapper";
import SkipLink from "@theme-hope/components/SkipLink";
import { useThemeLocaleData } from "@theme-hope/composables/index";
import { ref, computed } from "vue";

const goBack = () => {
  window.history.go(-1);
};
const routeLocale = useRouteLocale();
const themeLocale = useThemeLocaleData();
const { navigate } = useLink({
  to: themeLocale.value.home ?? routeLocale.value,
});
const getTitle = ref(themeLocale.value.routeLocales["notFoundTitle"]);
const getMsg = () => {
  const messages = themeLocale.value.routeLocales["notFoundMsg"];
  return messages[Math.floor(Math.random() * messages.length)];
};
const images = ref(["404_bg_1.png", "404_bg_2.png"]);
const background = computed(() => {
  const randomIndex = Math.floor(Math.random() * images.value.length);
  return {
    backgroundImage: `url(/assets/images/${images.value[randomIndex]})`,
  };
});

</script>
<style scoped lang="scss">
.page.not-found {
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: hope-config.$tablet) {
    align-items: center;
    background-position: top;
  }
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100vw;
  margin: 0 auto;
  padding: calc(var(--navbar-height) + 1rem) 6rem 1rem !important;

  text-align: center;

  .not-found-hint {
    padding: 2rem;

    .error-code {
      margin: 0;
      font-weight: bold;
      font-size: 10rem;
      line-height: 4rem;
      animation: shake 0.6s ease-in-out infinite alternate;
    }

    .error-title {
      margin-top: 6rem;
      font-weight: bold;
    }

    .error-hint {
      margin: 0;
      padding: 12px 0;

      font-weight: 600;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: 2px;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(-1px);
    }

    10% {
      transform: translate(2px, 1px);
    }

    30% {
      transform: translate(-3px, 2px);
    }

    35% {
      transform: translate(2px, -3px);
      filter: blur(4px);
    }

    45% {
      transform: translate(2px, 2px) skewY(-8deg) scaleX(0.96);
      filter: blur(0);
    }

    50% {
      transform: translate(-3px, 1px);
    }
  }
  .error-code:before {
    content: attr(data-t);
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0.34em);
    height: 0.1em;
    line-height: 0.5em;
    width: 100%;
    animation: scan 0.5s ease-in-out 275ms infinite alternate,
      glitch-anim 0.3s ease-in-out infinite alternate;
    overflow: hidden;
    opacity: 0.7;
  }
  @keyframes glitch-anim {
    0% {
      clip: rect(32px, 9999px, 28px, 0);
    }

    10% {
      clip: rect(13px, 9999px, 37px, 0);
    }

    20% {
      clip: rect(45px, 9999px, 33px, 0);
    }

    30% {
      clip: rect(31px, 9999px, 94px, 0);
    }

    40% {
      clip: rect(88px, 9999px, 98px, 0);
    }

    50% {
      clip: rect(9px, 9999px, 98px, 0);
    }

    60% {
      clip: rect(37px, 9999px, 17px, 0);
    }

    70% {
      clip: rect(77px, 9999px, 34px, 0);
    }

    80% {
      clip: rect(55px, 9999px, 49px, 0);
    }

    90% {
      clip: rect(10px, 9999px, 2px, 0);
    }

    to {
      clip: rect(35px, 9999px, 53px, 0);
    }
  }

  @keyframes scan {
    0%,
    20%,
    to {
      height: 0;
      transform: translate(-50%, 0.44em);
    }

    10%,
    15% {
      height: 1em;
      line-height: 0.2em;
      transform: translate(-55%, 0.09em);
    }
  }
  .error-code:after {
    content: attr(data-t);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, 0.34em);
    height: 0.5em;
    line-height: 0.1em;
    width: 100%;
    animation: scan 665ms ease-in-out 0.59s infinite alternate,
      glitch-anim 0.3s ease-in-out infinite alternate;
    overflow: hidden;
    opacity: 0.8;
  }

  .actions {
    margin: 1.5rem 0;
    .left {
      margin-right: 1rem;
    }
    .right {
      margin-left: 1rem;
    }
  }
  .action-button {
    display: inline-block;

    box-sizing: border-box;

    margin: 0.25rem;
    padding: 0.75rem 1.2rem;
    border-width: 0;
    border-bottom: 1px solid var(--theme-color-dark);
    border-radius: 3rem;

    background: var(--theme-color);
    color: var(--white);
    outline: none;

    font-size: 1rem;

    transition: background 0.1s ease;
    &:hover {
      background: var(--theme-color-light);
      cursor: pointer;
    }
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.6s ease, height 0.6s ease;
    }
  
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    
      &::before {
        width: 300px;
        height: 300px;
      }
    }
  
    &:active {
      transform: translateY(0);
    }
  }
}

.terminal-message {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  box-shadow: 
    0 4px 24px -1px rgba(0, 0, 0, 0.1),
    0 1px 2px rgba(255, 255, 255, 0.05) inset;
  margin: 1.5rem 0;
  min-width: 300px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }
}

.error-hint {
  display: inline-block;
  font-family: 'Fira Code', monospace;
  color: var(--text-color);
  font-size: 1.2rem;
  position: relative;
  width: fit-content;
  
  &.typewriter {
    overflow: hidden;
    white-space: nowrap;
    border-right: none;
    width: 0;
    animation: typing 2s steps(40, end) forwards;
  }
}

.cursor {
  display: inline-block;
  width: 8px;
  height: 1.2rem;
  background-color: #50e3eb;
  margin-left: 4px;
  animation: blink 1s step-end infinite;
}

@keyframes typing {
  from { 
    width: 0;
  }
  to { 
    width: 100%;
  }
}

@keyframes blink {
  from, to { 
    opacity: 0;
  }
  50% { 
    opacity: 1;
  }
}

// 适配深色模式
[data-theme="dark"] {
  .terminal-message {
    background: rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.05);
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.3);
    }
  }
  
  .action-button {
    &::before {
      background: rgba(255, 255, 255, 0.1);
    }
  }
}
</style>
