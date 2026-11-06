// JLPT Timetable & Alarm Application Logic - iOS & Mobile Optimized
// Enhanced with D-Day, Exam Focus Timer, Japanese Voice Speech, Score & Mistake Tracker

const DAILY_ROUTINE = [
  {
    id: 1,
    start: "06:30 AM",
    end: "07:00 AM",
    startMins: 6 * 60 + 30, // 390
    endMins: 7 * 60,        // 420
    name: "အိပ်ရာထ / မျက်နှာသစ် / ရေချိုး",
    category: "Routine",
    tagClass: "tag-routine",
    notes: "လန်းဆန်းအေးဆေးစွာ ပြင်ဆင်ရန်",
    duration: "30 mins",
    durationMins: 30,
    isPaperSlot: false
  },
  {
    id: 2,
    start: "07:00 AM",
    end: "08:00 AM",
    startMins: 7 * 60,      // 420
    endMins: 8 * 60,        // 480
    name: "မနက်စာစား / ဖုန်းကြည့်ချိန်",
    category: "Relax / Phone",
    tagClass: "tag-relax",
    notes: "မနက်စာအေးဆေးစားပြီး ဖုန်းကြည့်ရန်",
    duration: "1 hr",
    durationMins: 60,
    isPaperSlot: false
  },
  {
    id: 3,
    start: "08:00 AM",
    end: "10:30 AM",
    startMins: 8 * 60,      // 480
    endMins: 10 * 60 + 30,  // 630
    name: "မေးခွန်းဟောင်း လေ့ကျင့်မှု (Session 1)",
    category: "Study - Mock Test",
    tagClass: "tag-study",
    notes: "သတ်မှတ်ထားသော နှစ်အလိုက် Moji, Goi, Bunpou မေးခွန်းဟောင်းများ ဖြေဆိုရန်",
    duration: "2.5 hrs",
    durationMins: 150,
    isPaperSlot: true,
    paperType: "moji"
  },
  {
    id: 4,
    start: "10:30 AM",
    end: "10:45 AM",
    startMins: 10 * 60 + 30, // 630
    endMins: 10 * 60 + 45,  // 645
    name: "အနားယူချိန် (Break)",
    category: "Break",
    tagClass: "tag-break",
    notes: "မျက်စိနှင့် ဦးနှောက် အနားပေးရန်",
    duration: "15 mins",
    durationMins: 15,
    isPaperSlot: false
  },
  {
    id: 5,
    start: "10:45 AM",
    end: "12:15 PM",
    startMins: 10 * 60 + 45, // 645
    endMins: 12 * 60 + 15,  // 735
    name: "အဖြေစစ် / အမှားပြင် / မှတ်စုထုတ်",
    category: "Study - Review",
    tagClass: "tag-study",
    notes: "မှားသွားသော မေးခွန်းများ ပြန်စစ်ပြီး ဝေါဟာရ/သဒ္ဒါ မှတ်စုထုတ်ရန်",
    duration: "1.5 hrs",
    durationMins: 90,
    isPaperSlot: false
  },
  {
    id: 6,
    start: "12:15 PM",
    end: "01:30 PM",
    startMins: 12 * 60 + 15, // 735
    endMins: 13 * 60 + 30,  // 810
    name: "နေ့လယ်စာစား / ဖုန်းကြည့်ချိန်",
    category: "Relax / Lunch",
    tagClass: "tag-relax",
    notes: "နေ့လယ်စာစားပြီး ဖုန်းကြည့်/အနားယူရန်",
    duration: "1 hr 15 mins",
    durationMins: 75,
    isPaperSlot: false
  },
  {
    id: 7,
    start: "01:30 PM",
    end: "03:30 PM",
    startMins: 13 * 60 + 30, // 810
    endMins: 15 * 60 + 30,  // 930
    name: "ဖတ်စာ/စာဖတ်စွမ်းရည် (Dokkai Focus)",
    category: "Study - Reading",
    tagClass: "tag-study",
    notes: "သတ်မှတ်ထားသော နှစ်အလိုက် Dokkai မေးခွန်းဟောင်း ဖတ်၍ အချိန်ကိုက် ဖြေဆိုရန်",
    duration: "2 hrs",
    durationMins: 120,
    isPaperSlot: true,
    paperType: "dokkai"
  },
  {
    id: 8,
    start: "03:30 PM",
    end: "04:00 PM",
    startMins: 15 * 60 + 30, // 930
    endMins: 16 * 60,       // 960
    name: "နေ့လယ်ခင်း ခါးဆန့်/ရေချိုး",
    category: "Routine",
    tagClass: "tag-routine",
    notes: "ခါးဆန့်ရန် သို့မဟုတ် ရေချိုး၍ လန်းဆန်းစေရန်",
    duration: "30 mins",
    durationMins: 30,
    isPaperSlot: false
  },
  {
    id: 9,
    start: "04:00 PM",
    end: "05:30 PM",
    startMins: 16 * 60,     // 960
    endMins: 17 * 60 + 30,  // 1050
    name: "နားထောင်မှုလေ့ကျင့်ခြင်း (Choukai Focus)",
    category: "Study - Listening",
    tagClass: "tag-study",
    notes: "သတ်မှတ်ထားသော နှစ်အလိုက် Choukai နားထောင်ပြီး မေးခွန်းဖြေရန်",
    duration: "1.5 hrs",
    durationMins: 90,
    isPaperSlot: true,
    paperType: "choukai"
  },
  {
    id: 10,
    start: "05:30 PM",
    end: "06:30 PM",
    startMins: 17 * 60 + 30, // 1050
    endMins: 18 * 60 + 30,  // 1110
    name: "ဖုန်းကြည့်ချိန် / လမ်းလျှောက်",
    category: "Free Time / Phone",
    tagClass: "tag-relax",
    notes: "စိတ်ကြိုက် ဖုန်းကြည့်၊ ဂိမ်းဆော့ သို့မဟုတ် လမ်းလျှောက်ရန်",
    duration: "1 hr",
    durationMins: 60,
    isPaperSlot: false
  },
  {
    id: 11,
    start: "06:30 PM",
    end: "07:30 PM",
    startMins: 18 * 60 + 30, // 1110
    endMins: 19 * 60 + 30,  // 1170
    name: "ညစာစား / ရေချိုးပြင်ဆင်",
    category: "Dinner / Routine",
    tagClass: "tag-routine",
    notes: "ညစာ အေးဆေးစားရန်",
    duration: "1 hr",
    durationMins: 60,
    isPaperSlot: false
  },
  {
    id: 12,
    start: "07:30 PM",
    end: "09:30 PM",
    startMins: 19 * 60 + 30, // 1170
    endMins: 21 * 60 + 30,  // 1290
    name: "တစ်နေ့တာ ပြန်လည်သုံးသပ်ခြင်း & Kanji",
    category: "Study - Review",
    tagClass: "tag-study",
    notes: "တစ်နေ့တာ မှားခဲ့သော Dokkai/Choukai နှင့် Kanji ပြန်ကြည့်ရန်",
    duration: "2 hrs",
    durationMins: 120,
    isPaperSlot: false
  },
  {
    id: 13,
    start: "09:30 PM",
    end: "10:30 PM",
    startMins: 21 * 60 + 30, // 1290
    endMins: 22 * 60 + 30,  // 1350
    name: "ညပိုင်း အပန်းဖြေ/ဖုန်းကြည့်ချိန်",
    category: "Relax / Phone",
    tagClass: "tag-relax",
    notes: "အိပ်ခါနီး စိတ်လက်ပေါ့ပါးစွာ ဖုန်းကြည့်ရန်",
    duration: "1 hr",
    durationMins: 60,
    isPaperSlot: false
  },
  {
    id: 14,
    start: "10:30 PM",
    end: "06:30 AM",
    startMins: 22 * 60 + 30, // 1350
    endMins: 6 * 60 + 30,   // 390 (crosses midnight)
    name: "အိပ်စက်ချိန် (Sleep)",
    category: "Sleep",
    tagClass: "tag-sleep",
    notes: "ဦးနှောက် အနားယူချိန် (၈ နာရီ)",
    duration: "8 hrs",
    durationMins: 480,
    isPaperSlot: false
  }
];

