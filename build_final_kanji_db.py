# -*- coding: utf-8 -*-
import csv
import json

from gen_db import hiragana, katakana
from build_full_kanji import n5_raw
from n4_data import n4_raw
from expand_kanji import n4_extra

from build_soumatome_336 import soumatome_n3
from n3_data import n3_raw
from expand_kanji import n3_extra
from unmapped_defs_p1 import defs_p1
from unmapped_defs_p2 import defs_p2
from unmapped_defs_p3 import defs_p3
from unmapped_defs_p4 import defs_p4

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

# Prepare all definitions for N3
n3_defs_map = {}
for item in soumatome_n3 + n3_raw + n3_extra:
    k = item[0]
    n3_defs_map[k] = (item[1], item[2], item[3], item[4])

for p in (defs_p1, defs_p2, defs_p3, defs_p4):
    for k, v in p.items():
        n3_defs_map[k] = v

# Read 336 Kanji in the exact order of Nihongo Soumatome N3 book
with open('soumatome_kanji_raw.csv', 'r', encoding='utf-8') as f:
    soumatome_rows = list(csv.DictReader(f))

n3_final = []
for row in soumatome_rows:
    char = row['kanji']
    hira, romaji, mean, exs = n3_defs_map[char]
    n3_final.append({
        "kanji": char,
        "hiragana": hira,
        "romaji": romaji,
        "meaning": mean,
        "tag": row['tags'],
        "examples": [{"word": w, "reading": r, "mean": m} for (w, r, m) in exs]
    })

def fmt_n5_n4(arr):
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

n5_final = fmt_n5_n4(n5_clean)
n4_final = fmt_n5_n4(n4_clean)

print(f"=== SUMMARY ===")
print(f"Hiragana data: {len(hiragana)} characters")
print(f"Katakana data: {len(katakana)} characters")
print(f"N5 Kanji (Minna no Nihongo 1): {len(n5_final)} Kanji")
print(f"N4 Kanji (Minna no Nihongo 2): {len(n4_final)} Kanji")
print(f"N3 Kanji (Nihongo Soumatome N3 Full Syllabus): {len(n3_final)} Kanji")
print(f"Total Kanji in App: {len(n5_final) + len(n4_final) + len(n3_final)} Kanji")

content = f"""// Comprehensive Japanese Kana & JLPT Kanji Database
// N5: Minna no Nihongo Shokyu 1 (All Chapters 1-25) - {len(n5_final)} Kanji
// N4: Minna no Nihongo Shokyu 2 (All Chapters 26-50) - {len(n4_final)} Kanji
// N3: Nihongo Soumatome N3 Kanji (Complete 6 Weeks / 336 Kanji) - {len(n3_final)} Kanji

const HIRAGANA_DATA = {json.dumps(hiragana, ensure_ascii=False, indent=2)};

const KATAKANA_DATA = {json.dumps(katakana, ensure_ascii=False, indent=2)};

const N5_KANJI = {json.dumps(n5_final, ensure_ascii=False, indent=2)};

const N4_KANJI = {json.dumps(n4_final, ensure_ascii=False, indent=2)};

const N3_KANJI = {json.dumps(n3_final, ensure_ascii=False, indent=2)};
"""

with open("d:/Timetable app/kanji_data.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Saved kanji_data.js successfully!")
