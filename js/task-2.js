function formatMassage(message, maxLength) {
  // перевірка на макс довжину
  if (message.length <= maxLength) {
    return message;
  } else {
    // обрізаєм рядок і додаємо ...
    return message.slice(0, maxLength) + '...';
  }
}

console.log(formatMassage('Curabitur ligula sapien', 16)); // "Curabitur ligula..."
console.log(formatMassage('Curabitur ligula sapien', 23)); // "Curabitur ligula sapien"
console.log(formatMassage('Vestibulum facilisis purus nec', 20)); // "Vestibulum facilisis..."
console.log(formatMassage('Vestibulum facilisis purus nec', 30)); // "Vestibulum facilisis purus nec"
console.log(formatMassage('Nunc sed turpis a felis in nunc fringilla', 15)); // "Nunc sed turpis..."
console.log(formatMassage('Nunc sed turpis a felis in nunc fringilla', 41)); // "Nunc sed turpis a felis in nunc fringilla"