const PAST_PAPERS = [
  { date: "09/11/2026", day: "Mon", year: "2021 July (2021-07)", moji: "2021-07 Vocabulary & Grammar", dokkai: "2021-07 Short Reading (Short Dokkai)", choukai: "2021-07 Listening Task 1 & 2" },
  { date: "10/11/2026", day: "Tue", year: "2021 July (2021-07)", moji: "2021-07 Review & Mistake Corrections", dokkai: "2021-07 Medium & Long Dokkai", choukai: "2021-07 Listening Task 3, 4 & 5" },
  { date: "11/11/2026", day: "Wed", year: "2021 December (2021-12)", moji: "2021-12 Vocabulary & Grammar", dokkai: "2021-12 Short & Medium Dokkai", choukai: "2021-12 Listening Task 1 & 2" },
  { date: "12/11/2026", day: "Thu", year: "2021 December (2021-12)", moji: "2021-12 Review & Mistake Corrections", dokkai: "2021-12 Long & Comparative Dokkai", choukai: "2021-12 Listening Task 3, 4 & 5" },
  { date: "13/11/2026", day: "Fri", year: "2022 July (2022-07)", moji: "2022-07 Vocabulary & Grammar", dokkai: "2022-07 Short & Medium Dokkai", choukai: "2022-07 Listening Task 1 & 2" },
  { date: "14/11/2026", day: "Sat", year: "2022 July (2022-07)", moji: "2022-07 Review & Mistake Corrections", dokkai: "2022-07 Long Dokkai & Information Search", choukai: "2022-07 Listening Task 3, 4 & 5" },
  { date: "15/11/2026", day: "Sun", year: "Week 1 Review & Catch-up", moji: "Week 1 Vocabulary List Review", dokkai: "Week 1 Dokkai Weak Passages Review", choukai: "Week 1 Choukai Audio Re-listening" },
  { date: "16/11/2026", day: "Mon", year: "2022 December (2022-12)", moji: "2022-12 Vocabulary & Grammar", dokkai: "2022-12 Short & Medium Dokkai", choukai: "2022-12 Listening Task 1 & 2" },
  { date: "17/11/2026", day: "Tue", year: "2022 December (2022-12)", moji: "2022-12 Review & Mistake Corrections", dokkai: "2022-12 Long & Information Search Dokkai", choukai: "2022-12 Listening Task 3, 4 & 5" },
  { date: "18/11/2026", day: "Wed", year: "2023 July (2023-07)", moji: "2023-07 Vocabulary & Grammar", dokkai: "2023-07 Short & Medium Dokkai", choukai: "2023-07 Listening Task 1 & 2" },
  { date: "19/11/2026", day: "Thu", year: "2023 July (2023-07)", moji: "2023-07 Review & Mistake Corrections", dokkai: "2023-07 Long Dokkai & Information Search", choukai: "2023-07 Listening Task 3, 4 & 5" },
  { date: "20/11/2026", day: "Fri", year: "2023 December (2023-12)", moji: "2023-12 Vocabulary & Grammar", dokkai: "2023-12 Short & Medium Dokkai", choukai: "2023-12 Listening Task 1 & 2" },
  { date: "21/11/2026", day: "Sat", year: "2023 December (2023-12)", moji: "2023-12 Review & Mistake Corrections", dokkai: "2023-12 Long Dokkai & Information Search", choukai: "2023-12 Listening Task 3, 4 & 5" },
  { date: "22/11/2026", day: "Sun", year: "Week 2 Review & Catch-up", moji: "Week 2 Grammar Patterns Review", dokkai: "Week 2 Dokkai Speed Reading Review", choukai: "Week 2 Choukai Dictation Practice" },
  { date: "23/11/2026", day: "Mon", year: "2024 July (2024-07)", moji: "2024-07 Vocabulary & Grammar", dokkai: "2024-07 Short & Medium Dokkai", choukai: "2024-07 Listening Task 1 & 2" },
  { date: "24/11/2026", day: "Tue", year: "2024 July (2024-07)", moji: "2024-07 Review & Mistake Corrections", dokkai: "2024-07 Long Dokkai & Information Search", choukai: "2024-07 Listening Task 3, 4 & 5" },
  { date: "25/11/2026", day: "Wed", year: "2024 December (2024-12)", moji: "2024-12 Vocabulary & Grammar", dokkai: "2024-12 Short & Medium Dokkai", choukai: "2024-12 Listening Task 1 & 2" },
  { date: "26/11/2026", day: "Thu", year: "2024 December (2024-12)", moji: "2024-12 Review & Mistake Corrections", dokkai: "2024-12 Long Dokkai & Information Search", choukai: "2024-12 Listening Task 3, 4 & 5" },
  { date: "27/11/2026", day: "Fri", year: "2025 July (2025-07) - Full Mock 1", moji: "2025-07 Full Test (Time Strictly Monitored)", dokkai: "2025-07 Dokkai Full Test (Time Monitored)", choukai: "2025-07 Choukai Full Test" },
  { date: "28/11/2026", day: "Sat", year: "2025 July (2025-07) - Full Review", moji: "2025-07 Vocabulary & Grammar Detailed Review", dokkai: "2025-07 Dokkai Weak Passage Analysis", choukai: "2025-07 Choukai Script Review" },
  { date: "29/11/2026", day: "Sun", year: "Week 3 Full Mock Test Review", moji: "Mock Test 1 Weakness Mapping", dokkai: "Dokkai Time Management Strategy", choukai: "Choukai Trap Question Patterns" },
  { date: "30/11/2026", day: "Mon", year: "2025 December (2025-12) - Full Mock 2", moji: "2025-12 Full Test (Real Exam Simulation)", dokkai: "2025-12 Dokkai Full Test (Real Exam Speed)", choukai: "2025-12 Choukai Full Test" },
  { date: "01/12/2026", day: "Tue", year: "2025 December (2025-12) - Review", moji: "2025-12 Vocab/Grammar Error Analysis", dokkai: "2025-12 Dokkai Error Analysis", choukai: "2025-12 Choukai Error Analysis" },
  { date: "02/12/2026", day: "Wed", year: "High-Frequency Grammar & Vocab", moji: "2021-2025 Combined High-Frequency Vocab", dokkai: "Top 50 Most Repeated Grammar Structures", choukai: "Key Functional Grammar Practice" },
  { date: "03/12/2026", day: "Thu", year: "Dokkai Special Sprint", moji: "Tricky Kanji & Synonyms Review", dokkai: "Long Dokkai & Comparative Dokkai Mastery", choukai: "Fast Scanning Techniques" },
  { date: "04/12/2026", day: "Fri", year: "Choukai Special Sprint", moji: "Quick Reaction Phrases (Kyoushou Expressions)", dokkai: "Choukai Conversational Traps", choukai: "Audio Script Re-listening" },
  { date: "05/12/2026", day: "Sat", year: "Final All-Round Summary", moji: "Personal Mistake Notebook Review", dokkai: "Key Kanji & Vocab Cheat Sheet", choukai: "Choukai Quick Practice" },
  { date: "06/12/2026", day: "Sun", year: "Final All-Round Summary & Polish", moji: "Personal Mistake Notebook Review", dokkai: "Key Kanji & Vocab Cheat Sheet", choukai: "Choukai Quick Practice" },
  { date: "07/12/2026", day: "Mon", year: "Grammar & Vocab Light Revision", moji: "Vocab & Grammar Quick Revision", dokkai: "Tricky Passages Review", choukai: "Audio Script Re-listening" },
  { date: "08/12/2026", day: "Tue", year: "Relaxation & Exam Preparation", moji: "Light Review (No Stress)", dokkai: "Exam Voucher, Stationeries & ID Prep", choukai: "Early Sleep (10:00 PM)" },
  { date: "09/12/2026", day: "Wed", year: "JLPT EXAM DAY! (09/12/2026)", moji: "JLPT Exam Day! (Good Luck!)", dokkai: "Stay Calm & Focus", choukai: "Do Your Best!" }
];

const JAPANESE_PROVERBS = [
  { jp: "「七転び八起き」", mm: "၇ ကြိမ်လဲရင် ၈ ကြိမ်မြောက် ပြန်ထပါ (မလျှော့တမ်း ကြိုးစားပါ)" },
  { jp: "「継続は力なり」", mm: "နေ့စဉ် မပြတ်လုပ်ဆောင်ခြင်းသည် အကြီးမားဆုံး ခွန်အားဖြစ်သည်" },
  { jp: "「塵も積もれば山となる」", mm: "ဖုန်မှုန့်လေးများ စုမိပါက တောင်ကြီးဖြစ်လာနိုင်သည် (နည်းနည်းချင်း ကြိုးစားပါ)" },
  { jp: "「初心忘るべからず」", mm: "စတင်ခဲ့စဉ်က သန္နိဋ္ဌာန်စိတ်ကို ဘယ်တော့မှ မမေ့ပါနှင့်" },
  { jp: "「雨降って地固まる」", mm: "အခက်အခဲများ ကြုံတွေ့ပြီးမှသာ ပိုမိုခိုင်မာလာတတ်သည်" }
];

// App State
let audioCtx = null;
let isAudioEnabled = false;
let isAlarmRinging = false;
let alarmInterval = null;
let lastFiredSlotId = null;
let wakeLock = null;
let isWakeLockActive = false;
let selectedDateIndex = 0; // Current viewed date

// Settings
let settings = {
  alarmSound: 'digital',
  alarmVolume: 1.0,
  japaneseVoice: true,
  preWarning10m: true,
  vibration: true,
  notifications: true
};

try {
  const saved = localStorage.getItem('jlpt_settings');
  if (saved) settings = { ...settings, ...JSON.parse(saved) };
} catch (e) {}

let completedDays = {};
try {
  const savedDays = localStorage.getItem('jlpt_completed_days');
  if (savedDays) completedDays = JSON.parse(savedDays);
} catch (e) {}

let dayNotes = {};
try {
  const savedNotes = localStorage.getItem('jlpt_day_notes');
  if (savedNotes) dayNotes = JSON.parse(savedNotes);
} catch (e) {}

// Audio Engine - Web Audio API Synthesizer
function initAudio() {
  try {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioCtxClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const buffer = audioCtx.createBuffer(1, 1, 22050);
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    source.start(0);

    isAudioEnabled = true;
    const banner = document.getElementById('audioBanner');
    if (banner) banner.classList.add('hidden');
    showToast('🔔 iPhone တွင် Alarm အသံ စနစ် ဖွင့်ပြီးပါပြီ');
  } catch (err) {
    console.error('Audio init error:', err);
  }
}

function playTone(freq, type, duration, startTime, volume = 0.5) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    
    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(volume * settings.alarmVolume, startTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start(startTime);
    osc.stop(startTime + duration);
  } catch (e) {}
}

