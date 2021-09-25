const d = new Date().getHours();

if (d > 4 && d < 12) {
    alert('Good Morning!')
} else if (d > 12 && d < 14) {
    alert('Good Afternoon!')
} else if (d > 14 && d < 20) {
    alert('Good Day!')
} else if (d > 20 && d < 21) {
    alert('Good Evening!')
} else {
    alert('Good Night!')
};

alert(d);