const strCount = (str, letter) => str.split('').reduce((count, el) => el === letter ? ++count : count, 0);
