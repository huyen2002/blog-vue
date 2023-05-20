<template>
  <div class="fixed inset-0 z-50 bg-slate-300/50 flex">
    <div
      class="px-4 py-6 rounded-md shadow-sm bg-white shadow-sm justify-center items-center m-auto w-1/3"
    >
      <div class="flex flex-col gap-3">
        <slot />
        <div class="flex justify-between mt-5">
          <button
            @click="props.handleSuccess()"
            class="py-2 px-4 rounded-lg bg-button hover:bg-buttonHover text-white text-sm"
          >
            OK
          </button>
          <button
            @click="props.handleCancel()"
            class="py-2 px-4 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm"
          >
            Huỷ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  handleSuccess: () => void
  handleCancel: () => void
}>()
</script>
