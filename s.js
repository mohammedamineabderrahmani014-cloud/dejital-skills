const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const topicOverlay = document.getElementById("topicOverlay");
const topicPanel = document.getElementById("topicPanel");
const topicClose = document.getElementById("topicClose");
const topicScroll = document.getElementById("topicScroll");
const topicProgress = document.getElementById("topicProgress");
const topicSearch = document.getElementById("topicSearch");
const searchCount = document.getElementById("searchCount");

function renderTopicSections(sections) {
    const toc = document.getElementById("topicToc");
    const article = document.getElementById("lessonSections");
    if (!toc || !article) return;

    toc.innerHTML = `<strong>في هذا الدرس</strong>`;
    article.innerHTML = "";

    sections.forEach((section, index) => {
        const [id, title, text, tipTitle, tipText] = section;
        const number = String(index + 1).padStart(2, "0");
        const paragraphs = [];
        text.split(/\n\s*\n/).forEach((block) => {
            const sentences = block.match(/[^.!?]+[.!?]+(?:\s|$)/g) || [block];
            for (let i = 0; i < sentences.length; i += 2) {
                const paragraph = sentences.slice(i, i + 2).join(" ").trim();
                if (paragraph) paragraphs.push(paragraph);
            }
        });
        toc.insertAdjacentHTML("beforeend",
            `<a href="#lesson-${id}" class="${index === 0 ? "active" : ""}"><span>${number}</span>${title}</a>`
        );
        article.insertAdjacentHTML("beforeend", `
            <section class="lesson-section" id="lesson-${id}" data-search="${title}">
                <span class="lesson-number">${number}</span>
                <h3>${title}</h3>
                ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
                <div class="lesson-tip">
                    <span>💡</span>
                    <div><strong>${tipTitle}</strong><p>${tipText}</p></div>
                </div>
            </section>
        `);
    });

    if (topicSearch) topicSearch.value = "";
    if (searchCount) searchCount.textContent = `${sections.length} أقسام`;
    observeLessonSections();
}

function observeLessonSections() {
    const lessonSections = document.querySelectorAll(".lesson-section");

    lessonSections.forEach((section) => {
        section.classList.add("lesson-reading-reveal");
    });

    if (!("IntersectionObserver" in window)) {
        lessonSections.forEach((section) => section.classList.add("visible"));
        return;
    }

    const lessonObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: topicScroll,
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px"
    });

    lessonSections.forEach((section) => lessonObserver.observe(section));
}

if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

