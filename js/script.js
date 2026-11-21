const lessons = {
  planning: {
    category: "مهارة تنظيمية",
    time: "12 دقيقة",
    title: "التخطيط الذكي للدراسة",
    lead: "خطّة واضحة تمنع التشتت وتحوّل الهدف العام إلى خطوات يومية قابلة للقياس والتنفيذ.",
    steps: [
      ["ابدأ بالهدف", "اكتب ما تريد إنجازه بصيغة محددة ومقيّسة."],
      ["قسّم المهمة", "حوّل كل فصل أو موضوع إلى وحدات قصيرة."],
      ["راجع أسبوعيًا", "انقل غير المنجز وحدد سبب التأخير، ثم عدّل الخطة."]
    ],
    sections: [
      ["خطة السبعة أيام", "ابدأ بتحديد مجموعتك الدراسية لكل يوم، ولا تضع أكثر من ثلاث أولويات رئيسية. اجعل الخطة واقعية بما يتناسب مع وقتك وحالتك الصحية والنشاطات اليومية."],
      ["مصفوفة الأولويات", "رتب مهامك بحسب تأثيرها وعاجليتها. المهم هو ما يخدم هدفك الدراسي، والعاجل هو ما له موعد قريب. اعمل على المهم أولًا حتى لا يتحول إلى عجز دائم."],
      ["تقسيم الجلسة", "قسّم كل جلسة إلى 25 دقيقة تركيز، ثم 5 دقائق راحة. بعد أربع جلسات خذ استراحة أطول تتراوح بين 20 و30 دقيقة."]
    ],
    keywords: ["خطة", "وقت", "جدول", "تنظيم", "أهداف"]
  },
  focus: {
    category: "مهارة ذهنية",
    time: "15 دقيقة",
    title: "التركيز والانتباه",
    lead: "تعلم كيف تهيئ بيئة هادئة وتحافظ على انتباهك مدة أطول دون استنزافك.",
    steps: [
      ["نظّف البيئة", "أبعد الهاتف والنافذة المفتوحة وعناصر التشتيت."],
      ["اختر مهمة واحدة", "لا تبدأ موضوعًا جديدًا قبل إنهاء المهمة الحالية."],
      ["خذ استراحة حقيقية", "حرّك جسمك واشرب الماء ولا تفقد الاستراحة في الهاتف."]
    ],
    sections: [
      ["قاعدة المهمة الواحدة", "قبل البدء، اكتب مهمة واحدة صريحة في ورقة قصيرة. مثال جيد: «حلّ خمسة تمارين من الفصل الثالث» بدل «أدرس الرياضيات»."],
      ["تأثير المشتتات", "راجع هاتفك في وقت محدد فقط. يسبب الانتقال المتكرر بين الشاشة والدرس خسارة ذهنية حتى بعد وضع الهاتف جانبًا."],
      ["تقنية التركيز", "اختر مدة قصيرة وواجبًا واضحًا. أغلِق الصفحات غير المرتبطة واستخدم مؤقتًا بصريًا لتبدأ وتنتهي بوضوح."]
    ],
    keywords: ["تركيز", "انتباه", "تشتت", "هاتف", "استراحة"]
  },
  memory: {
    category: "مهارة استرجاع",
    time: "18 دقيقة",
    title: "الحفظ والاستدعاء النشط",
    lead: "لا تكتف بقراءة المعلومات؛ اختبر نفسك باستمرار لكي تثبت الفهم والذاكرة.",
    steps: [
      ["فهم قبل الحفظ", "اربط المعلومة بهدفها ومثالها قبل تكرارها."],
      ["استدعِ من الذاكرة", "أغمض الكتاب وحاول استرجاع ما تذكره بقلمك."],
      ["اعد التكرار", "راجع المعلومات في فترات متباعدة وتزداد اتساعًا."]
    ],
    sections: [
      ["الاستدعاء النشط", "اسأل نفسك أو استخدم بطاقات سؤال وجواب. محاولة تذكر المعلومة أقوى من قراءتها مرة أخرى، حتى لو أخطأت في البداية."],
      ["التكرار المتباعد", "راجع الدرس بعد يوم، ثم بعد ثلاثة أيام، ثم بعد أسبوع. زد المسافة كلما بقيت المعلومة ثابتة في ذاكرتك."],
      ["ربط الصور والقصة", "حوّل السلسلة المعقدة إلى صورة ذهنية أو قصة مترابطة. اربط كل رمز بمكان أو حدث واضح، وتجنب ازدحام كل المعلومات في ذاكرة واحدة."]
    ],
    keywords: ["حفظ", "ذاكرة", "تذكر", "بطاقات", "استدعاء"]
  },
  reading: {
    category: "مهارة فهم",
    time: "14 دقيقة",
    title: "القراءة الفعّالة",
    lead: "اقرأ بأهداف واضحة، وحوّل كل فقرة إلى فكرة ثم مثال ونتيجة مفهومة.",
    steps: [
      ["معاينة النص", "اقرأ العناوين والمقدمة والملخص قبل التفاصيل."],
      ["اطرح سؤالًا", "حول كل عنوان إلى سؤال تحاول الإجابة عنه."],
      ["لخّص بكلماتك", "اكتب سطرًا واحدًا يعبّر عن الفكرة الأساسية."]
    ],
    sections: [
      ["SQ3R", "معاينة النص، طرح الأسئلة، القراءة، الاسترجاع، والمراجعة. هذه الخطوات تنقل القارئ من التصفح السطحي إلى بناء معنى عميق."],
      ["العلامات الفارقة", "حدد الهدف، الفكرة الأساسية، الأمثلة، والاستثناءات. استخدم رموزًا ثابتة كي لا تتشتت الألوان والفواصل."],
      ["القراءة التفسيرية", "اسأل: ما دليل الكاتب؟ هل المثال يثبت الفكرة؟ وما الحد الذي يحدد هذه المعلومة؟ ثم صغ خاتمة خاصة بك."]
    ],
    keywords: ["قراءة", "فهم", "ملخص", "نص", "فقرات"]
  },
  notes: {
    category: "مهارة تدوين",
    time: "16 دقيقة",
    title: "التلخيص والتدوين الذكي",
    lead: "دوّن أقل وأكثر وضوحًا، وابنِ شبكة من الملاحظات تربط المفاهيم ببعضها.",
    steps: [
      ["دوّن الفكرة", "اكتب الفكرة الأساسية دون نسخ الجمل الطويلة."],
      ["أضف الرابط", "صل كل معلومة بمثال أو مقارنة أو درس سابق."],
      ["راجع الأسبوع", "أعد كتابة الملاحظات من الذاكرة وكمّل النقص."]
    ],
    sections: [
      ["نظام كورنيل", "قسّم الصفحة إلى منطقة للملاحظات، ومنطقة للأسئلة والكلمات المفتاحية، ومنطقة للملخص. تساعدك هذه البنية على مراجعة سريعة ومنظمة."],
      ["خرائط المفاهيم", "ضع الفكرة الرئيسية في المنتصف واربطها بالفروع والتفاصيل. استخدمها للأفكار المتشعبة والعلاقات بين العناصر."],
      ["اختصر بطريقة ذكية", "استعمل الاختصارات، الرموز، والجداول. لا تكتب كل كلمة تسمعها؛ دوّن ما يغيّر فهمك أو يجيب عن سؤالك."]
    ],
    keywords: ["تدوين", "ملخص", "ملاحظات", "كورليل", "خريطة"]
  },
  exams: {
    category: "مهارة امتحانية",
    time: "20 دقيقة",
    title: "الاستعداد للامتحان",
    lead: "ابدأ مبكرًا، محن نفسك بشروط الامتحان، وحافظ على نومك وتركيزك في أيام الاختبار.",
    steps: [
      ["حلل الامتحان", "اعرف نوع الأسئلة ونموذج الإجابة ودرجة كل جزء."],
      ["درّب الزمن", "اعمل نماذج كاملة بمدة حقيقية ومكان هادئ."],
      ["راجع الأخطاء", "صنف الخطأ إلى فهم، أو تشتيت، أو حساب، أو وقت."]
    ],
    sections: [
      ["خطة المراجعة", "ابدأ من محتوى شبه المنسي، ثم انتقل إلى الموضوعات المتوسطة، واختم بأقوى نقاطك لرفع ثقتك."],
      ["محاكاة الامتحان", "جهز ورقة وتسلسلًا مماثلًا للشكل الحقيقي. ابدأ المؤقت ولا توقفه، ثم راجع الإجابات وحدد الأخطاء المتكررة."],
      ["ليلة الامتحان", "راجع الملخصات القصيرة فقط واحصل على نوم كافٍ. تجنب الإفراط في الكافيين والجلوس للمراجعة حتى ساعة متأخرة."]
    ],
    keywords: ["امتحان", "اختبار", "مراجعة", "أسئلة", "نوم"]
  },
  "problem-solving": {
    category: "مهارة تطبيقية",
    time: "22 دقيقة",
    title: "حل المشكلات خطوة بخطوة",
    lead: "تعلم تحليل المشكلة وتحديد فرضيات قابلة للاختبار واختيار الحل الأكثر ملاءمة بدل العشوائية.",
    steps: [
      ["حدّد المشكلة", "اكتب ما المعروف وما المطلوب وما يمنع الوصول للحل."],
      ["جرّب فرضية", "اعمل خطوة بسيطة قابلة للتراجع ومقارنة النتيجة."],
      ["راجِع الحل", "تحقق من صحته، ثم صغ الطريقة كي تستخدمها لاحقًا."]
    ],
    sections: [
      ["فهم السؤال", "اقرأ السؤال مرتين وحدد الكلمات الإجرائية: احسب، قارن، علل، استنتج، أو أثبت. اكتب المعطيات في قائمة قصيرة لتفصل بينها وبين المطلوب."],
      ["تحليل المشكلة", "قسّم المسألة المعقدة إلى مسألة صغيرة. ارسم مخططًا أو جدولًا، ثم اعثر على نقطة البداية وأثر كل معلومة."],
      ["اختبار الحل", "ابحث عن حل بديل وقارن الخطوات والنتيجة والحالة الحدودية. لا يكفي وصولك لرقم صحيح إذا كانت الطريقة غير قابلة للتطبيق."],
      ["تصحيح الخطأ", "عندما تخطئ، اكتب سطرًا يوضح سبب الخطأ. هل كان فهمًا؟ حسابًا؟ استخدام قاعدة خاطئة؟ أو قراءة غير دقيقة؟"]
    ],
    keywords: ["مسألة", "حل", "تحليل", "خطأ", "فرضية"]
  },
  "group-work": {
    category: "مهارة اجتماعية",
    time: "13 دقيقة",
    title: "التعلم الجماعي الفعّال",
    lead: "اجعل العمل الجماعي توزيعًا حقيقيًا للمسؤوليات وتعلّمًا متبادلًا، لا مجرد جلسة ينجز فيها شخص واحد.",
    steps: [
      ["اتفق على الهدف", "حدد الناتج النهائي ووقت التسليم بوضوح للجميع."],
      ["وزع الأدوار", "اختر باحثًا ومعدًا ومدققًا ومسؤول وقت بحسب القدرة."],
      ["راجع جماعيًا", "اجتمعوا للإجابة والتعليل قبل التسليم، لا لقراءة العمل فقط."]
    ],
    sections: [
      ["تقسيم المسؤولية", "يجب أن يمتلك كل عضو جزءًا واضحًا يمكنه شرحَه. تجنب توزيع العمل إلى أجزاء منفصلة تمامًا دون اتحاد معرفي."],
      ["التعلّم بالأقران", "اشرح درسًا لزميل كما لو كان مبتدئًا. أثناء شرحك ستكتشف الثغرات في فهمك وتبني علاقة أقوى بالمعلومة."],
      ["إدارة الاختلاف", "ناقش الأفكار بمعايير وليست بالشهرة أو الصوت الأعلى. اقترح دليلًا، مثالًا، أو اختبارًا، ثم اتخذ قرارًا واضحًا."],
      ["اجتماع قصير", "استخدم اجتماعًا مدته 15 دقيقة: ما الذي أنجز؟ ما العائق؟ وما المهمة التالية؟ ثم انتهوا دون انحراف."]
    ],
    keywords: ["مجموعة", "فريق", "زملاء", "شرح", "تعاون"]
  }
};

