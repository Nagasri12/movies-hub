<template>
  <div class="pt-30">
    <div v-for="(eachMovie, index) in movieDetails" :key="index">
      <MoviesComponent :eachMovieDetails="eachMovie" :genreName="eachMovie.label" :key="index"></MoviesComponent>
    </div>
  </div>
  <!-- <div class="pt-30">
    <MoviesComponent v-if="topRatedMovies.length>0" :eachMovieDetails="topRatedMovies" :genreName="'toprated'"></MoviesComponent>
    <MoviesComponent :eachMovieDetails="upcomingMovies" :genreName="'upcoming'"></MoviesComponent>
  </div> -->
</template>
<script>
import MoviesComponent from '../components/MoviesComponent.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Movies',
  components: { MoviesComponent },
  computed: { ...mapState(['movieDetails']) },
  methods: {
    ...mapActions([
      'getTopRatedMoviesList',
      'getUpcomingMoviesList'
    ])
  },
  async mounted () {
    await this.getTopRatedMoviesList()
    await this.getUpcomingMoviesList()
  }
}
</script>
<style>
</style>