const topicData = {
    time: {
        title: "كيف تنظم وقتك وتنجز أكثر؟",
        intro: "رحلة عملية تساعدك على التخطيط بوضوح وتحويل المهام الكبيرة إلى خطوات سهلة.",
        badge: "إدارة الوقت",
        sections: [
            ["start", "ابدأ بهدف ذكي وواضح", "قبل فتح كتابك أو البدء بالمهمة، حدّد النتيجة التي تريد الوصول إليها بنهاية الجلسة. اجعل هدفك محددًا وقابلًا للقياس: «سأحل خمسة تمرينًات وأراجع ملخص الفصلين» أوضح بكثير من «سأدرس قليلًا». اكتب الهدف في مكان ظاهر حتى تعرف متى تنتهي الجلسة ومتى تبدأ الاستراحة. لا تضع هدفًا عامًا مثل «أنجح في الامتحان»؛ قسّمه إلى أعمال يمكن تنفيذها الآن.", "قاعدة ذكية", "إذا كان هدفك لا يمكن إتمامه في جلسة واحدة، فقسّمه إلى أهداف أصغر."],
            ["priorities", "رتّب أولوياتك بوضوح", "ابدأ بتصنيف مهامك بحسب الأهمية والوقت المتاح. المهم والعاجل يجب أن يأتي أولًا؛ المهم لكنه ليس عاجلًا يحتاج وقتًا محجوزًا في جدولك حتى لا يتحول فجأة إلى أزمة. للمهمة غير المهمة، اسأل نفسك إن كانت ضرورية فعلًا، أم يمكن تأجيلها أو إسنادها لشخص آخر. راجع القائمة في بداية كل يوم، وليس عشر مرات خلاله؛ كثرة التغيير تعني فقدان التركيز.", "طريقة عملية", "اختر مهمة واحدة فقط لتكون «المهمة الرئيسة» لليوم."],
            ["weekly", "صمّم أسبوعًا قابلًا للتنفيذ", "ابدأ بتحديد ثلاثة أهداف رئيسية للأسبوع لا لعدد أكبر من الأهداف التي تبدو مثيرة لكنها لا تصمد. حوّل كل هدف إلى مهمتين أو ثلاث مهام محددة، ثم ضعها في أيام مختلفة بدل تجميعها في يوم واحد. خصص وقتًا للمراجعة والدروس الصعبة في أوقات يكون فيها تركيزك طبيعيًا، واحترم مواعيد الراحة والأنشطة خارج الدراسة. نهاية كل أسبوع، انظر إلى ما تحقق وما تأخر، وحدد السبب قبل بناء الأسبوع التالي.\n\nيساعدك نظام أسبوعي واضح على تجنب الشعور بأن كل يوم يبدأ من الصفر. إذا تأخر العمل يومًا واحدًا، يمكن نقل المهمة إلى فرصة متاحة أخرى دون قلب كل الخطة. ما يهم هو وجود جدول مرن قائم على الواقع، وليس جدول مثالي لا يطابق وقتك أو طاقتك.", "تطبيق الأسبوع", "اكتب هدفًا واحدًا كل صباح، وحدد مهمتين فقط لهذا اليوم."],
            ["plan", "حضّر خطة يوم واقعية", "قسّم يومك إلى كتل زمنية لها بداية ونهاية واضحان. خصص وقتًا للدرس، المراجعة، حل التمارين، الحركة، والراحة. لا تملأ جدولك بالكامل؛ اترك مساحات بديلة للتأخير. عند تقدير الوقت، أضف خمس عشرة دقيقة إضافية للمهمة التي تعتقد أنها تحتاج ساعة. الخطة الجيدة ليست الطويلة، بل تلك التي تستطيع الالتزام بها.", "نماذج زمنية", "مراجعة: 20 دقيقة، جلسة تركيز: 90 دقيقة، استراحة وحركة: 30 دقيقة، حل تمارين: 60 دقيقة."],
            ["focus", "اعمل بجلسات تركيز قصيرة", "اختر مهمة واحدة وأغلق مشتتاتك قبل البدء. اعمل لمدة 25 إلى 45 دقيقة، ثم خذ استراحة قصيرة تتراوح بين خمس وعشر دقائق. أثناء الاستراحة ابتعد فعليًا عن شاشة الدراسة. بعد الجلسات الثلاث إلى الأربع، خذ استراحة أطول. إذا تعلّقت على نقطة صعبة، سجّل السؤال واركز على مرحلة أخرى، ثم ارجع إليه بمساعدة أو وقت جديد.", "جلسة مثالية", "ابدأ بجزء صغير، ضع مؤقتًا، اغلق الإشعارات، واعمل حتى ينتهي المؤقت."],
            ["distractions", "قلّل المشتتات قبل أن تبدأ", "ضع الهاتف بعيدا عن يدك، أغلق علامات التبويب غير المطلوبة، وجهّز الأدوات التي تحتاجها قبل بدء الجلسة. أخبر من حولك أنك ستعمل لمدة محددة. أي فكرة أو مهمة تتذكرها أثناء التركيز، اكتبها بسرعة في ورقة جانبية واعد إليها لاحقًا. هذه الطريقة تمنعها من مقاطعتك بلا تعقيد.", "تذكير مهم", "المشتت لا يجب أن يختفي إلى الأبد؛ فقط يجب تأجيله إلى بعد الجلسة."],
            ["review", "راجع تقدمك وحدد خطوة الغد", "في نهاية اليوم راجع ما أنجزته وما بقي، دون لوم نفسك. اسأل: أين استخدم وقتي جيدًا؟ أين خسرته؟ ما المهمة التي تحتاج وقتًا أكثر؟ ثم حدّد المهمة الأولى لليوم التالي. المراجعة المستمرة تكشف أنماطًا حقيقية وتساعدك على تحسين خطتك بدلًا من تكرار القرارات العشوائية.", "في نهاية اليوم", "حدد المهمة الأولى، راجع ما أنجزته، وامنح نفسك وقتًا للراحة."]
        ]
    },
    focus: {
        title: "تقوية التركيز في 7 أيام",
        intro: "خطوات يومية بسيطة تعيد انتباهك إلى المهمة وتقلل أثر الإشعارات والتشتت.",
        badge: "التركيز والانتباه",
        sections: [
            ["environment", "جهّز بيئة صديقة للانتباه", "ضع سطح الدراسة في حالة تسمح ببدء العمل بسرعة. أبعد الهاتف، جهّز ما تحتاجه فقط، وأطفئ الإشعارات. الضوء الجيد والوضعية المريحة يقللان التعب ويحفظان انتباهك. قبل كل جلسة خصص دقيقة لإزالة الفوضى وتنظيف الشاشة، لأن كل عنصر بصري قد يفتح طلبًا على انتباهك.", "اختبار سريع", "هل تستطيع رؤية المهمة التالية بوضوح دون البحث عن الأدوات؟"],
            ["trigger", "أنشئ إشارة لبداية التركيز", "ربط جلسة التكرار بإشارة ثابتة يساعد الدماغ على الانتقال إلى وضع الدراسة. يمكن أن تكون الإشارة كوبًا من الماء، كتابة هدف الجلسة، تشغيل موسيقى هادئة، أو جلوسًا في مكان واحد. كرر الإشارة كل يوم لمدة أسبوع حتى تصبح عادة مميزة.", "مثال", "املأ كوبًا من الماء، اكتب الهدف، ضع الهاتف بعيدًا، ثم شغل المؤقت."],
            ["single", "التزم بمهمة واحدة", "تبديل المهام يخفض جودة الانتباه حتى لو شعرت أنك تنجز أكثر. حدد مهمة صغيرة ومرئية، ثم تابعها حتى تنتهي أو يصل المؤقت إلى نهايته. إذا ظهر سؤال جانبي، سجله ولا تبدأ مهمة جديدة مباشرة.", "قاعدة التنفيذ", "مهمة واحدة، مدة واحدة، نتيجة واحدة."],
            ["review", "راقب الانحرافات دون الخوف منها", "عندما يضيع انتباهك، لاحظ ذلك بلطف وعُد إلى المهمة. لا تعد هذه اللحظة فشلاً؛ الانتباه عضلة تتدرب بالملاحظة والعودة. يمكن وضع علامة صغيرة على ورقة كلما انتشر الانتباه، وبعد الجلسة تعرف ما هي أكثر مصادر التشتت التي تحتاج معالجة.", "تمرين يومي", "كلما عاد انتباهك، اعتبر ذلك نجاحًا صغيرًا."],
            ["rest", "احمِ انتباهك بالراحة", "التركيز المستمر لساعات لا يزيد الجودة دائمًا. نظم راحة حقيقية بعد كل كتلة عمل: مشي قصير، شرب ماء، أو نظر بعيدًا عن الشاشة. تجنب بدائل الراحة التي تقدم مزيدًا من الإشعارات مثل الفيديوهات السريعة.", "وقت التعافي", "قاعدة أولية: خمس إلى عشر دقائق راحة بعد كل 25 إلى 45 دقيقة دراسة."],
            ["week", "اختتم الأسبوع بتقييم بسيط", "في نهاية الأيام السبعة، قارن عدد الجلسات، أطول مدة ثابتة، والمشتتات المتكررة. احتفظ بالتقنيات التي رفعت تركيزك ولا تضف كل نصيحة دفعة واحدة. هدف الأسبوع هو بناء نظام قابل للاستمرار، وليس تحقيق جلسة مثالية واحدة.", "مقياس نجاح", "الاستمرار ثلاث جلسات يوميًا أفضل من جلسة مثالية واحدة ثم الانقطاع."]
        ]
    },
    memory: {
        title: "تقنيات تثبيت المعلومة بسرعة",
        intro: "تعلم الاسترجاع النشط والتكرار المتباعد لتحويل القراءة إلى ذاكرة طويلة.",
        badge: "طرق المذاكرة",
        sections: [
            ["recall", "ابدأ بالاسترجاع النشط", "الإعادة المستمرة للنص لا تعني أنك تتذكره؛ فالخلاصة التي تنتجها من ذكرك أقوى بكثير. بعد دراسة فقرة، أغلق الكتاب وحاول شرحها بكلماتك. اكتب الإجابة أو اشرحها بصوت مسموع، ثم راجع ما أخطأت فيه وعدل الفهم.", "قاعدة الاسترجاع", "أغلق المصدر، تذكر، ثم تحقق من صحة إجابتك."],
            ["cards", "حوّل المعلومات إلى بطاقات دقيقة", "اجعل البطاقة تختبر فكرة واحدة لا صفحة كاملة. في الوجه سؤال واضح، وفي الخلف شرح مختصر وربط عملي. تجنب نسخة النص حرفيًا؛ صياغة سؤالك بيدك تصنع فهمًا وتفكيرًا أكبر.", "بطاقة جيدة", "سؤال واحد + إجابة قصيرة + مثال أو رابط يوضح المعنى."],
            ["spacing", "راجع بأزمنة متباعدة", "راجع المعلومة بعد يوم، وبعد ثلاثة أيام، ثم بعد أسبوع، ثم عند اقتراب الامتحان حسب الحاجة. يزيد التباعد قوة الأثر ويقلل التكرار العشوائي قبل الامتحان. إذا أخطأت، راجع أقرب وأعد الجدولة دون الشعور بالإحباط.", "جدول مقترح", "اليوم الأول، اليوم الثالث، اليوم التاسع، وبعد أسبوعين."],
            ["interleave", "ادمج أنواع المسائل", "بدلًا من تكرار نوع واحد من التمرين، امزج أسئلة من عدة موضوعات ومهارات. هذا يطوّر قدرتك على تحديد الطريقة المناسبة للمشكلة، لكنه قد يبدو أصعب في البداية. الصعوبة المتوسطة مفيدة إذا كانت مرتبطة بنتيجة واضحة.", "متى تمارس الدمج؟", "بعد فهم الأساسيات، امزج مسائل متشابهة وخاطئها قليلًا، واقرر الاستراتيجية قبل الحل."],
            ["sleep", "احمِ الذاكرة بالنوم والاستراحة", "النوم يساعد الدماغ على تثبيت ما تعلمته. لا يستبدل المراجعة، لكنه يحسن تذكرك واستعدادك للتفكير. خصص وقتًا للنوم المنتظم، وتجنب إضافة جلسات كبيرة ليلًا على حساب راحة مناسبة.", "روتين ناجح", "راجع قليلاً قبل النوم، واحفظ وقت الاستيقاظ ثابتًا قدر الإمكان."],
            ["test", "اختبر نفسك بانتظام", "الامتحان التجريبي لا يهدف لإخافتك، بل يكشف نقاط ضعفة مبكرًا. حاول إنهاءه دون مصادر، ثم صنف أخطاءك: نقص معرفة، خطأ حسابي، فهم خاطئ، أو سوء قراءة. أنشئ قائمة مراجعة خاصة بالأخطاء ودرّبها بعد التصحيح.", "تقييم النتيجة", "لا تسجل الدرجة فقط؛ سجل سبب الخطأ والخطوة التي ستغيرها."]
        ]
    }
};

