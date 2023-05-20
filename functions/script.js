function sum(a, b) {
  return a + b;
}

sum(3, 5);

// let words = 'Człowiek, który nie czyta, nie ma żadnej przewagi nad tym, który nie umie czytać.';
function say(author, ...words) {
  console.log(`${author} powiedział: ${words}`);
}

say(
  'Mark Twain', 'Człowiek,', ' który nie czyta,', 'nie ma żadnej przewagi nad tym,', 'który nie umie czytać.'
);

function add(a, ...vargs) {
  let result = 0;
  for (let i = 0; i < vargs.length; i++) {
    result += vargs[i];
  }
  return result;
}