const lessonList = document.querySelector("#lessonList");
const lessonPreview = document.querySelector("#lessonPreview");
let currentTopic = "planning";

function renderPreview(topic) {
  const lesson = lessons[topic];
  if (!lesson) return;
  currentTopic = topic;
  document.querySelector("#lessonCategory").textContent = lesson.category;
  document.querySelector("#lessonTime").textContent = lesson.time;
  document.querySelector("#lessonTitle").textContent = lesson.title;
  document.querySelector("#lessonLead").textContent = lesson.lead;
  document.querySelector("#lessonSteps").innerHTML = lesson.steps.map((step, i) =>
    `<div class="lesson-step"><strong>${i + 1}. ${step[0]}</strong><span>${step[1]}</span></div>`
  ).join("");
  document.querySelectorAll(".lesson-item").forEach(item => item.classList.toggle("active", item.dataset.topic === topic));
}

lessonList.addEventListener("click", event => {
  const button = event.target.closest("[data-topic]");
  if (button) renderPreview(button.dataset.topic);
});

document.querySelectorAll("[data-open-topic]").forEach(button => {
  button.addEventListener("click", () => {
    renderPreview(button.dataset.openTopic);
    document.querySelector("#lessons").scrollIntoView({ behavior: "smooth" });
  });
});

