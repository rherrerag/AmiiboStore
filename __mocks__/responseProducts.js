const responseOK = {
  data: [
    {
      amiiboSeries: 'Mario Sports Superstars',
      character: 'Metal Mario',
      gameSeries: 'Mario Sports Superstars',
      head: '09d00401',
      image:
        'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00401-02bc0e02.png',
      name: 'Metal Mario - Golf',
      price: 58720,
      release: {
        au: '2014-11-29',
        eu: '2014-11-28',
        jp: '2014-12-06',
        na: '2014-11-21',
      },
      tail: '02bc0e02',
      type: 'Card',
    },
  ],
  error: false,
  isCancel: false,
};

const responseError = {
  data: {message: 'Error', code: 'ERR'},
  error: true,
};

export {responseOK, responseError};
