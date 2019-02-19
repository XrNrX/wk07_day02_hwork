import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: '#app',
    data: {
      beers: [],
      selectedBeer: null,
      beerByIndex: '',
      favouriteBeer: []
    },
    mounted: function (){
      this.getBeer()
    },
    methods: {
      getBeer: function () {
        fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(beerInfo => this.beers = beerInfo)
      },
      findBeer: function () {
        this.selectedBeer = this.beers[this.beerByIndex];
      },
      addFavouriteBeer: function () {
        this.favouriteBeer.push(this.selectedBeer);
      },
      removeBeer: function () {
        let index = this.favouriteBeer.indexOf(this.selectedBeer);
        this.favouriteBeer.splice(index, 1)
      }
    }
  })
})
