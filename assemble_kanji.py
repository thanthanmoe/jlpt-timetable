# -*- coding: utf-8 -*-
import json
import codecs

print("Reading base data...")
from gen_db import hiragana, katakana
from build_full_kanji import n5_raw

# Format helper
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

n5_list = fmt(n5_raw)
print(f"N5 Count: {len(n5_list)}")

