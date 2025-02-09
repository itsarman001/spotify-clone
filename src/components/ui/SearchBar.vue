<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import { ref } from 'vue'

const search = ref('')
</script>

<template>
  <div class="flex items-center space-x-2 p-2 rounded-full bg-secondary hover:bg-secondary-hover">
    <BaseInput
      v-model="search"
      type="text"
      placeholder="Search for artists, songs, or podcasts"
      class="flex-1 text-text bg-transparent focus:outline-none w-72"
    >
      <template #prepend>
        <div>
          <template v-if="search">
            <CloseIcon
              @click="search = ''"
              class="w-6 h-6 text-white cursor-pointer"
              fill="white"
            />
          </template>
          <template v-else>
            <SearchIcon class="w-6 h-6 text-white" fill="white" />
          </template>
        </div>
      </template>
    </BaseInput>
  </div>
</template>
