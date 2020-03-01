export const state = () => ({
  loading: true
})

export const getters = {
  getLoading: (state) => {
    return state.loading
  }
}
