import Vue from 'vue'
import Vuex from 'vuex'
import MovieService from '../services/movies.js'

Vue.use(Vuex)
export const state = {
  movieDetails: []
}
export const mutations = {
  SET_TOPRATEDMOVIES (state, data) {
    state.movieDetails.push({ label: 'Top rated movies', value: data })
  },
  SET_UPCOMINGMOVIES (state, data) {
    state.movieDetails.push({ label: 'Upcoming movies', value: data })
  }
}
export const actions = {
  async getTopRatedMoviesList ({ commit, state }) {
    const movies = await MovieService.getTopRatedMovies()
    commit('SET_TOPRATEDMOVIES', movies.data.results)
  },
  async getUpcomingMoviesList ({ commit, state }) {
    const movies = await MovieService.getUpcomingMovies()
    commit('SET_UPCOMINGMOVIES', movies.data.results)
  }
}
const store = new Vuex.Store({
  mutations,
  actions,
  state
})
export default store
