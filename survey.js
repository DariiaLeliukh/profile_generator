const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const output = {};

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  output.name = name;
  rl.question('What\'s an activity you like doing? ', (activity) => {
    output.activity = activity;
    rl.question('What do you listen to while doing that? ', (music) => {
      output.music = music;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (mealType) => {
        output.mealType = mealType;
        rl.question('What\'s your favourite thing to eat for that meal? ', (favouriteMeal) => {
          output.favouriteMeal = favouriteMeal;
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            output.sport = sport;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              output.superpower = superpower;
              console.log(`My name is ${output.name}, I like doing ${output.activity} while listening to ${output.music}. The best part of the day is ${output.mealType} when I can have ${output.favouriteMeal}. I'd eat it forever! However, I still have to fit in my pants so I do ${output.sport}. It's fun but not fun:) \n P.S. I forgot. Don't tell anyone but my superpower is ${output.superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});