import Vue from 'vue';
import { Howl } from 'howler';
import Axios from 'axios';

import template from './widget-player.html';
import Config from 'config';
import './widget-player.scss';
import PlayButtonComponet from 'components/play-button/play-button.component';
import SongInfoComponet from 'components/song-info/song-info.component';

const WidgetPlayerComponent = Vue.component('widgetPlayer', {
  template,

  components: {
    PlayButtonComponet,
    SongInfoComponet
  },

  data: function() {
    return {
      player: Howl,
      currentSongInfo: '-'
    }
  },

  created: function() {
    this.player = new Howl({
      src: [Config.HOST],
      format: ['aac'],
      autoplay: true,
      html5: true
    });

    this.setCurrentSongInfo();
  },

  methods: {
    onPlayToggle: function() {
      if (this.player.playing()) {
        this.player.pause();
        return;
      }

      this.player.play();
    },

    prepareCurrentSongInfo: function() {
      setInterval(() => {
        this.setCurrentSongInfo();
      }, Config.CURRENT_SONG_REFRESH_RATE);
    },

    setCurrentSongInfo: function() {
      Axios.get(Config.CURRENT_SONG_HOST).then(({ data }) => {
        this.currentSongInfo = data;
      });
    }
  }
});

export default WidgetPlayerComponent;
