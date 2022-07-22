const prompt1 = "Do you head to the left or to the right?";
const prompt2 =
  "You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?";
const prompt3 =
  "You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.";
const prompt4 = "You live happily amongst the cats for the rest of your days.";
const prompt5 =
  "After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.";
const prompt6 =
  "You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?";
const prompt7 =
  "After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.";
const prompt8 =
  "After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.";
const prompt9 =
  "You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?";
const prompt10 =
  "The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:";
const prompt11 =
  "You and the dragon have an uplifting conversation about local politics and become lifelong friends.";
const prompt12 =
  "Quickly, you run back to the cave's entrance. Sheepish, you return home.";
const prompt13 =
  "After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?";
const prompt14 =
  "You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.";
const prompt15 =
  "You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.";

// Tree of Questions
let answer = window.prompt(prompt1);
if (answer === "left") {
  answer = window.prompt(prompt2);
  if (answer === "follow") {
    answer = window.prompt(prompt3);
    if (answer === "stay") {
      window.alert(prompt4);
    } else if (answer === "spread the word") {
      window.alert(prompt5);
    }
  } else if (answer === "continue") {
    answer = window.prompt(prompt6);
    if (answer === "ladder") {
      window.alert(prompt7);
    } else if (answer === "staircase") {
      window.alert(prompt8);
    }
  }
} else if (answer === "right") {
  answer = window.prompt(prompt9);
  if (answer === "past the dragon") {
    answer = window.prompt(prompt10);
    if (answer === "stay") {
      window.alert(prompt11);
    } else if (answer === "run") {
      window.alert(prompt12);
    }
  } else if (answer === "away from the dragon") {
    answer = window.prompt(prompt13);
    if (answer === "draw it") {
      window.alert(prompt14);
    } else if (answer === "pick it") {
      window.alert(prompt15);
    }
  }
}
