const listItemNames = Array.from(document.querySelectorAll('#mw-whatlinkshere-list li')).map(item => {
    return item.textContent.replace('(transclusion) ‎ (← links | edit)', '').trim();
});
const combinedString = listItemNames.join(', ');
console.log(combinedString);
