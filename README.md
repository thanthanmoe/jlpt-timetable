# ⏰ JLPT Exam Study Timetable & Japanese Learning App (PWA)

[![Live App](https://img.shields.io/badge/Live_App-Launch_Web_App-6366f1?style=for-the-badge&logo=safari&logoColor=white)](https://thanthanmoe.github.io/jlpt-timetable/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Active-10b981?style=for-the-badge&logo=github&logoColor=white)](https://thanthanmoe.github.io/jlpt-timetable/)
[![PWA Ready](https://img.shields.io/badge/PWA-iOS_&_Android-f59e0b?style=for-the-badge&logo=pwa&logoColor=white)](https://thanthanmoe.github.io/jlpt-timetable/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

### 🌐 Direct Live Web App URL:
👉 **[https://thanthanmoe.github.io/jlpt-timetable/](https://thanthanmoe.github.io/jlpt-timetable/)**

*(Designed as a Progressive Web App that runs offline on iPhones, Android phones, and Android tablets like the Redmi Pad SE 11")*

---

## 🌟 Overview & Key Features

This application is an all-in-one daily study companion and reference dictionary engineered for students preparing for the Japanese Language Proficiency Test (JLPT N5, N4, and N3).

### 1. 📅 Daily Routine Timetable & Real-time Alarms
- **Target Exam Countdown:** Real-time D-Day counter targeting **December 9, 2026 (09/12/2026)**.
- **Structured Schedule:** Tracks daily activities from 07:00 AM to 11:00 PM (Study sprints, Past Paper exams, Listening practice, Breaks, and Sleep).
- **Audio Synthesizer Alarms:** Plays customizable Web Audio chime alarms and triggers vibration patterns (on supported devices) when study sessions conclude.
- **Exam Focus Mode (Desk Clock):** Distraction-free countdown clock with Screen Wake Lock API to prevent the display from turning off while studying.
- **Calendar Synchronization:** One-tap export to `.ics` format for direct import into Apple Calendar and Google Calendar.

### 2. 📚 31-Day Past Papers Study Plan
- **Tracked Syllabus:** Covers 31 days of full-length JLPT past paper practice (Vocabulary/Grammar, Reading, and Listening).
- **Completion Tracker:** Interactive checklist with progress counter and local storage persistence.

### 3. 🈸 Comprehensive Japanese Reference Database
- **Kana:** 71 Hiragana (including Dakuon/Handakuon) and 46 Katakana with stroke guidance and loanword examples.
- **Kanji (636 Characters Total):**
  - **N5:** 114 Kanji (Complete *Minna no Nihongo 1* syllabus).
  - **N4:** 186 Kanji (Complete *Minna no Nihongo 2* syllabus).
  - **N3:** 336 Kanji (Complete 6-Week curriculum from *Nihongo Soumatome N3 漢字*).
- **High-Frequency N3 Vocabulary:** Categorized into Compound Verbs (複合動詞), Adverbs & Onomatopoeia (副詞・オノマトペ), Katakana loanwords (カタカナ語), and Essential Verbs & Adjectives.
- **JLPT N3 Same-Meaning Words (類義語 / 言い換え):** Essential paraphrase word pairs frequently tested in JLPT Section 4.
- **JLPT N3 Grammar Points:** Over 70 core grammar patterns featuring connection rules, clear explanations, and example sentences rendered with native HTML `<ruby>` furigana.
- **Pronunciation Audio:** Built-in Web Speech API Japanese text-to-speech for all Kanji, vocabulary, and example sentences.

### 4. 📱 Responsive Tablet & Multi-Device Optimization
- **Responsive Dashboard:** Adaptive multi-column grid layouts for wide displays (portrait and landscape orientations).
- **Redmi Pad SE 11" Optimized:** Specially tuned for 11-inch Android tablets with fluid 90Hz scrolling and comfortable touch targets.
- **Offline PWA:** Fully cached via Service Worker for complete offline functionality without internet access.

---

## 📲 Installation Guide (Add to Home Screen)

### 🍏 iOS (iPhone & iPad)
1. Open Safari and navigate to:  
   `https://thanthanmoe.github.io/jlpt-timetable/`
2. Tap the **Share** button (the square icon with an upward arrow ⎋) in the bottom toolbar.
3. Scroll down and tap **"Add to Home Screen"**.
4. Tap **"Add"** in the top right corner. The app icon will appear on your Home Screen.

### 🤖 Android & Tablets (e.g., Redmi Pad SE 11")
1. Open Google Chrome and navigate to:  
   `https://thanthanmoe.github.io/jlpt-timetable/`
2. Tap the **three-dot menu (⋮)** in the top right corner.
3. Tap **"Install app"** (or **"Add to Home screen"**).
4. Tap **"Install"** to add the standalone application to your app drawer and home screen.

---

## 🛠️ Technology Stack
- **Frontend:** Vanilla HTML5, Modern CSS3 (CSS Variables, Flexbox, CSS Grid), Vanilla JavaScript (ES6+).
- **PWA Infrastructure:** Web App Manifest (`manifest.json`), Service Worker (`sw.js`) with Cache API.
- **APIs:** Web Audio API, Web Speech API (Synthesis), Screen Wake Lock API, Vibration API.
- **Hosting:** GitHub Pages with automated continuous deployment.
