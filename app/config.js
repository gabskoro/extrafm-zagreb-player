const Config = {
  HOST: 'http://streams.extrafm.hr:8110/stream',
  // Couldn't find any reliable proxy service so,
  // cross origin was allowed adding the webSecurity property in the main.js
  CURRENT_SONG_HOST: 'http://streams.extrafm.hr:8110/currentsong',
  // I think every 1 minute is enough
  CURRENT_SONG_REFRESH_RATE: 1 * 60 * 1000
}

export default Config;
