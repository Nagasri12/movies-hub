<template>
  <div class="container sections">
    <div class="row">
      <div class="col-md-6 col-sm-6 col-6 text-left mb-20"><span class="genre-name">{{eachMovieDetails.label}}</span></div>
    </div>
    <div :id="genreName" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(eachMovie, index) in count" :key="index" :class="eachMovie>1?'carousel-item mb-30': 'carousel-item mb-30 active'">
          <div class="row">
            <div class="col-lg-2 col-md-4 col-sm-4 col-6 mb-20" v-for="movie in eachMovieDetails.value.slice(index*6, index*6+6)" :key="movie.id">
              <ImageComponent :cardData="{image: movie.poster_path, rating: movie.vote_average, showName: movie.title, id: movie.id}"></ImageComponent>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev show-carousel left-carousel" :href="`#${genreName}`" role="button" data-slide="prev" v-if="eachMovieDetails.value.length>6">
        <span class="carousel-control-prev-icon carousel-icon" aria-hidden="
        true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next show-carousel right-carousel" :href="`#${genreName}`" role="button" data-slide="next" v-if="eachMovieDetails.value.length>6">
        <span class="carousel-control-next-icon carousel-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
import ImageComponent from './ImageComponent.vue'
export default {
  props: ['eachMovieDetails', 'genreName'],
  components: { ImageComponent },
  name: 'MoviesComponent',
  data () {
    return {
      count: null
    }
  },
  created () {
    if (parseInt((this.eachMovieDetails.value.length / 6).toFixed()) > 5) {
      this.count = 5
    } else {
      this.count = parseInt((this.eachMovieDetails.value.length / 6).toFixed()) === 0 ? 1 : parseInt((this.eachMovieDetails.value.length / 6).toFixed())
    }
  }
}
</script>
<style>
.show-carousel {
  background: #1959a1;
  height: 30px;
  top: 80px !important;
  width: 32px !important;
  border-radius: 15px;
  opacity: 1 !important;
}
.left-carousel {
  left: -37px !important;
}
.right-carousel {
  right: -37px !important;
}
.carousel-icon {
  width: 37% !important;
}
</style>
