'use strict';

/* ReadFlow 2.0 — English passages (Persian ones are in PASSAGES_I18N below) */
const PASSAGES = [
  {
    id: 'easy-1', difficulty: 'easy', title: 'The Honey Bee',
    text: 'Honey bees live together in large groups called colonies. A single colony can have more than fifty thousand bees. Each bee has a job to do. The queen lays the eggs. The worker bees collect food, clean the hive, and care for the young. The male bees, called drones, mate with queens from other hives.\n\nTo find food, worker bees fly from flower to flower. They drink sweet nectar and carry it home. Back at the hive, they turn the nectar into honey and store it in small wax rooms. When a bee finds a good field of flowers, she tells the others by doing a special dance. The dance shows how far away the flowers are and which way to fly.',
    questions: [
      { q: 'What is the job of the queen bee?', options: ['Collecting nectar', 'Laying eggs', 'Cleaning the hive', 'Guarding the door'], answer: 1 },
      { q: 'How do bees tell others where flowers are?', options: ['By buzzing loudly', 'By leaving a trail of wax', 'By doing a dance', 'By flying in a circle around the queen'], answer: 2 },
      { q: 'What do worker bees turn nectar into?', options: ['Wax', 'Honey', 'Eggs', 'Water'], answer: 1 }
    ]
  },
  {
    id: 'easy-2', difficulty: 'easy', title: 'A Morning at the Market',
    text: 'Every Saturday, Maria walks to the farmers market with her grandfather. They leave early, before the sun is high. The streets are quiet, and the air smells like fresh bread from the bakery on the corner.\n\nAt the market, farmers set up bright tables full of fruit and vegetables. Maria loves the red tomatoes and the yellow peaches. Her grandfather always buys a bag of apples and a jar of honey. He likes to talk with the farmers about the weather and the crops. When they finish shopping, they sit on a bench and share a warm roll. Then they carry their bags home together.',
    questions: [
      { q: 'When do Maria and her grandfather go to the market?', options: ['Every Sunday', 'Every Saturday', 'Every Friday evening', 'Once a month'], answer: 1 },
      { q: 'What does her grandfather always buy?', options: ['Tomatoes and bread', 'Peaches and milk', 'Apples and honey', 'Cheese and eggs'], answer: 2 },
      { q: 'What do they do after shopping?', options: ['Go to the bakery', 'Share a roll on a bench', 'Visit a friend', 'Take a bus home'], answer: 1 }
    ]
  },
  {
    id: 'medium-1', difficulty: 'medium', title: 'How Cities Stay Cool',
    text: 'Cities are often several degrees warmer than the countryside around them. This effect, known as the urban heat island, occurs because dark surfaces such as asphalt and roofing absorb sunlight and release it slowly as heat. Tall buildings also block wind, while a shortage of plants means there is little natural cooling from evaporation.\n\nPlanners are trying a range of solutions. Some cities paint roofs white or cover them with reflective coatings, which can lower indoor temperatures noticeably. Others plant trees along streets, since shade can reduce surface temperatures by a large margin and leaves release moisture into the air. Green roofs, covered with soil and vegetation, offer both insulation and cooling. Although these measures require investment, researchers argue that the savings in energy and the health benefits for residents during heat waves make them worthwhile.',
    questions: [
      { q: 'What causes the urban heat island effect?', options: ['Too much rainfall', 'Dark surfaces absorbing and releasing heat', 'Strong winds between buildings', 'Cold air from nearby mountains'], answer: 1 },
      { q: 'Why do trees help cool a city?', options: ['They block all sunlight', 'They produce heat slowly', 'They give shade and release moisture', 'They absorb noise'], answer: 2 },
      { q: 'What do researchers say about these cooling measures?', options: ['They are too costly to consider', 'They only work in small towns', 'They offer energy savings and health benefits', 'They harm local wildlife'], answer: 2 }
    ]
  },
  {
    id: 'medium-2', difficulty: 'medium', title: 'Why We Need Sleep',
    text: 'Sleep may look like a passive state, but the brain is remarkably active during the night. Scientists divide sleep into stages, including deep sleep and rapid eye movement, or REM, sleep. During deep sleep the body repairs tissue and strengthens the immune system, while REM sleep is closely linked to dreaming and emotional processing.\n\nOne of the most important roles of sleep is memory consolidation. While we rest, the brain replays the events of the day and moves important information into long-term storage. Studies show that students who sleep after learning new material usually remember more than those who stay awake. Chronic sleep loss, on the other hand, is associated with poor concentration, weakened immunity, and a higher risk of several illnesses. Most adults need between seven and nine hours each night, though individual needs vary.',
    questions: [
      { q: 'Which stage of sleep is mainly linked to dreaming?', options: ['Deep sleep', 'Light dozing', 'REM sleep', 'Waking rest'], answer: 2 },
      { q: 'What happens during memory consolidation?', options: ['The brain deletes old memories', 'Important information moves into long-term storage', 'The body repairs muscles', 'Dreams become more vivid'], answer: 1 },
      { q: 'How much sleep do most adults need?', options: ['Four to five hours', 'Five to six hours', 'Seven to nine hours', 'Ten to twelve hours'], answer: 2 }
    ]
  },
  {
    id: 'hard-1', difficulty: 'hard', title: 'The Economics of Attention',
    text: 'In an information-rich world, the wealth of information means a dearth of something else: a scarcity of whatever it is that information consumes. What information consumes is rather obvious: it consumes the attention of its recipients. Hence a wealth of information creates a poverty of attention and a need to allocate that attention efficiently among the overabundance of information sources that might consume it.\n\nThis insight, articulated by the economist Herbert Simon in the early 1970s, has proved remarkably prescient. Contemporary digital platforms compete not for money directly but for the finite hours in a person\'s day, monetising that engagement through advertising. Critics contend that such a model incentivises designs which exploit cognitive vulnerabilities, privileging sensationalism over substance. Defenders respond that users retain agency and that the same mechanisms deliver unprecedented access to knowledge. Reconciling these competing claims remains one of the central dilemmas of contemporary media policy.',
    questions: [
      { q: 'According to the passage, what does information consume?', options: ['Money', 'Time and energy equally', 'The attention of its recipients', 'Storage and bandwidth'], answer: 2 },
      { q: 'How do digital platforms mainly profit, according to the text?', options: ['Selling attention-based advertising', 'Charging users directly for access', 'Selling hardware', 'Licensing academic research'], answer: 0 },
      { q: 'What do critics of the attention model argue?', options: ['It reduces access to knowledge', 'It encourages designs that exploit cognitive vulnerabilities', 'It makes advertising unprofitable', 'It lacks scientific basis'], answer: 1 }
    ]
  },
  {
    id: 'hard-2', difficulty: 'hard', title: 'Maps and the Exercise of Power',
    text: 'A map is never a neutral reproduction of the terrain it purports to depict. Every cartographer must decide what to include, what to omit, and how to project a curved planet onto a flat surface, and each of these choices embodies assumptions about what matters. The Mercator projection, devised in 1569 for navigation, preserves angles at the expense of area, thereby inflating landmasses near the poles and rendering Europe disproportionately large relative to equatorial regions.\n\nHistorians of cartography have shown how maps served imperial ambition, legitimising territorial claims by rendering them visible and measurable before they were effectively controlled. Indigenous knowledge systems, which frequently encode relationships rather than coordinates, were routinely dismissed as unscientific. Recent scholarship urges a more critical literacy: to read a map not merely as a repository of facts but as an argument, composed by particular people for particular purposes, whose silences are as revealing as its inscriptions.',
    questions: [
      { q: 'What is the main drawback of the Mercator projection mentioned?', options: ['It distorts angles', 'It inflates areas near the poles', 'It omits coastlines', 'It was designed for aviation'], answer: 1 },
      { q: 'How did maps support imperial ambition?', options: ['By erasing all borders', 'By making territorial claims visible and measurable', 'By replacing local languages', 'By slowing exploration'], answer: 1 },
      { q: 'What does recent scholarship encourage readers to do?', options: ['Discard maps entirely', 'Trust maps as neutral facts', 'Read maps as arguments made for particular purposes', 'Use only modern digital maps'], answer: 2 }
    ]
  }
];