const lessonOverlay = document.querySelector("#lessonOverlay");
const drawerContent = document.querySelector("#drawerContent");
const drawerToc = document.querySelector("#drawerToc");

function openLesson(topic = currentTopic) {
  const lesson = lessons[topic];
  const ids = lesson.sections.map((_, i) => `section-${i}`);
  drawerToc.innerHTML = lesson.sections.map((section, i) =>
    `<a href="#${ids[i]}" class="${i === 0 ? "active" : ""}">${i + 1}. ${section[0]}</a>`
  ).join("");
  drawerContent.innerHTML = `
    <span class="eyebrow">${lesson.category} · ${lesson.time}</span>
    <h1>${lesson.title}</h1>
    <p>${lesson.lead}</p>
    <div class="lesson-tips">
      <div class="lesson-tip"><strong>قبل البدء</strong>جهز ورقة واحدة، قلمًا، ومؤقتًا واضحًا.</div>
      <div class="lesson-tip"><strong>أثناء التعلم</strong>اختبر نفسك بدل أن تعيد القراءة فقط.</div>
      <div class="lesson-tip"><strong>بعد الانتهاء</strong>اكتب فكرة واحدة تعلمتها ونقطة تحتاج مراجعة.</div>
    </div>
    ${lesson.sections.map((section, i) => `
      <h2 id="${ids[i]}">${section[0]}</h2>
      <p>${section[1]}</p>
      ${i === 0 ? '<div class="tip-box">تطبيق عملي: اختر مهمة واحدة صغيرة، وحدد لها وقتًا لا يتجاوز 25 دقيقة.</div>' : ""}
    `).join("")}
    <div class="exercise-box">
      <strong>تمرين الدرس</strong>
      <p>طبق المهارة الآن لمدة 10 دقائق: اكتب هدفًا محددًا، قسمه إلى ثلاث خطوات، ثم نفذ أصغر خطوة وأوقف المؤقت عند الانتهاء.</p>
    </div>
    <h2>قائمة مراجعة سريعة</h2>
    <ul class="checklist">
      <li>حددت هدفًا واضحًا وقابلًا للقياس.</li>
      <li>قسمت المهمة إلى وحدات صغيرة يستطيع عقلك البدء بها.</li>
      <li>خصصت وقتًا للراحة وأزحت التشتيت من محيطك.</li>
      <li>سجلت خطأً أو ثغرة واحدة لأراجعها في الجلسة التالية.</li>
    </ul>
  `;
  lessonOverlay.classList.add("open");
  lessonOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  drawerContent.scrollTop = 0;
}

