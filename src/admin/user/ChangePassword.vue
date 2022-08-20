<template>
  <div class="w-full max-w-sm">
    <form class="from-card">
      <div class="text-center">
        <label class="title-card">Change Passwrd</label>
      </div>
      <div class="mb-4">
        <label class="input-label">Username</label>
        <input class="input-text" type="text" placeholder="Username" />
      </div>
      <div class="mb-6">
        <label class="input-label">Password</label>
        <input class="input-text" type="password" placeholder="Password" />
      </div>
      <div class="mb-6">
        <label class="input-label">Confirm Password</label>
        <input class="input-text" type="password" placeholder="Password" />
      </div>
      <div class="flex items-center justify-between">
        <button class="button-primary">Change password</button>
        <a class="link-primary" @click="register">Register</a>
        <a class="link-primary" @click="login">Login</a>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">&copy;2020 Phan Văn Hoan</p>
  </div>
</template>

<script>
export default {
  components: {},

  data: () => ({}),
  methods: {
    register() {
      this.$router.push("/register")
    },
    login() {
      this.$router.push("/login")
    },
  }
};
</script>