function playAlarmBurst() {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  
  if (settings.alarmSound === 'digital') {
    playTone(950, 'square', 0.12, now + 0.0, 0.45);
    playTone(950, 'square', 0.12, now + 0.18, 0.45);
    playTone(950, 'square', 0.12, now + 0.36, 0.45);
    playTone(950, 'square', 0.12, now + 0.54, 0.45);
  } else if (settings.alarmSound === 'bell') {
    playTone(523.25, 'sine', 0.8, now, 0.5);
    playTone(659.25, 'sine', 0.8, now + 0.1, 0.5);
    playTone(783.99, 'sine', 1.1, now + 0.2, 0.5);
  } else if (settings.alarmSound === 'siren') {
    playTone(960, 'triangle', 0.35, now, 0.6);
    playTone(680, 'triangle', 0.35, now + 0.38, 0.6);
  }
}

// 10-Minute Pre-warning Chime
function play10MinWarningChime() {
  if (!audioCtx) initAudio();
  if (audioCtx) {
    const now = audioCtx.currentTime;
    playTone(659.25, 'sine', 0.7, now, 0.5);       // E5
    playTone(880.00, 'sine', 1.2, now + 0.25, 0.6); // A5
  }
  showToast('⚠️ စာမေးပွဲ ၁၀ မိနစ်သာ ကျန်ပါတော့သည် (残り10分です)');
  if (settings.japaneseVoice && 'speechSynthesis' in window) {
    speakJapanese('残り10分です。見直しをしてください。');
  }
}

// Japanese Voice Announcement via Web Speech Synthesis
function speakJapanese(text) {
  try {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.volume = settings.alarmVolume;
      window.speechSynthesis.speak(utterance);
    }
  } catch (e) {}
}

function triggerAlarm(title, message, nextSlotName) {
  if (isAlarmRinging) return;
  isAlarmRinging = true;

  if (!audioCtx) initAudio();
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

  playAlarmBurst();
  alarmInterval = setInterval(() => {
    playAlarmBurst();
  }, 1400);

  // Japanese Voice Announcement
  if (settings.japaneseVoice) {
    setTimeout(() => {
      speakJapanese('時間になりました！お疲れ様でした。');
    }, 600);
  }

  // Vibration
  if (settings.vibration && 'vibrate' in navigator) {
    try {
      navigator.vibrate([500, 200, 500, 200, 800]);
    } catch (e) {}
  }

  // Notification
  if (settings.notifications && 'Notification' in window && Notification.permission === 'granted') {
    try {
      new Notification(title, {
        body: message,
        icon: './icon-192.png',
        tag: 'jlpt-alarm'
      });
    } catch (e) {}
  }

  const modal = document.getElementById('alarmOverlay');
  const modalTitle = document.getElementById('alarmModalTitle');
  const modalMsg = document.getElementById('alarmModalMsg');
  const modalNext = document.getElementById('alarmModalNext');

  if (modalTitle) modalTitle.textContent = title;
  if (modalMsg) modalMsg.textContent = message;
  if (modalNext) {
    modalNext.textContent = nextSlotName ? `နောက်အစီအစဉ်: ${nextSlotName}` : '';
    modalNext.style.display = nextSlotName ? 'block' : 'none';
  }
  if (modal) modal.classList.remove('hidden');

  setTimeout(() => {
    if (isAlarmRinging) dismissAlarm();
  }, 60000);
}

function dismissAlarm() {
  isAlarmRinging = false;
  if (alarmInterval) {
    clearInterval(alarmInterval);
    alarmInterval = null;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  const modal = document.getElementById('alarmOverlay');
  if (modal) modal.classList.add('hidden');
}

// Screen Wake Lock API for iOS
async function toggleWakeLock() {
  const btn = document.getElementById('wakeLockBtn');
  if ('wakeLock' in navigator) {
    if (!isWakeLockActive) {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        isWakeLockActive = true;
        if (btn) btn.classList.add('active');
        showToast('💡 iPhone မျက်နှာပြင် မပိတ်အောင် ဖွင့်ထားပါသည်');
        wakeLock.addEventListener('release', () => {
          isWakeLockActive = false;
          if (btn) btn.classList.remove('active');
        });
      } catch (err) {
        showToast('Wake lock: ' + err.message);
      }
    } else {
      if (wakeLock) {
        await wakeLock.release();
        wakeLock = null;
      }
      isWakeLockActive = false;
      if (btn) btn.classList.remove('active');
      showToast('ဖုန်းမျက်နှာပြင် အလိုအလျောက် ပိတ်နိုင်ပါပြီ');
    }
  } else {
    showToast('💡 iPhone Settings > Display & Brightness > Auto-Lock တွင် Never ထားပေးနိုင်ပါသည်');
  }
}

// D-Day Countdown Calculation (Target: 09/12/2026)
function updateDDay() {
  // JLPT Exam Date: December 9, 2026 09:00:00
  const examDate = new Date(2026, 11, 9, 9, 0, 0); // Month is 0-indexed: 11 = Dec
  const now = new Date();
  const diffTime = examDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const badgeEl = document.getElementById('ddayBadge');
  if (badgeEl) {
    if (diffDays > 0) {
      badgeEl.textContent = `D-${diffDays}`;
    } else if (diffDays === 0) {
      badgeEl.textContent = 'D-DAY!';
    } else {
      badgeEl.textContent = 'EXAM FINISHED';
    }
  }

  // Pick quote of the day
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const quote = JAPANESE_PROVERBS[dayOfYear % JAPANESE_PROVERBS.length];
  const quoteEl = document.getElementById('ddayQuote');
  if (quoteEl) {
    quoteEl.textContent = `${quote.jp} - ${quote.mm}`;
  }
}

