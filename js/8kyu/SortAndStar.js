const twoSort = (s) => s.sort()[0].split('').map((el, index) => index !== 0 ? '***' + el : el).join('');
