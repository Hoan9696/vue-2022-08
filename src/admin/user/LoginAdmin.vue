<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="text-center"><label class="block text-gray-700 text-xl font-bold mb-4">Login</label></div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2 text-left"
          >Username</label
        >
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
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2 text-left"
          >Password</label
        >
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
          type="password"
          placeholder="Password"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="
            bg-blue-500
            font-bold
            text-white
            hover:bg-blue-700
            py-2
            px-4
            rounded
            focus:outline-none focus:shadow-orange-900
          "
        >
          Sign in
        </button>
        <a
          class="
            inline-block
            align-baseline
            font-bold
            text-sm text-blue-500
            hover:text-blue-800
          "
          >Forgot Password?</a
        >
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">&copy;2020 Phan Văn Hoan</p>
  </div>
</template>

<script>
export default {
  components: {},

  data: () => ({
    //
  }),
};
</script>
