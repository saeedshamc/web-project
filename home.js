const demos = [
  // Login
  { cat: "login", folder: "login-lamp", title: "Lamp", desc: "چراغ رومیزی؛ با کشیدن بند، فرم روشن می‌شود." },
  { cat: "login", folder: "login-typewriter", title: "Typewriter", desc: "ماشین‌تحریر؛ کلیدها با تایپ فشار می‌خورند." },
  { cat: "login", folder: "login-vault", title: "Vault", desc: "گاوصندوق با صفحه شماره‌گیر و در بازشو." },
  { cat: "login", folder: "login-neon-sign", title: "Neon Sign", desc: "تابلوی نئون؛ سوییچ برق فرم را بیدار می‌کند." },
  { cat: "login", folder: "login-origami", title: "Origami", desc: "کاغذ اوریگامی با باز شدن گوشه‌ها." },
  { cat: "login", folder: "login-polaroid", title: "Polaroid", desc: "عکس پولاروید؛ بکش تا ظاهر شود." },
  { cat: "login", folder: "login-terminal", title: "Terminal", desc: "ترمینال سبز CRT برای احراز هویت." },
  { cat: "login", folder: "login-fingerprint", title: "Fingerprint", desc: "اسکن اثرانگشت با نگه‌داشتن." },
  { cat: "login", folder: "login-cassette", title: "Cassette", desc: "کاست نوستالژیک با چرخش قرقره." },
  { cat: "login", folder: "login-piano", title: "Piano", desc: "پیانو؛ هر حرف یک کلید را می‌زند." },
  { cat: "login", folder: "login-compass", title: "Compass", desc: "قطب‌نما تا قفل شمال باز شود." },
  { cat: "login", folder: "login-ticket", title: "Ticket", desc: "بلیت سینما؛ stub را پاره کنید." },
  { cat: "login", folder: "login-flip-clock", title: "Flip Clock", desc: "ساعت فلیپ فرودگاهی زنده." },
  { cat: "login", folder: "login-slot", title: "Slot Machine", desc: "اسلات‌ماشین؛ اهرم را بکش." },

  // Contact
  { cat: "contact", folder: "contact-paper-plane", title: "Paper Plane", desc: "هواپیمای کاغذی با ارسال پرواز می‌کند." },
  { cat: "contact", folder: "contact-mailbox", title: "Mailbox", desc: "نامه داخل صندوق؛ پرچم بالا می‌آید." },
  { cat: "contact", folder: "contact-typewriter-desk", title: "Typewriter Desk", desc: "میز کار و مهر کردن پاکت." },
  { cat: "contact", folder: "contact-map-pin", title: "Map Pin", desc: "کلیک روی نقشه، پین می‌افتد." },
  { cat: "contact", folder: "contact-postcard", title: "Postcard", desc: "کارت‌پستال دو رو با فلیپ." },
  { cat: "contact", folder: "contact-radio", title: "Radio", desc: "رادیو قدیمی با تیونر FM." },
  { cat: "contact", folder: "contact-telegram", title: "Telegram", desc: "تلگراف کلاسیک با نوار STOP." },
  { cat: "contact", folder: "contact-pigeon", title: "Pigeon", desc: "کبوتر نامه‌بر در آسمان." },
  { cat: "contact", folder: "contact-smoke", title: "Smoke Signal", desc: "دود سیگنال از روی آتش." },

  // Comment
  { cat: "comment", folder: "comment-sticky-notes", title: "Sticky Notes", desc: "استیکر روی دیوار چوب‌پنبه‌ای." },
  { cat: "comment", folder: "comment-chat-bubble", title: "Chat Bubble", desc: "چت با نشانگر typing." },
  { cat: "comment", folder: "comment-guestbook", title: "Guestbook", desc: "دفترچه مهمان ورق‌خور." },
  { cat: "comment", folder: "comment-vinyl", title: "Vinyl", desc: "کامنت‌ها مثل ترک وینیل." },
  { cat: "comment", folder: "comment-fortune", title: "Fortune Cookie", desc: "کوکی شانس می‌شکند." },
  { cat: "comment", folder: "comment-comic", title: "Comic", desc: "حباب کمیک با KAPOW." },
  { cat: "comment", folder: "comment-filmstrip", title: "Filmstrip", desc: "فریم‌های نوار فیلم." },

  // Signup
  { cat: "signup", folder: "signup-passport", title: "Passport", desc: "پاسپورت بازشو با خط MRZ." },
  { cat: "signup", folder: "signup-boarding", title: "Boarding Pass", desc: "کارت پرواز برای ثبت‌نام." },
  { cat: "signup", folder: "signup-library", title: "Library Card", desc: "کارت کتابخانه با مهر." },

  // Other
  { cat: "other", folder: "newsletter-bottle", title: "Bottle", desc: "خبرنامه داخل بطری روی موج." },
  { cat: "other", folder: "newsletter-balloon", title: "Balloon", desc: "بالن هوایی پس از اشتراک." },
  { cat: "other", folder: "newsletter-lighthouse", title: "Lighthouse", desc: "فانوس دریایی با پرتو جارو." },
  { cat: "other", folder: "feedback-rating-stars", title: "Rating Stars", desc: "ستاره/شهاب امتیاز." },
  { cat: "other", folder: "feedback-thermo", title: "Thermometer", desc: "دماسنج تعاملی بازخورد." },
  { cat: "other", folder: "feedback-mood", title: "Mood Dial", desc: "اسلایدر حال‌وهوا با ایموجی." },
  { cat: "other", folder: "otp-pad", title: "OTP Pad", desc: "کیپد کد ۴ رقمی (۴۸۲۱)." },
  { cat: "other", folder: "reset-key", title: "Reset Key", desc: "کلید برنجی قفل ریست رمز." },
  { cat: "other", folder: "search-lens", title: "Search Lens", desc: "جستجو با ذره‌بین متحرک." },
  { cat: "other", folder: "subscribe-bell", title: "Subscribe Bell", desc: "زنگ نوتیفیکیشن اشتراک." },
];

const catFa = {
  login: "لاگین",
  contact: "تماس",
  comment: "کامنت",
  signup: "ثبت‌نام",
  other: "سایر",
};

const grid = document.getElementById("grid");
const count = document.getElementById("count");
const filters = document.querySelectorAll(".filter");

function render(filter = "all") {
  const list = filter === "all" ? demos : demos.filter((d) => d.cat === filter);

  grid.innerHTML = list
    .map(
      (d, i) => `
      <a class="demo" href="${d.folder}/index.html" style="animation-delay:${i * 0.02}s">
        <span class="demo-cat">${catFa[d.cat]}</span>
        <span class="demo-title">${d.title}</span>
        <span class="demo-desc">${d.desc}</span>
        <span class="demo-path">/${d.folder}/</span>
      </a>`
    )
    .join("");

  count.textContent = `${list.length} دمو در این نما · مجموع ${demos.length}`;
}

filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-selected", b === btn ? "true" : "false");
    });
    render(btn.dataset.filter);
  });
});

render("all");
