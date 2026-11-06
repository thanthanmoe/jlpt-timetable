import json

with open('unmapped_152.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

for idx, it in enumerate(items):
    print(f"[{idx+1}] {it['kanji']} | on: {it['on']} | kun: {it['kun']} | tag: {it['tag']}")
    for w, r in it['words']:
        print(f"    {w} ({r})")
