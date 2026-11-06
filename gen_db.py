# -*- coding: utf-8 -*-
import json

# =========================================================================
# 1. HIRAGANA DATA (46 + Dakuon)
# =========================================================================
hiragana = [
  {"kana": "あ", "romaji": "a", "burmese": "အ", "example": "あさ (asa - မနက်ခင်း)"},
  {"kana": "い", "romaji": "i", "burmese": "အိ", "example": "いぬ (inu - ခွေး)"},
  {"kana": "う", "romaji": "u", "burmese": "အု", "example": "うみ (umi - ပင်လယ်)"},
  {"kana": "え", "romaji": "e", "burmese": "အဲ့", "example": "えき (eki - ဘူတာ)"},
  {"kana": "お", "romaji": "o", "burmese": "အို", "example": "おかし (okashi - မုန့်)"},

  {"kana": "か", "romaji": "ka", "burmese": "ခ", "example": "かさ (kasa - ထီး)"},
  {"kana": "き", "romaji": "ki", "burmese": "ခိ", "example": "き (ki - သစ်ပင်)"},
  {"kana": "く", "romaji": "ku", "burmese": "ခု", "example": "くるま (kuruma - ကား)"},
  {"kana": "け", "romaji": "ke", "burmese": "ခဲ", "example": "けさ (kesa - ဒီမနက်)"},
  {"kana": "こ", "romaji": "ko", "burmese": "ခို", "example": "こども (kodomo - ကလေး)"},

  {"kana": "さ", "romaji": "sa", "burmese": "ဆ", "example": "さかな (sakana - ငါး)"},
  {"kana": "し", "romaji": "shi", "burmese": "ရှိ", "example": "しんぶん (shinbun - သတင်းစာ)"},
  {"kana": "す", "romaji": "su", "burmese": "စု", "example": "すし (sushi - ဆူရှီ)"},
  {"kana": "せ", "romaji": "se", "burmese": "ဆဲ", "example": "せんせい (sensei - ဆရာ)"},
  {"kana": "そ", "romaji": "so", "burmese": "ဆို", "example": "そら (sora - ကောင်းကင်)"},

  {"kana": "た", "romaji": "ta", "burmese": "တ", "example": "たまご (tamago - ကြက်ဥ)"},
  {"kana": "ち", "romaji": "chi", "burmese": "ချိ", "example": "ちず (chizu - မြေပုံ)"},
  {"kana": "つ", "romaji": "tsu", "burmese": "ဆွိ/စု", "example": "つき (tsuki - လ)"},
  {"kana": "て", "romaji": "te", "burmese": "တဲ", "example": "て (te - လက်)"},
  {"kana": "と", "romaji": "to", "burmese": "တို", "example": "ともだち (tomodachi - သူငယ်ချင်း)"},

  {"kana": "な", "romaji": "na", "burmese": "န", "example": "なつ (natsu - နွေရာသီ)"},
  {"kana": "に", "romaji": "ni", "burmese": "နိ", "example": "にほん (nihon - ဂျပန်)"},
  {"kana": "ぬ", "romaji": "nu", "burmese": "နု", "example": "いぬ (inu - ခွေး)"},
  {"kana": "ね", "romaji": "ne", "burmese": "နဲ", "example": "ねこ (neko - ကြောင်)"},
  {"kana": "の", "romaji": "no", "burmese": "နို", "example": "のみもの (nomimono - သောက်စရာ)"},

  {"kana": "は", "romaji": "ha", "burmese": "ဟ", "example": "はな (hana - ပန်း/နှာခေါင်း)"},
  {"kana": "ひ", "romaji": "hi", "burmese": "ဟိ", "example": "ひと (hito - လူ)"},
  {"kana": "ふ", "romaji": "fu", "burmese": "ဖု", "example": "ふゆ (fuyu - ဆောင်းရာသီ)"},
  {"kana": "へ", "romaji": "he", "burmese": "ဟဲ", "example": "へや (heya - အခန်း)"},
  {"kana": "ほ", "romaji": "ho", "burmese": "ဟို", "example": "ほん (hon - စာအုပ်)"},

  {"kana": "ま", "romaji": "ma", "burmese": "မ", "example": "まち (machi - မြို့)"},
  {"kana": "み", "romaji": "mi", "burmese": "မိ", "example": "みず (mizu - ရေ)"},
  {"kana": "む", "romaji": "mu", "burmese": "မု", "example": "むし (mushi - ပိုးကောင်)"},
  {"kana": "め", "romaji": "me", "burmese": "မဲ", "example": "め (me - မျက်စိ)"},
  {"kana": "も", "romaji": "mo", "burmese": "မို", "example": "もの (mono - ပစ္စည်း)"},

  {"kana": "や", "romaji": "ya", "burmese": "ယ", "example": "やま (yama - တောင်)"},
  {"kana": "ゆ", "romaji": "yu", "burmese": "ယု", "example": "ゆき (yuki - နှင်း)"},
  {"kana": "よ", "romaji": "yo", "burmese": "ယို", "example": "よる (yoru - ည)"},

  {"kana": "ら", "romaji": "ra", "burmese": "ရ", "example": "らいしゅう (raishuu - နောက်အပတ်)"},
  {"kana": "り", "romaji": "ri", "burmese": "ရိ", "example": "りんご (ringo - ပန်းသီး)"},
  {"kana": "る", "romaji": "ru", "burmese": "ရု", "example": "くるま (kuruma - ကား)"},
  {"kana": "れ", "romaji": "re", "burmese": "ရဲ", "example": "れい (rei - ဥပမာ/သုည)"},
  {"kana": "ろ", "romaji": "ro", "burmese": "ရို", "example": "ろく (roku - ခြောက်)"},

  {"kana": "わ", "romaji": "wa", "burmese": "ဝ", "example": "わたし (watashi - ကျွန်တော်/ကျွန်မ)"},
  {"kana": "を", "romaji": "wo (o)", "burmese": "အို", "example": "ほん を よむ (hon o yomu)"},
  {"kana": "ん", "romaji": "n", "burmese": "န်/အင်", "example": "ほん (hon - စာအုပ်)"},

  {"kana": "が", "romaji": "ga", "burmese": "ဂ", "example": "がくせい (gakusei - ကျောင်းသား)"},
  {"kana": "ぎ", "romaji": "gi", "burmese": "ဂိ", "example": "ぎんこう (ginkou - ဘဏ်)"},
  {"kana": "ぐ", "romaji": "gu", "burmese": "ဂု", "example": "ぐあい (guai - အခြေအနေ)"},
  {"kana": "げ", "romaji": "ge", "burmese": "ဂဲ", "example": "げんき (genki - ကျန်းမာရွှင်လန်း)"},
  {"kana": "ご", "romaji": "go", "burmese": "ဂို", "example": "ごはん (gohan - ထမင်း)"},

  {"kana": "ざ", "romaji": "za", "burmese": "ဇ", "example": "ざっし (zasshi - မဂ္ဂဇင်း)"},
  {"kana": "じ", "romaji": "ji", "burmese": "ဂျိ", "example": "じかん (jikan - အချိန်)"},
  {"kana": "ず", "romaji": "zu", "burmese": "ဇု", "example": "みず (mizu - ရေ)"},
  {"kana": "ぜ", "romaji": "ze", "burmese": "ဇဲ", "example": "ぜんぶ (zenbu - အကုန်လုံး)"},
  {"kana": "ぞ", "romaji": "zo", "burmese": "ဇို", "example": "ぞう (zou - ဆင်)"},

  {"kana": "だ", "romaji": "da", "burmese": "ဒ", "example": "だいがく (daigaku - တက္ကသိုလ်)"},
  {"kana": "ぢ", "romaji": "ji", "burmese": "ဂျိ", "example": "はなぢ (hanaji - နှာခေါင်းသွေး)"},
  {"kana": "づ", "romaji": "zu", "burmese": "ဇု", "example": "つづく (tsuzuku - ဆက်ဖြစ်သည်)"},
  {"kana": "で", "romaji": "de", "burmese": "ဒဲ", "example": "でんしゃ (densha - ရထား)"},
  {"kana": "ど", "romaji": "do", "burmese": "ဒို", "example": "どこ (doko - ဘယ်နေရာ)"},

  {"kana": "ば", "romaji": "ba", "burmese": "ဗ", "example": "ばんごはん (bangohan - ညစာ)"},
  {"kana": "び", "romaji": "bi", "burmese": "ဗိ", "example": "びょういん (byouin - ဆေးရုံ)"},
  {"kana": "ぶ", "romaji": "bu", "burmese": "ဗု", "example": "ぶんぽう (bunpou - သဒ္ဒါ)"},
  {"kana": "べ", "romaji": "be", "burmese": "ဗဲ", "example": "べんきょう (benkyou - စာလေ့လာခြင်း)"},
  {"kana": "ぼ", "romaji": "bo", "burmese": "ဗို", "example": "ぼうし (boushi - ဦးထုပ်)"},

  {"kana": "ぱ", "romaji": "pa", "burmese": "ပ", "example": "パン (pan - ပေါင်မုန့်)"},
  {"kana": "ぴ", "romaji": "pi", "burmese": "ပိ", "example": "ぴかぴか (pikapika - တလက်လက်)"},
  {"kana": "ぷ", "romaji": "pu", "burmese": "ပု", "example": "ぷりん (purin - ပူတင်း)"},
  {"kana": "ぺ", "romaji": "pe", "burmese": "ပဲ", "example": "ぺらぺら (perapera - နှုတ်သွက်)"},
  {"kana": "ぽ", "romaji": "po", "burmese": "ပို", "example": "ポスト (posuto - စာတိုက်ပုံး)"}
]