document.querySelector("#openLesson").addEventListener("click", () => openLesson());
document.querySelector("#closeLesson").addEventListener("click", () => {
  lessonOverlay.classList.remove("open");
  lessonOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
});
lessonOverlay.addEventListener("click", event => {
  if (event.target === lessonOverlay) document.querySelector("#closeLesson").click();
});

drawerContent.addEventListener("scroll", () => {
  const max = drawerContent.scrollHeight - drawerContent.clientHeight;
  const progress = max > 0 ? (drawerContent.scrollTop / max) * 100 : 0;
  document.querySelector("#readingProgress").style.width = `${progress}%`;
});

drawerToc.addEventListener("click", event => {
  const link = event.target.closest("a");
  if (!link) return;
  event.preventDefault();
  const target = document.querySelector(link.getAttribute("href"));
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  drawerToc.querySelectorAll("a").forEach(item => item.classList.remove("active"));
  link.classList.add("active");
});

const searchOverlay = document.querySelector("#searchOverlay");
const searchInput = document.querySelector("#searchInput");
const searchResults = document.querySelector("#searchResults");

function openSearch() {
  searchOverlay.classList.add("open");
  searchOverlay.setAttribute("aria-hidden", "false");
  setTimeout(() => searchInput.focus(), 200);
}
function closeSearch() {
  searchOverlay.classList.remove("open");
  searchOverlay.setAttribute("aria-hidden", "true");
  searchInput.value = "";
  searchResults.innerHTML = "";
}

