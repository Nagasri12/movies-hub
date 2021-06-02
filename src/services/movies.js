import CommonService from './index.js'
const baseURL = 'https://api.themoviedb.org/3/movie'
export default {
  getTopRatedMovies () {
    const response = CommonService.getData(`${baseURL}/top_rated?api_key=4cea3d2bb3d43351866777e99126d386&language=en-US&page=1`).then((res) => {
      return res
    })
    return response
  },
  getUpcomingMovies () {
    const response = CommonService.getData(`${baseURL}/upcoming?api_key=4cea3d2bb3d43351866777e99126d386&language=en-US&page=1`).then((res) => {
      return res
    })
    return response
  }
}