# =========================================================================
# 2. KATAKANA DATA (46)
# =========================================================================
katakana = [
  {"kana": "ア", "romaji": "a", "burmese": "အ", "example": "アイス (aisu - ရေခဲမုန့်)"},
  {"kana": "イ", "romaji": "i", "burmese": "အိ", "example": "インド (indo - အိန္ဒိယ)"},
  {"kana": "ウ", "romaji": "u", "burmese": "အု", "example": "ウェブ (webu - ဝဘ်)"},
  {"kana": "エ", "romaji": "e", "burmese": "အဲ့", "example": "エレベーター (erebeetaa - ဓာတ်လှေကား)"},
  {"kana": "オ", "romaji": "o", "burmese": "အို", "example": "オレンジ (orenji - လိမ္မော်ရည်)"},

  {"kana": "カ", "romaji": "ka", "burmese": "ခ", "example": "カメラ (kamera - ကင်မရာ)"},
  {"kana": "キ", "romaji": "ki", "burmese": "ခိ", "example": "キッチン (kicchin - မီးဖိုချောင်)"},
  {"kana": "ク", "romaji": "ku", "burmese": "ခု", "example": "クラス (kurasu - အတန်း)"},
  {"kana": "ケ", "romaji": "ke", "burmese": "ခဲ", "example": "ケーキ (keeki - ကိတ်မုန့်)"},
  {"kana": "コ", "romaji": "ko", "burmese": "ခို", "example": "コーヒー (koohii - ကော်ဖီ)"},

  {"kana": "サ", "romaji": "sa", "burmese": "ဆ", "example": "サラダ (sarada - အသုပ်)"},
  {"kana": "シ", "romaji": "shi", "burmese": "ရှိ", "example": "シャツ (shatsu - ရှပ်အင်္ကျီ)"},
  {"kana": "ス", "romaji": "su", "burmese": "စု", "example": "スポーツ (supootsu - အားကစား)"},
  {"kana": "セ", "romaji": "se", "burmese": "ဆဲ", "example": "セーター (seetaa - ဆွယ်တာ)"},
  {"kana": "ソ", "romaji": "so", "burmese": "ဆို", "example": "ソファ (sofa - ဆိုဖာ)"},

  {"kana": "タ", "romaji": "ta", "burmese": "တ", "example": "タクシー (takushii - တက္ကစီ)"},
  {"kana": "チ", "romaji": "chi", "burmese": "ချိ", "example": "チーズ (chiizu - ဒိန်ခဲ)"},
  {"kana": "ツ", "romaji": "tsu", "burmese": "ဆွိ/စု", "example": "ツアー (tsuaa - ခရီးစဉ်)"},
  {"kana": "テ", "romaji": "te", "burmese": "တဲ", "example": "テレビ (terebi - တီဗွီ)"},
  {"kana": "ト", "romaji": "to", "burmese": "တို", "example": "トイレ (toire - အိမ်သာ)"},

  {"kana": "ナ", "romaji": "na", "burmese": "န", "example": "ナイフ (naifu - ဓား)"},
  {"kana": "ニ", "romaji": "ni", "burmese": "နိ", "example": "ニュース (nyuusu - သတင်း)"},
  {"kana": "ヌ", "romaji": "nu", "burmese": "နု", "example": "カヌー (kanuu - လှေငယ်)"},
  {"kana": "ネ", "romaji": "ne", "burmese": "နဲ", "example": "ネクタイ (nekutai - လည်စည်း)"},
  {"kana": "ノ", "romaji": "no", "burmese": "နို", "example": "ノート (nooto - မှတ်စုစာအုပ်)"},

  {"kana": "ハ", "romaji": "ha", "burmese": "ဟ", "example": "ハンバーガー (hanbaagaa)"},
  {"kana": "ヒ", "romaji": "hi", "burmese": "ဟိ", "example": "ヒーター (hiitaa - အပူပေးစက်)"},
  {"kana": "フ", "romaji": "fu", "burmese": "ဖု", "example": "フォーク (fooku - ခက်ရင်း)"},
  {"kana": "ヘ", "romaji": "he", "burmese": "ဟဲ", "example": "ヘルメット (herumetto - ဦးထုပ်)"},
  {"kana": "ホ", "romaji": "ho", "burmese": "ဟို", "example": "ホテル (hoteru - ဟိုတယ်)"},

  {"kana": "マ", "romaji": "ma", "burmese": "မ", "example": "マスク (masuku - နှာခေါင်းစည်း)"},
  {"kana": "ミ", "romaji": "mi", "burmese": "မိ", "example": "ミルク (miruku - နို့)"},
  {"kana": "ム", "romaji": "mu", "burmese": "မု", "example": "ムービー (muubii - ရုပ်ရှင်)"},
  {"kana": "メ", "romaji": "me", "burmese": "မဲ", "example": "メニュー (menyuu - မီနူး)"},
  {"kana": "モ", "romaji": "mo", "burmese": "မို", "example": "モデル (moderu - မော်ဒယ်)"},

  {"kana": "ヤ", "romaji": "ya", "burmese": "ယ", "example": "ヤジ (yaji)"},
  {"kana": "ユ", "romaji": "yu", "burmese": "ယု", "example": "ユニフォーム (yunifoomu)"},
  {"kana": "ヨ", "romaji": "yo", "burmese": "ယို", "example": "ヨーロッパ (yooroppa - ဥရောပ)"},

  {"kana": "ラ", "romaji": "ra", "burmese": "ရ", "example": "ラジオ (rajio - ရေဒီယို)"},
  {"kana": "リ", "romaji": "ri", "burmese": "ရိ", "example": "リモコン (rimokon - ရီမုတ်)"},
  {"kana": "ル", "romaji": "ru", "burmese": "ရု", "example": "ルール (ruuru - စည်းမျဉ်း)"},
  {"kana": "レ", "romaji": "re", "burmese": "ရဲ", "example": "レストラン (resutoran - စားသောက်ဆိုင်)"},
  {"kana": "ロ", "romaji": "ro", "burmese": "ရို", "example": "ロボット (robotto - စက်ရုပ်)"},

  {"kana": "ワ", "romaji": "wa", "burmese": "ဝ", "example": "ワイン (wain - ဝိုင်)"},
  {"kana": "ヲ", "romaji": "wo", "burmese": "အို", "example": "ヲ"},
  {"kana": "ン", "romaji": "n", "burmese": "န်", "example": "パン (pan - ပေါင်မုန့်)"}
]

print("Base kana ready.")