function formatTimeLeft(totalSeconds) {
  if (totalSeconds < 0) totalSeconds = 0;
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function getCurrentSlot(currentMins) {
  for (let i = 0; i < DAILY_ROUTINE.length; i++) {
    const slot = DAILY_ROUTINE[i];
    if (slot.startMins > slot.endMins) {
      if (currentMins >= slot.startMins || currentMins < slot.endMins) {
        return { slot, index: i };
      }
    } else {
      if (currentMins >= slot.startMins && currentMins < slot.endMins) {
        return { slot, index: i };
      }
    }
  }
  return { slot: DAILY_ROUTINE[0], index: 0 };
}

function getTodayFormatted() {
  const d = new Date();
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function getTodayPaperIndex() {
  const todayStr = getTodayFormatted();
  const idx = PAST_PAPERS.findIndex(p => p.date === todayStr);
  return idx !== -1 ? idx : 0;
}

function getSlotTask(slot, paper) {
  if (!paper) return { title: slot.name, taskDetail: '' };

  if (slot.paperType === 'moji') {
    return {
      title: slot.name,
      taskDetail: `📝 ${paper.moji}`
    };
  } else if (slot.paperType === 'dokkai') {
    return {
      title: slot.name,
      taskDetail: `📖 ${paper.dokkai}`
    };
  } else if (slot.paperType === 'choukai') {
    return {
      title: slot.name,
      taskDetail: `🎧 ${paper.choukai}`
    };
  }
  return { title: slot.name, taskDetail: '' };
}

// 10-Minute warning tracker for daily slot
let hasWarnedCurrentSlot = false;

function updateTick() {
  const now = new Date();
  const currentMins = now.getHours() * 60 + now.getMinutes();
  const currentSecs = now.getSeconds();

  const timeStr = now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const clockEl = document.getElementById('currentTimeDisplay');
  if (clockEl) clockEl.textContent = timeStr;

  const { slot, index } = getCurrentSlot(currentMins);
  const nextIndex = (index + 1) % DAILY_ROUTINE.length;
  const nextSlot = DAILY_ROUTINE[nextIndex];

  let totalSlotDurationSecs = 0;
  let elapsedSecs = 0;
  let remainingSecs = 0;

  if (slot.startMins > slot.endMins) {
    const durationMins = (24 * 60 - slot.startMins) + slot.endMins;
    totalSlotDurationSecs = durationMins * 60;
    let elapsedMins = 0;
    if (currentMins >= slot.startMins) {
      elapsedMins = currentMins - slot.startMins;
    } else {
      elapsedMins = (24 * 60 - slot.startMins) + currentMins;
    }
    elapsedSecs = elapsedMins * 60 + currentSecs;
    remainingSecs = totalSlotDurationSecs - elapsedSecs;
  } else {
    totalSlotDurationSecs = (slot.endMins - slot.startMins) * 60;
    elapsedSecs = (currentMins - slot.startMins) * 60 + currentSecs;
    remainingSecs = totalSlotDurationSecs - elapsedSecs;
  }

  // 10-minute warning check
  if (settings.preWarning10m && remainingSecs <= 600 && remainingSecs > 598 && !hasWarnedCurrentSlot && slot.durationMins >= 60) {
    hasWarnedCurrentSlot = true;
    play10MinWarningChime();
  }

  // Slot Change -> Trigger Alarm!
  if (lastFiredSlotId !== null && lastFiredSlotId !== slot.id) {
    const prevSlot = DAILY_ROUTINE.find(s => s.id === lastFiredSlotId);
    const prevName = prevSlot ? prevSlot.name : 'အချိန်ဇယား';
    hasWarnedCurrentSlot = false;
    triggerAlarm(
      '⏰ အချိန်ပြည့်ပါပြီ!',
      `"${prevName}" ပြီးဆုံးပါပြီ။\nယခု "${slot.name}" စတင်ပါပြီ!`,
      `${slot.name} (${slot.start} - ${slot.end})`
    );
  }
  lastFiredSlotId = slot.id;

  const todayPaper = PAST_PAPERS[getTodayPaperIndex()];
  const currentTask = getSlotTask(slot, todayPaper);

  const heroTitle = document.getElementById('heroActivityTitle');
  const heroTimeRange = document.getElementById('heroTimeRange');
  const heroCategory = document.getElementById('heroCategory');
  const heroCountdown = document.getElementById('heroCountdown');
  const heroProgress = document.getElementById('heroProgressBar');
  const heroNext = document.getElementById('heroNextName');

  if (heroTitle) {
    if (currentTask.taskDetail) {
      heroTitle.innerHTML = `${currentTask.title} <br><span style="font-size:0.95rem; color:#38bdf8;">${currentTask.taskDetail}</span>`;
    } else {
      heroTitle.textContent = currentTask.title;
    }
  }
  if (heroTimeRange) heroTimeRange.textContent = `${slot.start} - ${slot.end} (${slot.duration})`;
  if (heroCategory) {
    heroCategory.textContent = slot.category;
    heroCategory.className = `tag-badge ${slot.tagClass}`;
  }
  if (heroCountdown) heroCountdown.textContent = formatTimeLeft(remainingSecs);
  if (heroProgress) {
    const pct = Math.min(100, Math.max(0, (elapsedSecs / totalSlotDurationSecs) * 100));
    heroProgress.style.width = `${pct}%`;
  }
  if (heroNext) heroNext.textContent = `${nextSlot.start} ${nextSlot.name}`;

  const isViewingToday = (selectedDateIndex === getTodayPaperIndex());
  renderTimelineHighlight(isViewingToday ? slot.id : null, currentMins);
}

// Populate Date Dropdown
function populateDateDropdown() {
  const select = document.getElementById('dateDropdown');
  if (!select) return;

  const todayStr = getTodayFormatted();
  select.innerHTML = PAST_PAPERS.map((item, idx) => {
    const isToday = (item.date === todayStr);
    return `<option value="${idx}">📅 Day ${idx + 1} (${item.date} - ${item.day}) ${isToday ? '★ ယနေ့' : ''}</option>`;
  }).join('');
}

function onDateDropdownChange(val) {
  selectedDateIndex = parseInt(val, 10);
  renderSelectedDateTimetable();
  loadDayNotes();
}

function changeSelectedDay(delta) {
  let newIdx = selectedDateIndex + delta;
  if (newIdx < 0) newIdx = 0;
  if (newIdx >= PAST_PAPERS.length) newIdx = PAST_PAPERS.length - 1;
  selectedDateIndex = newIdx;

  const select = document.getElementById('dateDropdown');
  if (select) select.value = newIdx;
  renderSelectedDateTimetable();
  loadDayNotes();
}

function jumpToToday() {
  selectedDateIndex = getTodayPaperIndex();
  const select = document.getElementById('dateDropdown');
  if (select) select.value = selectedDateIndex;
  renderSelectedDateTimetable();
  loadDayNotes();
  showToast('⭐ ယနေ့ အချိန်ဇယားသို့ ရောက်ရှိပါပြီ');
}

// Render Selected Date Timetable
function renderSelectedDateTimetable() {
  const paper = PAST_PAPERS[selectedDateIndex];
  if (!paper) return;

  const todayStr = getTodayFormatted();
  const isToday = (paper.date === todayStr);

  const subtextEl = document.getElementById('selectedDaySubtext');
  if (subtextEl) {
    subtextEl.innerHTML = `Day ${selectedDateIndex + 1} of 29 &bull; ${paper.date} (${paper.day}) ${isToday ? '<strong style="color:#f59e0b;">[ယနေ့]</strong>' : ''}`;
  }

  const bannerYear = document.getElementById('bannerPaperYear');
  if (bannerYear) bannerYear.textContent = paper.year;

  const bannerBreakdown = document.getElementById('bannerPaperBreakdown');
  if (bannerBreakdown) {
    bannerBreakdown.innerHTML = `
      <div class="paper-chip"><strong>08:00 AM:</strong> ${paper.moji}</div>
      <div class="paper-chip"><strong>01:30 PM:</strong> ${paper.dokkai}</div>
      <div class="paper-chip"><strong>04:00 PM:</strong> ${paper.choukai}</div>
    `;
  }

  const selectedTitle = document.getElementById('selectedDateTitle');
  if (selectedTitle) {
    selectedTitle.textContent = `${paper.date} (${paper.day}) - ${paper.year} အတွက် အချိန်ဇယား`;
  }

  const container = document.getElementById('timelineContainer');
  if (!container) return;

  container.innerHTML = DAILY_ROUTINE.map(slot => {
    const task = getSlotTask(slot, paper);
    return `
      <div class="timeline-item" id="timeline-item-${slot.id}">
        <div class="timeline-time-col">
          <div class="timeline-time-range">${slot.start} - ${slot.end}</div>
          <div class="timeline-duration">${slot.duration}</div>
        </div>
        <div class="timeline-info-col">
          <div class="timeline-activity-name">${task.title}</div>
          ${task.taskDetail ? `<div class="timeline-specific-task">${task.taskDetail}</div>` : ''}
          <div class="timeline-notes">${slot.notes}</div>
          <div class="timeline-tag-row">
            <span class="tag-badge ${slot.tagClass}">${slot.category}</span>
          </div>
        </div>
        <button class="start-timer-btn" onclick="startFocusTimerForSlot(${slot.id})">
          ⏱️ Focus စတင်
        </button>
      </div>
    `;
  }).join('');

  updateTick();
}

function renderTimelineHighlight(activeId, currentMins) {
  DAILY_ROUTINE.forEach(item => {
    const el = document.getElementById(`timeline-item-${item.id}`);
    if (!el) return;

    el.classList.remove('active-item', 'passed-item');

    if (activeId && item.id === activeId) {
      el.classList.add('active-item');
    } else if (activeId) {
      let hasPassed = false;
      if (item.startMins < item.endMins) {
        hasPassed = currentMins >= item.endMins;
      }
      if (hasPassed) el.classList.add('passed-item');
    }
  });
}

// 29-Day Plan List
function renderCalendar() {
  const container = document.getElementById('calContainer');
  if (!container) return;

  const todayStr = getTodayFormatted();
  let doneCount = 0;

  const html = PAST_PAPERS.map((item, index) => {
    const isDone = !!completedDays[item.date];
    if (isDone) doneCount++;
    const isToday = (item.date === todayStr);

    return `
      <div class="cal-day-card ${isToday ? 'is-today' : ''} ${isDone ? 'is-done' : ''}" onclick="selectDayFromPlan(${index})">
        <div class="cal-header-row">
          <div class="cal-date-badge">
            📅 ${item.date} (${item.day}) ${isToday ? '<span style="color:#f59e0b;font-weight:bold;">[ယနေ့]</span>' : ''}
          </div>
          <span class="cal-day-badge">Day ${index + 1} of 29</span>
        </div>
        <div class="cal-paper-title">${item.year}</div>
        <div class="cal-task-grid">
          <div class="cal-task-item">
            <span class="cal-task-label">08:00 AM:</span>
            <span class="cal-task-desc">${item.moji}</span>
          </div>
          <div class="cal-task-item">
            <span class="cal-task-label">01:30 PM:</span>
            <span class="cal-task-desc">${item.dokkai}</span>
          </div>
          <div class="cal-task-item">
            <span class="cal-task-label">04:00 PM:</span>
            <span class="cal-task-desc">${item.choukai}</span>
          </div>
        </div>
        <label class="cal-done-checkbox" onclick="event.stopPropagation()">
          <input type="checkbox" ${isDone ? 'checked' : ''} onchange="toggleDayDone('${item.date}', this.checked)">
          <span>ဒီနေ့အတွက် စာလေ့ကျင့်မှု ပြီးစီးပါပြီ</span>
        </label>
      </div>
    `;
  }).join('');

  container.innerHTML = html;

  const progressText = document.getElementById('calProgressText');
  if (progressText) progressText.textContent = `${doneCount} / 29 ရက် ပြီးစီး`;
}

function selectDayFromPlan(index) {
  selectedDateIndex = index;
  const select = document.getElementById('dateDropdown');
  if (select) select.value = index;
  renderSelectedDateTimetable();
  loadDayNotes();
  switchTab('daily');
  window.scrollTo({ top: 380, behavior: 'smooth' });
}

function toggleDayDone(dateStr, isChecked) {
  completedDays[dateStr] = isChecked;
  try {
    localStorage.setItem('jlpt_completed_days', JSON.stringify(completedDays));
  } catch (e) {}
  renderCalendar();
  showToast(isChecked ? '✅ လေ့ကျင့်မှု မှတ်တမ်းတင်ပြီးပါပြီ' : 'လေ့ကျင့်မှု မှတ်တမ်းကို ပြန်ဖျက်ပါသည်');
}

// -------------------------------------------------------------
// FULL EXAM FOCUS TIMER SYSTEM
// -------------------------------------------------------------
let focusTimerInterval = null;
let focusTotalSeconds = 0;
let focusRemainingSeconds = 0;
let isFocusPaused = false;
let hasPlayedFocus10MinWarning = false;
let currentFocusTitle = '';

function startFocusTimerForSlot(slotId) {
  const slot = DAILY_ROUTINE.find(s => s.id === slotId);
  if (!slot) return;
  const paper = PAST_PAPERS[selectedDateIndex];
  const task = getSlotTask(slot, paper);

  const title = task.title;
  const subtitle = task.taskDetail || `${slot.start} - ${slot.end} (${slot.duration})`;
  openFocusTimer(slot.durationMins, title, subtitle, slot.category);
}

function startQuickFocusTimer(minutes, name) {
  openFocusTimer(minutes, name, `${minutes} မိနစ် Focus Session`, 'Quick Focus');
}

function openFocusTimer(durationMinutes, title, subtitle, category) {
  initAudio();
  currentFocusTitle = title;
  focusTotalSeconds = durationMinutes * 60;
  focusRemainingSeconds = focusTotalSeconds;
  isFocusPaused = false;
  hasPlayedFocus10MinWarning = false;

  const modal = document.getElementById('focusModal');
  const tagEl = document.getElementById('focusTag');
  const titleEl = document.getElementById('focusTitle');
  const subtextEl = document.getElementById('focusSubtext');
  const clockEl = document.getElementById('focusClock');
  const pauseBtn = document.getElementById('focusPauseBtn');

  if (tagEl) tagEl.textContent = category || 'Study Focus';
  if (titleEl) titleEl.textContent = title;
  if (subtextEl) subtextEl.textContent = subtitle;
  if (clockEl) clockEl.textContent = formatTimeLeft(focusRemainingSeconds);
  if (pauseBtn) pauseBtn.textContent = 'ခေတ္တရပ်မည်';

  if (modal) modal.classList.remove('hidden');

  if (focusTimerInterval) clearInterval(focusTimerInterval);
  focusTimerInterval = setInterval(tickFocusTimer, 1000);
  showToast('🎯 Focus Timer စတင်ပါပြီ! အာရုံစိုက်ဖြေဆိုပါ');
}

function tickFocusTimer() {
  if (isFocusPaused) return;

  focusRemainingSeconds--;
  const clockEl = document.getElementById('focusClock');
  if (clockEl) clockEl.textContent = formatTimeLeft(focusRemainingSeconds);

  // 10-Minute warning
  if (settings.preWarning10m && focusRemainingSeconds === 600 && !hasPlayedFocus10MinWarning) {
    hasPlayedFocus10MinWarning = true;
    play10MinWarningChime();
  }

  // Timer Finished
  if (focusRemainingSeconds <= 0) {
    clearInterval(focusTimerInterval);
    focusTimerInterval = null;
    closeFocusTimer();
    triggerAlarm(
      '⏰ Focus Timer ပြည့်ပါပြီ!',
      `"${currentFocusTitle}" သတ်မှတ်ချိန် ပြီးဆုံးပါပြီ။\nခေတ္တ အနားယူပါ သို့မဟုတ် အဖြေစစ်ပါ!`,
      'အနားယူချိန် (Break)'
    );
  }
}

function togglePauseFocusTimer() {
  isFocusPaused = !isFocusPaused;
  const pauseBtn = document.getElementById('focusPauseBtn');
  if (pauseBtn) {
    pauseBtn.textContent = isFocusPaused ? 'ဆက်လုပ်မည် ▶' : 'ခေတ္တရပ်မည် ⏸';
  }
  showToast(isFocusPaused ? 'Focus Timer ကို ခေတ္တရပ်ထားပါသည်' : 'Focus Timer ပြန်လည်စတင်ပါပြီ');
}

function resetFocusTimer() {
  focusRemainingSeconds = focusTotalSeconds;
  isFocusPaused = false;
  hasPlayedFocus10MinWarning = false;
  const clockEl = document.getElementById('focusClock');
  const pauseBtn = document.getElementById('focusPauseBtn');
  if (clockEl) clockEl.textContent = formatTimeLeft(focusRemainingSeconds);
  if (pauseBtn) pauseBtn.textContent = 'ခေတ္တရပ်မည်';
  showToast('Focus Timer ကို အစမှ ပြန်လည်စတင်ပါသည်');
}

function closeFocusTimer() {
  if (focusTimerInterval) {
    clearInterval(focusTimerInterval);
    focusTimerInterval = null;
  }
  const modal = document.getElementById('focusModal');
  if (modal) modal.classList.add('hidden');
}

// -------------------------------------------------------------
// SCORE & MISTAKE NOTEBOOK (TAB 3)
// -------------------------------------------------------------
function loadDayNotes() {
  const paper = PAST_PAPERS[selectedDateIndex];
  if (!paper) return;

  const titleEl = document.getElementById('notesDayTitle');
  const tagEl = document.getElementById('notesPaperTag');
  if (titleEl) titleEl.textContent = `📝 ${paper.date} (${paper.year}) အတွက် မှတ်စု`;
  if (tagEl) tagEl.textContent = paper.year;

  const data = dayNotes[paper.date] || { moji: '', dokkai: '', choukai: '', notes: '' };

  const mojiInput = document.getElementById('scoreMoji');
  const dokkaiInput = document.getElementById('scoreDokkai');
  const choukaiInput = document.getElementById('scoreChoukai');
  const notesText = document.getElementById('notesMistakeText');

  if (mojiInput) mojiInput.value = data.moji || '';
  if (dokkaiInput) dokkaiInput.value = data.dokkai || '';
  if (choukaiInput) choukaiInput.value = data.choukai || '';
  if (notesText) notesText.value = data.notes || '';

  renderAllNotesList();
}

function saveDayNotes() {
  const paper = PAST_PAPERS[selectedDateIndex];
  if (!paper) return;

  const moji = document.getElementById('scoreMoji').value;
  const dokkai = document.getElementById('scoreDokkai').value;
  const choukai = document.getElementById('scoreChoukai').value;
  const notes = document.getElementById('notesMistakeText').value;

  dayNotes[paper.date] = { moji, dokkai, choukai, notes, year: paper.year };
  try {
    localStorage.setItem('jlpt_day_notes', JSON.stringify(dayNotes));
  } catch (e) {}

  renderAllNotesList();
  showToast('💾 အမှတ်နှင့် အမှားမှတ်စု သိမ်းဆည်းပြီးပါပြီ');
}

function renderAllNotesList() {
  const container = document.getElementById('allNotesList');
  if (!container) return;

  const datesWithNotes = Object.keys(dayNotes).filter(date => {
    const item = dayNotes[date];
    return item && (item.notes || item.moji || item.dokkai || item.choukai);
  });

  if (datesWithNotes.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: #64748b; font-size: 0.85rem; padding: 20px;">
        မှတ်စု မရှိသေးပါ။ နေ့စဉ် ဖြေဆိုပြီးသော မေးခွန်းဟောင်း အမှတ်နှင့် မှားတတ်သော ဝေါဟာရများကို အထက်တွင် ရေးသားသိမ်းဆည်းနိုင်ပါသည်။
      </div>
    `;
    return;
  }

  container.innerHTML = datesWithNotes.map(date => {
    const item = dayNotes[date];
    const totalScore = (parseInt(item.moji || 0) + parseInt(item.dokkai || 0) + parseInt(item.choukai || 0));

    return `
      <div style="background: rgba(10, 14, 26, 0.7); border: 1px solid var(--border-color); border-radius: 12px; padding: 12px; margin-bottom: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <div style="font-weight: 700; color: #fff; font-size: 0.9rem;">📅 ${date} (${item.year})</div>
          ${totalScore > 0 ? `<span class="tag-badge" style="background:#065f46; color:#34d399;">Total: ${totalScore} / 180</span>` : ''}
        </div>
        <div style="font-size: 0.78rem; color: #a5b4fc; margin-bottom: 6px;">
          Moji: <strong>${item.moji || '-'}/60</strong> &bull; Dokkai: <strong>${item.dokkai || '-'}/60</strong> &bull; Choukai: <strong>${item.choukai || '-'}/60</strong>
        </div>
        ${item.notes ? `
          <div style="background: rgba(0, 0, 0, 0.4); padding: 8px 10px; border-radius: 8px; font-size: 0.82rem; color: #e2e8f0; white-space: pre-line; line-height: 1.4;">
            ${item.notes}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

// Export to iOS Apple Calendar (.ics)
function exportAppleCalendar() {
  let icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//JLPT Preparation Timetable//iOS Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:JLPT Exam Timetable"
  ];

  PAST_PAPERS.forEach((paper) => {
    const parts = paper.date.split('/');
    if (parts.length !== 3) return;
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    const ymd = `${year}${month}${day}`;

    // Session 1
    icsContent.push(
      "BEGIN:VEVENT",
      `UID:jlpt-${ymd}-session1@timetable`,
      `DTSTAMP:${ymd}T080000Z`,
      `DTSTART:${ymd}T080000`,
      `DTEND:${ymd}T103000`,
      `SUMMARY:JLPT Mock: ${paper.moji}`,
      `DESCRIPTION:JLPT Prep ${paper.year}\\nTask: ${paper.moji}`,
      "BEGIN:VALARM",
      "TRIGGER:-PT0M",
      "ACTION:AUDIO",
      "DESCRIPTION:JLPT Timetable Alarm",
      "END:VALARM",
      "END:VEVENT"
    );

    // Session 2
    icsContent.push(
      "BEGIN:VEVENT",
      `UID:jlpt-${ymd}-session2@timetable`,
      `DTSTAMP:${ymd}T133000Z`,
      `DTSTART:${ymd}T133000`,
      `DTEND:${ymd}T153000`,
      `SUMMARY:JLPT Dokkai: ${paper.dokkai}`,
      `DESCRIPTION:JLPT Prep ${paper.year}\\nTask: ${paper.dokkai}`,
      "BEGIN:VALARM",
      "TRIGGER:-PT0M",
      "ACTION:AUDIO",
      "DESCRIPTION:JLPT Timetable Alarm",
      "END:VALARM",
      "END:VEVENT"
    );

    // Session 3
    icsContent.push(
      "BEGIN:VEVENT",
      `UID:jlpt-${ymd}-session3@timetable`,
      `DTSTAMP:${ymd}T160000Z`,
      `DTSTART:${ymd}T160000`,
      `DTEND:${ymd}T173000`,
      `SUMMARY:JLPT Choukai: ${paper.choukai}`,
      `DESCRIPTION:JLPT Prep ${paper.year}\\nTask: ${paper.choukai}`,
      "BEGIN:VALARM",
      "TRIGGER:-PT0M",
      "ACTION:AUDIO",
      "DESCRIPTION:JLPT Timetable Alarm",
      "END:VALARM",
      "END:VEVENT"
    );
  });

  icsContent.push("END:VCALENDAR");

  const blob = new Blob([icsContent.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "jlpt_exam_timetable.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('📅 iPhone Calendar ဖိုင် ဒေါင်းလုဒ်လုပ်ပြီးပါပြီ။ ဖွင့်၍ "Add All" နှိပ်ပါ');
}

// Tab Switching (4 Tabs: Daily, Plan, Kanji, Notes)
function switchTab(tabName) {
  const tabDaily = document.getElementById('tabDaily');
  const tabPlan = document.getElementById('tabPlan');
  const tabKanji = document.getElementById('tabKanji');
  const tabVocab = document.getElementById('tabVocab');
  const tabSameMeaning = document.getElementById('tabSameMeaning');
  const tabGrammar = document.getElementById('tabGrammar');
  const tabNotes = document.getElementById('tabNotes');

  const viewDaily = document.getElementById('viewDaily');
  const viewPlan = document.getElementById('viewPlan');
  const viewKanji = document.getElementById('viewKanji');
  const viewVocab = document.getElementById('viewVocab');
  const viewSameMeaning = document.getElementById('viewSameMeaning');
  const viewGrammar = document.getElementById('viewGrammar');
  const viewNotes = document.getElementById('viewNotes');

  [tabDaily, tabPlan, tabKanji, tabVocab, tabSameMeaning, tabGrammar, tabNotes].forEach(t => t && t.classList.remove('active'));
  [viewDaily, viewPlan, viewKanji, viewVocab, viewSameMeaning, viewGrammar, viewNotes].forEach(v => v && v.classList.add('hidden'));

  if (tabName === 'daily') {
    if (tabDaily) tabDaily.classList.add('active');
    if (viewDaily) viewDaily.classList.remove('hidden');
  } else if (tabName === 'plan') {
    if (tabPlan) tabPlan.classList.add('active');
    if (viewPlan) viewPlan.classList.remove('hidden');
  } else if (tabName === 'kanji') {
    if (tabKanji) tabKanji.classList.add('active');
    if (viewKanji) viewKanji.classList.remove('hidden');
    renderKanjiSection();
  } else if (tabName === 'vocab') {
    if (tabVocab) tabVocab.classList.add('active');
    if (viewVocab) viewVocab.classList.remove('hidden');
    renderVocabSection();
  } else if (tabName === 'samemeaning') {
    if (tabSameMeaning) tabSameMeaning.classList.add('active');
    if (viewSameMeaning) viewSameMeaning.classList.remove('hidden');
    renderSameMeaningSection();
  } else if (tabName === 'grammar') {
    if (tabGrammar) tabGrammar.classList.add('active');
    if (viewGrammar) viewGrammar.classList.remove('hidden');
    renderGrammarSection();
  } else if (tabName === 'notes') {
    if (tabNotes) tabNotes.classList.add('active');
    if (viewNotes) viewNotes.classList.remove('hidden');
    loadDayNotes();
  }
}

// -------------------------------------------------------------
// KANJI & KANA STUDY SECTION (Hiragana, Katakana, N5, N4, N3)
// -------------------------------------------------------------
let currentKanjiFilter = 'hiragana';
let isTestMode = false;
let kanjiSearchQuery = '';
let kanjiDisplayLimit = 40;

function setKanjiFilter(filterName) {
  currentKanjiFilter = filterName;
  kanjiDisplayLimit = 40;
  ['chipHiragana', 'chipKatakana', 'chipN5', 'chipN4', 'chipN3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });

  if (filterName === 'hiragana') document.getElementById('chipHiragana')?.classList.add('active');
  if (filterName === 'katakana') document.getElementById('chipKatakana')?.classList.add('active');
  if (filterName === 'n5') document.getElementById('chipN5')?.classList.add('active');
  if (filterName === 'n4') document.getElementById('chipN4')?.classList.add('active');
  if (filterName === 'n3') document.getElementById('chipN3')?.classList.add('active');

  renderKanjiSection();
}

function onKanjiSearch(query) {
  kanjiSearchQuery = (query || '').toLowerCase().trim();
  kanjiDisplayLimit = 500; // Show all when searching
  renderKanjiSection();
}

function loadMoreKanji() {
  kanjiDisplayLimit += 50;
  renderKanjiSection();
}

function toggleTestMode(checked) {
  isTestMode = checked;
  renderKanjiSection();
  showToast(checked ? '👁️ Quiz Mode: အသံထွက်များကို ဝှက်ထားပါသည် (နှိပ်၍ အဖြေကြည့်နိုင်သည်)' : 'အသံထွက်များကို ပြသပါသည်');
}

function renderKanjiSection() {
  const container = document.getElementById('kanjiDisplayContainer');
  const countLabel = document.getElementById('kanjiCountLabel');
  if (!container) return;

  if (currentKanjiFilter === 'hiragana' || currentKanjiFilter === 'katakana') {
    const sourceData = (typeof HIRAGANA_DATA !== 'undefined' && currentKanjiFilter === 'hiragana') ? HIRAGANA_DATA : (typeof KATAKANA_DATA !== 'undefined' ? KATAKANA_DATA : []);
    const filtered = sourceData.filter(item => {
      if (!kanjiSearchQuery) return true;
      return item.kana.includes(kanjiSearchQuery) || 
             item.romaji.toLowerCase().includes(kanjiSearchQuery) || 
             item.burmese.includes(kanjiSearchQuery) || 
             item.example.toLowerCase().includes(kanjiSearchQuery);
    });

    if (countLabel) countLabel.textContent = `${filtered.length} လုံး ပြသထားသည်`;

    container.innerHTML = `
      <div class="kana-grid">
        ${filtered.map(item => `
          <div class="kana-card" onclick="speakJapanese('${item.kana}')" title="${item.example}">
            <div class="kana-char">${item.kana}</div>
            <div class="kana-romaji">${isTestMode ? '??' : item.romaji}</div>
            <div class="kana-burmese">${isTestMode ? '?' : item.burmese}</div>
          </div>
        `).join('')}
      </div>
      <div style="font-size: 0.8rem; color: #94a3b8; text-align: center; margin-top: 10px;">
        💡 အသံထွက် နားထောင်ရန် မည်သည့် စာလုံးကိုမဆို နှိပ်နိုင်ပါသည်
      </div>
    `;
    return;
  }

  // Kanji: N5, N4, N3
  let sourceKanji = [];
  if (currentKanjiFilter === 'n5' && typeof N5_KANJI !== 'undefined') sourceKanji = N5_KANJI;
  else if (currentKanjiFilter === 'n4' && typeof N4_KANJI !== 'undefined') sourceKanji = N4_KANJI;
  else if (currentKanjiFilter === 'n3' && typeof N3_KANJI !== 'undefined') sourceKanji = N3_KANJI;

  const filtered = sourceKanji.filter(item => {
    if (!kanjiSearchQuery) return true;
    return item.kanji.includes(kanjiSearchQuery) ||
           item.hiragana.includes(kanjiSearchQuery) ||
           item.romaji.toLowerCase().includes(kanjiSearchQuery) ||
           item.meaning.includes(kanjiSearchQuery) ||
           (item.tag && item.tag.toLowerCase().includes(kanjiSearchQuery)) ||
           item.examples.some(ex => ex.word.includes(kanjiSearchQuery) || ex.reading.includes(kanjiSearchQuery) || ex.mean.includes(kanjiSearchQuery));
  });

  const totalMatches = filtered.length;
  const visibleItems = filtered.slice(0, kanjiDisplayLimit);

  if (countLabel) countLabel.textContent = `${totalMatches} လုံးအနက် ${visibleItems.length} လုံး ပြသထားသည်`;

  if (totalMatches === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: #64748b; padding: 30px; font-size: 0.9rem;">
        ရှာမတွေ့ပါ။ အခြား စာလုံး သို့မဟုတ် မြန်မာစကားလုံးဖြင့် ရှာကြည့်ပါ။
      </div>
    `;
    return;
  }

  const hasMore = visibleItems.length < totalMatches;
  const remaining = totalMatches - visibleItems.length;

  container.innerHTML = `
    <div class="kanji-cards-list">
      ${visibleItems.map((item, idx) => `
        <div class="kanji-card" id="kanji-card-${idx}">
          <div class="kanji-char-col" onclick="speakJapanese('${item.kanji}')" title="အသံထွက် နားထောင်ရန်">
            <span class="kanji-big-char">${item.kanji}</span>
          </div>
          <div class="kanji-detail-col">
            <div class="kanji-reading-row">
              <span class="kanji-reading-hiragana" id="reading-${idx}" style="${isTestMode ? 'filter: blur(5px); cursor: pointer;' : ''}" onclick="this.style.filter='none'">
                ${item.hiragana}
              </span>
              ${item.tag ? `<span style="font-size: 0.68rem; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 2px 7px; border-radius: 9999px; font-weight: 500; margin-left: 6px; white-space: nowrap;">${item.tag}</span>` : ''}
              <button class="kanji-audio-btn" onclick="speakJapanese('${item.kanji}')">
                🔊 အသံ
              </button>
            </div>
            <div class="kanji-meaning" id="mean-${idx}" style="${isTestMode ? 'opacity: 0.3; cursor: pointer;' : ''}" onclick="this.style.opacity='1'">
              ${item.meaning}
            </div>
            <div class="kanji-examples-box">
              ${item.examples.map(ex => `
                <div class="kanji-example-item" onclick="speakJapanese('${ex.word}')" style="cursor: pointer;">
                  <span class="example-word">${ex.word}</span>
                  <span class="example-reading">(${ex.reading})</span>
                  <span class="example-mean">- ${ex.mean}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
    ${hasMore ? `
      <button class="icon-btn active" style="width:100%; justify-content:center; margin-top:16px; padding:12px; font-weight:700; font-size:0.88rem;" onclick="loadMoreKanji()">
        ➕ နောက်ထပ် (${remaining} လုံး) ဆက်ကြည့်မည်
      </button>
    ` : ''}
  `;
}

function openSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.remove('hidden');
}

function closeSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.add('hidden');
}

function saveSoundSettings() {
  const soundSelect = document.getElementById('soundSelect');
  const volSelect = document.getElementById('volSelect');
  const voiceSelect = document.getElementById('voiceSelect');
  const preWarnSelect = document.getElementById('preWarnSelect');
  const vibSelect = document.getElementById('vibSelect');

  if (soundSelect) settings.alarmSound = soundSelect.value;
  if (volSelect) settings.alarmVolume = parseFloat(volSelect.value);
  if (voiceSelect) settings.japaneseVoice = voiceSelect.checked;
  if (preWarnSelect) settings.preWarning10m = preWarnSelect.checked;
  if (vibSelect) settings.vibration = vibSelect.checked;

  try {
    localStorage.setItem('jlpt_settings', JSON.stringify(settings));
  } catch (e) {}
  showToast('⚙️ Setting သိမ်းဆည်းပြီးပါပြီ');
  closeSettings();
}

function testAlarmSound() {
  initAudio();
  playAlarmBurst();
  if (settings.japaneseVoice) {
    setTimeout(() => {
      speakJapanese('時間になりました！');
    }, 400);
  }
  showToast('🔊 Alarm အသံ စမ်းသပ်နေပါသည်...');
}

function showToast(msg) {
  const existing = document.querySelector('.toast-msg');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Force App Update (Clears cache and reloads latest code on iPhone)
async function forceAppUpdate() {
  showToast('🔄 App ကို နောက်ဆုံး ဗားရှင်းသို့ Update လုပ်နေပါသည်...');
  
  if ('caches' in window) {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
    } catch (e) {}
  }
  
  if ('serviceWorker' in navigator) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (let reg of registrations) {
        await reg.unregister();
      }
    } catch (e) {}
  }
  
  setTimeout(() => {
    window.location.reload();
  }, 600);
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('SW Registered');
        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showToast('✨ Feature အသစ်များ ရောက်ရှိပါပြီ။ "Update" ကို နှိပ်ပါ');
            }
          };
        };
      })
      .catch((err) => console.log('SW Error:', err));
  }

  document.addEventListener('touchstart', () => {
    if (!audioCtx) initAudio();
  }, { once: true });
  document.addEventListener('click', () => {
    if (!audioCtx) initAudio();
  }, { once: true });

  updateDDay();
  populateDateDropdown();
  selectedDateIndex = getTodayPaperIndex();
  const select = document.getElementById('dateDropdown');
  if (select) select.value = selectedDateIndex;

  renderSelectedDateTimetable();
  renderCalendar();
  loadDayNotes();

  updateTick();
  setInterval(updateTick, 1000);

  const soundSelect = document.getElementById('soundSelect');
  const volSelect = document.getElementById('volSelect');
  const voiceSelect = document.getElementById('voiceSelect');
  const preWarnSelect = document.getElementById('preWarnSelect');
  const vibSelect = document.getElementById('vibSelect');

  if (soundSelect) soundSelect.value = settings.alarmSound;
  if (volSelect) volSelect.value = settings.alarmVolume;
  if (voiceSelect) voiceSelect.checked = settings.japaneseVoice;
  if (preWarnSelect) preWarnSelect.checked = settings.preWarning10m;
  if (vibSelect) vibSelect.checked = settings.vibration;
});

