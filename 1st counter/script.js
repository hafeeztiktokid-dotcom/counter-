// د HTML عناصرو ته لاسرسی راوړل
const display = document.getElementById('display'); // د ښودلو عنصر ترلاسه کول
const incrementBtn = document.getElementById('increment'); // د زیاتولو تڼۍ ترلاسه کول
const decrementBtn = document.getElementById('decrement'); // د کمولو تڼۍ ترلاسه کول
const resetBtn = document.getElementById('reset'); // د ری سیټ تڼۍ ترلاسه کول

// د شمېر لومړنی ارزښت ټاکل
let count = 0; // د شمېر لپاره متغیر چې اوس 0 دی

// د ښودلو د نوي کولو لپاره یوه مرسته کوونکې دنده
function updateDisplay() { // د نمایش تازه کولو فنکشن تعریف
  display.textContent = count; // په ښودلو کې د شمارې اوسنی ارزښت ښودل
  display.style.transform = 'scale(1.02)'; // لنډ وخت لپاره یو کوچنی ټرانسفارم اضافه کول
  setTimeout(() => { // د ټایمر څخه کار اخیستل د نرم تاثیر لپاره
    display.style.transform = 'scale(1)'; // بېرته اصلي اندازې ته راوګرځول
  }, 120); // 120 ملی ثانیې انتظار
}

// د زیاتولو لپاره فنکشن
function increment() { // د شمېر د زیاتولو کار
  count += 1; // د شمېر ارزښت یو واحد زیاتول
  updateDisplay(); // ښودنه تازه کول
}

// د کمولو لپاره فنکشن
function decrement() { // د شمېر د کمولو کار
  count -= 1; // د شمېر ارزښت یو واحد کمول
  updateDisplay(); // ښودنه تازه کول
}

// د ری سیټ لپاره فنکشن
function reset() { // د شمېر ری سیټ کار
  count = 0; // د شمېر ارزښت صفر ته بدلول
  updateDisplay(); // ښودنه تازه کول
}

// د تڼیو لپاره د کلیک پیښې ضمیمه کول
incrementBtn.addEventListener('click', increment); // د زیاتولو تڼۍ باندې کلیک پیښه وصلول
decrementBtn.addEventListener('click', decrement); // د کمولو تڼۍ باندې کلیک پیښه وصلول
resetBtn.addEventListener('click', reset); // د ری سیټ تڼۍ باندې کلیک پیښه وصلول

// ابتدایي ښودنه تازه کول چې سم مقدار ښکاره شي
updateDisplay(); // د پاڼې د بارېدو په وخت کې نمایش تازه کول