function openTopic(topicKey) {
    if (!topicPanel || !topicOverlay) return;

    const data = topicData[topicKey] || topicData.time;
    document.getElementById("topicTitle").textContent = data.title;
    document.getElementById("topicIntro").textContent = data.intro;
    document.getElementById("topicBadge").textContent = data.badge;
    renderTopicSections(data.sections);

    topicPanel.classList.add("open");
    topicOverlay.classList.add("open");
    topicPanel.setAttribute("aria-hidden", "false");
    topicOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("topic-open");

    if (topicScroll) topicScroll.scrollTop = 0;
    if (topicClose) topicClose.focus();
}

function closeTopic() {
    if (!topicPanel || !topicOverlay) return;

    topicPanel.classList.remove("open");
    topicOverlay.classList.remove("open");
    topicPanel.setAttribute("aria-hidden", "true");
    topicOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("topic-open");
}

document.querySelectorAll(".course-card[data-topic]").forEach((card) => {
    card.addEventListener("click", () => openTopic(card.dataset.topic));
    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openTopic(card.dataset.topic);
        }
    });
});

if (topicClose) topicClose.addEventListener("click", closeTopic);
if (topicOverlay) topicOverlay.addEventListener("click", closeTopic);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && topicPanel && topicPanel.classList.contains("open")) {
        closeTopic();
    }
});