/* =========================================================
   PERSIAN PASSAGES — keyed by the same ids as PASSAGES above.
   To add a language: add PASSAGES_I18N.xx = { id: {title,text,questions} }
   ========================================================= */
const PASSAGES_I18N = { fa: {
  'easy-1': { title: 'زنبور عسل',
    text: 'زنبورهای عسل در گروه‌های بزرگی به نام کلونی زندگی می‌کنند. هر کلونی ممکن است بیش از پنجاه هزار زنبور داشته باشد. ملکه تخم می‌گذارد و زنبورهای کارگر شهد گل‌ها را جمع می‌کنند، کندو را تمیز می‌کنند و از نوزادان مراقبت می‌کنند. زنبورها شهد را در کندو به عسل تبدیل می‌کنند و در خانه‌های کوچک مومی نگه می‌دارند. وقتی زنبوری گل‌های خوبی پیدا کند، با یک رقص مخصوص به بقیه خبر می‌دهد.',
    questions: [
      { q: 'وظیفهٔ ملکه چیست؟', options: ['جمع‌کردن شهد', 'تخم‌گذاری', 'تمیزکردن کندو', 'نگهبانی'], answer: 1 },
      { q: 'زنبورها چگونه محل گل‌ها را اعلام می‌کنند؟', options: ['با وزوز بلند', 'با ردی از موم', 'با رقص', 'با پرواز دور ملکه'], answer: 2 },
      { q: 'شهد در کندو به چه تبدیل می‌شود؟', options: ['عسل', 'موم', 'تخم', 'آب'], answer: 0 }
    ] },
  'medium-1': { title: 'شهرها چگونه خنک می‌مانند',
    text: 'شهرها معمولاً از مناطق اطرافشان گرم‌ترند. سطوح تیره مانند آسفالت نور خورشید را جذب می‌کنند و آهسته آن را به شکل گرما پس می‌دهند. نبود گیاه نیز باعث می‌شود تبخیر کمی رخ دهد. برای کاهش این گرما، برخی شهرها بام‌ها را سفید می‌کنند و در خیابان‌ها درخت می‌کارند، زیرا سایه و رطوبت برگ‌ها دما را پایین می‌آورد. پژوهشگران می‌گویند صرفه‌جویی در انرژی و سلامت شهروندان این هزینه‌ها را توجیه می‌کند.',
    questions: [
      { q: 'علت پدیدهٔ جزیرهٔ گرمایی شهری چیست؟', options: ['بارش زیاد', 'باد شدید', 'هوای سرد کوهستان', 'جذب و آزادسازی گرما توسط سطوح تیره'], answer: 3 },
      { q: 'چرا درخت به خنک‌شدن شهر کمک می‌کند؟', options: ['گرما تولید می‌کند', 'همهٔ نور را می‌گیرد', 'سایه و رطوبت ایجاد می‌کند', 'صدا را جذب می‌کند'], answer: 2 },
      { q: 'پژوهشگران دربارهٔ این روش‌ها چه می‌گویند؟', options: ['بسیار پرهزینه‌اند', 'فقط در شهرهای کوچک کاربرد دارند', 'صرفه‌جویی انرژی و فواید سلامت دارند', 'به حیات وحش آسیب می‌زنند'], answer: 2 }
    ] },
  'hard-1': { title: 'اقتصاد توجه',
    text: 'در جهانی که اطلاعات فراوان است، چیز دیگری کمیاب می‌شود: توجه. اطلاعات توجه دریافت‌کننده را مصرف می‌کند و بنابراین فراوانی اطلاعات به فقر توجه می‌انجامد. امروز پلتفرم‌های دیجیتال برای ساعت‌های محدود روز ما رقابت می‌کنند و از راه تبلیغات سود می‌برند. منتقدان می‌گویند این الگو طراحی‌هایی را تشویق می‌کند که از ضعف‌های شناختی بهره می‌برند؛ مدافعان می‌گویند کاربران همچنان اختیار دارند و دسترسی به دانش بی‌سابقه شده است.',
    questions: [
      { q: 'اطلاعات چه چیزی را مصرف می‌کند؟', options: ['پول', 'توجه دریافت‌کننده', 'فضای ذخیره‌سازی', 'برق'], answer: 1 },
      { q: 'پلتفرم‌ها چگونه سود می‌برند؟', options: ['فروش تبلیغات', 'دریافت اشتراک', 'فروش سخت‌افزار', 'پژوهش علمی'], answer: 0 },
      { q: 'منتقدان چه می‌گویند؟', options: ['دسترسی به دانش را کم می‌کند', 'از ضعف‌های شناختی بهره می‌برد', 'تبلیغات را بی‌سود می‌کند', 'پایهٔ علمی ندارد'], answer: 1 }
    ] }
} };

/* =========================================================
   LANGUAGES & TRANSLATIONS (all UI text lives here)
   To add a language: add to LANGS, then add a translations entry
   (missing keys automatically fall back to English).
   ========================================================= */
const LANGS = { en: { name: 'English', dir: 'ltr' }, fa: { name: 'فارسی', dir: 'rtl' } };

