

process.stdout.write('hello from spinner1.js... \rheyyy\n');

const animation = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   '];
const delay = 100; // delay between each frame in milliseconds

for (let i = 0; i < animation.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${animation[i]}`);
    if (i === animation.length - 1) {
      // add a newline character after printing the last frame
      process.stdout.write("\n");
    }
  }, i * delay);
}