if (topicScroll && topicProgress) {
    topicScroll.addEventListener("scroll", () => {
        const max = topicScroll.scrollHeight - topicScroll.clientHeight;
        const percent = max > 0 ? (topicScroll.scrollTop / max) * 100 : 0;
        topicProgress.style.width = `${percent}%`;

        const sections = document.querySelectorAll(".lesson-section");
        let activeId = "";
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < topicScroll.getBoundingClientRect().top + 220) {
                activeId = section.id;
            }
        });
        document.querySelectorAll(".topic-toc a").forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
        });
    });
}

if (topicSearch) {
    topicSearch.addEventListener("input", () => {
        const query = topicSearch.value.trim().toLowerCase();
        let visible = 0;

        document.querySelectorAll(".lesson-section").forEach((section) => {
            const content = `${section.textContent} ${section.dataset.search || ""}`.toLowerCase();
            const matches = !query || content.includes(query);
            section.classList.toggle("search-hidden", !matches);
            if (matches) {
                visible += 1;
                section.classList.add("visible");
            }
        });

        if (searchCount) {
            searchCount.textContent = query ? `${visible} نتيجة` : "6 أقسام";
        }
    });
}

const searchButton = document.getElementById("searchButton");
if (searchButton) {
    searchButton.addEventListener("click", () => openTopic("time"));
}

