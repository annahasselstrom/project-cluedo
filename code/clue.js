// Objects for suspects

const mrGreen = {
  firstName: 'Jacob',
  lastName: 'Green',
  color: 'green',
  description: 'He is connected.',
  age: 'Age: ' + '45',
  image: 'assets/green.png',
  occupation: 'Occupation: entrepreneur',
  favouriteWeapon: 'knife'
}

const colonelMustard = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is an old-school army man.',
  age: 'Age: ' + '62',
  image: 'assets/mustard.png',
  occupation: 'Occupation: officer',
  favouriteWeapon: 'dumbbell'
}

const mrsPeacock = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She has many secrets.',
  age: 'Age: ' + '43',
  image: 'assets/peacock.png',
  occupation: 'Occupation: artist',
  favouriteWeapon: 'candlestick'
}

const mrPlum = {
  firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'He loves his bees.',
  age: 'Age: ' + '29',
  image: 'assets/plum.png',
  occupation: 'Occupation: biologist',
  favouriteWeapon: 'poison'
}

const msScarlet = {
  firstName: 'Cassandra',
  lastName: 'Scarlet',
  color: 'pink',
  description: 'She is super-smart.',
  age: 'Age: ' + '26',
  image: 'assets/scarlet.png',
  occupation: 'Occupation: journalist',
  favouriteWeapon: 'bat'
}

const mrsWhite = {
  firstName: 'Evie',
  lastName: 'White',
  color: 'white',
  description: 'She is no old biddy.',
  age: 'Age: ' + '62',
  image: 'assets/white.png',
  occupation: 'Occupation: housekeeper',
  favouriteWeapon: 'axe'
}

// Objects for weapons

const rope = {
  name: 'rope',
  weight: '10'
}

const knife = {
  name: 'knife',
  id: 'knife',
  weight: '5'
}

const candlestick = {
  name: 'candlestick',
  weight: '25'
}

const dumbbell = {
  name: 'dumbbell',
  id: 'dumbbell',
  weight: '30'
}

const poison = {
  name: 'poison',
  id: 'poison',
  weight: '5'
}

const axe = {
  name: 'axe',
  id: 'axe',
  weight: '25'
}

const bat = {
  name: 'bat',
  id: 'bat',
  weight: '20'
}

const trophy = {
  name: 'trophy',
  weight: '30'
}

const pistol = {
  name: 'pistol',
  weight: '25'
}


// Arrays for suspects, weapons and rooms

const suspects = [
  mrGreen,
  mrsWhite,
  mrPlum,
  msScarlet,
  mrsPeacock,
  colonelMustard
]

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
]

const rooms = [
  'diningroom', 
  'conservatory', 
  'kitchen', 
  'study', 
  'library', 
  'billiardroom', 
  'lounge', 
  'ballroom', 
  'hall', 
  'spa', 
  'livingroom', 
  'observatory', 
  'theatre', 
  'guesthouse', 
  'patio'
]

// Selects randomly one item from the array passed into the function

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
};

// Creates an object that stores the mystery 
// The values will be set later.

const mystery = {
  killer: undefined,
  weapon: undefined,
  room: undefined,
};

// FUNCTION - this function will run when you click on the killer card.

const pickKiller = () => {
  mystery.killer = randomSelector(suspects);
  document.getElementById('loaderKiller').style.display = 'block';
  setTimeout(afterLoaderPickKiller, 1600);
};
  
document.getElementById('killerImage').style.filter = 'sepia(100%)';
document.getElementById('loaderKiller').style.display = 'none'; // prevents loader to begin when page is loaded
document.getElementById('killerCard').addEventListener('click', pickKiller); // allows us to connect en event when clicked to the killer card

// FUNCTION - this function runs when loader is done.

const afterLoaderPickKiller = () => {
  document.getElementById('killerImage').style.filter = 'sepia(0%)';
  document.getElementById('loaderKiller').style.display = 'none';
  document.getElementById('killerCard').removeEventListener('click', pickKiller);

// FUNCTION - this function randomly changes each killer's favourite weapon.

  const shuffleFavouriteWeapon = () => {
    mystery.favouriteWeapon = randomSelector(weapons);
  };
 
// This calls/executes the above function.

  shuffleFavouriteWeapon();

// These connects the js and the html, and outputs in browser.

  document.getElementById('favouriteWeapon').innerHTML = `Favourite weapon: ${mystery.favouriteWeapon.name}`;
  document.getElementById('killerCard').style.background = mystery.killer.color;
  document.getElementById('killerName').innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`; 
  document.getElementById('killerImage').src = mystery.killer.image;
  document.getElementById('killerAge').innerHTML = mystery.killer.age; 
  document.getElementById('killerOccupation').innerHTML = mystery.killer.occupation; 
  document.getElementById('killerDescription').innerHTML = mystery.killer.description; 
};

// FUNCTION - this function will runs when you click on the weapon card.

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  document.getElementById('loaderWeapon').style.display = 'block';
  setTimeout(afterLoaderPickWeapon, 1600);
};

document.getElementById('loaderWeapon').style.display = 'none';
document.getElementById('weaponCard').addEventListener('click', pickWeapon);

// FUNCTION - this function runs when loader is done.

const afterLoaderPickWeapon = () => {
  document.getElementById('loaderWeapon').style.display = 'none';
  document.getElementById('weaponCard').removeEventListener('click', pickWeapon);
  document.getElementById('weaponName').innerHTML = `${mystery.weapon.name}`;
};

// FUNCTION - this function runs when you click on the room card.

const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  document.getElementById('loaderRoom').style.display = 'block';
  setTimeout(afterLoaderPickRoom, 1600);
};

document.getElementById('loaderRoom').style.display = 'none';
document.getElementById('roomCard').addEventListener('click', pickRoom);

// FUNCTION - This function runs when loader is done.

const afterLoaderPickRoom = () => {
  document.getElementById('loaderRoom').style.display = 'none';
  document.getElementById('roomCard').removeEventListener('click', pickRoom);
  document.getElementById('roomName').innerHTML = `${mystery.room}`;
};

// Creates a function - revealMystery - that runs when you click reveal button.

const revealMystery = () => {
    if (mystery.killer === undefined || mystery.weapon === undefined || mystery.room === undefined) {
    document.getElementById('revealButton').innerHTML = 'Please, pick killer, weapon and room.';
  }  else {
    document.getElementById('mystery').innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName} with the ${mystery.weapon.name} in the ${mystery.room}.`
  }
};