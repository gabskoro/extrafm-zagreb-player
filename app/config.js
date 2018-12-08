const Config = {
  HOST: 'http://streams.extrafm.hr:8110/stream',
  // Cross origin is not allowed, so I'm using a proxy service to bypass it
  CURRENT_SONG_HOST: 'https://cors.io/?http://streams.extrafm.hr:8110/currentsong',
  // I think every 1 minute is enough
  CURRENT_SONG_REFRESH_RATE: 1 * 60 * 1000
}

export default Config;
