import Vue from 'vue';

import './assets/stylesheets/app.scss';
import WidgetPlayerComponent from './components/widget-player/widget-player.component';

new Vue({
  el: '#app',
  components: {
    WidgetPlayerComponent
  },
  template: '<widget-player></widget-player>'
});