// =============================================================
// N3 VOCABULARY SECTION (with Ruby Furigana)
// =============================================================
let currentVocabFilter = 'all';
let vocabSearchQuery = '';
let isVocabQuiz = false;
let vocabDisplayLimit = 36;

function setVocabFilter(filterName) {
  currentVocabFilter = filterName;
  vocabDisplayLimit = 36;
  const chips = ['chipVocabAll', 'chipVocabHot', 'chipVocabCompound', 'chipVocabAdverb', 'chipVocabKatakana', 'chipVocabVerbAdj'];
  chips.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });

  const activeMap = {
    all: 'chipVocabAll',
    hot: 'chipVocabHot',
    compound: 'chipVocabCompound',
    adverb: 'chipVocabAdverb',
    katakana: 'chipVocabKatakana',
    verb_adj: 'chipVocabVerbAdj'
  };
  const activeEl = document.getElementById(activeMap[filterName]);
  if (activeEl) activeEl.classList.add('active');
  renderVocabSection();
}

function onVocabSearch(query) {
  vocabSearchQuery = (query || '').trim().toLowerCase();
  vocabDisplayLimit = 36;
  renderVocabSection();
}

function toggleVocabQuizMode(isChecked) {
  isVocabQuiz = isChecked;
  renderVocabSection();
}

