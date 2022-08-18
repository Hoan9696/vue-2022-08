<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2 text-left">{{
      textLabel
    }}</label>
    <input
      class="
        shadow
        appearance-none
        border
        rounded
        w-full
        py-2
        px-3
        text-gray-700
        leading-tight
        mb-3
        focus:outline-none focus:shadow-blue-600
      "
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
export default {
  name: "grTextField",
  props: {
    textLabel: String,
    placeholder: String,
  },
};
</script>
<style scoped>
</style>