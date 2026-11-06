# -*- coding: utf-8 -*-
import json

from gen_db import hiragana, katakana
from build_full_kanji import n5_raw
from n4_data import n4_raw
from n3_data import n3_raw
from expand_kanji import n4_extra, n3_extra

def dedupe(arr):
    seen = set()
    res = []
    for item in arr:
        k = item[0]
        if k not in seen:
            seen.add(k)
            res.append(item)
    return res

n5_clean = dedupe(n5_raw)
n4_clean = dedupe(n4_raw + n4_extra)
n3_clean = dedupe(n3_raw + n3_extra)

def fmt(arr):
    res = []
    for item in arr:
        kanji, hira, romaji, mean, exs = item
        res.append({
            "kanji": kanji,
            "hiragana": hira,
            "romaji": romaji,
            "meaning": mean,
            "examples": [{"word": w, "reading": r, "mean": m} for (w, r, m) in exs]
        })
    return res

n5_list = fmt(n5_clean)
n4_list = fmt(n4_clean)
n3_list = fmt(n3_clean)

print(f"Total Hiragana: {len(hiragana)}")
print(f"Total Katakana: {len(katakana)}")
print(f"Total N5 (Minna no Nihongo 1): {len(n5_list)} Kanji")
print(f"Total N4 (Minna no Nihongo 2): {len(n4_list)} Kanji")
print(f"Total N3 (Nihongo Soumatome N3): {len(n3_list)} Kanji")

content = f"""// Comprehensive Japanese Kana & JLPT Kanji Database
// N5: Minna no Nihongo Shokyu 1 (All Chapters 1-25) - {len(n5_list)} Kanji
// N4: Minna no Nihongo Shokyu 2 (All Chapters 26-50) - {len(n4_list)} Kanji
// N3: Nihongo Soumatome N3 Kanji (Complete 6 Weeks) - {len(n3_list)} Kanji

const HIRAGANA_DATA = {json.dumps(hiragana, ensure_ascii=False, indent=2)};

const KATAKANA_DATA = {json.dumps(katakana, ensure_ascii=False, indent=2)};

const N5_KANJI = {json.dumps(n5_list, ensure_ascii=False, indent=2)};

const N4_KANJI = {json.dumps(n4_list, ensure_ascii=False, indent=2)};

const N3_KANJI = {json.dumps(n3_list, ensure_ascii=False, indent=2)};
"""

with open("d:/Timetable app/kanji_data.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Saved kanji_data.js successfully!")