function loadMoreVocab() {
  vocabDisplayLimit += 36;
  renderVocabSection();
}

function renderVocabSection() {
  const container = document.getElementById('vocabDisplayContainer');
  const countLabel = document.getElementById('vocabCountLabel');
  if (!container || typeof N3_VOCAB_DATA === 'undefined') return;

  const filtered = N3_VOCAB_DATA.filter(item => {
    if (currentVocabFilter === 'hot' && !item.isHot) return false;
    if (currentVocabFilter !== 'all' && currentVocabFilter !== 'hot' && item.category !== currentVocabFilter) return false;
    if (!vocabSearchQuery) return true;
    return item.word.toLowerCase().includes(vocabSearchQuery) ||
           item.reading.toLowerCase().includes(vocabSearchQuery) ||
           item.romaji.toLowerCase().includes(vocabSearchQuery) ||
           item.meaning.toLowerCase().includes(vocabSearchQuery) ||
           (item.example && item.example.toLowerCase().includes(vocabSearchQuery)) ||
           (item.exampleMeaning && item.exampleMeaning.toLowerCase().includes(vocabSearchQuery));
  });

  const totalMatches = filtered.length;
  const visibleItems = filtered.slice(0, vocabDisplayLimit);

  if (countLabel) countLabel.textContent = `${totalMatches} ခုအနက် ${visibleItems.length} ခု ပြသထားသည်`;

  if (totalMatches === 0) {
    container.innerHTML = '<div style="text-align: center; color: #64748b; padding: 30px; font-size: 0.9rem;">ရှာမတွေ့ပါ။ အခြား စာလုံး သို့မဟုတ် မြန်မာစကားလုံးဖြင့် ရှာကြည့်ပါ။</div>';
    return;
  }

  const hasMore = visibleItems.length < totalMatches;
  const remaining = totalMatches - visibleItems.length;

  container.innerHTML = `
    <div class="vocab-cards-list">
      ${visibleItems.map((item, idx) => `
        <div class="study-card" id="vocab-card-${idx}">
          <div class="study-card-header">
            <div class="study-card-word-group">
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <span class="study-main-word" onclick="speakJapanese('${item.word.replace(/'/g, "\'")}')" style="cursor:pointer;" title="အသံထွက် နားထောင်ရန်">
                  ${item.word}
                </span>
                ${item.tag ? `<span class="study-badge-hot">${item.tag}</span>` : ''}
              </div>
              <span class="study-reading">${item.reading} (${item.romaji})</span>
            </div>
            <button class="kanji-audio-btn" onclick="speakJapanese('${item.word.replace(/'/g, "\'")}')">
              🔊 အသံ
            </button>
          </div>
          <div class="study-meaning" style="${isVocabQuiz ? 'filter: blur(5px); cursor: pointer;' : ''}" onclick="this.style.filter='none'">
            ${item.meaning}
          </div>
          ${item.exampleRuby ? `
            <div class="study-example-box" onclick="speakJapanese('${item.example.replace(/'/g, "\'")}')" style="cursor:pointer;">
              <div class="study-example-sentence">${item.exampleRuby}</div>
              <div class="study-example-mean">${item.exampleMeaning}</div>
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
    ${hasMore ? `
      <div style="text-align: center; margin: 24px 0 10px 0;">
        <button class="icon-btn" onclick="loadMoreVocab()" style="padding: 12px 24px; font-size: 0.9rem; margin: 0 auto; background: var(--bg-card); border: 1px solid var(--accent-study);">
          ➕ နောက်ထပ် (${remaining} ခု) ဆက်ကြည့်မည်
        </button>
      </div>
    ` : ''}
  `;
}