document.querySelector("#searchButton").addEventListener("click", openSearch);
document.querySelector("#heroSearch").addEventListener("click", openSearch);
document.querySelector("#closeSearch").addEventListener("click", closeSearch);
searchOverlay.addEventListener("click", event => { if (event.target === searchOverlay) closeSearch(); });

function runSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchResults.innerHTML = '<p style="color:#bad0c7">اكتب كلمة للبحث عن درس.</p>';
    return;
  }
  const matches = Object.entries(lessons).filter(([key, lesson]) =>
    lesson.title.includes(query) || lesson.category.includes(query) ||
    lesson.keywords.some(word => word.includes(query) || query.includes(word)) ||
    lesson.lead.includes(query)
  );
  searchResults.innerHTML = matches.length
    ? matches.map(([key, lesson]) =>
      `<button class="search-result" data-result="${key}"><strong>${lesson.title}</strong><span>${lesson.category} · ${lesson.time}</span></button>`
    ).join("")
    : '<p style="color:#bad0c7">لا يوجد درس مطابق. جرّب كلمة أخرى مثل: وقت، حفظ، تركيز.</p>';
}
document.querySelector("#runSearch").addEventListener("click", runSearch);
searchInput.addEventListener("keydown", event => { if (event.key === "Enter") runSearch(); });
searchResults.addEventListener("click", event => {
  const result = event.target.closest("[data-result]");
  if (!result) return;
  closeSearch();
  renderPreview(result.dataset.result);
  document.querySelector("#lessons").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => openLesson(result.dataset.result), 350);
});

document.querySelector("#plannerForm").addEventListener("submit", event => {
  event.preventDefault();
  const goal = document.querySelector("#goalInput").value.trim();
  const minutes = document.querySelector("#sessionSelect").value;
  if (!goal) return;
  document.querySelector("#formMessage").textContent = `تم حفظ خطة "${goal}" — جلسة التركيز: ${minutes} دقيقة.`;
  localStorage.setItem("studyPlan", JSON.stringify({ goal, minutes }));
});

let savedPlan = null;
try {
  const storedPlan = localStorage.getItem("studyPlan");
  if (storedPlan) savedPlan = JSON.parse(storedPlan);
} catch (error) {
  localStorage.removeItem("studyPlan");
}
if (savedPlan) {
  document.querySelector("#goalInput").value = savedPlan.goal;
  document.querySelector("#sessionSelect").value = savedPlan.minutes;
  document.querySelector("#formMessage").textContent = `الخطة المحفوظة: ${savedPlan.goal}`;
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (searchOverlay.classList.contains("open")) closeSearch();
  if (lessonOverlay.classList.contains("open")) document.querySelector("#closeLesson").click();
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add("visible"));
}

const floatingWords = [
  ["تركيز", "8%", "18%"],
  ["تنظيم", "84%", "12%"],
  ["استيعاب", "12%", "38%"],
  ["تدرّج", "88%", "42%"],
  ["مراجعة", "7%", "68%"],
  ["فهم", "90%", "66%"],
  ["إنجاز", "15%", "88%"],
  ["مناعة ذهنية", "79%", "86%"]
];

if (!window.matchMedia("(max-width: 760px)").matches) {
  floatingWords.forEach(([word, left, top], index) => {
    const element = document.createElement("span");
    element.className = "floating-word";
    element.textContent = word;
    element.style.left = left;
    element.style.top = top;
    element.style.setProperty("--duration", `${12 + (index % 5) * 3}s`);
    element.style.setProperty("--delay", `${index * -1.7}s`);
    document.body.appendChild(element);
  });
}

renderPreview("planning");
