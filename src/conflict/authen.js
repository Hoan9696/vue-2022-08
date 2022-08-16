const checkAuthen = () => {
  if (!isAuthenticated) {
    this.$router.push('/login')
  }
}

export default checkAuthen();