const translations = {
  en: {
    pageTitle: 'ReadFlow — Reading Speed & Comprehension Test', lang: 'Language',
    home: 'Home', test: 'Test', quick: 'Quick Reading', games: 'Reading Games', stats: 'Statistics', about: 'About',
    heroTitle: 'Read faster. Understand more.', heroSub: 'Measure how fast you read and how well you understand what you read.',
    cardTest: 'Reading Test', cardTestD: 'Measure reading speed and comprehension.',
    cardQuick: 'Quick Reading', cardQuickD: 'Learn practical reading techniques.',
    cardGames: 'Reading Games', cardGamesD: 'Practice through progressive challenges.',
    cardStats: 'Statistics & Progress', cardStatsD: 'View records, levels and achievements.',
    today: "Today's progress", tTests: 'Tests completed', tGames: 'Games completed', tLessons: 'Lessons completed',
    chooseLevel: 'Choose a difficulty', easy: 'Easy', medium: 'Medium', hard: 'Hard',
    easyD: 'Short, simple texts', mediumD: 'Longer, moderate vocabulary', hardD: 'Advanced, complex sentences',
    startTest: 'Start Test', words: 'words', startReading: 'Start Reading', finishReading: 'Finish Reading',
    hintStart: 'Press Start Reading when you are ready. The text appears and the timer begins.',
    hintReading: 'Read at your natural pace, then press Finish Reading.',
    hintFast: 'That was very quick. Please read the whole passage before finishing.',
    stRead: 'Read', stAnswer: 'Answer', stResults: 'Results',
    qTitle: 'Comprehension questions', qIntro: 'Your reading speed was {wpm} WPM. Now answer without looking back at the text.',
    submit: 'Submit Answers', errAnswer: 'Please answer every question before submitting.',
    overall: 'Overall Score', speed: 'Reading Speed', time: 'Reading Time', wordsRead: 'Words Read',
    comp: 'Comprehension', correct: 'Correct Answers', total: 'Total Questions', wpmU: 'WPM',
    cat: 'Speed category', catDev: 'Developing', catGood: 'Good', catFast: 'Fast', catVery: 'Very Fast',
    catNote: 'Categories are only a simple reference. Reading speed varies with text difficulty and how well you understand the text.',
    msgGreat: 'Great job!', msgGood: 'Good progress!', msgKeep: 'Keep practicing!',
    again: 'Take Another Test', viewStats: 'View Statistics', backGames: 'Back to Games',
    history: 'Test history', clear: 'Clear History', date: 'Date', difficulty: 'Difficulty', wpm: 'WPM',
    compShort: 'Comprehension', overallShort: 'Overall', noTests: 'No tests yet. Finish a test and it will show up here.',
    confirmTitle: 'Clear all history?', confirmText: 'This permanently deletes every saved test result.', cancel: 'Cancel',
    bestWpm: 'Best WPM', avgWpm: 'Average WPM', bestComp: 'Best Comprehension', tests: 'Tests Completed', last: 'Last Result',
    bestGame: 'Best Game Score', maxLevel: 'Highest Level Unlocked', gamesDone: 'Games Completed', lessonsDone: 'Lessons Completed', points: 'Current Points',
    aboutTitle: 'About ReadFlow', about1: 'ReadFlow helps users measure reading speed and comprehension through short reading tests.',
    about2: 'Speed is calculated as words divided by minutes. Your overall score is 60% reading speed (capped at 300 WPM for full marks) and 40% comprehension.',
    about3: 'Results are approximate and depend on text difficulty and reading conditions. Your data is stored only in this browser.',
    quickTitle: 'Quick Reading', lessonsProg: '{n} / {total} lessons completed', markDone: 'Mark as completed', done: 'Completed ✓', exercise: 'Exercise',
    gamesTitle: 'Reading Games', gamesIntro: 'Unlock levels one by one. Each level has a speed and comprehension goal.',
    totalPts: 'Total points', curLevel: 'Current level', lvlDone: 'Levels completed', level: 'Level {n}',
    locked: 'Locked', unlocked: 'Unlocked', completed: 'Completed', play: 'Play', goal: 'Goal: {wpm}+ WPM and {comp}%+ comprehension',
    passed: 'Level completed! +{pts} points', failed: 'Not there yet. Try again to reach the goal.',
    lv1: 'Warm Up', lv2: 'Eye Movement', lv3: 'Word Groups', lv4: 'Speed Challenge', lv5: 'Comprehension Challenge', lv6: 'Focus Challenge', lv7: 'Master Challenge',
    achTitle: 'Achievements',
    first: 'First Test', firstD: 'Complete your first reading test.', speedA: 'Speed Reader', speedD: 'Reach 250 WPM in a test.',
    acc: 'Accurate Reader', accD: 'Score 100% comprehension.', cons: 'Consistent Reader', consD: 'Complete 5 sessions (tests or games).',
    learner: 'Quick Learner', learnerD: 'Complete 4 quick-reading lessons.', master: 'Level Master', masterD: 'Complete all training levels.'
  },
  fa: {
    pageTitle: 'ReadFlow — آزمون سرعت و درک مطلب', lang: 'زبان',
    home: 'خانه', test: 'آزمون', quick: 'آموزش سریع‌خوانی', games: 'بازی و تمرین', stats: 'آمار', about: 'درباره',
    heroTitle: 'سریع‌تر بخوان، بهتر بفهم.', heroSub: 'بسنجید چقدر سریع می‌خوانید و چقدر خوب متن را می‌فهمید.',
    cardTest: 'آزمون خواندن', cardTestD: 'سرعت و درک مطلب خود را بسنجید.',
    cardQuick: 'آموزش سریع‌خوانی', cardQuickD: 'تکنیک‌های کاربردی خواندن را یاد بگیرید.',
    cardGames: 'بازی و تمرین', cardGamesD: 'با چالش‌های مرحله‌ای تمرین کنید.',
    cardStats: 'آمار و پیشرفت', cardStatsD: 'رکوردها، مرحله‌ها و دستاوردهایتان را ببینید.',
    today: 'پیشرفت امروز', tTests: 'آزمون‌های انجام‌شده', tGames: 'بازی‌های انجام‌شده', tLessons: 'درس‌های کامل‌شده',
    chooseLevel: 'سطح دشواری را انتخاب کنید', easy: 'آسان', medium: 'متوسط', hard: 'سخت',
    easyD: 'متن‌های کوتاه و ساده', mediumD: 'متن‌های بلندتر با واژگان متوسط', hardD: 'متن‌های پیشرفته و پیچیده',
    startTest: 'شروع آزمون', words: 'واژه', startReading: 'شروع خواندن', finishReading: 'پایان خواندن',
    hintStart: 'وقتی آماده بودید «شروع خواندن» را بزنید. متن نمایان و زمان‌سنج شروع می‌شود.',
    hintReading: 'با سرعت طبیعی بخوانید و سپس «پایان خواندن» را بزنید.',
    hintFast: 'خیلی سریع بود. لطفاً پیش از پایان، کل متن را بخوانید.',
    stRead: 'خواندن', stAnswer: 'پاسخ', stResults: 'نتایج',
    qTitle: 'پرسش‌های درک مطلب', qIntro: 'سرعت خواندن شما {wpm} واژه در دقیقه بود. حالا بدون نگاه‌کردن به متن پاسخ دهید.',
    submit: 'ثبت پاسخ‌ها', errAnswer: 'لطفاً پیش از ثبت به همهٔ پرسش‌ها پاسخ دهید.',
    overall: 'امتیاز کل', speed: 'سرعت خواندن', time: 'زمان خواندن', wordsRead: 'واژه‌های خوانده‌شده',
    comp: 'درک مطلب', correct: 'پاسخ درست', total: 'کل پرسش‌ها', wpmU: 'واژه/دقیقه',
    cat: 'دستهٔ سرعت', catDev: 'در حال رشد', catGood: 'خوب', catFast: 'سریع', catVery: 'بسیار سریع',
    catNote: 'این دسته‌ها فقط مرجعی ساده‌اند. سرعت خواندن به دشواری متن و میزان درک شما بستگی دارد.',
    msgGreat: 'آفرین!', msgGood: 'پیشرفت خوبی دارید!', msgKeep: 'تمرین را ادامه دهید!',
    again: 'آزمون دیگر', viewStats: 'مشاهدهٔ آمار', backGames: 'بازگشت به بازی‌ها',
    history: 'تاریخچهٔ آزمون‌ها', clear: 'پاک‌کردن تاریخچه', date: 'تاریخ', difficulty: 'دشواری', wpm: 'واژه/دقیقه',
    compShort: 'درک مطلب', overallShort: 'امتیاز کل', noTests: 'هنوز آزمونی انجام نشده است.',
    confirmTitle: 'همهٔ تاریخچه پاک شود؟', confirmText: 'همهٔ نتایج ذخیره‌شده برای همیشه حذف می‌شوند.', cancel: 'انصراف',
    bestWpm: 'بهترین سرعت', avgWpm: 'میانگین سرعت', bestComp: 'بهترین درک مطلب', tests: 'آزمون‌های انجام‌شده', last: 'آخرین نتیجه',
    bestGame: 'بهترین امتیاز بازی', maxLevel: 'بالاترین مرحلهٔ بازشده', gamesDone: 'بازی‌های انجام‌شده', lessonsDone: 'درس‌های کامل‌شده', points: 'امتیاز فعلی',
    aboutTitle: 'دربارهٔ ReadFlow', about1: 'ReadFlow به کاربران کمک می‌کند سرعت و درک مطلب خود را با آزمون‌های کوتاه بسنجند.',
    about2: 'سرعت برابر است با تعداد واژه‌ها تقسیم بر دقیقه‌ها. امتیاز کل شامل ۶۰٪ سرعت (حداکثر تا ۳۰۰ واژه در دقیقه) و ۴۰٪ درک مطلب است.',
    about3: 'نتایج تقریبی‌اند و به دشواری متن و شرایط خواندن بستگی دارند. اطلاعات شما فقط در همین مرورگر ذخیره می‌شود.',
    quickTitle: 'آموزش سریع‌خوانی', lessonsProg: '{n} از {total} درس کامل شد', markDone: 'علامت‌گذاری به‌عنوان انجام‌شده', done: 'انجام شد ✓', exercise: 'تمرین',
    gamesTitle: 'بازی و تمرین', gamesIntro: 'مرحله‌ها را یکی‌یکی باز کنید. هر مرحله هدفی برای سرعت و درک مطلب دارد.',
    totalPts: 'مجموع امتیاز', curLevel: 'مرحلهٔ فعلی', lvlDone: 'مرحله‌های کامل‌شده', level: 'مرحلهٔ {n}',
    locked: 'قفل', unlocked: 'باز', completed: 'کامل شد', play: 'شروع', goal: 'هدف: حداقل {wpm} واژه/دقیقه و {comp}٪ درک مطلب',
    passed: 'مرحله کامل شد! +{pts} امتیاز', failed: 'هنوز به هدف نرسیدید؛ دوباره تلاش کنید.',
    lv1: 'گرم‌کردن', lv2: 'حرکت چشم', lv3: 'گروه‌های واژه', lv4: 'چالش سرعت', lv5: 'چالش درک مطلب', lv6: 'چالش تمرکز', lv7: 'چالش استاد',
    achTitle: 'دستاوردها',
    first: 'اولین آزمون', firstD: 'اولین آزمون خواندن را کامل کنید.', speedA: 'خوانندهٔ سریع', speedD: 'در یک آزمون به ۲۵۰ واژه در دقیقه برسید.',
    acc: 'خوانندهٔ دقیق', accD: 'درک مطلب ۱۰۰٪ بگیرید.', cons: 'خوانندهٔ پیوسته', consD: 'پنج جلسه (آزمون یا بازی) را کامل کنید.',
    learner: 'یادگیرندهٔ سریع', learnerD: 'چهار درس را کامل کنید.', master: 'استاد مرحله‌ها', masterD: 'همهٔ مرحله‌ها را کامل کنید.'
  }
};

