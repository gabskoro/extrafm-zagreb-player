import Vue from 'vue';
import Typed from 'typed.js';

import template from './song-info.html';
import './song-info.scss';

const SongInfoComponent = Vue.component('songInfo', {
  template,

  props: {
    currentSong: {
      type: String,
      required: true
    }
  },

  data: function() {
    return {
      typed: Typed
    }
  },

  mounted: function() {
    this.updateSong(this.currentSong);
  },

  watch: {
    currentSong: function(newSong, oldSong) {
      // We fetch every Config.CURRENT_SONG_REFRESH_RATE minutes, if it's still the same song,
      // don't update the field
      if (newSong !== oldSong) {
        this.updateSong(newSong);
      }
    }
  },

  methods: {
    updateSong: function(song) {
      // There is no way to dynamically update the text so we destroy the instance
      // if it exists and create a new one
      if (this.typed.constructor === Typed) {
        this.typed.destroy();
      }

      this.typed = new Typed('.song-info__currently-playing', {
        strings: [song],
        typeSpeed: 40,
        showCursor: false
      });
    }
  }
});

export default SongInfoComponent;
