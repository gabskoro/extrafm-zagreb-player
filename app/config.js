const Config = {
  HOST: 'http://streams.extrafm.hr:8110/stream',
  // It's cross origin, so using my proxy here
  CURRENT_SONG_HOST: 'http://proxy.gabrijelskoro.com/?url=http://streams.extrafm.hr:8110/currentsong',
  // I think every 1 minute is enough
  CURRENT_SONG_REFRESH_RATE: 1 * 60 * 1000
};

export default Config;
