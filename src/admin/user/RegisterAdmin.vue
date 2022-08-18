<template>
  <div class="w-full max-w-sm">
    <form class="from-card">
      <div class="text-center">
        <label class="title-card">Register</label>
      </div>
      <div class="mb-1">
        <label class="input-label">Username</label>
        <input class="input-text" type="text" placeholder="Username" />
      </div>
      <div class="mb-1">
        <label class="input-label">Password</label>
        <input class="input-text" type="password" placeholder="Password" />
      </div>
      <div class="mb-1">
        <label class="input-label">Email</label>
        <input class="input-text" type="email" placeholder="Email" />
      </div>
      <div class="mb-1">
        <label class="input-label">Phone</label>
        <input class="input-text" type="text" placeholder="Phone" />
      </div>
      <div class="mb-1">
        <label class="input-label">Birthday</label>
        <input class="input-text" type="Date" placeholder="Birthday" />
      </div>
      <div class="mb-6">
        <label class="input-label">Sex</label>
        <div class="flex items-center justify-between input-text">
          <div class="px-1">
            <input class="cursor-pointer" type="radio" name="sex" value="1" />
            Nam
          </div>
          <div class="px-1">
            <input class="cursor-pointer" type="radio" name="sex" value="0" />
            Nữ
          </div>
          <div class="px-1">
            <input class="cursor-pointer" type="radio" name="sex" value="2" />
            Khác
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button class="button-primary">Register</button>
        <a class="link-primary" @click="login">Login</a>
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
    login() {
      this.$router.push("/login")
    }
  }
};
</script>
