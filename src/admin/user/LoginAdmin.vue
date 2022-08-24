<template>
  <div class="w-full max-w-sm">
    <form class="from-card">
      <div class="text-center">
        <label class="title-card">Login</label>
      </div>
      <div class="mb-4">
        <label class="input-label">Username</label>
        <input class="input-text" type="text" placeholder="Username" />
      </div>
      <div class="mb-6">
        <label class="input-label">Password</label>
        <input class="input-text" type="password" placeholder="Password" />
      </div>
      <div class="flex items-center justify-between">
        <button class="button-primary">Sign in</button>
        <a class="link-primary" @click="register">Register</a>
        <a class="link-primary" @click="changPassword">Forgot Password?</a>
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
  methods: {
    register() {
      this.$router.push("/register");
    },
    changPassword() {
      this.$router.push("/change-password");
    },
  },
};
</script>

<style scoped>
body {
  /* font-family: "Open Sans", sans-serif; */
  /* font-family: "Montserrat", sans-serif; */
}
</style>
