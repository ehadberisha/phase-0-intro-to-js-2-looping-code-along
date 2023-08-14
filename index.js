function writeCards(names, event) {
  const thankYouMessages = [];
  let i = 0;
  while (i < names.length) {
    thankYouMessages.push(
      `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    );
    i++;
  }
  return thankYouMessages;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
