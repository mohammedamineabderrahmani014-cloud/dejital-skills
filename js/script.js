const lessons = {
  planning: {
    category: "مهارة تنظيمية",
    time: "12 دقيقة",
    title: "التخطيط الذكي للدراسة",
    lead: "التخطيط الجيد يخفف التشتت. حوّل هدفك الدراسي إلى مهام صغيرة، وحدد وقتًا واقعيًا لكل منها.",
    steps: [
      ["حدد هدفك", "اكتب ما تريد إنجازه بصيغة واضحة يمكن ملاحظتها."],
      ["قسّم العمل", "حوّل الدرس إلى خطوات قصيرة، وابدأ بأصغر مهمة."],
      ["راجع الخطة", "لاحظ ما أنجزته وعدّل الوقت أو الأولويات."]
    ],
    quiz: {
      question: "ما أفضل بداية لخطة دراسية؟",
      options: ["هدف واضح", "مهام كثيرة", "دراسة بلا توقف", "تأجيل الأصعب"],
      answer: 0
    },
    sections: [
      ["خطة أسبوعية", "وزّع دراستك على الأيام واختر أولويتين أو ثلاثًا يوميًا. اترك وقتًا للراحة والمهام المفاجئة."],
      ["رتّب المهام", "ابدأ بما يخدم هدفك وله موعد قريب، قبل أن يتحول إلى أمر مستعجل."],
      ["قسّم وقتك", "جرّب 25 دقيقة من التركيز تليها استراحة قصيرة، وعدّل المدة حسب المهمة."]
    ],
    keywords: ["خطة", "وقت", "جدول", "تنظيم", "أهداف"]
  },
  focus: {
    category: "مهارة ذهنية",
    time: "15 دقيقة",
    title: "التركيز والانتباه",
    lead: "التركيز لا يعني العمل لساعات بلا توقف. هيّئ بيئة هادئة، وخذ استراحات منتظمة.",
    steps: [
      ["أبعد المشتتات", "ضع الهاتف بعيدًا وأغلق الصفحات غير المرتبطة بالدراسة."],
      ["اختر مهمة", "اكتب مهمة محددة وأنهِها قبل الانتقال إلى موضوع آخر."],
      ["خذ استراحة", "تحرك قليلًا واشرب الماء، ثم ارجع بتركيز."]
    ],
    quiz: {
      question: "ما الذي يساعدك على التركيز؟",
      options: ["فتح كل التطبيقات", "إبعاد الهاتف", "تعدد المهام", "تأجيل الاستراحة"],
      answer: 1
    },
    sections: [
      ["مهمة واحدة", "اكتب المطلوب بوضوح؛ مثل حل خمسة تمارين بدل كتابة «أدرس الرياضيات»."],
      ["أبعد المشتتات", "ضع هاتفك صامتًا وافحصه في وقت الاستراحة بدل مقاطعة الدراسة."],
      ["جلسة قصيرة", "اضبط مؤقتًا لمدة مناسبة، وخذ استراحة قصيرة قبل أن يتراجع انتباهك."]
    ],
    keywords: ["تركيز", "انتباه", "تشتت", "هاتف", "استراحة"]
  },
  memory: {
    category: "مهارة استرجاع",
    time: "18 دقيقة",
    title: "الحفظ والاستدعاء النشط",
    lead: "القراءة وحدها لا تكفي للحفظ. استرجع المعلومات من ذاكرتك وراجعها على فترات.",
    steps: [
      ["افهم أولًا", "اربط الفكرة بمعناها أو بمثال قبل أن تبدأ في حفظ تفاصيلها."],
      ["اختبر نفسك", "أغلق الكتاب واكتب ما تتذكره، ثم قارن إجابتك بالمصدر."],
      ["راجع لاحقًا", "عد إلى المعلومة بعد يوم، ثم بعد عدة أيام لتثبيتها."]
    ],
    quiz: {
      question: "ما الطريقة الأفضل لتثبيت المعلومة؟",
      options: ["إعادة القراءة فقط", "حفظها دفعة واحدة", "اختبار نفسك", "تجاوز المراجعة"],
      answer: 2
    },
    sections: [
      ["استرجع المعلومة", "استخدم بطاقات السؤال والجواب أو اختبر نفسك دون النظر إلى الملاحظات."],
      ["كرّر المراجعة", "راجع بعد يوم، ثم بعد ثلاثة أيام وأسبوع، مع زيادة الفواصل تدريجيًا."],
      ["اربط الأفكار", "حوّل المعلومات إلى أمثلة أو صور ذهنية ليسهل تذكّرها لاحقًا."]
    ],
    keywords: ["حفظ", "ذاكرة", "تذكر", "بطاقات", "استدعاء"]
  },
  reading: {
    category: "مهارة فهم",
    time: "14 دقيقة",
    title: "القراءة الفعّالة",
    lead: "القراءة الفعّالة تبدأ بهدف واضح. اسأل عن الأفكار، ثم لخّص ما فهمته بكلماتك.",
    steps: [
      ["تصفّح العناوين", "اقرأ العناوين والمقدمة لتكوّن فكرة عامة عن النص."],
      ["اسأل", "حوّل كل عنوان إلى سؤال تحاول الإجابة عنه أثناء القراءة."],
      ["لخّص", "اكتب جملة قصيرة تعبّر عن الفكرة الرئيسية بأسلوبك."]
    ],
    quiz: {
      question: "ماذا تفعل بعد قراءة فقرة؟",
      options: ["تلخّصها بكلماتك", "تنسخها كاملة", "تتجاوز الفكرة", "تقرأ دون هدف"],
      answer: 0
    },
    sections: [
      ["ابدأ بالعناوين", "تصفّح العناوين أولًا لتعرف الموضوع وكيف ترتبط أجزاؤه."],
      ["حدّد الفكرة", "ميّز الفكرة الأساسية من الأمثلة والتفاصيل الداعمة لها."],
      ["تحقّق من الفهم", "بعد كل فقرة، اسأل نفسك: ما الفكرة التي أضافتها؟"]
    ],
    keywords: ["قراءة", "فهم", "ملخص", "نص", "فقرات"]
  },
  notes: {
    category: "مهارة تدوين",
    time: "16 دقيقة",
    title: "التلخيص والتدوين الذكي",
    lead: "الملاحظات الجيدة تختصر المهم دون نسخ الدرس. دوّن الأفكار بلغتك واربطها بالأمثلة.",
    steps: [
      ["اكتب المهم", "سجّل الفكرة الأساسية والكلمات التي تساعدك على تذكرها."],
      ["اربط الأفكار", "أضف مثالًا أو مقارنة توضح علاقة المفاهيم ببعضها."],
      ["راجع ملاحظاتك", "أعد قراءتها بعد الدرس وأكمل النقاط التي تحتاج توضيحًا."]
    ],
    quiz: {
      question: "ما الملاحظة الدراسية الجيدة؟",
      options: ["نسخ الدرس كاملًا", "كتابة الأفكار المهمة", "كتابة كل كلمة", "تركها دون مراجعة"],
      answer: 1
    },
    sections: [
      ["قسّم الصفحة", "خصص مساحة للملاحظات وأخرى للأسئلة والكلمات المفتاحية، ثم اكتب خلاصة قصيرة."],
      ["ارسم خريطة", "ضع الفكرة الرئيسية في الوسط واربطها بالتفاصيل والأمثلة."],
      ["اختصر", "استخدم كلماتك ورموزًا مفهومة بدل نسخ الجمل الطويلة."]
    ],
    keywords: ["تدوين", "ملخص", "ملاحظات", "كورليل", "خريطة"]
  },
  exams: {
    category: "مهارة امتحانية",
    time: "20 دقيقة",
    title: "الاستعداد للامتحان",
    lead: "الاستعداد المبكر يقلل القلق. راجع على مراحل، وتدرّب على أسئلة مشابهة للامتحان.",
    steps: [
      ["اعرف الأسئلة", "تعرّف على أنواع الأسئلة والوقت المخصص لكل جزء."],
      ["تدرّب بالوقت", "حلّ نموذجًا كاملًا في مكان هادئ وبالمدة المحددة."],
      ["راجع أخطاءك", "صنّف الخطأ: فهم، تسرع، حساب، أو سوء إدارة للوقت."]
    ],
    quiz: {
      question: "كيف تستعد لوقت الامتحان؟",
      options: ["تترك التدريب لآخر يوم", "تكتفي بقراءة العناوين", "تسهر طوال الليل", "تحل نموذجًا بوقت محدد"],
      answer: 3
    },
    sections: [
      ["ابدأ مبكرًا", "ابدأ بالموضوعات التي تحتاج مراجعة، ووزّعها على عدة أيام."],
      ["اختبر نفسك", "حلّ نموذجًا دون الرجوع إلى الدرس، ثم راجع الإجابات والأخطاء."],
      ["ارتَح جيدًا", "اكتفِ بمراجعة خفيفة ونم جيدًا لتدخل الامتحان بانتباه."]
    ],
    keywords: ["امتحان", "اختبار", "مراجعة", "أسئلة", "نوم"]
  },
  "problem-solving": {
    category: "مهارة تطبيقية",
    time: "22 دقيقة",
    title: "حل المشكلات خطوة بخطوة",
    lead: "بدل التخمين، افهم المشكلة أولًا. قسّمها إلى أجزاء، وجرب حلًا يمكنك التحقق منه.",
    steps: [
      ["افهم المطلوب", "اكتب المعطيات والهدف، ولاحظ ما ينقصك للوصول إلى الحل."],
      ["جرّب حلًا", "ابدأ بخطوة بسيطة، وسجّل أثرها قبل الانتقال إلى الخطوة التالية."],
      ["تحقّق", "راجع النتيجة، وتأكد أن الطريقة تجيب عن السؤال فعلًا."]
    ],
    quiz: {
      question: "ما أول خطوة لحل مشكلة؟",
      options: ["تخمين الجواب", "تحديد المعطيات والمطلوب", "تجاهل التفاصيل", "تكرار المحاولة نفسها"],
      answer: 1
    },
    sections: [
      ["افهم السؤال", "حدّد الكلمات المهمة، ثم اكتب ما تعرفه وما يُطلب منك."],
      ["قسّم المشكلة", "حوّل المسألة الكبيرة إلى خطوات أصغر يسهل حلها ومراجعتها."],
      ["راجع النتيجة", "جرّب التحقق بطريقة أخرى، وصحّح الخطأ إن ظهر."]
    ],
    keywords: ["مسألة", "حل", "تحليل", "خطأ", "فرضية"]
  },
  "group-work": {
    category: "مهارة اجتماعية",
    time: "13 دقيقة",
    title: "التعلم الجماعي الفعّال",
    lead: "التعلم الجماعي ينجح حين يشارك الجميع. اتفقوا على هدف واضح، وتبادلوا الشرح والمراجعة.",
    steps: [
      ["حددوا الهدف", "اتفقوا على المطلوب وموعد إنجازه قبل توزيع العمل."],
      ["وزعوا الأدوار", "اختاروا مهمة واضحة لكل عضو بحسب مهاراته ووقته."],
      ["راجعوا معًا", "ناقشوا الإجابات وتأكدوا أن كل عضو يستطيع شرحها."]
    ],
    quiz: {
      question: "كيف ينجح العمل الجماعي؟",
      options: ["يعمل شخص واحد", "تتكرر المهام", "تتوزع الأدوار بوضوح", "يُترك الهدف غامضًا"],
      answer: 2
    },
    sections: [
      ["وزّع المهام", "حدّدوا مسؤولية كل عضو، واجعلوا لكل شخص جزءًا يستطيع شرحه."],
      ["اشرحوا لبعضكم", "شرح الدرس لزميل يكشف النقاط التي تحتاج إلى مراجعة."],
      ["ناقشوا باحترام", "استندوا إلى مثال أو دليل، واتفقوا على الخطوة التالية."]
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
  if (!lesson) return;
  activeLessonTopic = topic;
  const ids = lesson.sections.map((_, i) => `section-${i}`);
  drawerToc.innerHTML = lesson.sections.map((section, i) =>
    `<a href="#${ids[i]}" class="${i === 0 ? "active" : ""}">${i + 1}. ${section[0]}</a>`
  ).join("");
  drawerContent.innerHTML = `
    <span class="eyebrow">${lesson.category} · ${lesson.time}</span>
    <h1>${lesson.title}</h1>
    <p>${lesson.lead}</p>
    ${lesson.sections.map((section, i) => `
      <h2 id="${ids[i]}">${section[0]}</h2>
      <p>${section[1]}</p>
    `).join("")}
    <section class="lesson-quiz" aria-labelledby="quizTitle">
      <h2 id="quizTitle">اختبر نفسك</h2>
      <p class="quiz-question">${lesson.quiz.question}</p>
      <div class="quiz-options">
        ${lesson.quiz.options.map((option, i) => `
          <button class="quiz-option" type="button" data-answer="${i}" aria-pressed="false">
            <span class="quiz-letter">${["أ", "ب", "ج", "د"][i]}</span><span>${option}</span>
          </button>
        `).join("")}
      </div>
      <p class="quiz-feedback" id="quizFeedback" role="status" aria-live="polite"></p>
      <button class="quiz-retry" type="button" data-quiz-retry hidden>حاول مرة أخرى</button>
    </section>
  `;
  lessonOverlay.classList.add("open");
  lessonOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  drawerContent.scrollTop = 0;
}

let activeLessonTopic = currentTopic;
drawerContent.addEventListener("click", event => {
  const retry = event.target.closest("[data-quiz-retry]");
  const options = drawerContent.querySelectorAll("[data-answer]");
  const feedback = drawerContent.querySelector("#quizFeedback");

  if (retry) {
    options.forEach(option => {
      option.disabled = false;
      option.classList.remove("is-correct", "is-incorrect");
      option.setAttribute("aria-pressed", "false");
    });
    feedback.textContent = "";
    feedback.classList.remove("is-correct", "is-incorrect");
    retry.hidden = true;
    options[0].focus();
    return;
  }

  const selected = event.target.closest("[data-answer]");
  if (!selected || selected.disabled) return;

  const quiz = lessons[activeLessonTopic].quiz;
  const selectedAnswer = Number(selected.dataset.answer);
  options.forEach((option, i) => {
    option.disabled = true;
    option.setAttribute("aria-pressed", String(i === selectedAnswer));
    if (i === quiz.answer) option.classList.add("is-correct");
  });

  const isCorrect = selectedAnswer === quiz.answer;
  if (!isCorrect) selected.classList.add("is-incorrect");
  feedback.textContent = isCorrect
    ? "إجابة صحيحة! أحسنت."
    : `إجابة غير صحيحة. الجواب الصحيح: ${quiz.options[quiz.answer]}`;
  feedback.classList.add(isCorrect ? "is-correct" : "is-incorrect");
  drawerContent.querySelector("[data-quiz-retry]").hidden = false;
});

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

renderPreview("planning");
