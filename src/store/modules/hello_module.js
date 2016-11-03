const HelloModule = {
  state: {
    message: 'Hello'
  },
  mutations: {
    WELCOME_MESSAGE (state, payload) {
      state.message = payload.message
    }
  },
  actions: {
    WELCOME_MESSAGE (context, payload) {
      context.commit('WELCOME_MESSAGE', payload)
    }
  }
}

export default HelloModule