const skillCards = document.querySelectorAll(".skill-card");
skillCards.forEach((card, index) => {
    card.style.setProperty("--card-order", index);
    card.addEventListener("mousemove", (event) => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translateY(-8px) rotateX(${y * -3}deg) rotateY(${x * 3}deg)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

const revealItems = document.querySelectorAll(".skill-card, .course-card, .cta-card");
revealItems.forEach((item, index) => {
    item.classList.add("scroll-reveal");
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
});

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.14 });

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("visible"));
}

const flyingContainers = document.querySelectorAll(".flying-words, .topic-flying-words");

flyingContainers.forEach((container) => {
    container.addEventListener("mousemove", (event) => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        const rect = container.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;

        container.querySelectorAll("span").forEach((word, index) => {
            const strength = (index + 1) * 0.28;
            word.style.marginLeft = `${x * strength}px`;
            word.style.marginTop = `${y * strength}px`;
        });
    });

    function createAmbientWords() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const existingLayer = document.querySelector(".ambient-word-layer");
        if (existingLayer) existingLayer.remove();

        const words = ["خطط", "ركّز", "راجع", "استرجع", "أنجز", "تعلّم"];
        const layer = document.createElement("div");
        layer.className = "ambient-word-layer";
        layer.setAttribute("aria-hidden", "true");

        words.forEach((word, index) => {
            const item = document.createElement("span");
            item.className = "ambient-word";
            item.textContent = word;
            item.style.left = `${8 + index * 14}%`;
            item.style.setProperty("--ambient-duration", `${17 + (index % 4) * 3}s`);
            item.style.setProperty("--ambient-delay", `${index * -3.2}s`);
            item.style.setProperty("--ambient-x-start", `${(index % 2 ? 25 : -25)}px`);
            item.style.setProperty("--ambient-x-mid", `${(index % 3 - 1) * 35}px`);
            item.style.setProperty("--ambient-x-end", `${(index % 2 ? -30 : 30)}px`);
            layer.appendChild(item);
        });

        document.body.appendChild(layer);
    }

    createAmbientWords();

    container.addEventListener("mouseleave", () => {
        container.querySelectorAll("span").forEach((word) => {
            word.style.marginLeft = "";
            word.style.marginTop = "";
        });
    });
})