/* Quick-reading lessons: [title, explanation + technique, exercise] per language */
const LESSONS = [
  { id: 1, en: ['Stop subvocalization', 'Subvocalization is silently "saying" each word in your head, which keeps you near speaking speed. Try humming softly or tapping a steady rhythm while you read, so attention stays on meaning instead of sound.', 'Hum quietly while reading one paragraph, then summarise it in one sentence.'],
    fa: ['توقف درون‌خوانی', 'درون‌خوانی یعنی «گفتن» بی‌صدای هر واژه در ذهن که سرعت شما را به سرعت حرف‌زدن نزدیک می‌کند. هنگام خواندن آرام زمزمه کنید یا ریتمی ثابت بزنید تا توجه‌تان روی معنا بماند.', 'آرام زمزمه کنید و یک بند را بخوانید؛ سپس آن را در یک جمله خلاصه کنید.'] },
  { id: 2, en: ['Reduce regression', 'Regression is jumping back to re-read words. It feels necessary but usually is not. Guide your eyes forward with a finger or pen and go back only when a sentence truly makes no sense.', 'Read a paragraph with a pen under the line and never move backward.'],
    fa: ['کاهش بازگشت چشم', 'بازگشت یعنی برگشتن برای خواندن دوباره واژه‌ها؛ معمولاً لازم نیست. با انگشت یا خودکار چشم را به جلو هدایت کنید و فقط وقتی جمله‌ای واقعاً مفهوم نبود برگردید.', 'یک بند را با خودکار زیر خط بخوانید و هرگز به عقب برنگردید.'] },
  { id: 3, en: ['Improve eye movement', 'Your eyes move in quick jumps, not smooth glides. Fewer, longer jumps mean faster reading. Start and end each line a word or two inside the margins.', 'Read three lines starting at the second word and stopping before the last.'],
    fa: ['بهبود حرکت چشم', 'چشم‌ها با جهش‌های سریع حرکت می‌کنند نه روان. جهش‌های کمتر و بلندتر یعنی خواندن سریع‌تر. هر خط را یک یا دو واژه بعد از حاشیه شروع و قبل از حاشیه تمام کنید.', 'سه خط را از واژهٔ دوم شروع کنید و پیش از واژهٔ آخر تمام کنید.'] },
  { id: 4, en: ['Read in groups', 'Instead of reading word by word, take in two to four words at a glance. Practise with familiar phrases first, then widen your focus slowly.', 'Read a short paragraph in three-word chunks, pausing briefly between chunks.'],
    fa: ['خواندن گروهی', 'به‌جای خواندن واژه‌به‌واژه، دو تا چهار واژه را یک‌جا ببینید. اول با عبارت‌های آشنا تمرین کنید و کم‌کم دامنهٔ دید را بیشتر کنید.', 'یک بند کوتاه را در گروه‌های سه‌واژه‌ای بخوانید و بین گروه‌ها مکث کوتاهی کنید.'] },
  { id: 5, en: ['Preview the text', 'Before reading, scan the title, headings, first sentences and bold terms. This builds a mental map and makes details easier to place.', 'Spend 20 seconds previewing an article, then predict three things it will cover.'],
    fa: ['مرور اولیهٔ متن', 'پیش از خواندن، عنوان، تیترها، جمله‌های اول و واژه‌های پررنگ را مرور کنید. این کار نقشهٔ ذهنی می‌سازد و جزئیات را راحت‌تر جا می‌دهد.', 'بیست ثانیه یک مقاله را مرور کنید و سه موضوع آن را پیش‌بینی کنید.'] },
  { id: 6, en: ['Improve concentration', 'Remove distractions: silence notifications, set a 15–25 minute block and keep a clear goal such as "find the main argument".', 'Put your phone out of reach, set a 15-minute timer and read without switching tasks.'],
    fa: ['تقویت تمرکز', 'حواس‌پرتی‌ها را کم کنید: اعلان‌ها را خاموش کنید، بازه‌ای ۱۵ تا ۲۵ دقیقه‌ای تعیین کنید و هدفی روشن مثل «یافتن ایدهٔ اصلی» داشته باشید.', 'گوشی را دور بگذارید، تایمر ۱۵ دقیقه‌ای بگذارید و بدون تغییر کار بخوانید.'] },
  { id: 7, en: ['Speed vs comprehension', 'Faster is only better if you still understand. Raise your pace gradually, check yourself by summarising, and slow down for difficult material.', 'Read at your normal pace, then 10% faster, and compare how much you can recall.'],
    fa: ['سرعت در برابر درک مطلب', 'سریع‌تر خواندن فقط وقتی خوب است که هنوز بفهمید. سرعت را تدریجی بالا ببرید، با خلاصه‌کردن خودتان را بسنجید و برای متن سخت کندتر بخوانید.', 'یک بار با سرعت عادی و یک بار ده درصد سریع‌تر بخوانید و میزان یادآوری را مقایسه کنید.'] }
];

