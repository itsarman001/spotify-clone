<script setup>
import DefaultUser from '@/components/icons/DefaultUser.vue'
import { useSpotifyStore } from '@/stores/spotifyStore'
const spotifyStore = useSpotifyStore()

const user = spotifyStore.getUser
console.log('Current User is: ', user)

const emit = defineEmits(['navigateToProfile', 'logout'])
</script>
<template>
  <div class="template">
    <div
      tabindex="0"
      class="popup button"
      style="
        padding: 0 0.225rem 0;
        border-top-right-radius: 1.2rem;
        border-bottom-right-radius: 1.2rem;
      "
    >
      <div class="popup-header">
        <p style="letter-spacing: 1px; font-weight: 600; padding: 0.625rem 0rem 0.625rem 0.825rem">
          {{ user?.display_name || 'User' }}
        </p>
        <template v-if="user?.images?.length">
          <img
            :src="user?.images[0]?.url"
            height="32"
            width="32"
            class="rounded-full"
            :alt="user?.display_name || 'user profile'"
          />
        </template>
        <template v-else>
          <DefaultUser />
        </template>
      </div>

      <div class="popup-main">
        <ul class="list-box">
          <li class="button item" @click="emit('navigateToProfile')">My Profile</li>
          <li class="button item" @click="emit('logout')">Logout</li>
          <ul></ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* From Uiverse.io by withyzu */
.template {
  /* ------------------------------------------------------------ */
  /* fill */
  --fill: #0000;
  --fill-hover: hsla(0, 0%, 45%, 0.1);
  --fill-active: hsl(0, 0%, 10%);
  /* txt */
  --txt: #eee;
  /*-------------------------*/
  --br: 0.325rem;
  --gap: 0.275rem;
  /* ---------------------------------------------------------- */
  display: flex;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 0.975rem;
  color: var(--txt);
}

/* button */
.button {
  display: inline-block;
  list-style-type: none;
  list-style: none;
  appearance: none;
  outline: 0;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  font-size: inherit;
  color: inherit;
  white-space: nowrap;
  padding: calc(var(--gap) * 3) calc(var(--gap) * 5);
  text-align: left;
  background-color: var(--fill);
  border-radius: var(--br);
}

.button:hover {
  background-color: var(--fill-hover);
}

.button:focus,
.button:active,
.button.active {
  background-color: var(--fill-active);
}

/* popup */
.popup {
  position: relative;
}

.popup-header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: calc(var(--gap) * 3);
}

.popup-main {
  position: absolute;
  top: 100%;
  right: 0;
  opacity: 0;
  margin-top: var(--gap);
  border-radius: var(--br);
  padding: var(--gap);
  background-color: hsl(0, 0%, 10%);
  box-shadow: hsl(0, 0%, 12%) 0px 0px 0px 1px;
  transition: 0.4s;
}

.popup:focus .popup-main {
  margin-top: 1rem;
  opacity: 1;
}

.list-box {
  display: flex;
  flex-direction: column;
}
</style>
