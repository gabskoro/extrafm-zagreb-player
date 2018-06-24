import Vue from 'vue';
import { Howl } from 'howler';

import template from './play-button.html';
import './play-button.scss';

const PlayButtonComponent = Vue.component('playButton', {
  template,

  props: {
    player: {
      type: Howl,
      default: {}
    }
  },

  computed: {
    isPlaying: function() {
      return this.player.playing();
    },

    playingText: function() {
      return this.isPlaying ? 'Pauziraj' : 'Sviraj';
    }
  },

  methods: {
    toggleMusic: function() {
      this.$emit('on-play-toggle');
    }
  }
});

export default PlayButtonComponent;