/* Game levels: difficulty plus goals a run must reach to complete the level */
const LEVELS = [
  { n: 1, diff: 'easy', wpm: 80, comp: 67 }, { n: 2, diff: 'easy', wpm: 100, comp: 67 },
  { n: 3, diff: 'medium', wpm: 120, comp: 67 }, { n: 4, diff: 'medium', wpm: 140, comp: 67 },
  { n: 5, diff: 'hard', wpm: 150, comp: 67 }, { n: 6, diff: 'hard', wpm: 170, comp: 67 },
  { n: 7, diff: 'hard', wpm: 190, comp: 100 }
];

/* Achievements: unlocked automatically when check(ctx) is true */
const ACHIEVEMENTS = [
  { id: 'first', icon: '🏁', name: 'first', desc: 'firstD', check: (c) => c.tests >= 1 },
  { id: 'speed', icon: '⚡', name: 'speedA', desc: 'speedD', check: (c) => c.bestWpm >= 250 },
  { id: 'acc', icon: '🎯', name: 'acc', desc: 'accD', check: (c) => c.bestComp >= 100 },
  { id: 'cons', icon: '🔥', name: 'cons', desc: 'consD', check: (c) => c.sessions >= 5 },
  { id: 'learner', icon: '📚', name: 'learner', desc: 'learnerD', check: (c) => c.lessons >= 4 },
  { id: 'master', icon: '🏆', name: 'master', desc: 'masterD', check: (c) => c.levels >= LEVELS.length }
];

/* =========================================================
   CONSTANTS & STATE
   ========================================================= */
const KEYS = { lang: 'readflow_language', history: 'readflow_history', progress: 'readflow_progress', lessons: 'readflow_lessons', ach: 'readflow_achievements' };
const WPM_FULL_MARKS = 300;
const MIN_READ_MS = 3000;

const state = {
  lang: 'en', step: 'welcome', mode: 'test', level: null, difficulty: 'easy',
  passage: null, content: null, contentLang: 'en',
  startTime: null, elapsedMs: 0, timerId: null, wpm: 0, submitted: false, lastPassageByLevel: {}
};
const $ = (id) => document.getElementById(id);

/* =========================================================
   LOCAL STORAGE (safe JSON — corrupted data falls back to defaults)
   ========================================================= */
function load(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; } catch (e) { return fallback; }
}
function save(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* blocked or full */ } }

function loadHistory() { const h = load(KEYS.history, []); return Array.isArray(h) ? h.filter((r) => r && typeof r.wpm === 'number') : []; }
function loadLessons() { const l = load(KEYS.lessons, {}); return l && typeof l === 'object' && !Array.isArray(l) ? l : {}; }
function loadProgress() {
  const p = load(KEYS.progress, {});
  return {
    points: Number(p.points) || 0, bestGame: Number(p.bestGame) || 0,
    completed: p.completed && typeof p.completed === 'object' ? p.completed : {},
    games: Array.isArray(p.games) ? p.games : []
  };
}
function saveHistory(result) { const h = loadHistory(); h.unshift(result); save(KEYS.history, h.slice(0, 200)); }
function clearHistory() { try { localStorage.removeItem(KEYS.history); } catch (e) { /* ignore */ } refreshAll(); }

