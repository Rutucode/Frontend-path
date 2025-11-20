//forEach() is js method to iterate arrays

const characters = [
  {
    title: "Ninja",
    emoji: "🥷",
    powers: ["agility", "stealth", "aggression"],
  },
  {
    title: "Sorcerer",
    emoji: "🧙",
    powers: ["magic", "invisibility", "necromancy"],
  },
  {
    title: "Ogre",
    emoji: "👹",
    powers: ["power", "stamina", "shapeshifting"],
  },
  {
    title: "Unicorn",
    emoji: "🦄",
    powers: ["flight", "power", "purity"],
  },
];

// for (let character of characters){
//     console.log(character)
// }

characters.forEach(function (character) {
  console.log(character.title);
});

characters.powers.forEach(function (power) {
  console.log(power);
});