// =============================================================
// N3 SAME MEANING SECTION (類義語・言い換え - JLPT 問題４)
// =============================================================
let sameMeaningSearchQuery = '';
let isSameMeaningQuiz = false;
let sameMeaningDisplayLimit = 36;

function onSameMeaningSearch(query) {
  sameMeaningSearchQuery = (query || '').trim().toLowerCase();
  sameMeaningDisplayLimit = 36;
  renderSameMeaningSection();
}

function toggleSameMeaningQuizMode(isChecked) {
  isSameMeaningQuiz = isChecked;
  renderSameMeaningSection();
}

function loadMoreSameMeaning() {
  sameMeaningDisplayLimit += 36;
  renderSameMeaningSection();
}

function renderSameMeaningSection() {
  const container = document.getElementById('sameMeaningDisplayContainer');
  const countLabel = document.getElementById('sameMeaningCountLabel');
  if (!container || typeof N3_SAMEMEANING_DATA === 'undefined') return;

  const filtered = N3_SAMEMEANING_DATA.filter(item => {
    if (!sameMeaningSearchQuery) return true;
    return item.word.toLowerCase().includes(sameMeaningSearchQuery) ||
           item.reading.toLowerCase().includes(sameMeaningSearchQuery) ||
           item.sameMeaning.toLowerCase().includes(sameMeaningSearchQuery) ||
           item.sameMeaningReading.toLowerCase().includes(sameMeaningSearchQuery) ||
           item.meaning.toLowerCase().includes(sameMeaningSearchQuery) ||
           (item.example && item.example.toLowerCase().includes(sameMeaningSearchQuery)) ||
           (item.exampleMeaning && item.exampleMeaning.toLowerCase().includes(sameMeaningSearchQuery));
  });

  const totalMatches = filtered.length;
  const visibleItems = filtered.slice(0, sameMeaningDisplayLimit);

  if (countLabel) countLabel.textContent = `${totalMatches} တွဲအနက် ${visibleItems.length} တွဲ ပြသထားသည်`;

  if (totalMatches === 0) {
    container.innerHTML = '<div style="text-align: center; color: #64748b; padding: 30px; font-size: 0.9rem;">ရှာမတွေ့ပါ။ အခြား စာလုံး သို့မဟုတ် မြန်မာစကားလုံးဖြင့် ရှာကြည့်ပါ။</div>';
    return;
  }

  const hasMore = visibleItems.length < totalMatches;
  const remaining = totalMatches - visibleItems.length;

  container.innerHTML = `
    <div class="same-meaning-cards-list">
      ${visibleItems.map((item, idx) => `
        <div class="study-card">
          <div class="same-meaning-pair-row">
            <div class="same-meaning-item" onclick="speakJapanese('${item.word.replace(/'/g, "\'")}')" style="cursor:pointer;">
              <span class="same-meaning-word">${item.word}</span>
              <span class="study-reading">${item.reading}</span>
            </div>
            <span class="same-meaning-equals">＝</span>
            <div class="same-meaning-item target" onclick="speakJapanese('${item.sameMeaning.replace(/'/g, "\'")}')" style="cursor:pointer; ${isSameMeaningQuiz ? 'filter: blur(5px);' : ''}" onclick="this.style.filter='none'">
              <span class="same-meaning-word" style="color: #38bdf8;">${item.sameMeaning}</span>
              <span class="study-reading">${item.sameMeaningReading}</span>
            </div>
          </div>
          <div class="study-meaning">
            📝 မြန်မာအဓိပ္ပာယ်: ${item.meaning}
          </div>
          ${item.exampleRuby ? `
            <div class="study-example-box" onclick="speakJapanese('${item.example.replace(/'/g, "\'")}')" style="cursor:pointer;">
              <div class="study-example-sentence">${item.exampleRuby}</div>
              <div class="study-example-mean">${item.exampleMeaning}</div>
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
    ${hasMore ? `
      <div style="text-align: center; margin: 24px 0 10px 0;">
        <button class="icon-btn" onclick="loadMoreSameMeaning()" style="padding: 12px 24px; font-size: 0.9rem; margin: 0 auto; background: var(--bg-card); border: 1px solid var(--accent-study);">
          ➕ နောက်ထပ် (${remaining} တွဲ) ဆက်ကြည့်မည်
        </button>
      </div>
    ` : ''}
  `;
}