/* =========================================================
   LANGUAGE SYSTEM
   ========================================================= */
// Translate a key, filling {placeholders}; falls back to English, then to the key
function t(key, vars = {}) {
  const dict = translations[state.lang] || {};
  const str = dict[key] !== undefined ? dict[key] : (translations.en[key] !== undefined ? translations.en[key] : key);
  return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ''));
}

// Switch language: updates lang/dir, translates static text, re-renders dynamic sections
function applyLanguage(lang) {
  if (!LANGS[lang]) lang = 'en';
  state.lang = lang;
  save(KEYS.lang, lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = LANGS[lang].dir;
  document.title = t('pageTitle');
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $('lang-select').value = lang;
  $('lang-select').setAttribute('aria-label', t('lang'));
  refreshAll();
}

function buildLanguageSelect() {
  const sel = $('lang-select');
  Object.keys(LANGS).forEach((code) => {
    const o = document.createElement('option'); o.value = code; o.textContent = LANGS[code].name; sel.appendChild(o);
  });
}

/* =========================================================
   NAVIGATION
   ========================================================= */
const VIEWS = ['home', 'test', 'quick', 'games', 'stats', 'about'];
function navigateTo(view) {
  VIEWS.forEach((name) => { $('view-' + name).hidden = name !== view; });
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    const active = btn.dataset.nav === view;
    btn.classList.toggle('active', active);
    if (active) btn.setAttribute('aria-current', 'page'); else btn.removeAttribute('aria-current');
  });
  refreshAll();
  window.scrollTo(0, 0);
}
function showStep(step) {
  state.step = step;
  ['welcome', 'reading', 'questions', 'results'].forEach((s) => { $('step-' + s).hidden = s !== step; });
}

/* =========================================================
   PASSAGES
   ========================================================= */
// Language-specific content for a passage, or null when that language has none
function getContent(p, lang) {
  if (lang === 'en') return { title: p.title, text: p.text, questions: p.questions };
  return (PASSAGES_I18N[lang] && PASSAGES_I18N[lang][p.id]) || null;
}
const countWords = (text) => text.trim().split(/\s+/).length;

// Pick a random passage for the level/language, avoiding an immediate repeat
function selectPassage(difficulty, lang) {
  const pool = PASSAGES.filter((p) => p.difficulty === difficulty && getContent(p, lang));
  const key = difficulty + lang;
  const choices = pool.length > 1 ? pool.filter((p) => p.id !== state.lastPassageByLevel[key]) : pool;
  const picked = choices[Math.floor(Math.random() * choices.length)];
  state.lastPassageByLevel[key] = picked.id;
  return picked;
}

// Wrap every word in <span class="reading-word"> (punctuation stays attached; spaces stay as text nodes)
function renderPassage(el, text, lang) {
  el.innerHTML = '';
  el.lang = lang; el.dir = LANGS[lang].dir;
  text.split('\n\n').forEach((para) => {
    const p = document.createElement('p');
    para.split(/(\s+)/).forEach((tok) => {
      if (!tok) return;
      if (/^\s+$/.test(tok)) { p.appendChild(document.createTextNode(tok)); return; }
      const s = document.createElement('span'); s.className = 'reading-word'; s.textContent = tok; p.appendChild(s);
    });
    el.appendChild(p);
  });
}
// Tap support for touch screens: tapping a word highlights it
function handleWordTap(e) {
  const w = e.target.closest('.reading-word'); if (!w) return;
  const was = w.classList.contains('active');
  document.querySelectorAll('.reading-word.active').forEach((x) => x.classList.remove('active'));
  if (!was) w.classList.add('active');
}

/* =========================================================
   READING SESSION (used by both the Test and the Games)
   ========================================================= */
function startSession(mode, difficulty, level) {
  stopTimer();
  let lang = state.lang;
  if (!PASSAGES.some((p) => p.difficulty === difficulty && getContent(p, lang))) lang = 'en'; // no passage in this language yet
  state.mode = mode; state.level = level || null; state.difficulty = difficulty; state.contentLang = lang;
  state.passage = selectPassage(difficulty, lang);
  state.content = getContent(state.passage, lang);
  state.elapsedMs = 0; state.wpm = 0; state.submitted = false; state.startTime = null;

  $('read-level').textContent = mode === 'game' ? t('level', { n: level }) : t(difficulty);
  $('read-words').textContent = countWords(state.content.text) + ' ' + t('words');
  $('read-title').textContent = state.content.title;
  $('read-title').lang = lang; $('read-title').dir = LANGS[lang].dir;
  $('timer').textContent = '00:00';
  $('read-hint').textContent = t('hintStart');
  renderPassage($('passage'), state.content.text, lang);
  $('passage').classList.add('blurred');
  $('btn-start-reading').disabled = false;
  $('btn-finish-reading').disabled = true;
  showStep('reading');
}
function startTest() {
  startSession('test', document.querySelector('input[name="difficulty"]:checked').value);
}
function startGame(n) {
  if (!isLevelUnlocked(n)) return;                      // locked levels cannot be started
  navigateTo('test');
  startSession('game', LEVELS[n - 1].diff, n);
}

/* ---------- Timer (performance.now deltas stay accurate even if the tab lags) ---------- */
const formatTime = (ms) => {
  const s = Math.floor(ms / 1000);
  return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
};
function startTimer() {
  state.startTime = performance.now();
  state.timerId = setInterval(() => { $('timer').textContent = formatTime(performance.now() - state.startTime); }, 200);
}
function stopTimer() { if (state.timerId) clearInterval(state.timerId); state.timerId = null; }

function handleStartReading() {
  $('passage').classList.remove('blurred');
  $('btn-start-reading').disabled = true;
  $('btn-finish-reading').disabled = false;
  $('read-hint').textContent = t('hintReading');
  startTimer();
  $('btn-finish-reading').focus();
}
function handleFinishReading() {
  const elapsed = performance.now() - state.startTime;
  if (elapsed < MIN_READ_MS) { $('read-hint').textContent = t('hintFast'); return; }
  stopTimer();
  state.elapsedMs = elapsed;
  state.wpm = calculateWPM(countWords(state.content.text), elapsed);
  renderQuestions();
  showStep('questions');
  window.scrollTo(0, 0);
}

/* =========================================================
   CALCULATIONS
   ========================================================= */
function calculateWPM(words, ms) { return Math.round(words / (ms / 60000)); }
function calculateComprehension(correct, total) { return Math.round((correct / total) * 100); }
// 60% speed (capped at 100 points) + 40% comprehension
function calculateOverall(wpm, comp) { return Math.round(Math.min(wpm / WPM_FULL_MARKS, 1) * 100 * 0.6 + comp * 0.4); }
function speedCategoryKey(wpm) { return wpm < 150 ? 'catDev' : wpm <= 250 ? 'catGood' : wpm <= 350 ? 'catFast' : 'catVery'; }
function messageKey(overall) { return overall >= 80 ? 'msgGreat' : overall >= 55 ? 'msgGood' : 'msgKeep'; }

/* =========================================================
   QUESTIONS
   ========================================================= */
function renderQuestions() {
  const lang = state.contentLang;
  $('q-speed').textContent = t('qIntro', { wpm: state.wpm });
  $('q-error').hidden = true;
  $('btn-submit').disabled = false;
  const box = $('questions'); box.innerHTML = '';
  box.lang = lang; box.dir = LANGS[lang].dir;           // questions follow the passage language
  state.content.questions.forEach((item, qi) => {
    const set = document.createElement('fieldset'); set.className = 'question';
    const legend = document.createElement('legend'); legend.textContent = (qi + 1) + '. ' + item.q; set.appendChild(legend);
    item.options.forEach((opt, oi) => {
      const label = document.createElement('label'); label.className = 'option';
      const input = document.createElement('input'); input.type = 'radio'; input.name = 'q' + qi; input.value = oi;
      const span = document.createElement('span'); span.textContent = opt;
      label.append(input, span); set.appendChild(label);
    });
    box.appendChild(set);
  });
}
function collectAnswers() {
  const answers = state.content.questions.map((_, qi) => {
    const c = document.querySelector('input[name="q' + qi + '"]:checked');
    return c ? Number(c.value) : null;
  });
  return answers.includes(null) ? null : answers;
}
function countCorrect(answers) { return answers.filter((a, i) => a === state.content.questions[i].answer).length; }

function handleSubmit(event) {
  event.preventDefault();
  if (state.submitted) return;                          // prevent double submission
  const answers = collectAnswers();
  if (!answers) { const err = $('q-error'); err.textContent = t('errAnswer'); err.hidden = false; return; }
  state.submitted = true;
  $('btn-submit').disabled = true;

  const correct = countCorrect(answers), total = answers.length;
  const comp = calculateComprehension(correct, total);
  const r = {
    date: new Date().toISOString(), difficulty: state.difficulty, wpm: state.wpm, comprehension: comp,
    overall: calculateOverall(state.wpm, comp), correct, total,
    words: countWords(state.content.text), timeMs: Math.round(state.elapsedMs)
  };
  let note = '';
  if (state.mode === 'test') saveHistory(r); else note = recordGameResult(r);
  checkAchievements();
  renderResults(r, note);
  showStep('results');
  window.scrollTo(0, 0);
}

/* =========================================================
   RESULTS
   ========================================================= */
function tile(label, value, cls) {
  const div = document.createElement('div'); div.className = 'tile ' + (cls || '');
  const s = document.createElement('small'); s.textContent = label;
  const b = document.createElement('b'); b.textContent = value;
  div.append(s, b); return div;
}
function renderResults(r, note) {
  $('res-message').textContent = t(messageKey(r.overall));
  const g = $('res-grid'); g.innerHTML = '';
  g.append(tile(t('overall'), r.overall + '/100', 'hero'), tile(t('speed'), r.wpm + ' ' + t('wpmU')), tile(t('time'), formatTime(r.timeMs)),
    tile(t('wordsRead'), r.words), tile(t('comp'), r.comprehension + '%'), tile(t('correct'), r.correct), tile(t('total'), r.total));
  $('res-category').textContent = t('cat') + ': ' + t(speedCategoryKey(r.wpm));
  $('res-note').textContent = note; $('res-note').hidden = !note;
  $('btn-again').textContent = state.mode === 'game' ? t('backGames') : t('again');
}

/* =========================================================
   GAMES, LEVELS & POINTS
   ========================================================= */
function isLevelCompleted(n) { return !!loadProgress().completed[n]; }
function isLevelUnlocked(n) { return n === 1 || isLevelCompleted(n - 1); }

// Points: completion +100, speed bonus +50 (20% above goal), perfect comprehension +100
function recordGameResult(r) {
  const lv = LEVELS[state.level - 1], p = loadProgress();
  const passed = r.wpm >= lv.wpm && r.comprehension >= lv.comp;
  let pts = 0;
  if (passed) {
    pts = 100 + (r.wpm >= lv.wpm * 1.2 ? 50 : 0) + (r.comprehension === 100 ? 100 : 0);
    p.completed[lv.n] = Math.max(p.completed[lv.n] || 0, pts);
  }
  p.points += pts; p.bestGame = Math.max(p.bestGame, pts); p.games.push(r.date);
  save(KEYS.progress, p);
  return passed ? t('passed', { pts }) : t('failed');
}

function renderGames() {
  const p = loadProgress(), done = Object.keys(p.completed).length;
  const cur = Math.min(LEVELS.length, done + 1);
  const sum = $('games-summary'); sum.innerHTML = '';
  sum.append(tile(t('totalPts'), p.points, 'light'), tile(t('curLevel'), cur, 'light'), tile(t('lvlDone'), done + ' / ' + LEVELS.length, 'light'));
  const box = $('levels'); box.innerHTML = '';
  LEVELS.forEach((lv) => {
    const completed = isLevelCompleted(lv.n), unlocked = isLevelUnlocked(lv.n);
    const card = document.createElement('div'); card.className = 'level-card ' + (completed ? 'completed' : unlocked ? 'open' : 'locked');
    const h = document.createElement('h3'); h.textContent = (completed ? '✓ ' : unlocked ? '🔓 ' : '🔒 ') + t('level', { n: lv.n }) + ' — ' + t('lv' + lv.n);
    const d = document.createElement('p'); d.textContent = t('goal', { wpm: lv.wpm, comp: lv.comp });
    const s = document.createElement('p'); s.className = 'state'; s.textContent = completed ? t('completed') : unlocked ? t('unlocked') : t('locked');
    const b = document.createElement('button'); b.className = 'btn primary'; b.textContent = t('play'); b.disabled = !unlocked;
    b.addEventListener('click', () => startGame(lv.n));
    card.append(h, d, s, b); box.appendChild(card);
  });
}

/* =========================================================
   QUICK READING LESSONS
   ========================================================= */