// =============================================================
// N3 GRAMMAR SECTION (with Ruby Furigana)
// =============================================================
let currentGrammarFilter = 'all';
let grammarSearchQuery = '';
let isGrammarQuiz = false;
let grammarDisplayLimit = 30;

function setGrammarFilter(filterName) {
  currentGrammarFilter = filterName;
  grammarDisplayLimit = 30;
  const chips = ['chipGrammarAll', 'chipGrammarHot', 'chipGrammarLogic', 'chipGrammarRules', 'chipGrammarRelation', 'chipGrammarContrast', 'chipGrammarTime', 'chipGrammarImpression'];
  chips.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });

  const activeMap = {
    all: 'chipGrammarAll',
    hot: 'chipGrammarHot',
    logic: 'chipGrammarLogic',
    rules: 'chipGrammarRules',
    relation: 'chipGrammarRelation',
    contrast: 'chipGrammarContrast',
    time: 'chipGrammarTime',
    impression: 'chipGrammarImpression'
  };
  const activeEl = document.getElementById(activeMap[filterName]);
  if (activeEl) activeEl.classList.add('active');
  renderGrammarSection();
}

function onGrammarSearch(query) {
  grammarSearchQuery = (query || '').trim().toLowerCase();
  grammarDisplayLimit = 30;
  renderGrammarSection();
}

function toggleGrammarQuizMode(isChecked) {
  isGrammarQuiz = isChecked;
  renderGrammarSection();
}

function loadMoreGrammar() {
  grammarDisplayLimit += 30;
  renderGrammarSection();
}

function renderGrammarSection() {
  const container = document.getElementById('grammarDisplayContainer');
  const countLabel = document.getElementById('grammarCountLabel');
  if (!container || typeof N3_GRAMMAR_DATA === 'undefined') return;

  const filtered = N3_GRAMMAR_DATA.filter(item => {
    if (currentGrammarFilter === 'hot' && !item.isHot) return false;
    if (currentGrammarFilter !== 'all' && currentGrammarFilter !== 'hot' && item.category !== currentGrammarFilter) return false;
    if (!grammarSearchQuery) return true;
    return item.pattern.toLowerCase().includes(grammarSearchQuery) ||
           item.meaning.toLowerCase().includes(grammarSearchQuery) ||
           item.connection.toLowerCase().includes(grammarSearchQuery) ||
           item.explanation.toLowerCase().includes(grammarSearchQuery) ||
           item.examples.some(ex => ex.sentence.toLowerCase().includes(grammarSearchQuery) || ex.meaning.toLowerCase().includes(grammarSearchQuery));
  });

  const totalMatches = filtered.length;
  const visibleItems = filtered.slice(0, grammarDisplayLimit);

  if (countLabel) countLabel.textContent = `${totalMatches} ခုအနက် ${visibleItems.length} ခု ပြသထားသည်`;

  if (totalMatches === 0) {
    container.innerHTML = '<div style="text-align: center; color: #64748b; padding: 30px; font-size: 0.9rem;">ရှာမတွေ့ပါ။ အခြား စကားလုံး သို့မဟုတ် မြန်မာအဓိပ္ပာယ်ဖြင့် ရှာကြည့်ပါ။</div>';
    return;
  }

  const hasMore = visibleItems.length < totalMatches;
  const remaining = totalMatches - visibleItems.length;

  container.innerHTML = `
    <div class="grammar-cards-list">
      ${visibleItems.map((item, idx) => `
        <div class="study-card">
          <div class="study-card-header">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span class="grammar-pattern-title">${item.pattern}</span>
              ${item.tag ? `<span class="study-badge-hot">${item.tag}</span>` : ''}
            </div>
            <button class="kanji-audio-btn" onclick="speakJapanese('${item.pattern.replace(/〜/g, '').replace(/'/g, "\'")}')">
              🔊 အသံ
            </button>
          </div>
          <div class="grammar-formula-box">
            🧩 ချိတ်ဆက်ပုံ: ${item.connection}
          </div>
          <div class="study-meaning" style="${isGrammarQuiz ? 'filter: blur(5px); cursor: pointer;' : ''}" onclick="this.style.filter='none'">
            💡 အဓိပ္ပာယ်: ${item.meaning}
          </div>
          <div class="grammar-explanation-text">
            ${item.explanation}
          </div>
          <div class="study-example-box">
            ${item.examples.map(ex => `
              <div style="margin-bottom: 8px; cursor: pointer;" onclick="speakJapanese('${ex.sentence.replace(/'/g, "\'")}')">
                <div class="study-example-sentence">${ex.ruby}</div>
                <div class="study-example-mean">${ex.meaning}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
    ${hasMore ? `
      <div style="text-align: center; margin: 24px 0 10px 0;">
        <button class="icon-btn" onclick="loadMoreGrammar()" style="padding: 12px 24px; font-size: 0.9rem; margin: 0 auto; background: var(--bg-card); border: 1px solid var(--accent-study);">
          ➕ နောက်ထပ် (${remaining} ခု) ဆက်ကြည့်မည်
        </button>
      </div>
    ` : ''}
  `;
}