function toggleLesson(id) {
  const l = loadLessons();
  if (l[id]) delete l[id]; else l[id] = new Date().toISOString();
  save(KEYS.lessons, l); checkAchievements(); refreshAll();
}
function renderLessons() {
  const l = loadLessons(), n = LESSONS.filter((x) => l[x.id]).length;
  $('lessons-progress').textContent = t('lessonsProg', { n, total: LESSONS.length });
  $('lessons-bar').style.width = (n / LESSONS.length * 100) + '%';
  const box = $('lessons'); box.innerHTML = '';
  LESSONS.forEach((lesson) => {
    const c = lesson[state.lang] || lesson.en, done = !!l[lesson.id];
    const card = document.createElement('article'); card.className = 'card lesson' + (done ? ' is-done' : '');
    const h = document.createElement('h3'); h.textContent = lesson.id + '. ' + c[0];
    const body = document.createElement('p'); body.textContent = c[1];
    const ex = document.createElement('p'); ex.className = 'exercise'; ex.textContent = t('exercise') + ': ' + c[2];
    const b = document.createElement('button'); b.className = 'btn ' + (done ? 'ghost' : 'primary');
    b.textContent = done ? t('done') : t('markDone'); b.setAttribute('aria-pressed', String(done));
    b.addEventListener('click', () => toggleLesson(lesson.id));
    card.append(h, body, ex, b); box.appendChild(card);
  });
}

/* =========================================================
   ACHIEVEMENTS
   ========================================================= */
function checkAchievements() {
  const h = loadHistory(), p = loadProgress();
  const ctx = {
    tests: h.length, bestWpm: h.length ? Math.max(...h.map((r) => r.wpm)) : 0,
    bestComp: h.length ? Math.max(...h.map((r) => r.comprehension)) : 0,
    sessions: h.length + p.games.length, lessons: Object.keys(loadLessons()).length, levels: Object.keys(p.completed).length
  };
  const stored = load(KEYS.ach, []), have = Array.isArray(stored) ? stored : [];
  ACHIEVEMENTS.forEach((a) => { if (!have.includes(a.id) && a.check(ctx)) have.push(a.id); });
  save(KEYS.ach, have);
}
function renderAchievements() {
  const stored = load(KEYS.ach, []), have = Array.isArray(stored) ? stored : [];
  const box = $('ach-list'); box.innerHTML = '';
  ACHIEVEMENTS.forEach((a) => {
    const on = have.includes(a.id);
    const div = document.createElement('div'); div.className = 'ach' + (on ? '' : ' locked');
    const i = document.createElement('span'); i.className = 'ach-icon'; i.textContent = on ? a.icon : '🔒'; i.setAttribute('aria-hidden', 'true');
    const txt = document.createElement('div');
    const n = document.createElement('strong'); n.textContent = t(a.name);
    const d = document.createElement('small'); d.textContent = t(a.desc);
    txt.append(n, d); div.append(i, txt); box.appendChild(div);
  });
}

/* =========================================================
   STATISTICS, HISTORY & HOME
   ========================================================= */
function updateStatistics() {
  const h = loadHistory(), p = loadProgress(), les = Object.keys(loadLessons()).length;
  const maxDone = Object.keys(p.completed).reduce((m, k) => Math.max(m, Number(k)), 0);
  const dash = '—', has = h.length > 0;
  const grid = $('stats-grid'); grid.innerHTML = '';
  grid.append(
    tile(t('tests'), h.length, 'light'),
    tile(t('bestWpm'), has ? Math.max(...h.map((r) => r.wpm)) : dash, 'light'),
    tile(t('avgWpm'), has ? Math.round(h.reduce((s, r) => s + r.wpm, 0) / h.length) : dash, 'light'),
    tile(t('bestComp'), has ? Math.max(...h.map((r) => r.comprehension)) + '%' : dash, 'light'),
    tile(t('last'), has ? h[0].wpm + ' · ' + h[0].comprehension + '% · ' + h[0].overall + '/100' : dash, 'light'),
    tile(t('bestGame'), p.bestGame, 'light'),
    tile(t('maxLevel'), Math.min(LEVELS.length, maxDone + 1), 'light'),
    tile(t('gamesDone'), p.games.length, 'light'),
    tile(t('lessonsDone'), les + ' / ' + LESSONS.length, 'light'),
    tile(t('points'), p.points, 'light')
  );
}
function renderHistory() {
  const h = loadHistory(), body = $('history-body'); body.innerHTML = '';
  $('history-empty').hidden = h.length > 0; $('btn-clear').disabled = h.length === 0;
  const locale = state.lang === 'fa' ? 'fa-IR-u-nu-latn' : state.lang;
  h.forEach((r) => {
    const tr = document.createElement('tr');
    [new Date(r.date).toLocaleString(locale, { dateStyle: 'medium', timeStyle: 'short' }), t(r.difficulty), r.wpm, r.comprehension + '%', r.overall + '/100']
      .forEach((c) => { const td = document.createElement('td'); td.textContent = c; tr.appendChild(td); });
    body.appendChild(tr);
  });
}
function renderHome() {
  const same = (iso) => new Date(iso).toDateString() === new Date().toDateString();
  const g = $('today-grid'); g.innerHTML = '';
  g.append(tile(t('tTests'), loadHistory().filter((r) => same(r.date)).length, 'light'),
    tile(t('tGames'), loadProgress().games.filter(same).length, 'light'),
    tile(t('tLessons'), Object.values(loadLessons()).filter(same).length, 'light'));
}
// Re-render every dynamic section (cheap: small lists only)
function refreshAll() { renderHome(); renderLessons(); renderGames(); updateStatistics(); renderHistory(); renderAchievements(); }

/* =========================================================
   EVENT WIRING & INIT
   ========================================================= */
document.addEventListener('click', (e) => {
  const nav = e.target.closest('[data-nav]');
  if (nav) { e.preventDefault(); navigateTo(nav.dataset.nav); }
});
$('lang-select').addEventListener('change', (e) => applyLanguage(e.target.value));
$('btn-start-test').addEventListener('click', startTest);
$('btn-start-reading').addEventListener('click', handleStartReading);
$('btn-finish-reading').addEventListener('click', handleFinishReading);
$('step-questions').addEventListener('submit', handleSubmit);
$('passage').addEventListener('click', handleWordTap);
$('btn-again').addEventListener('click', () => {
  stopTimer(); state.submitted = false; showStep('welcome');
  if (state.mode === 'game') navigateTo('games');
});
$('btn-clear').addEventListener('click', () => { $('confirm-dialog').returnValue = ''; $('confirm-dialog').showModal(); });
$('confirm-dialog').addEventListener('close', (e) => { if (e.target.returnValue === 'confirm') clearHistory(); });
window.addEventListener('beforeunload', (e) => {
  if ((state.step === 'reading' && state.startTime) || state.step === 'questions') { e.preventDefault(); e.returnValue = ''; }
});

buildLanguageSelect();
applyLanguage(load(KEYS.lang, 'en'));
checkAchievements();
navigateTo('home');
