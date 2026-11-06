// Comprehensive Japanese Kana & JLPT Kanji Database
// N5: Minna no Nihongo Shokyu 1 (All Chapters 1-25) - 114 Kanji
// N4: Minna no Nihongo Shokyu 2 (All Chapters 26-50) - 186 Kanji
// N3: Nihongo Soumatome N3 Kanji (Complete 6 Weeks / 336 Kanji) - 336 Kanji

const HIRAGANA_DATA = [
  {
    "kana": "あ",
    "romaji": "a",
    "burmese": "အ",
    "example": "あさ (asa - မနက်ခင်း)"
  },
  {
    "kana": "い",
    "romaji": "i",
    "burmese": "အိ",
    "example": "いぬ (inu - ခွေး)"
  },
  {
    "kana": "う",
    "romaji": "u",
    "burmese": "အု",
    "example": "うみ (umi - ပင်လယ်)"
  },
  {
    "kana": "え",
    "romaji": "e",
    "burmese": "အဲ့",
    "example": "えき (eki - ဘူတာ)"
  },
  {
    "kana": "お",
    "romaji": "o",
    "burmese": "အို",
    "example": "おかし (okashi - မုန့်)"
  },
  {
    "kana": "か",
    "romaji": "ka",
    "burmese": "ခ",
    "example": "かさ (kasa - ထီး)"
  },
  {
    "kana": "き",
    "romaji": "ki",
    "burmese": "ခိ",
    "example": "き (ki - သစ်ပင်)"
  },
  {
    "kana": "く",
    "romaji": "ku",
    "burmese": "ခု",
    "example": "くるま (kuruma - ကား)"
  },
  {
    "kana": "け",
    "romaji": "ke",
    "burmese": "ခဲ",
    "example": "けさ (kesa - ဒီမနက်)"
  },
  {
    "kana": "こ",
    "romaji": "ko",
    "burmese": "ခို",
    "example": "こども (kodomo - ကလေး)"
  },
  {
    "kana": "さ",
    "romaji": "sa",
    "burmese": "ဆ",
    "example": "さかな (sakana - ငါး)"
  },
  {
    "kana": "し",
    "romaji": "shi",
    "burmese": "ရှိ",
    "example": "しんぶん (shinbun - သတင်းစာ)"
  },
  {
    "kana": "す",
    "romaji": "su",
    "burmese": "စု",
    "example": "すし (sushi - ဆူရှီ)"
  },
  {
    "kana": "せ",
    "romaji": "se",
    "burmese": "ဆဲ",
    "example": "せんせい (sensei - ဆရာ)"
  },
  {
    "kana": "そ",
    "romaji": "so",
    "burmese": "ဆို",
    "example": "そら (sora - ကောင်းကင်)"
  },
  {
    "kana": "た",
    "romaji": "ta",
    "burmese": "တ",
    "example": "たまご (tamago - ကြက်ဥ)"
  },
  {
    "kana": "ち",
    "romaji": "chi",
    "burmese": "ချိ",
    "example": "ちず (chizu - မြေပုံ)"
  },
  {
    "kana": "つ",
    "romaji": "tsu",
    "burmese": "ဆွိ/စု",
    "example": "つき (tsuki - လ)"
  },
  {
    "kana": "て",
    "romaji": "te",
    "burmese": "တဲ",
    "example": "て (te - လက်)"
  },
  {
    "kana": "と",
    "romaji": "to",
    "burmese": "တို",
    "example": "ともだち (tomodachi - သူငယ်ချင်း)"
  },
  {
    "kana": "な",
    "romaji": "na",
    "burmese": "န",
    "example": "なつ (natsu - နွေရာသီ)"
  },
  {
    "kana": "に",
    "romaji": "ni",
    "burmese": "နိ",
    "example": "にほん (nihon - ဂျပန်)"
  },
  {
    "kana": "ぬ",
    "romaji": "nu",
    "burmese": "နု",
    "example": "いぬ (inu - ခွေး)"
  },
  {
    "kana": "ね",
    "romaji": "ne",
    "burmese": "နဲ",
    "example": "ねこ (neko - ကြောင်)"
  },
  {
    "kana": "の",
    "romaji": "no",
    "burmese": "နို",
    "example": "のみもの (nomimono - သောက်စရာ)"
  },
  {
    "kana": "は",
    "romaji": "ha",
    "burmese": "ဟ",
    "example": "はな (hana - ပန်း/နှာခေါင်း)"
  },
  {
    "kana": "ひ",
    "romaji": "hi",
    "burmese": "ဟိ",
    "example": "ひと (hito - လူ)"
  },
  {
    "kana": "ふ",
    "romaji": "fu",
    "burmese": "ဖု",
    "example": "ふゆ (fuyu - ဆောင်းရာသီ)"
  },
  {
    "kana": "へ",
    "romaji": "he",
    "burmese": "ဟဲ",
    "example": "へや (heya - အခန်း)"
  },
  {
    "kana": "ほ",
    "romaji": "ho",
    "burmese": "ဟို",
    "example": "ほん (hon - စာအုပ်)"
  },
  {
    "kana": "ま",
    "romaji": "ma",
    "burmese": "မ",
    "example": "まち (machi - မြို့)"
  },
  {
    "kana": "み",
    "romaji": "mi",
    "burmese": "မိ",
    "example": "みず (mizu - ရေ)"
  },
  {
    "kana": "む",
    "romaji": "mu",
    "burmese": "မု",
    "example": "むし (mushi - ပိုးကောင်)"
  },
  {
    "kana": "め",
    "romaji": "me",
    "burmese": "မဲ",
    "example": "め (me - မျက်စိ)"
  },
  {
    "kana": "も",
    "romaji": "mo",
    "burmese": "မို",
    "example": "もの (mono - ပစ္စည်း)"
  },
  {
    "kana": "や",
    "romaji": "ya",
    "burmese": "ယ",
    "example": "やま (yama - တောင်)"
  },
  {
    "kana": "ゆ",
    "romaji": "yu",
    "burmese": "ယု",
    "example": "ゆき (yuki - နှင်း)"
  },
  {
    "kana": "よ",
    "romaji": "yo",
    "burmese": "ယို",
    "example": "よる (yoru - ည)"
  },
  {
    "kana": "ら",
    "romaji": "ra",
    "burmese": "ရ",
    "example": "らいしゅう (raishuu - နောက်အပတ်)"
  },
  {
    "kana": "り",
    "romaji": "ri",
    "burmese": "ရိ",
    "example": "りんご (ringo - ပန်းသီး)"
  },
  {
    "kana": "る",
    "romaji": "ru",
    "burmese": "ရု",
    "example": "くるま (kuruma - ကား)"
  },
  {
    "kana": "れ",
    "romaji": "re",
    "burmese": "ရဲ",
    "example": "れい (rei - ဥပမာ/သုည)"
  },
  {
    "kana": "ろ",
    "romaji": "ro",
    "burmese": "ရို",
    "example": "ろく (roku - ခြောက်)"
  },
  {
    "kana": "わ",
    "romaji": "wa",
    "burmese": "ဝ",
    "example": "わたし (watashi - ကျွန်တော်/ကျွန်မ)"
  },
  {
    "kana": "を",
    "romaji": "wo (o)",
    "burmese": "အို",
    "example": "ほん を よむ (hon o yomu)"
  },
  {
    "kana": "ん",
    "romaji": "n",
    "burmese": "န်/အင်",
    "example": "ほん (hon - စာအုပ်)"
  },
  {
    "kana": "が",
    "romaji": "ga",
    "burmese": "ဂ",
    "example": "がくせい (gakusei - ကျောင်းသား)"
  },
  {
    "kana": "ぎ",
    "romaji": "gi",
    "burmese": "ဂိ",
    "example": "ぎんこう (ginkou - ဘဏ်)"
  },
  {
    "kana": "ぐ",
    "romaji": "gu",
    "burmese": "ဂု",
    "example": "ぐあい (guai - အခြေအနေ)"
  },
  {
    "kana": "げ",
    "romaji": "ge",
    "burmese": "ဂဲ",
    "example": "げんき (genki - ကျန်းမာရွှင်လန်း)"
  },
  {
    "kana": "ご",
    "romaji": "go",
    "burmese": "ဂို",
    "example": "ごはん (gohan - ထမင်း)"
  },
  {
    "kana": "ざ",
    "romaji": "za",
    "burmese": "ဇ",
    "example": "ざっし (zasshi - မဂ္ဂဇင်း)"
  },
  {
    "kana": "じ",
    "romaji": "ji",
    "burmese": "ဂျိ",
    "example": "じかん (jikan - အချိန်)"
  },
  {
    "kana": "ず",
    "romaji": "zu",
    "burmese": "ဇု",
    "example": "みず (mizu - ရေ)"
  },
  {
    "kana": "ぜ",
    "romaji": "ze",
    "burmese": "ဇဲ",
    "example": "ぜんぶ (zenbu - အကုန်လုံး)"
  },
  {
    "kana": "ぞ",
    "romaji": "zo",
    "burmese": "ဇို",
    "example": "ぞう (zou - ဆင်)"
  },
  {
    "kana": "だ",
    "romaji": "da",
    "burmese": "ဒ",
    "example": "だいがく (daigaku - တက္ကသိုလ်)"
  },
  {
    "kana": "ぢ",
    "romaji": "ji",
    "burmese": "ဂျိ",
    "example": "はなぢ (hanaji - နှာခေါင်းသွေး)"
  },
  {
    "kana": "づ",
    "romaji": "zu",
    "burmese": "ဇု",
    "example": "つづく (tsuzuku - ဆက်ဖြစ်သည်)"
  },
  {
    "kana": "で",
    "romaji": "de",
    "burmese": "ဒဲ",
    "example": "でんしゃ (densha - ရထား)"
  },
  {
    "kana": "ど",
    "romaji": "do",
    "burmese": "ဒို",
    "example": "どこ (doko - ဘယ်နေရာ)"
  },
  {
    "kana": "ば",
    "romaji": "ba",
    "burmese": "ဗ",
    "example": "ばんごはん (bangohan - ညစာ)"
  },
  {
    "kana": "び",
    "romaji": "bi",
    "burmese": "ဗိ",
    "example": "びょういん (byouin - ဆေးရုံ)"
  },
  {
    "kana": "ぶ",
    "romaji": "bu",
    "burmese": "ဗု",
    "example": "ぶんぽう (bunpou - သဒ္ဒါ)"
  },
  {
    "kana": "べ",
    "romaji": "be",
    "burmese": "ဗဲ",
    "example": "べんきょう (benkyou - စာလေ့လာခြင်း)"
  },
  {
    "kana": "ぼ",
    "romaji": "bo",
    "burmese": "ဗို",
    "example": "ぼうし (boushi - ဦးထုပ်)"
  },
  {
    "kana": "ぱ",
    "romaji": "pa",
    "burmese": "ပ",
    "example": "パン (pan - ပေါင်မုန့်)"
  },
  {
    "kana": "ぴ",
    "romaji": "pi",
    "burmese": "ပိ",
    "example": "ぴかぴか (pikapika - တလက်လက်)"
  },
  {
    "kana": "ぷ",
    "romaji": "pu",
    "burmese": "ပု",
    "example": "ぷりん (purin - ပူတင်း)"
  },
  {
    "kana": "ぺ",
    "romaji": "pe",
    "burmese": "ပဲ",
    "example": "ぺらぺら (perapera - နှုတ်သွက်)"
  },
  {
    "kana": "ぽ",
    "romaji": "po",
    "burmese": "ပို",
    "example": "ポスト (posuto - စာတိုက်ပုံး)"
  }
];

const KATAKANA_DATA = [
  {
    "kana": "ア",
    "romaji": "a",
    "burmese": "အ",
    "example": "アイス (aisu - ရေခဲမုန့်)"
  },
  {
    "kana": "イ",
    "romaji": "i",
    "burmese": "အိ",
    "example": "インド (indo - အိန္ဒိယ)"
  },
  {
    "kana": "ウ",
    "romaji": "u",
    "burmese": "အု",
    "example": "ウェブ (webu - ဝဘ်)"
  },
  {
    "kana": "エ",
    "romaji": "e",
    "burmese": "အဲ့",
    "example": "エレベーター (erebeetaa - ဓာတ်လှေကား)"
  },
  {
    "kana": "オ",
    "romaji": "o",
    "burmese": "အို",
    "example": "オレンジ (orenji - လိမ္မော်ရည်)"
  },
  {
    "kana": "カ",
    "romaji": "ka",
    "burmese": "ခ",
    "example": "カメラ (kamera - ကင်မရာ)"
  },
  {
    "kana": "キ",
    "romaji": "ki",
    "burmese": "ခိ",
    "example": "キッチン (kicchin - မီးဖိုချောင်)"
  },
  {
    "kana": "ク",
    "romaji": "ku",
    "burmese": "ခု",
    "example": "クラス (kurasu - အတန်း)"
  },
  {
    "kana": "ケ",
    "romaji": "ke",
    "burmese": "ခဲ",
    "example": "ケーキ (keeki - ကိတ်မုန့်)"
  },
  {
    "kana": "コ",
    "romaji": "ko",
    "burmese": "ခို",
    "example": "コーヒー (koohii - ကော်ဖီ)"
  },
  {
    "kana": "サ",
    "romaji": "sa",
    "burmese": "ဆ",
    "example": "サラダ (sarada - အသုပ်)"
  },
  {
    "kana": "シ",
    "romaji": "shi",
    "burmese": "ရှိ",
    "example": "シャツ (shatsu - ရှပ်အင်္ကျီ)"
  },
  {
    "kana": "ス",
    "romaji": "su",
    "burmese": "စု",
    "example": "スポーツ (supootsu - အားကစား)"
  },
  {
    "kana": "セ",
    "romaji": "se",
    "burmese": "ဆဲ",
    "example": "セーター (seetaa - ဆွယ်တာ)"
  },
  {
    "kana": "ソ",
    "romaji": "so",
    "burmese": "ဆို",
    "example": "ソファ (sofa - ဆိုဖာ)"
  },
  {
    "kana": "タ",
    "romaji": "ta",
    "burmese": "တ",
    "example": "タクシー (takushii - တက္ကစီ)"
  },
  {
    "kana": "チ",
    "romaji": "chi",
    "burmese": "ချိ",
    "example": "チーズ (chiizu - ဒိန်ခဲ)"
  },
  {
    "kana": "ツ",
    "romaji": "tsu",
    "burmese": "ဆွိ/စု",
    "example": "ツアー (tsuaa - ခရီးစဉ်)"
  },
  {
    "kana": "テ",
    "romaji": "te",
    "burmese": "တဲ",
    "example": "テレビ (terebi - တီဗွီ)"
  },
  {
    "kana": "ト",
    "romaji": "to",
    "burmese": "တို",
    "example": "トイレ (toire - အိမ်သာ)"
  },
  {
    "kana": "ナ",
    "romaji": "na",
    "burmese": "န",
    "example": "ナイフ (naifu - ဓား)"
  },
  {
    "kana": "ニ",
    "romaji": "ni",
    "burmese": "နိ",
    "example": "ニュース (nyuusu - သတင်း)"
  },
  {
    "kana": "ヌ",
    "romaji": "nu",
    "burmese": "နု",
    "example": "カヌー (kanuu - လှေငယ်)"
  },
  {
    "kana": "ネ",
    "romaji": "ne",
    "burmese": "နဲ",
    "example": "ネクタイ (nekutai - လည်စည်း)"
  },
  {
    "kana": "ノ",
    "romaji": "no",
    "burmese": "နို",
    "example": "ノート (nooto - မှတ်စုစာအုပ်)"
  },
  {
    "kana": "ハ",
    "romaji": "ha",
    "burmese": "ဟ",
    "example": "ハンバーガー (hanbaagaa)"
  },
  {
    "kana": "ヒ",
    "romaji": "hi",
    "burmese": "ဟိ",
    "example": "ヒーター (hiitaa - အပူပေးစက်)"
  },
  {
    "kana": "フ",
    "romaji": "fu",
    "burmese": "ဖု",
    "example": "フォーク (fooku - ခက်ရင်း)"
  },
  {
    "kana": "ヘ",
    "romaji": "he",
    "burmese": "ဟဲ",
    "example": "ヘルメット (herumetto - ဦးထုပ်)"
  },
  {
    "kana": "ホ",
    "romaji": "ho",
    "burmese": "ဟို",
    "example": "ホテル (hoteru - ဟိုတယ်)"
  },
  {
    "kana": "マ",
    "romaji": "ma",
    "burmese": "မ",
    "example": "マスク (masuku - နှာခေါင်းစည်း)"
  },
  {
    "kana": "ミ",
    "romaji": "mi",
    "burmese": "မိ",
    "example": "ミルク (miruku - နို့)"
  },
  {
    "kana": "ム",
    "romaji": "mu",
    "burmese": "မု",
    "example": "ムービー (muubii - ရုပ်ရှင်)"
  },
  {
    "kana": "メ",
    "romaji": "me",
    "burmese": "မဲ",
    "example": "メニュー (menyuu - မီနူး)"
  },
  {
    "kana": "モ",
    "romaji": "mo",
    "burmese": "မို",
    "example": "モデル (moderu - မော်ဒယ်)"
  },
  {
    "kana": "ヤ",
    "romaji": "ya",
    "burmese": "ယ",
    "example": "ヤジ (yaji)"
  },
  {
    "kana": "ユ",
    "romaji": "yu",
    "burmese": "ယု",
    "example": "ユニフォーム (yunifoomu)"
  },
  {
    "kana": "ヨ",
    "romaji": "yo",
    "burmese": "ယို",
    "example": "ヨーロッパ (yooroppa - ဥရောပ)"
  },
  {
    "kana": "ラ",
    "romaji": "ra",
    "burmese": "ရ",
    "example": "ラジオ (rajio - ရေဒီယို)"
  },
  {
    "kana": "リ",
    "romaji": "ri",
    "burmese": "ရိ",
    "example": "リモコン (rimokon - ရီမုတ်)"
  },
  {
    "kana": "ル",
    "romaji": "ru",
    "burmese": "ရု",
    "example": "ルール (ruuru - စည်းမျဉ်း)"
  },
  {
    "kana": "レ",
    "romaji": "re",
    "burmese": "ရဲ",
    "example": "レストラン (resutoran - စားသောက်ဆိုင်)"
  },
  {
    "kana": "ロ",
    "romaji": "ro",
    "burmese": "ရို",
    "example": "ロボット (robotto - စက်ရုပ်)"
  },
  {
    "kana": "ワ",
    "romaji": "wa",
    "burmese": "ဝ",
    "example": "ワイン (wain - ဝိုင်)"
  },
  {
    "kana": "ヲ",
    "romaji": "wo",
    "burmese": "အို",
    "example": "ヲ"
  },
  {
    "kana": "ン",
    "romaji": "n",
    "burmese": "န်",
    "example": "パン (pan - ပေါင်မုန့်)"
  }
];

const N5_KANJI = [
  {
    "kanji": "一",
    "hiragana": "ひと(つ) / いち",
    "romaji": "hito(tsu) / ichi",
    "meaning": "တစ်ခု / တစ် (၁)",
    "examples": [
      {
        "word": "一つ",
        "reading": "ひとつ",
        "mean": "တစ်ခု"
      },
      {
        "word": "一人",
        "reading": "ひとり",
        "mean": "တစ်ယောက်"
      },
      {
        "word": "一日",
        "reading": "ついたち",
        "mean": "၁ ရက်နေ့"
      }
    ]
  },
  {
    "kanji": "二",
    "hiragana": "ふた(つ) / に",
    "romaji": "futa(tsu) / ni",
    "meaning": "နှစ်ခု / နှစ် (၂)",
    "examples": [
      {
        "word": "二つ",
        "reading": "ふたつ",
        "mean": "နှစ်ခု"
      },
      {
        "word": "二人",
        "reading": "ふたり",
        "mean": "နှစ်ယောက်"
      },
      {
        "word": "二日",
        "reading": "ふつか",
        "mean": "၂ ရက်နေ့"
      }
    ]
  },
  {
    "kanji": "三",
    "hiragana": "みっ(つ) / さん",
    "romaji": "mit(tsu) / san",
    "meaning": "သုံးခု / သုံး (၃)",
    "examples": [
      {
        "word": "三つ",
        "reading": "みっつ",
        "mean": "သုံးခု"
      },
      {
        "word": "三人",
        "reading": "さんにん",
        "mean": "သုံးယောက်"
      },
      {
        "word": "三日",
        "reading": "みっか",
        "mean": "၃ ရက်နေ့"
      }
    ]
  },
  {
    "kanji": "四",
    "hiragana": "よっ(つ) / よん / し",
    "romaji": "yot(tsu) / yon / shi",
    "meaning": "လေးခု / လေး (၄)",
    "examples": [
      {
        "word": "四つ",
        "reading": "よっつ",
        "mean": "လေးခု"
      },
      {
        "word": "四人",
        "reading": "よにん",
        "mean": "လေးယောက်"
      },
      {
        "word": "四日",
        "reading": "よっか",
        "mean": "၄ ရက်နေ့"
      }
    ]
  },
  {
    "kanji": "五",
    "hiragana": "いつ(つ) / ご",
    "romaji": "itsu(tsu) / go",
    "meaning": "ငါးခု / ငါး (၅)",
    "examples": [
      {
        "word": "五つ",
        "reading": "いつつ",
        "mean": "ငါးခု"
      },
      {
        "word": "五人",
        "reading": "ごにん",
        "mean": "ငါးယောက်"
      },
      {
        "word": "五日",
        "reading": "いつか",
        "mean": "၅ ရက်နေ့"
      }
    ]
  },
  {
    "kanji": "六",
    "hiragana": "むっ(つ) / ろく",
    "romaji": "mut(tsu) / roku",
    "meaning": "ခြောက်ခု / ခြောက် (၆)",
    "examples": [
      {
        "word": "六つ",
        "reading": "むっつ",
        "mean": "ခြောက်ခု"
      },
      {
        "word": "六日",
        "reading": "むいか",
        "mean": "၆ ရက်နေ့"
      }
    ]
  },
  {
    "kanji": "七",
    "hiragana": "なな(つ) / しち",
    "romaji": "nana(tsu) / shichi",
    "meaning": "ခုနစ်ခု / ခုနစ် (၇)",
    "examples": [
      {
        "word": "七つ",
        "reading": "ななつ",
        "mean": "ခုနစ်ခု"
      },
      {
        "word": "七日",
        "reading": "なのか",
        "mean": "၇ ရက်နေ့"
      }
    ]
  },
  {
    "kanji": "八",
    "hiragana": "やっ(つ) / はち",
    "romaji": "yat(tsu) / hachi",
    "meaning": "ရှစ်ခု / ရှစ် (၈)",
    "examples": [
      {
        "word": "八つ",
        "reading": "やっつ",
        "mean": "ရှစ်ခု"
      },
      {
        "word": "八日",
        "reading": "ようか",
        "mean": "၈ ရက်နေ့"
      }
    ]
  },
  {
    "kanji": "九",
    "hiragana": "ここの(つ) / きゅう / く",
    "romaji": "kokono(tsu) / kyuu",
    "meaning": "ကိုးခု / ကိုး (၉)",
    "examples": [
      {
        "word": "九つ",
        "reading": "ここのつ",
        "mean": "ကိုးခု"
      },
      {
        "word": "九日",
        "reading": "ここのか",
        "mean": "၉ ရက်နေ့"
      }
    ]
  },
  {
    "kanji": "十",
    "hiragana": "とお / じゅう",
    "romaji": "too / juu",
    "meaning": "ဆယ် (၁၀)",
    "examples": [
      {
        "word": "十",
        "reading": "じゅう",
        "mean": "ဆယ်"
      },
      {
        "word": "十日",
        "reading": "とおか",
        "mean": "၁၀ ရက်နေ့"
      }
    ]
  },
  {
    "kanji": "百",
    "hiragana": "ひゃく / びゃく / ぴゃく",
    "romaji": "hyaku",
    "meaning": "တစ်ရာ (၁၀၀)",
    "examples": [
      {
        "word": "百",
        "reading": "ひゃく",
        "mean": "တစ်ရာ"
      },
      {
        "word": "三百",
        "reading": "さんびゃく",
        "mean": "သုံးရာ"
      },
      {
        "word": "六百",
        "reading": "ろ volume",
        "mean": "ခြောက်ရာ"
      }
    ]
  },
  {
    "kanji": "千",
    "hiragana": "せん / ぜん",
    "romaji": "sen / zen",
    "meaning": "တစ်ထောင် (၁,၀၀၀)",
    "examples": [
      {
        "word": "千",
        "reading": "せん",
        "mean": "တစ်ထောင်"
      },
      {
        "word": "三千",
        "reading": "さんぜん",
        "mean": "သုံးထောင်"
      }
    ]
  },
  {
    "kanji": "万",
    "hiragana": "まん / ばん",
    "romaji": "man",
    "meaning": "တစ်သောင်း (၁၀,၀၀၀)",
    "examples": [
      {
        "word": "一万",
        "reading": "いちまん",
        "mean": "တစ်သောင်း"
      },
      {
        "word": "万国",
        "reading": "ばんこく",
        "mean": "ကမ္ဘာ့နိုင်ငံများ"
      }
    ]
  },
  {
    "kanji": "円",
    "hiragana": "まる(い) / えん",
    "romaji": "maru(i) / en",
    "meaning": "ယန်းငွေ / စက်ဝိုင်း",
    "examples": [
      {
        "word": "百円",
        "reading": "ひゃくえん",
        "mean": "ယန်းတစ်ရာ"
      },
      {
        "word": "円い",
        "reading": "まるい",
        "mean": "ဝိုင်းသော"
      }
    ]
  },
  {
    "kanji": "日",
    "hiragana": "ひ / にち / び / か",
    "romaji": "hi / nichi / bi",
    "meaning": "နေ / နေ့ရက် / ဂျပန်",
    "examples": [
      {
        "word": "日本",
        "reading": "にほん",
        "mean": "ဂျပန်"
      },
      {
        "word": "日曜日",
        "reading": "にちようび",
        "mean": "တနင်္ဂနွေနေ့"
      },
      {
        "word": "毎日",
        "reading": "まいにち",
        "mean": "နေ့တိုင်း"
      }
    ]
  },
  {
    "kanji": "月",
    "hiragana": "つき / げつ / がつ",
    "romaji": "tsuki / getsu / gatsu",
    "meaning": "လ (Moon/Month)",
    "examples": [
      {
        "word": "月",
        "reading": "つき",
        "mean": "လမင်း"
      },
      {
        "word": "月曜日",
        "reading": "げつようび",
        "mean": "တနင်္လာနေ့"
      },
      {
        "word": "一月",
        "reading": "いちがつ",
        "mean": "ဇန်နဝါရီလ"
      }
    ]
  },
  {
    "kanji": "火",
    "hiragana": "ひ / か",
    "romaji": "hi / ka",
    "meaning": "မီး",
    "examples": [
      {
        "word": "火",
        "reading": "ひ",
        "mean": "မီး"
      },
      {
        "word": "火曜日",
        "reading": "かようび",
        "mean": "အင်္ဂါနေ့"
      },
      {
        "word": "火事",
        "reading": "かじ",
        "mean": "မီးလောင်မှု"
      }
    ]
  },
  {
    "kanji": "水",
    "hiragana": "みず / すい",
    "romaji": "mizu / sui",
    "meaning": "ရေ",
    "examples": [
      {
        "word": "水",
        "reading": "みず",
        "mean": "ရေ"
      },
      {
        "word": "水曜日",
        "reading": "すいようび",
        "mean": "ဗုဒ္ဓဟူးနေ့"
      },
      {
        "word": "水泳",
        "reading": "すいえい",
        "mean": "ရေကူးခြင်း"
      }
    ]
  },
  {
    "kanji": "木",
    "hiragana": "き / もく / ぼく",
    "romaji": "ki / moku",
    "meaning": "သစ်ပင် / သစ်သား",
    "examples": [
      {
        "word": "木",
        "reading": "き",
        "mean": "သစ်ပင်"
      },
      {
        "word": "木曜日",
        "reading": "もくようび",
        "mean": "ကြာသပတေးနေ့"
      }
    ]
  },
  {
    "kanji": "金",
    "hiragana": "かね / きん",
    "romaji": "kane / kin",
    "meaning": "ရွှေ / ငွေကြေး",
    "examples": [
      {
        "word": "お金",
        "reading": "おかね",
        "mean": "ပိုက်ဆံ"
      },
      {
        "word": "金曜日",
        "reading": "きんようび",
        "mean": "သောကြာနေ့"
      },
      {
        "word": "金メダル",
        "reading": "きんめだる",
        "mean": "ရွှေတံဆိပ်"
      }
    ]
  },
  {
    "kanji": "土",
    "hiragana": "つち / ど / と",
    "romaji": "tsuchi / do",
    "meaning": "မြေကြီး / စနေနေ့",
    "examples": [
      {
        "word": "土",
        "reading": "つち",
        "mean": "မြေကြီး"
      },
      {
        "word": "土曜日",
        "reading": "どようび",
        "mean": "စနေနေ့"
      },
      {
        "word": "土地",
        "reading": "とち",
        "mean": "မြေနေရာ"
      }
    ]
  },
  {
    "kanji": "山",
    "hiragana": "やま / さん / ざん",
    "romaji": "yama / san",
    "meaning": "တောင်",
    "examples": [
      {
        "word": "山",
        "reading": "やま",
        "mean": "တောင်"
      },
      {
        "word": "富士山",
        "reading": "ふじさん",
        "mean": "ဖူဂျီတောင်"
      },
      {
        "word": "火山",
        "reading": "かざん",
        "mean": "မီးတောင်"
      }
    ]
  },
  {
    "kanji": "川",
    "hiragana": "かわ / がわ",
    "romaji": "kawa / gawa",
    "meaning": "မြစ်",
    "examples": [
      {
        "word": "川",
        "reading": "かわ",
        "mean": "မြစ်"
      },
      {
        "word": "小川",
        "reading": "おがわ",
        "mean": "ချောင်းငယ်"
      }
    ]
  },
  {
    "kanji": "田",
    "hiragana": "た / だ / でん",
    "romaji": "ta / da / den",
    "meaning": "လယ်ကွင်း",
    "examples": [
      {
        "word": "田んぼ",
        "reading": "たんぼ",
        "mean": "လယ်ကွင်း"
      },
      {
        "word": "山田",
        "reading": "やまだ",
        "mean": "ယာမာဒါ (နာမည်)"
      },
      {
        "word": "水田",
        "reading": "すいでん",
        "mean": "ရေသွင်းစပါးခင်း"
      }
    ]
  },
  {
    "kanji": "人",
    "hiragana": "ひと / じん / にん",
    "romaji": "hito / jin / nin",
    "meaning": "လူ",
    "examples": [
      {
        "word": "人",
        "reading": "ひと",
        "mean": "လူ"
      },
      {
        "word": "日本人",
        "reading": "にほんじん",
        "mean": "ဂျပန်လူမျိုး"
      },
      {
        "word": "三人",
        "reading": "さんにん",
        "mean": "သုံးယောက်"
      }
    ]
  },
  {
    "kanji": "口",
    "hiragana": "くち / ぐち / こう",
    "romaji": "kuchi / guchi / kou",
    "meaning": "ပါးစပ် / အပေါက်",
    "examples": [
      {
        "word": "口",
        "reading": "くち",
        "mean": "ပါးစပ်"
      },
      {
        "word": "入口",
        "reading": "いりぐち",
        "mean": "အဝင်ပေါက်"
      },
      {
        "word": "出口",
        "reading": "でぐち",
        "mean": "အထွက်ပေါက်"
      }
    ]
  },
  {
    "kanji": "車",
    "hiragana": "くるま / しゃ",
    "romaji": "kuruma / sha",
    "meaning": "ကား / ယာဉ်",
    "examples": [
      {
        "word": "車",
        "reading": "くるま",
        "mean": "ကား"
      },
      {
        "word": "電車",
        "reading": "でんしゃ",
        "mean": "ရထား"
      },
      {
        "word": "自動車",
        "reading": "じどうしゃ",
        "mean": "မော်တော်ကား"
      }
    ]
  },
  {
    "kanji": "門",
    "hiragana": "かど / もん",
    "romaji": "kado / mon",
    "meaning": "တံခါးမကြီး / ဂိတ်",
    "examples": [
      {
        "word": "門",
        "reading": "もん",
        "mean": "ဂိတ်တံခါး"
      },
      {
        "word": "専門",
        "reading": "せんもん",
        "mean": "အထူးပြုဘာသာရပ်"
      }
    ]
  },
  {
    "kanji": "今",
    "hiragana": "いま / こん",
    "romaji": "ima / kon",
    "meaning": "ယခု / ဒီ",
    "examples": [
      {
        "word": "今",
        "reading": "いま",
        "mean": "အခု"
      },
      {
        "word": "今日",
        "reading": "きょう",
        "mean": "ဒီနေ့"
      },
      {
        "word": "今月",
        "reading": "こんげつ",
        "mean": "ဒီလ"
      }
    ]
  },
  {
    "kanji": "寺",
    "hiragana": "てら / じ",
    "romaji": "tera / ji",
    "meaning": "ဘုရားကျောင်း / ဘုန်းကြီးကျောင်း",
    "examples": [
      {
        "word": "お寺",
        "reading": "おてら",
        "mean": "ဘုရားကျောင်း"
      },
      {
        "word": "金閣寺",
        "reading": "きんかくじ",
        "mean": "ရွှေကျောင်း"
      }
    ]
  },
  {
    "kanji": "時",
    "hiragana": "とき / じ",
    "romaji": "toki / ji",
    "meaning": "အချိန် / နာရီ",
    "examples": [
      {
        "word": "時",
        "reading": "とき",
        "mean": "အချိန်တုန်းက"
      },
      {
        "word": "時間",
        "reading": "じかん",
        "mean": "အချိန်"
      },
      {
        "word": "一時",
        "reading": "いちじ",
        "mean": "၁ နာရီ"
      }
    ]
  },
  {
    "kanji": "半",
    "hiragana": "なか(ば) / はん",
    "romaji": "naka(ba) / han",
    "meaning": "တစ်ဝက် / ခွဲ",
    "examples": [
      {
        "word": "半分",
        "reading": "はんぶん",
        "mean": "တစ်ဝက်"
      },
      {
        "word": "一時半",
        "reading": "いちじはん",
        "mean": "၁ နာရီခွဲ"
      }
    ]
  },
  {
    "kanji": "刀",
    "hiragana": "かたな / とう",
    "romaji": "katana / tou",
    "meaning": "ဓား",
    "examples": [
      {
        "word": "刀",
        "reading": "かたな",
        "mean": "ဂျပန်ဓား"
      },
      {
        "word": "日本刀",
        "reading": "にほんとう",
        "mean": "ဂျပန်ဓားရှည်"
      }
    ]
  },
  {
    "kanji": "分",
    "hiragana": "わ(ける) / ぶん / ふん / ぷん",
    "romaji": "wa(keru) / fun / pun",
    "meaning": "မိနစ် / ပိုင်းခြားသည် / နားလည်သည်",
    "examples": [
      {
        "word": "分かる",
        "reading": "わかる",
        "mean": "နားလည်သည်"
      },
      {
        "word": "五分",
        "reading": "ごふん",
        "mean": "၅ မိနစ်"
      },
      {
        "word": "自分",
        "reading": "じぶん",
        "mean": "မိမိကိုယ်တိုင်"
      }
    ]
  },
  {
    "kanji": "上",
    "hiragana": "うえ / あ(がる) / じょう",
    "romaji": "ue / jou",
    "meaning": "အပေါ် / အထက်",
    "examples": [
      {
        "word": "上",
        "reading": "うえ",
        "mean": "အပေါ်မှာ"
      },
      {
        "word": "上手",
        "reading": "じょうず",
        "mean": "တော်သော"
      }
    ]
  },
  {
    "kanji": "下",
    "hiragana": "した / さ(がる) / か / げ",
    "romaji": "shita / ka / ge",
    "meaning": "အောက် / အောက်ခြေ",
    "examples": [
      {
        "word": "下",
        "reading": "した",
        "mean": "အောက်မှာ"
      },
      {
        "word": "下手",
        "reading": "へた",
        "mean": "ညံ့သော"
      },
      {
        "word": "地下鉄",
        "reading": "ちかてつ",
        "mean": "မြေအောက်ရထား"
      }
    ]
  },
  {
    "kanji": "中",
    "hiragana": "なか / ちゅう",
    "romaji": "naka / chuu",
    "meaning": "အလယ် / အတွင်း / ထဲ",
    "examples": [
      {
        "word": "中",
        "reading": "なか",
        "mean": "ထဲမှာ"
      },
      {
        "word": "一日中",
        "reading": "いちにちじゅう",
        "mean": "တစ်နေ့လုံး"
      },
      {
        "word": "中学校",
        "reading": "ちゅうがっこう",
        "mean": "အလယ်တန်းကျောင်း"
      }
    ]
  },
  {
    "kanji": "外",
    "hiragana": "そと / がい / げ",
    "romaji": "soto / gai",
    "meaning": "အပြင်ဘက် / နိုင်ငံခြား",
    "examples": [
      {
        "word": "外",
        "reading": "そと",
        "mean": "အပြင်ဘက်"
      },
      {
        "word": "外国",
        "reading": "がいこく",
        "mean": "နိုင်ငံခြား"
      },
      {
        "word": "外国人",
        "reading": "がいこくじん",
        "mean": "နိုင်ငံခြားသား"
      }
    ]
  },
  {
    "kanji": "右",
    "hiragana": "みぎ / う / ゆう",
    "romaji": "migi / yuu",
    "meaning": "ညာဘက်",
    "examples": [
      {
        "word": "右",
        "reading": "みぎ",
        "mean": "ညာဘက်"
      },
      {
        "word": "右手",
        "reading": "みぎて",
        "mean": "ညာလက်"
      },
      {
        "word": "右側",
        "reading": "みぎがわ",
        "mean": "ညာဘက်ခြမ်း"
      }
    ]
  },
  {
    "kanji": "左",
    "hiragana": "ひだり / さ",
    "romaji": "hidari / sa",
    "meaning": "ဘယ်ဘက်",
    "examples": [
      {
        "word": "左",
        "reading": "ひだり",
        "mean": "ဘယ်ဘက်"
      },
      {
        "word": "左手",
        "reading": "ひだりて",
        "mean": "ဘယ်လက်"
      },
      {
        "word": "左側",
        "reading": "ひだりがわ",
        "mean": "ဘယ်ဘက်ခြမ်း"
      }
    ]
  },
  {
    "kanji": "前",
    "hiragana": "まえ / ぜん",
    "romaji": "mae / zen",
    "meaning": "ရှေ့ / မတိုင်မီ",
    "examples": [
      {
        "word": "前",
        "reading": "まえ",
        "mean": "ရှေ့မှာ"
      },
      {
        "word": "午前",
        "reading": "ごぜん",
        "mean": "မနက်ပိုင်း (AM)"
      },
      {
        "word": "名前",
        "reading": "なまえ",
        "mean": "နာမည်"
      }
    ]
  },
  {
    "kanji": "後",
    "hiragana": "あと / うし(ろ) / ご / こう",
    "romaji": "ato / ushi(ro) / go",
    "meaning": "နောက် / ပြီးနောက်",
    "examples": [
      {
        "word": "後ろ",
        "reading": "うしろ",
        "mean": "နောက်ဘက်"
      },
      {
        "word": "午後",
        "reading": "ごご",
        "mean": "ညနေပိုင်း (PM)"
      },
      {
        "word": "後で",
        "reading": "あとで",
        "mean": "နောက်မှ"
      }
    ]
  },
  {
    "kanji": "午",
    "hiragana": "ご",
    "romaji": "go",
    "meaning": "မွန်းတည့်",
    "examples": [
      {
        "word": "午前",
        "reading": "ごぜん",
        "mean": "မနက်ပိုင်း (AM)"
      },
      {
        "word": "午後",
        "reading": "ごご",
        "mean": "မွန်းလွဲပိုင်း (PM)"
      }
    ]
  },
  {
    "kanji": "間",
    "hiragana": "あいだ / かん / けん",
    "romaji": "aida / kan",
    "meaning": "ကြား / ကာလ",
    "examples": [
      {
        "word": "間",
        "reading": "あいだ",
        "mean": "အကြား"
      },
      {
        "word": "時間",
        "reading": "じかん",
        "mean": "အချိန်"
      },
      {
        "word": "一週間",
        "reading": "いっしゅうかん",
        "mean": "တစ်ပတ်တာ"
      }
    ]
  },
  {
    "kanji": "東",
    "hiragana": "ひがし / とう",
    "romaji": "higashi / tou",
    "meaning": "အရှေ့ဘက်",
    "examples": [
      {
        "word": "東",
        "reading": "ひがし",
        "mean": "အရှေ့"
      },
      {
        "word": "東京",
        "reading": "とうきょう",
        "mean": "တိုကျို"
      },
      {
        "word": "東口",
        "reading": "ひがしぐち",
        "mean": "အရှေ့ပေါက်"
      }
    ]
  },
  {
    "kanji": "西",
    "hiragana": "にし / せい / さい",
    "romaji": "nishi / sei / sai",
    "meaning": "အနောက်ဘက်",
    "examples": [
      {
        "word": "西",
        "reading": "にし",
        "mean": "အနောက်"
      },
      {
        "word": "西洋",
        "reading": "せいよう",
        "mean": "အနောက်တိုင်း"
      },
      {
        "word": "西口",
        "reading": "にしぐち",
        "mean": "အနောက်ပေါက်"
      }
    ]
  },
  {
    "kanji": "南",
    "hiragana": "みなみ / なん",
    "romaji": "minami / nan",
    "meaning": "တောင်ဘက်",
    "examples": [
      {
        "word": "南",
        "reading": "みなみ",
        "mean": "တောင်ဘက်"
      },
      {
        "word": "南口",
        "reading": "みなみぐち",
        "mean": "တောင်ဘက်ပေါက်"
      },
      {
        "word": "東南アジア",
        "reading": "とうなんあじあ",
        "mean": "အရှေ့တောင်အာရှ"
      }
    ]
  },
  {
    "kanji": "北",
    "hiragana": "きた / ほく",
    "romaji": "kita / hoku",
    "meaning": "မြောက်ဘက်",
    "examples": [
      {
        "word": "北",
        "reading": "きた",
        "mean": "မြောက်ဘက်"
      },
      {
        "word": "北海道",
        "reading": "ほっかいどう",
        "mean": "ဟော့ကိုင်းဒိုး"
      },
      {
        "word": "北口",
        "reading": "きたぐち",
        "mean": "မြောက်ဘက်ပေါက်"
      }
    ]
  },
  {
    "kanji": "白",
    "hiragana": "しろ(い) / はく",
    "romaji": "shiro(i) / haku",
    "meaning": "အဖြူရောင်",
    "examples": [
      {
        "word": "白い",
        "reading": "しろい",
        "mean": "ဖြူသော"
      },
      {
        "word": "白鳥",
        "reading": "はくちょう",
        "mean": "ငန်းဖြူ"
      }
    ]
  },
  {
    "kanji": "黒",
    "hiragana": "くろ(い) / こく",
    "romaji": "kuro(i) / koku",
    "meaning": "အနက်ရောင်",
    "examples": [
      {
        "word": "黒い",
        "reading": "くろい",
        "mean": "နက်သော"
      },
      {
        "word": "黒板",
        "reading": "こくばん",
        "mean": "ကျောက်သင်ပုန်း"
      }
    ]
  },
  {
    "kanji": "赤",
    "hiragana": "あか(い) / せき",
    "romaji": "aka(i) / seki",
    "meaning": "အနီရောင်",
    "examples": [
      {
        "word": "赤い",
        "reading": "あかい",
        "mean": "နီသော"
      },
      {
        "word": "赤ちゃん",
        "reading": "あかちゃん",
        "mean": "ကလေးငယ်"
      }
    ]
  },
  {
    "kanji": "青",
    "hiragana": "あお(い) / せい",
    "romaji": "ao(i) / sei",
    "meaning": "အပြာရောင်",
    "examples": [
      {
        "word": "青い",
        "reading": "あおい",
        "mean": "ပြာသော"
      },
      {
        "word": "青空",
        "reading": "あおぞら",
        "mean": "မိုးကောင်းကင်ပြာ"
      }
    ]
  },
  {
    "kanji": "安",
    "hiragana": "やす(い) / あん",
    "romaji": "yasu(i) / an",
    "meaning": "စျေးသက်သာသော / စိတ်ချရသော",
    "examples": [
      {
        "word": "安い",
        "reading": "やすい",
        "mean": "စျေးပေါသော"
      },
      {
        "word": "安心",
        "reading": "あんしん",
        "mean": "စိတ်အေးရသော"
      },
      {
        "word": "安全",
        "reading": "あんぜん",
        "mean": "ဘေးကင်းသော"
      }
    ]
  },
  {
    "kanji": "高",
    "hiragana": "たか(い) / こう",
    "romaji": "taka(i) / kou",
    "meaning": "မြင့်သော / စျေးကြီးသော",
    "examples": [
      {
        "word": "高い",
        "reading": "たかい",
        "mean": "စျေးကြီးသော / မြင့်သော"
      },
      {
        "word": "高校",
        "reading": "こうこう",
        "mean": "အထက်တန်းကျောင်း"
      }
    ]
  },
  {
    "kanji": "小",
    "hiragana": "ちい(さい) / こ / お / しょう",
    "romaji": "chii(sai) / shou",
    "meaning": "သေးငယ်သော",
    "examples": [
      {
        "word": "小さい",
        "reading": "ちいさい",
        "mean": "သေးငယ်သော"
      },
      {
        "word": "小学校",
        "reading": "しょうがっこう",
        "mean": "မူလတန်းကျောင်း"
      }
    ]
  },
  {
    "kanji": "少",
    "hiragana": "すく(ない) / すこ(し) / しょう",
    "romaji": "suku(nai) / suko(shi)",
    "meaning": "နည်းပါးသော / အနည်းငယ်",
    "examples": [
      {
        "word": "少し",
        "reading": "すこし",
        "mean": "နည်းနည်း"
      },
      {
        "word": "少ない",
        "reading": "すくない",
        "mean": "နည်းပါးသော"
      },
      {
        "word": "少女",
        "reading": "しょうじょ",
        "mean": "မိန်းကလေး"
      }
    ]
  },
  {
    "kanji": "古",
    "hiragana": "ふる(い) / こ",
    "romaji": "furu(i) / ko",
    "meaning": "ဟောင်းနွမ်းသော / ရှေးကျသော",
    "examples": [
      {
        "word": "古い",
        "reading": "ふるい",
        "mean": "ဟောင်းသော"
      },
      {
        "word": "中古",
        "reading": "ちゅうこ",
        "mean": "တစ်ပတ်ရစ်"
      }
    ]
  },
  {
    "kanji": "新",
    "hiragana": "あたら(しい) / しん",
    "romaji": "atara(shii) / shin",
    "meaning": "သစ်လွင်သော",
    "examples": [
      {
        "word": "新しい",
        "reading": "あたらしい",
        "mean": "သစ်သော"
      },
      {
        "word": "新聞",
        "reading": "しんぶん",
        "mean": "သတင်းစာ"
      },
      {
        "word": "新年",
        "reading": "しんねん",
        "mean": "နှစ်သစ်"
      }
    ]
  },
  {
    "kanji": "多",
    "hiragana": "おお(い) / た",
    "romaji": "oo(i) / ta",
    "meaning": "များပြားသော",
    "examples": [
      {
        "word": "多い",
        "reading": "おおい",
        "mean": "များသော"
      },
      {
        "word": "多分",
        "reading": "たぶん",
        "mean": "ဖြစ်နိုင်ခြေရှိသည်"
      }
    ]
  },
  {
    "kanji": "長",
    "hiragana": "なが(い) / ちょう",
    "romaji": "naga(i) / chou",
    "meaning": "ရှည်လျားသော / ခေါင်းဆောင်",
    "examples": [
      {
        "word": "長い",
        "reading": "ながい",
        "mean": "ရှည်သော"
      },
      {
        "word": "社長",
        "reading": "しゃちょう",
        "mean": "ကုမ္ပဏီဥက္ကဋ္ဌ"
      },
      {
        "word": "校長",
        "reading": "こうちょう",
        "mean": "ကျောင်းအုပ်"
      }
    ]
  },
  {
    "kanji": "早",
    "hiragana": "はや(い) / そう",
    "romaji": "haya(i) / sou",
    "meaning": "စောသော / မြန်သော",
    "examples": [
      {
        "word": "早い",
        "reading": "はやい",
        "mean": "စောသော"
      },
      {
        "word": "早朝",
        "reading": "そうちょう",
        "mean": "မနက်စောစော"
      }
    ]
  },
  {
    "kanji": "友",
    "hiragana": "とも / ゆう",
    "romaji": "tomo / yuu",
    "meaning": "မိတ်ဆွေ / သူငယ်ချင်း",
    "examples": [
      {
        "word": "友達",
        "reading": "ともだち",
        "mean": "သူငယ်ချင်း"
      },
      {
        "word": "友人",
        "reading": "ゆうじん",
        "mean": "မိတ်ဆွေ"
      }
    ]
  },
  {
    "kanji": "父",
    "hiragana": "ちち / とう / ふ",
    "romaji": "chichi / tou",
    "meaning": "ဖခင်",
    "examples": [
      {
        "word": "父",
        "reading": "ちち",
        "mean": "အဖေ"
      },
      {
        "word": "お父さん",
        "reading": "おとうさん",
        "mean": "ဖေဖေ"
      }
    ]
  },
  {
    "kanji": "母",
    "hiragana": "はは / かあ / ぼ",
    "romaji": "haha / kaa",
    "meaning": "မိခင်",
    "examples": [
      {
        "word": "母",
        "reading": "はは",
        "mean": "အမေ"
      },
      {
        "word": "お母さん",
        "reading": "おかあさん",
        "mean": "မေမေ"
      }
    ]
  },
  {
    "kanji": "兄",
    "hiragana": "あに / にい / きょう",
    "romaji": "ani / nii / kyou",
    "meaning": "အစ်ကို",
    "examples": [
      {
        "word": "兄",
        "reading": "あに",
        "mean": "အစ်ကို"
      },
      {
        "word": "お兄さん",
        "reading": "おにいさん",
        "mean": "အစ်ကိုကြီး"
      },
      {
        "word": "兄弟",
        "reading": "きょうだい",
        "mean": "ညီအစ်ကို မောင်နှမ"
      }
    ]
  },
  {
    "kanji": "姉",
    "hiragana": "あね / ねえ / し",
    "romaji": "ane / nee",
    "meaning": "အစ်မ",
    "examples": [
      {
        "word": "姉",
        "reading": "あね",
        "mean": "အစ်မ"
      },
      {
        "word": "お姉さん",
        "reading": "おねえさん",
        "mean": "အစ်မကြီး"
      }
    ]
  },
  {
    "kanji": "弟",
    "hiragana": "おとうと / てい / だい",
    "romaji": "otouto / tei",
    "meaning": "ညီ / မောင်",
    "examples": [
      {
        "word": "弟",
        "reading": "おとうと",
        "mean": "ညီ/မောင်"
      },
      {
        "word": "兄弟",
        "reading": "きょうだい",
        "mean": "ညီအစ်ကို"
      }
    ]
  },
  {
    "kanji": "妹",
    "hiragana": "いもうと / まい",
    "romaji": "imouto / mai",
    "meaning": "ညီမ / နှမ",
    "examples": [
      {
        "word": "妹",
        "reading": "いもうと",
        "mean": "ညီမ"
      },
      {
        "word": "姉妹",
        "reading": "しまい",
        "mean": "ညီအစ်မ"
      }
    ]
  },
  {
    "kanji": "子",
    "hiragana": "こ / し / す",
    "romaji": "ko / shi",
    "meaning": "ကလေး",
    "examples": [
      {
        "word": "子供",
        "reading": "こども",
        "mean": "ကလေး"
      },
      {
        "word": "女子",
        "reading": "じょし",
        "mean": "အမျိုးသမီး"
      },
      {
        "word": "男子",
        "reading": "だんし",
        "mean": "အမျိုးသား"
      }
    ]
  },
  {
    "kanji": "女",
    "hiragana": "おんな / じょ",
    "romaji": "onna / jo",
    "meaning": "အမျိုးသမီး / မိန်းမ",
    "examples": [
      {
        "word": "女の人",
        "reading": "おんなのひと",
        "mean": "အမျိုးသမီး"
      },
      {
        "word": "彼女",
        "reading": "かのじょ",
        "mean": "သူမ / ချစ်သူ"
      }
    ]
  },
  {
    "kanji": "男",
    "hiragana": "おとこ / だん / なん",
    "romaji": "otoko / dan",
    "meaning": "အမျိုးသား / ယောက်ျား",
    "examples": [
      {
        "word": "男の人",
        "reading": "おとこのひと",
        "mean": "အမျိုးသား"
      },
      {
        "word": "長男",
        "reading": "ちょうなん",
        "mean": "သားအကြီးဆုံး"
      }
    ]
  },
  {
    "kanji": "目",
    "hiragana": "め / もく",
    "romaji": "me / moku",
    "meaning": "မျက်စိ",
    "examples": [
      {
        "word": "目",
        "reading": "め",
        "mean": "မျက်စိ"
      },
      {
        "word": "目的",
        "reading": "もくてき",
        "mean": "ရည်ရွယ်ချက်"
      }
    ]
  },
  {
    "kanji": "耳",
    "hiragana": "みみ / じ",
    "romaji": "mimi / ji",
    "meaning": "နား",
    "examples": [
      {
        "word": "耳",
        "reading": "みみ",
        "mean": "နားရွက်"
      }
    ]
  },
  {
    "kanji": "手",
    "hiragana": "て / しゅ",
    "romaji": "te / shu",
    "meaning": "လက်",
    "examples": [
      {
        "word": "手",
        "reading": "て",
        "mean": "လက်"
      },
      {
        "word": "上手",
        "reading": "じょうず",
        "mean": "တော်သော"
      },
      {
        "word": "下手",
        "reading": "へた",
        "mean": "ညံ့သော"
      }
    ]
  },
  {
    "kanji": "足",
    "hiragana": "あし / た(す) / そく",
    "romaji": "ashi / ta(su) / soku",
    "meaning": "ခြေထောက် / လုံလောက်သည်",
    "examples": [
      {
        "word": "足",
        "reading": "あし",
        "mean": "ခြေထောက်"
      },
      {
        "word": "足りる",
        "reading": "たりる",
        "mean": "လုံလောက်သည်"
      }
    ]
  },
  {
    "kanji": "力",
    "hiragana": "ちから / りょく / りき",
    "romaji": "chikara / ryoku",
    "meaning": "ခွန်အား / စွမ်းအား",
    "examples": [
      {
        "word": "力",
        "reading": "ちから",
        "mean": "ခွန်အား"
      },
      {
        "word": "能力",
        "reading": "のうりょく",
        "mean": "စွမ်းရည်"
      }
    ]
  },
  {
    "kanji": "毎",
    "hiragana": "まい",
    "romaji": "mai",
    "meaning": "တိုင်း (Every)",
    "examples": [
      {
        "word": "毎日",
        "reading": "まいにち",
        "mean": "နေ့တိုင်း"
      },
      {
        "word": "毎週",
        "reading": "まいしゅう",
        "mean": "အပတ်တိုင်း"
      },
      {
        "word": "毎月",
        "reading": "まいつき",
        "mean": "လတိုင်း"
      }
    ]
  },
  {
    "kanji": "週",
    "hiragana": "しゅう",
    "romaji": "shuu",
    "meaning": "ရက်သတ္တပတ် (Week)",
    "examples": [
      {
        "word": "今週",
        "reading": "こんしゅう",
        "mean": "ဒီအပတ်"
      },
      {
        "word": "来週",
        "reading": "らいしゅう",
        "mean": "နောက်အပတ်"
      },
      {
        "word": "先週",
        "reading": "せんしゅう",
        "mean": "ပြီးခဲ့တဲ့အပတ်"
      }
    ]
  },
  {
    "kanji": "年",
    "hiragana": "とし / ねん",
    "romaji": "toshi / nen",
    "meaning": "နှစ် (Year)",
    "examples": [
      {
        "word": "今年",
        "reading": "ことし",
        "mean": "ဒီနှစ်"
      },
      {
        "word": "来年",
        "reading": "らいねん",
        "mean": "နောက်နှစ်"
      },
      {
        "word": "去年",
        "reading": "きょねん",
        "mean": "မနှစ်က"
      }
    ]
  },
  {
    "kanji": "気",
    "hiragana": "き / け",
    "romaji": "ki",
    "meaning": "စိတ် / စွမ်းအင် / ရာသီဥတု",
    "examples": [
      {
        "word": "元気",
        "reading": "げんき",
        "mean": "နေကောင်းသော"
      },
      {
        "word": "天気",
        "reading": "てんき",
        "mean": "ရာသီဥတု"
      },
      {
        "word": "気持ち",
        "reading": "きもち",
        "mean": "ခံစားချက်"
      }
    ]
  },
  {
    "kanji": "天",
    "hiragana": "てん",
    "romaji": "ten",
    "meaning": "မိုးကောင်းကင် / ကောင်းကင်",
    "examples": [
      {
        "word": "天気",
        "reading": "てんき",
        "mean": "ရာသီဥတု"
      },
      {
        "word": "天国",
        "reading": "てんごく",
        "mean": "ကောင်းကင်ဘုံ"
      }
    ]
  },
  {
    "kanji": "雨",
    "hiragana": "あめ / う",
    "romaji": "ame / u",
    "meaning": "မိုးရေ",
    "examples": [
      {
        "word": "雨",
        "reading": "あめ",
        "mean": "မိုး"
      },
      {
        "word": "大雨",
        "reading": "おおあめ",
        "mean": "မိုးသည်းထန်စွာရွာခြင်း"
      }
    ]
  },
  {
    "kanji": "電",
    "hiragana": "でん",
    "romaji": "den",
    "meaning": "လျှပ်စစ်",
    "examples": [
      {
        "word": "電車",
        "reading": "でんしゃ",
        "mean": "ရထား"
      },
      {
        "word": "電気",
        "reading": "でんき",
        "mean": "မီး/လျှပ်စစ်"
      },
      {
        "word": "電話",
        "reading": "でんわ",
        "mean": "ဖုန်း"
      }
    ]
  },
  {
    "kanji": "話",
    "hiragana": "はな(す) / はなし / わ",
    "romaji": "hana(su) / wa",
    "meaning": "စကားပြောသည် / ဇာတ်လမ်း",
    "examples": [
      {
        "word": "話す",
        "reading": "はなす",
        "mean": "ပြောသည်"
      },
      {
        "word": "電話",
        "reading": "でんわ",
        "mean": "ဖုန်း"
      },
      {
        "word": "会話",
        "reading": "かいわ",
        "mean": "စကားပြောဆိုမှု"
      }
    ]
  },
  {
    "kanji": "語",
    "hiragana": "かた(る) / ご",
    "romaji": "kata(ru) / go",
    "meaning": "စကားလုံး / ဘာသာစကား",
    "examples": [
      {
        "word": "日本語",
        "reading": "にほんご",
        "mean": "ဂျပန်စကား"
      },
      {
        "word": "英語",
        "reading": "えいご",
        "mean": "အင်္ဂလိပ်စာ"
      }
    ]
  },
  {
    "kanji": "読",
    "hiragana": "よ(む) / どく",
    "romaji": "yo(mu) / doku",
    "meaning": "စာဖတ်သည်",
    "examples": [
      {
        "word": "読む",
        "reading": "よむ",
        "mean": "ဖတ်သည်"
      },
      {
        "word": "読書",
        "reading": "どくしょ",
        "mean": "စာဖတ်ခြင်း"
      }
    ]
  },
  {
    "kanji": "書",
    "hiragana": "か(く) / しょ",
    "romaji": "ka(ku) / sho",
    "meaning": "စာရေးသည် / စာအုပ်",
    "examples": [
      {
        "word": "書く",
        "reading": "かく",
        "mean": "ရေးသည်"
      },
      {
        "word": "辞書",
        "reading": "じしょ",
        "mean": "အဘိဓာန်"
      },
      {
        "word": "図書館",
        "reading": "としょかん",
        "mean": "စာကြည့်တိုက်"
      }
    ]
  },
  {
    "kanji": "見",
    "hiragana": "み(る) / けん",
    "romaji": "mi(ru) / ken",
    "meaning": "ကြည့်ရှုသည် / မြင်သည်",
    "examples": [
      {
        "word": "見る",
        "reading": "みる",
        "mean": "ကြည့်သည်"
      },
      {
        "word": "見せる",
        "reading": "みせる",
        "mean": "ပြသည်"
      },
      {
        "word": "見学",
        "reading": "けんがく",
        "mean": "လေ့လာရေးခရီး"
      }
    ]
  },
  {
    "kanji": "聞",
    "hiragana": "き(く) / ぶん / もん",
    "romaji": "ki(ku) / bun",
    "meaning": "နားထောင်သည် / မေးသည်",
    "examples": [
      {
        "word": "聞く",
        "reading": "きく",
        "mean": "ကြားသည်/မေးသည်"
      },
      {
        "word": "新聞",
        "reading": "しんぶん",
        "mean": "သတင်းစာ"
      }
    ]
  },
  {
    "kanji": "食",
    "hiragana": "た(べる) / しょく",
    "romaji": "ta(beru) / shoku",
    "meaning": "စားသည် / အစားအစာ",
    "examples": [
      {
        "word": "食べる",
        "reading": "たべる",
        "mean": "စားသည်"
      },
      {
        "word": "食事",
        "reading": "しょくじ",
        "mean": "အစားအသောက်"
      },
      {
        "word": "食べ物",
        "reading": "たべもの",
        "mean": "အစားအစာ"
      }
    ]
  },
  {
    "kanji": "飲",
    "hiragana": "の(む) / いん",
    "romaji": "no(mu) / in",
    "meaning": "သောက်သည်",
    "examples": [
      {
        "word": "飲む",
        "reading": "のむ",
        "mean": "သောက်သည်"
      },
      {
        "word": "飲み物",
        "reading": "のみもの",
        "mean": "သောက်စရာ"
      }
    ]
  },
  {
    "kanji": "行",
    "hiragana": "い(く) / おこな(う) / こう / ぎょう",
    "romaji": "i(ku) / kou",
    "meaning": "သွားသည် / ပြုလုပ်သည်",
    "examples": [
      {
        "word": "行く",
        "reading": "いく",
        "mean": "သွားသည်"
      },
      {
        "word": "旅行",
        "reading": "りょこう",
        "mean": "ခရီးသွားခြင်း"
      },
      {
        "word": "銀行",
        "reading": "ぎんこう",
        "mean": "ဘဏ်"
      }
    ]
  },
  {
    "kanji": "来",
    "hiragana": "く(る) / き(ます) / こ(ない) / らい",
    "romaji": "ku(ru) / rai",
    "meaning": "လာရောက်သည်",
    "examples": [
      {
        "word": "来る",
        "reading": "くる",
        "mean": "လာသည်"
      },
      {
        "word": "来年",
        "reading": "らいねん",
        "mean": "နောက်နှစ်"
      },
      {
        "word": "来月",
        "reading": "らいげつ",
        "mean": "နောက်လ"
      }
    ]
  },
  {
    "kanji": "帰",
    "hiragana": "かえ(る) / き",
    "romaji": "kae(ru) / ki",
    "meaning": "ပြန်လာသည် / အိမ်ပြန်သည်",
    "examples": [
      {
        "word": "帰る",
        "reading": "かえる",
        "mean": "ပြန်သည်"
      },
      {
        "word": "帰国",
        "reading": "きこく",
        "mean": "မိခင်နိုင်ငံပြန်ခြင်း"
      }
    ]
  },
  {
    "kanji": "買",
    "hiragana": "か(う) / ばい",
    "romaji": "ka(u) / bai",
    "meaning": "ဝယ်ယူသည်",
    "examples": [
      {
        "word": "買う",
        "reading": "かう",
        "mean": "ဝယ်သည်"
      },
      {
        "word": "買い物",
        "reading": "かいもの",
        "mean": "စျေးဝယ်ခြင်း"
      }
    ]
  },
  {
    "kanji": "休",
    "hiragana": "やす(む) / きゅう",
    "romaji": "yasu(mu) / kyuu",
    "meaning": "အနားယူသည် / အားလပ်ရက်",
    "examples": [
      {
        "word": "休む",
        "reading": "やすむ",
        "mean": "နားသည်"
      },
      {
        "word": "休み",
        "reading": "やすみ",
        "mean": "အားလပ်ရက်"
      },
      {
        "word": "夏休み",
        "reading": "なつやすみ",
        "mean": "နွေရာသီကျောင်းပိတ်ရက်"
      }
    ]
  },
  {
    "kanji": "会",
    "hiragana": "あ(う) / かい",
    "romaji": "a(u) / kai",
    "meaning": "တွေ့ဆုံသည် / အဖွဲ့",
    "examples": [
      {
        "word": "会う",
        "reading": "あう",
        "mean": "တွေ့သည်"
      },
      {
        "word": "会社",
        "reading": "かいしゃ",
        "mean": "ကုမ္ပဏီ"
      },
      {
        "word": "会議",
        "reading": "かいぎ",
        "mean": "အစည်းအဝေး"
      }
    ]
  },
  {
    "kanji": "社",
    "hiragana": "やしろ / しゃ",
    "romaji": "sha",
    "meaning": "ကုမ္ပဏီ / နတ်ကွန်း",
    "examples": [
      {
        "word": "会社",
        "reading": "かいしゃ",
        "mean": "ကုမ္ပဏီ"
      },
      {
        "word": "社員",
        "reading": "しゃいん",
        "mean": "ကုမ္ပဏီဝန်ထမ်း"
      },
      {
        "word": "社会",
        "reading": "しゃかい",
        "mean": "လူ့ဘောင်အဖွဲ့အစည်း"
      }
    ]
  },
  {
    "kanji": "校",
    "hiragana": "こう",
    "romaji": "kou",
    "meaning": "ကျောင်း",
    "examples": [
      {
        "word": "学校",
        "reading": "がっこう",
        "mean": "ကျောင်း"
      },
      {
        "word": "高校",
        "reading": "こうこう",
        "mean": "အထက်တန်းကျောင်း"
      }
    ]
  },
  {
    "kanji": "店",
    "hiragana": "みせ / てん",
    "romaji": "mise / ten",
    "meaning": "ဆိုင်",
    "examples": [
      {
        "word": "店",
        "reading": "みせ",
        "mean": "ဆိုင်"
      },
      {
        "word": "喫茶店",
        "reading": "きっさてん",
        "mean": "ကော်ဖီဆိုင်"
      },
      {
        "word": "店員",
        "reading": "てんいん",
        "mean": "ဆိုင်ဝန်ထမ်း"
      }
    ]
  },
  {
    "kanji": "駅",
    "hiragana": "えき",
    "romaji": "eki",
    "meaning": "ဘူတာ",
    "examples": [
      {
        "word": "駅",
        "reading": "えき",
        "mean": "ဘူတာ"
      },
      {
        "word": "駅前",
        "reading": "えきまえ",
        "mean": "ဘူတာရုံရှေ့"
      },
      {
        "word": "東京駅",
        "reading": "とうきょうえき",
        "mean": "တိုကျိုဘူတာ"
      }
    ]
  },
  {
    "kanji": "道",
    "hiragana": "みち / どう",
    "romaji": "michi / dou",
    "meaning": "လမ်း / လမ်းစဉ်",
    "examples": [
      {
        "word": "道",
        "reading": "みち",
        "mean": "လမ်း"
      },
      {
        "word": "柔道",
        "reading": "じゅうどう",
        "mean": "ဂျူဒို"
      },
      {
        "word": "北海道",
        "reading": "ほっかいどう",
        "mean": "ဟော့ကိုင်းဒိုး"
      }
    ]
  },
  {
    "kanji": "花",
    "hiragana": "はな / か",
    "romaji": "hana / ka",
    "meaning": "ပန်း",
    "examples": [
      {
        "word": "花",
        "reading": "はな",
        "mean": "ပန်း"
      },
      {
        "word": "花火",
        "reading": "はなび",
        "mean": "မီးရှူးမီးပန်း"
      },
      {
        "word": "花見",
        "reading": "はなみ",
        "mean": "ချယ်ရီပန်းကြည့်ပွဲ"
      }
    ]
  },
  {
    "kanji": "魚",
    "hiragana": "さかな / うお / ぎょ",
    "romaji": "sakana / gyo",
    "meaning": "ငါး",
    "examples": [
      {
        "word": "魚",
        "reading": "さかな",
        "mean": "ငါး"
      },
      {
        "word": "金魚",
        "reading": "きんぎょ",
        "mean": "ရွှေငါး"
      }
    ]
  },
  {
    "kanji": "肉",
    "hiragana": "にく",
    "romaji": "niku",
    "meaning": "အသား",
    "examples": [
      {
        "word": "肉",
        "reading": "にく",
        "mean": "အသား"
      },
      {
        "word": "牛肉",
        "reading": "ぎゅうにく",
        "mean": "အမဲသား"
      },
      {
        "word": "豚肉",
        "reading": "ぶたにく",
        "mean": "ဝက်သား"
      },
      {
        "word": "鳥肉",
        "reading": "とりにく",
        "mean": "ကြက်သား"
      }
    ]
  },
  {
    "kanji": "国",
    "hiragana": "くに / こく",
    "romaji": "kuni / koku",
    "meaning": "နိုင်ငံ / တိုင်းပြည်",
    "examples": [
      {
        "word": "国",
        "reading": "くに",
        "mean": "နိုင်ငံ"
      },
      {
        "word": "外国人",
        "reading": "がいこくじん",
        "mean": "နိုင်ငံခြားသား"
      },
      {
        "word": "中国",
        "reading": "ちゅうごく",
        "mean": "တရုတ်"
      }
    ]
  },
  {
    "kanji": "立",
    "hiragana": "た(つ) / りつ",
    "romaji": "ta(tsu) / ritsu",
    "meaning": "မတ်တပ်ရပ်သည် / တည်ထောင်သည်",
    "examples": [
      {
        "word": "立つ",
        "reading": "たつ",
        "mean": "ရပ်သည်"
      },
      {
        "word": "役に立つ",
        "reading": "やくにたつ",
        "mean": "အသုံးဝင်သည်"
      }
    ]
  },
  {
    "kanji": "出",
    "hiragana": "で(る) / だ(す) / しゅつ",
    "romaji": "de(ru) / da(su) / shutsu",
    "meaning": "ထွက်သည် / ထုတ်သည်",
    "examples": [
      {
        "word": "出る",
        "reading": "でる",
        "mean": "ထွက်သည်"
      },
      {
        "word": "出す",
        "reading": "だす",
        "mean": "ထုတ်သည်"
      },
      {
        "word": "出口",
        "reading": "でぐち",
        "mean": "အထွက်ပေါက်"
      }
    ]
  },
  {
    "kanji": "入",
    "hiragana": "はい(る) / い(れる) / にゅう",
    "romaji": "hai(ru) / i(reru) / nyuu",
    "meaning": "ဝင်သည် / ထည့်သည်",
    "examples": [
      {
        "word": "入る",
        "reading": "はいる",
        "mean": "ဝင်သည်"
      },
      {
        "word": "入れる",
        "reading": "いれる",
        "mean": "ထည့်သည်"
      },
      {
        "word": "入口",
        "reading": "いりぐち",
        "mean": "အဝင်ပေါက်"
      }
    ]
  },
  {
    "kanji": "生",
    "hiragana": "い(きる) / う(まれる) / せい / なま",
    "romaji": "sei / shou",
    "meaning": "မွေးဖွားသည် / အသက်ရှင်သည် / ဆရာ",
    "examples": [
      {
        "word": "先生",
        "reading": "せんせい",
        "mean": "ဆရာ"
      },
      {
        "word": "学生",
        "reading": "がくせい",
        "mean": "ကျောင်းသား"
      },
      {
        "word": "生まれる",
        "reading": "うまれる",
        "mean": "မွေးဖွားသည်"
      }
    ]
  },
  {
    "kanji": "学",
    "hiragana": "まな(ぶ) / がく",
    "romaji": "mana(bu) / gaku",
    "meaning": "လေ့လာသည် / ပညာ",
    "examples": [
      {
        "word": "学校",
        "reading": "がっこう",
        "mean": "ကျောင်း"
      },
      {
        "word": "大学",
        "reading": "だいがく",
        "mean": "တက္ကသိုလ်"
      },
      {
        "word": "学生",
        "reading": "がくせい",
        "mean": "ကျောင်းသား"
      }
    ]
  },
  {
    "kanji": "大",
    "hiragana": "おお(きい) / だい / たい",
    "romaji": "oo(kii) / dai",
    "meaning": "ကြီးမားသော",
    "examples": [
      {
        "word": "大きい",
        "reading": "おおきい",
        "mean": "ကြီးသော"
      },
      {
        "word": "大学",
        "reading": "だいがく",
        "mean": "တက္ကသိုလ်"
      },
      {
        "word": "大変",
        "reading": "たいへん",
        "mean": "ပင်ပန်းသော"
      }
    ]
  },
  {
    "kanji": "名",
    "hiragana": "な / めい / みょう",
    "romaji": "na / mei",
    "meaning": "နာမည် / ကျော်ကြားသော",
    "examples": [
      {
        "word": "名前",
        "reading": "なまえ",
        "mean": "နာမည်"
      },
      {
        "word": "有名",
        "reading": "ゆうめい",
        "mean": "နာမည်ကြီးသော"
      }
    ]
  },
  {
    "kanji": "本",
    "hiragana": "ほん / もと",
    "romaji": "hon / moto",
    "meaning": "စာအုပ် / အရင်းအမြစ်",
    "examples": [
      {
        "word": "本",
        "reading": "ほん",
        "mean": "စာအုပ်"
      },
      {
        "word": "日本",
        "reading": "にほん",
        "mean": "ဂျပန်"
      },
      {
        "word": "山本",
        "reading": "やまもと",
        "mean": "ယာမာမိုတို"
      }
    ]
  }
];

const N4_KANJI = [
  {
    "kanji": "旅",
    "hiragana": "たび / りょ",
    "romaji": "tabi / ryo",
    "meaning": "ခရီး / ခရီးသွားခြင်း",
    "examples": [
      {
        "word": "旅行",
        "reading": "りょこう",
        "mean": "ခရီးသွားခြင်း"
      },
      {
        "word": "一人旅",
        "reading": "ひとりたび",
        "mean": "တစ်ယောက်တည်းခရီး"
      }
    ]
  },
  {
    "kanji": "映",
    "hiragana": "うつ(る) / えい",
    "romaji": "utsu(ru) / ei",
    "meaning": "ရောင်ပြန်ဟပ်သည် / ရုပ်ရှင်",
    "examples": [
      {
        "word": "映画",
        "reading": "えいが",
        "mean": "ရုပ်ရှင်"
      },
      {
        "word": "映画館",
        "reading": "えいがかん",
        "mean": "ရုပ်ရှင်ရုံ"
      }
    ]
  },
  {
    "kanji": "画",
    "hiragana": "が / かく",
    "romaji": "ga / kaku",
    "meaning": "ပန်းချီ / ပုံဆွဲခြင်း / အစီအစဉ်",
    "examples": [
      {
        "word": "映画",
        "reading": "えいが",
        "mean": "ရုပ်ရှင်"
      },
      {
        "word": "計画",
        "reading": "けいかく",
        "mean": "အစီအစဉ်"
      }
    ]
  },
  {
    "kanji": "写",
    "hiragana": "うつ(す) / しゃ",
    "romaji": "utsu(su) / sha",
    "meaning": "ဓာတ်ပုံရိုက်သည် / ကူးရေးသည်",
    "examples": [
      {
        "word": "写真",
        "reading": "しゃしん",
        "mean": "ဓာတ်ပုံ"
      },
      {
        "word": "真写",
        "reading": "しんしゃ",
        "mean": "ပုံတူ"
      }
    ]
  },
  {
    "kanji": "真",
    "hiragana": "ま / しん",
    "romaji": "ma / shin",
    "meaning": "အမှန်တရား / စင်စစ်",
    "examples": [
      {
        "word": "写真",
        "reading": "しゃしん",
        "mean": "ဓာတ်ပုံ"
      },
      {
        "word": "真ん中",
        "reading": "まんなか",
        "mean": "အလယ်တည့်တည့်"
      }
    ]
  },
  {
    "kanji": "音",
    "hiragana": "おと / おん",
    "romaji": "oto / on",
    "meaning": "အသံ",
    "examples": [
      {
        "word": "音",
        "reading": "おと",
        "mean": "အသံ"
      },
      {
        "word": "音楽",
        "reading": "おんがく",
        "mean": "ဂီတ"
      }
    ]
  },
  {
    "kanji": "楽",
    "hiragana": "たの(しい) / がく / らく",
    "romaji": "tano(shii) / gaku",
    "meaning": "ပျော်ရွှင်သော / သက်သာသော",
    "examples": [
      {
        "word": "楽しい",
        "reading": "たのしい",
        "mean": "ပျော်စရာကောင်းသော"
      },
      {
        "word": "音楽",
        "reading": "おんがく",
        "mean": "ဂီတ"
      },
      {
        "word": "楽な",
        "reading": "らくな",
        "mean": "သက်သာလွယ်ကူသော"
      }
    ]
  },
  {
    "kanji": "歌",
    "hiragana": "うた / うた(う) / か",
    "romaji": "uta / ka",
    "meaning": "သီချင်း / သီချင်းဆိုသည်",
    "examples": [
      {
        "word": "歌",
        "reading": "うた",
        "mean": "သီချင်း"
      },
      {
        "word": "歌う",
        "reading": "うたう",
        "mean": "သီချင်းဆိုသည်"
      },
      {
        "word": "歌手",
        "reading": "かしゅ",
        "mean": "အဆိုတော်"
      }
    ]
  },
  {
    "kanji": "院",
    "hiragana": "いん",
    "romaji": "in",
    "meaning": "အဆောက်အအုံ / ဆေးရုံ",
    "examples": [
      {
        "word": "病院",
        "reading": "びょういん",
        "mean": "ဆေးရုံ"
      },
      {
        "word": "大学院",
        "reading": "だいがくいん",
        "mean": "မဟာတန်း/ပါရဂူတန်း"
      }
    ]
  },
  {
    "kanji": "医",
    "hiragana": "い",
    "romaji": "i",
    "meaning": "ဆေးပညာ / ဆရာဝန်",
    "examples": [
      {
        "word": "医者",
        "reading": "いしゃ",
        "mean": "ဆရာဝန်"
      },
      {
        "word": "医学",
        "reading": "いがく",
        "mean": "ဆေးပညာ"
      }
    ]
  },
  {
    "kanji": "者",
    "hiragana": "もの / しゃ",
    "romaji": "mono / sha",
    "meaning": "လူပုဂ္ဂိုလ် / ပညာရှင်",
    "examples": [
      {
        "word": "医者",
        "reading": "いしゃ",
        "mean": "ဆရာဝန်"
      },
      {
        "word": "学者",
        "reading": "がくしゃ",
        "mean": "ပညာရှင်"
      },
      {
        "word": "若者",
        "reading": "わかもの",
        "mean": "လူငယ်"
      }
    ]
  },
  {
    "kanji": "病",
    "hiragana": "や(まい) / びょう",
    "romaji": "byou",
    "meaning": "ရောဂါ / ဖျားနာခြင်း",
    "examples": [
      {
        "word": "病気",
        "reading": "びょうき",
        "mean": "နေမကောင်းခြင်း"
      },
      {
        "word": "病院",
        "reading": "びょういん",
        "mean": "ဆေးရုံ"
      }
    ]
  },
  {
    "kanji": "勉",
    "hiragana": "べん",
    "romaji": "ben",
    "meaning": "ကြိုးစားအားထုတ်သည်",
    "examples": [
      {
        "word": "勉強",
        "reading": "べんきょう",
        "mean": "စာကျက်ခြင်း/လေ့လာခြင်း"
      }
    ]
  },
  {
    "kanji": "強",
    "hiragana": "つよ(い) / きょう / ごう",
    "romaji": "tsuyo(i) / kyou",
    "meaning": "သန်မာသော / အားကောင်းသော",
    "examples": [
      {
        "word": "強い",
        "reading": "つよい",
        "mean": "သန်မာသော"
      },
      {
        "word": "勉強",
        "reading": "べんきょう",
        "mean": "စာလေ့လာခြင်း"
      }
    ]
  },
  {
    "kanji": "研",
    "hiragana": "と(ぐ) / けん",
    "romaji": "ken",
    "meaning": "သုတေသနပြုသည် / သွေးသည်",
    "examples": [
      {
        "word": "研究",
        "reading": "けんきゅう",
        "mean": "သုတေသန"
      },
      {
        "word": "研修",
        "reading": "けんしゅう",
        "mean": "သင်တန်း"
      }
    ]
  },
  {
    "kanji": "究",
    "hiragana": "きゅう",
    "romaji": "kyuu",
    "meaning": "စုံစမ်းစစ်ဆေးသည် / အဆုံးထိရောက်သည်",
    "examples": [
      {
        "word": "研究",
        "reading": "けんきゅう",
        "mean": "သုတေသန"
      },
      {
        "word": "研究所",
        "reading": "けんきゅうじょ",
        "mean": "သုတေသနဌာန"
      }
    ]
  },
  {
    "kanji": "質",
    "hiragana": "しつ / しち",
    "romaji": "shitsu",
    "meaning": "အရည်အသွေး / မေးခွန်း",
    "examples": [
      {
        "word": "質問",
        "reading": "しつもん",
        "mean": "မေးခွန်း"
      },
      {
        "word": "質",
        "reading": "しつ",
        "mean": "အရည်အသွေး"
      }
    ]
  },
  {
    "kanji": "問",
    "hiragana": "と(う) / とん / もん",
    "romaji": "to(u) / mon",
    "meaning": "မေးမြန်းသည် / ပြဿနာ",
    "examples": [
      {
        "word": "質問",
        "reading": "しつもん",
        "mean": "မေးခွန်း"
      },
      {
        "word": "問題",
        "reading": "もんだい",
        "mean": "ပြဿနာ/ပုစ္ဆာ"
      }
    ]
  },
  {
    "kanji": "題",
    "hiragana": "だい",
    "romaji": "dai",
    "meaning": "ခေါင်းစဉ် / ပုစ္ဆာ",
    "examples": [
      {
        "word": "問題",
        "reading": "もんだい",
        "mean": "ပုစ္ဆာ/ပြဿနာ"
      },
      {
        "word": "宿題",
        "reading": "しゅくだい",
        "mean": "အိမ်စာ"
      }
    ]
  },
  {
    "kanji": "答",
    "hiragana": "こた(える) / こたえ / とう",
    "romaji": "kota(eru) / tou",
    "meaning": "အဖြေ / ဖြေဆိုသည်",
    "examples": [
      {
        "word": "答える",
        "reading": "こたえる",
        "mean": "ဖြေကြားသည်"
      },
      {
        "word": "答え",
        "reading": "こたえ",
        "mean": "အဖြေ"
      }
    ]
  },
  {
    "kanji": "宿",
    "hiragana": "やど / しゅく",
    "romaji": "yado / shuku",
    "meaning": "တည်းခိုခန်း / အိမ်စာ",
    "examples": [
      {
        "word": "宿題",
        "reading": "しゅくだい",
        "mean": "အိမ်စာ"
      },
      {
        "word": "宿泊",
        "reading": "しゅくはく",
        "mean": "တည်းခိုခြင်း"
      }
    ]
  },
  {
    "kanji": "堂",
    "hiragana": "どう",
    "romaji": "dou",
    "meaning": "ခန်းမကြီး",
    "examples": [
      {
        "word": "食堂",
        "reading": "しょくどう",
        "mean": "ထမင်းစားခန်းမ"
      }
    ]
  },
  {
    "kanji": "試",
    "hiragana": "こころ(みる) / ため(す) / し",
    "romaji": "tame(su) / shi",
    "meaning": "စမ်းသပ်သည် / ကြိုးစားသည်",
    "examples": [
      {
        "word": "試合",
        "reading": "しあい",
        "mean": "ပွဲစဉ်/ပြိုင်ပွဲ"
      },
      {
        "word": "試験",
        "reading": "しけん",
        "mean": "စာမေးပွဲ"
      }
    ]
  },
  {
    "kanji": "験",
    "hiragana": "けん / げん",
    "romaji": "ken",
    "meaning": "စမ်းသပ်မှု / အတွေ့အကြုံ",
    "examples": [
      {
        "word": "試験",
        "reading": "しけん",
        "mean": "စာမေးပွဲ"
      },
      {
        "word": "経験",
        "reading": "けいけん",
        "mean": "အတွေ့အကြုံ"
      }
    ]
  },
  {
    "kanji": "貸",
    "hiragana": "か(す) / たい",
    "romaji": "ka(su) / tai",
    "meaning": "ငှားပေးသည်",
    "examples": [
      {
        "word": "貸す",
        "reading": "かす",
        "mean": "ငှားပေးသည်"
      },
      {
        "word": "賃貸",
        "reading": "ちんたい",
        "mean": "အငှား"
      }
    ]
  },
  {
    "kanji": "借",
    "hiragana": "か(りる) / しゃく",
    "romaji": "ka(riru) / shaku",
    "meaning": "ငှားရမ်းသည်",
    "examples": [
      {
        "word": "借りる",
        "reading": "かりる",
        "mean": "ငှားသည်"
      },
      {
        "word": "借金",
        "reading": "しゃっきん",
        "mean": "အကြွေး"
      }
    ]
  },
  {
    "kanji": "送",
    "hiragana": "おく(る) / そう",
    "romaji": "oku(ru) / sou",
    "meaning": "ပို့ဆောင်သည် / နှုတ်ဆက်ပို့သည်",
    "examples": [
      {
        "word": "送る",
        "reading": "おくる",
        "mean": "ပို့သည်"
      },
      {
        "word": "見送る",
        "reading": "みおくる",
        "mean": "လိုက်ပို့သည်"
      }
    ]
  },
  {
    "kanji": "通",
    "hiragana": "とお(る) / かよ(う) / つう",
    "romaji": "too(ru) / kayo(u) / tsuu",
    "meaning": "သွားလာသည် / ဖြတ်သန်းသည် / အသွားအပြန်လုပ်သည်",
    "examples": [
      {
        "word": "通う",
        "reading": "かよう",
        "mean": "ကျောင်း/ရုံး တက်သည်"
      },
      {
        "word": "通り",
        "reading": "とおり",
        "mean": "လမ်းမကြီး"
      }
    ]
  },
  {
    "kanji": "運",
    "hiragana": "はこ(ぶ) / うん",
    "romaji": "hako(bu) / un",
    "meaning": "သယ်ယူသည် / ကံတရား / လှုပ်ရှားသည်",
    "examples": [
      {
        "word": "運ぶ",
        "reading": "はこぶ",
        "mean": "သယ်သည်"
      },
      {
        "word": "運動",
        "reading": "うんどう",
        "mean": "အားကစား/လှုပ်ရှားမှု"
      },
      {
        "word": "運転",
        "reading": "うんてん",
        "mean": "ယာဉ်မောင်းခြင်း"
      }
    ]
  },
  {
    "kanji": "動",
    "hiragana": "うご(く) / どう",
    "romaji": "ugo(ku) / dou",
    "meaning": "လှုပ်ရှားသည်",
    "examples": [
      {
        "word": "動く",
        "reading": "うごく",
        "mean": "လှုပ်သည်"
      },
      {
        "word": "運動",
        "reading": "うんどう",
        "mean": "အားကစား"
      },
      {
        "word": "動物",
        "reading": "どうぶつ",
        "mean": "တိရစ္ဆာန်"
      }
    ]
  },
  {
    "kanji": "転",
    "hiragana": "ころ(ぶ) / てん",
    "romaji": "koro(bu) / ten",
    "meaning": "လဲကျသည် / လှည့်လည်သည်",
    "examples": [
      {
        "word": "転ぶ",
        "reading": "ころぶ",
        "mean": "လဲကျသည်"
      },
      {
        "word": "運転",
        "reading": "うんてん",
        "mean": "ကားမောင်းခြင်း"
      },
      {
        "word": "自転車",
        "reading": "じてんしゃ",
        "mean": "စက်ဘီး"
      }
    ]
  },
  {
    "kanji": "止",
    "hiragana": "と(まる) / と(める) / し",
    "romaji": "to(maru) / shi",
    "meaning": "ရပ်တန့်သည် / ရပ်သည်",
    "examples": [
      {
        "word": "止まる",
        "reading": "とまる",
        "mean": "ရပ်သည်"
      },
      {
        "word": "中止",
        "reading": "ちゅうし",
        "mean": "ရပ်ဆိုင်းခြင်း"
      }
    ]
  },
  {
    "kanji": "歩",
    "hiragana": "ある(く) / ほ / ぽ",
    "romaji": "aru(ku) / ho",
    "meaning": "လမ်းလျှောက်သည်",
    "examples": [
      {
        "word": "歩く",
        "reading": "あるく",
        "mean": "လမ်းလျှောက်သည်"
      },
      {
        "word": "散歩",
        "reading": "さんぽ",
        "mean": "လမ်းလျှောက်ထွက်ခြင်း"
      }
    ]
  },
  {
    "kanji": "走",
    "hiragana": "はし(る) / そう",
    "romaji": "hashi(ru) / sou",
    "meaning": "ပြေးလွှားသည်",
    "examples": [
      {
        "word": "走る",
        "reading": "はしる",
        "mean": "ပြေးသည်"
      }
    ]
  },
  {
    "kanji": "待",
    "hiragana": "ま(つ) / たい",
    "romaji": "ma(tsu) / tai",
    "meaning": "စောင့်ဆိုင်းသည်",
    "examples": [
      {
        "word": "待つ",
        "reading": "まつ",
        "mean": "စောင့်သည်"
      },
      {
        "word": "招待",
        "reading": "しょうたい",
        "mean": "ဖိတ်ကြားခြင်း"
      }
    ]
  },
  {
    "kanji": "急",
    "hiragana": "いそ(ぐ) / きゅう",
    "romaji": "iso(gu) / kyuu",
    "meaning": "အလျင်စလိုဖြစ်သော / ရုတ်တရက်",
    "examples": [
      {
        "word": "急ぐ",
        "reading": "いそぐ",
        "mean": "အရေးတကြီးသွားသည်"
      },
      {
        "word": "急に",
        "reading": "きゅうに",
        "mean": "ရုတ်တရက်"
      },
      {
        "word": "急行",
        "reading": "きゅうこう",
        "mean": "အမြန်ရထား"
      }
    ]
  },
  {
    "kanji": "始",
    "hiragana": "はじ(まる) / はじ(める) / し",
    "romaji": "haji(meru) / shi",
    "meaning": "စတင်သည်",
    "examples": [
      {
        "word": "始まる",
        "reading": "はじまる",
        "mean": "စတင်သည်"
      },
      {
        "word": "始める",
        "reading": "はじめる",
        "mean": "စတင်လုပ်ဆောင်သည်"
      }
    ]
  },
  {
    "kanji": "終",
    "hiragana": "お(わる) / お(える) / しゅう",
    "romaji": "o(waru) / shuu",
    "meaning": "ပြီးဆုံးသည်",
    "examples": [
      {
        "word": "終わる",
        "reading": "おわる",
        "mean": "ပြီးဆုံးသည်"
      },
      {
        "word": "終電",
        "reading": "しゅうでん",
        "mean": "နောက်ဆုံးရထား"
      }
    ]
  },
  {
    "kanji": "考",
    "hiragana": "かんが(える) / こう",
    "romaji": "kanga(eru) / kou",
    "meaning": "စဉ်းစားတွေးတောသည်",
    "examples": [
      {
        "word": "考える",
        "reading": "かんがえる",
        "mean": "စဉ်းစားသည်"
      },
      {
        "word": "考え",
        "reading": "かんがえ",
        "mean": "အတွေး"
      }
    ]
  },
  {
    "kanji": "開",
    "hiragana": "あ(く) / ひら(く) / かい",
    "romaji": "a(ku) / kai",
    "meaning": "ဖွင့်လှစ်သည်",
    "examples": [
      {
        "word": "開く",
        "reading": "あく",
        "mean": "ပွင့်သည်"
      },
      {
        "word": "開ける",
        "reading": "あける",
        "mean": "ဖွင့်သည်"
      },
      {
        "word": "開店",
        "reading": "かいてん",
        "mean": "ဆိုင်ဖွင့်ခြင်း"
      }
    ]
  },
  {
    "kanji": "閉",
    "hiragana": "し(まる) / と(じる) / へい",
    "romaji": "shi(maru) / hei",
    "meaning": "ပိတ်သည်",
    "examples": [
      {
        "word": "閉まる",
        "reading": "しまる",
        "mean": "ပိတ်သည်"
      },
      {
        "word": "閉める",
        "reading": "しめる",
        "mean": "ပိတ်သည်"
      },
      {
        "word": "閉店",
        "reading": "へいてん",
        "mean": "ဆိုင်ပိတ်ခြင်း"
      }
    ]
  },
  {
    "kanji": "忘",
    "hiragana": "わす(れる) / ぼう",
    "romaji": "wasu(reru) / bou",
    "meaning": "မေ့လျော့သည်",
    "examples": [
      {
        "word": "忘れる",
        "reading": "わすれる",
        "mean": "မေ့သည်"
      },
      {
        "word": "忘れ物",
        "reading": "わすれもの",
        "mean": "ကျန်ခဲ့သောပစ္စည်း"
      }
    ]
  },
  {
    "kanji": "着",
    "hiragana": "き(る) / つ(く) / ちゃく",
    "romaji": "ki(ru) / tsu(ku) / chaku",
    "meaning": "ဝတ်ဆင်သည် / ဆိုက်ရောက်သည်",
    "examples": [
      {
        "word": "着る",
        "reading": "きる",
        "mean": "ဝတ်သည်"
      },
      {
        "word": "着く",
        "reading": "つく",
        "mean": "ရောက်သည်"
      },
      {
        "word": "着物",
        "reading": "きもの",
        "mean": "ကီမိုနို"
      }
    ]
  },
  {
    "kanji": "使",
    "hiragana": "つか(う) / し",
    "romaji": "tsuka(u) / shi",
    "meaning": "အသုံးပြုသည်",
    "examples": [
      {
        "word": "使う",
        "reading": "つかう",
        "mean": "သုံးသည်"
      },
      {
        "word": "使い方",
        "reading": "つかいかた",
        "mean": "အသုံးပြုပုံ"
      },
      {
        "word": "大使館",
        "reading": "たいしかん",
        "mean": "သံရုံး"
      }
    ]
  },
  {
    "kanji": "持",
    "hiragana": "も(つ) / じ",
    "romaji": "mo(tsu) / ji",
    "meaning": "ကိုင်ဆောင်သည် / ပိုင်ဆိုင်သည်",
    "examples": [
      {
        "word": "持つ",
        "reading": "もつ",
        "mean": "ကိုင်သည်"
      },
      {
        "word": "気持ち",
        "reading": "きもち",
        "mean": "ခံစားချက်"
      },
      {
        "word": "お金持ち",
        "reading": "おかねもち",
        "mean": "သူဌေး"
      }
    ]
  },
  {
    "kanji": "知",
    "hiragana": "し(る) / ち",
    "romaji": "shi(ru) / chi",
    "meaning": "သိရှိသည် / အသိပညာ",
    "examples": [
      {
        "word": "知る",
        "reading": "しる",
        "mean": "သိသည်"
      },
      {
        "word": "知らせる",
        "reading": "しらせる",
        "mean": "အကြောင်းကြားသည်"
      }
    ]
  },
  {
    "kanji": "作",
    "hiragana": "つく(る) / さく / さ",
    "romaji": "tsuku(ru) / saku",
    "meaning": "ပြုလုပ်သည် / ဖန်တီးသည်",
    "examples": [
      {
        "word": "作る",
        "reading": "つくる",
        "mean": "လုပ်သည်"
      },
      {
        "word": "作文",
        "reading": "さくぶん",
        "mean": "စာစီစာကုံး"
      },
      {
        "word": "作品",
        "reading": "さくひん",
        "mean": "လက်ရာ"
      }
    ]
  },
  {
    "kanji": "洗",
    "hiragana": "あら(う) / せん",
    "romaji": "ara(u) / sen",
    "meaning": "ဆေးကြောသည် / လျှော်ဖွတ်သည်",
    "examples": [
      {
        "word": "洗う",
        "reading": "あらう",
        "mean": "ဆေးသည်"
      },
      {
        "word": "洗濯",
        "reading": "せんたく",
        "mean": "အဝတ်လျှော်ခြင်း"
      }
    ]
  },
  {
    "kanji": "集",
    "hiragana": "あつ(まる) / あつ(める) / しゅう",
    "romaji": "atsu(maru) / shuu",
    "meaning": "စုစည်းသည် / စုရုံးသည်",
    "examples": [
      {
        "word": "集まる",
        "reading": "あつまる",
        "mean": "စုရုံးသည်"
      },
      {
        "word": "集める",
        "reading": "あつめる",
        "mean": "စုဆောင်းသည်"
      }
    ]
  },
  {
    "kanji": "払",
    "hiragana": "はら(う) / ふつ",
    "romaji": "hara(u)",
    "meaning": "ငွေပေးချေသည်",
    "examples": [
      {
        "word": "払う",
        "reading": "はらう",
        "mean": "ရှင်းသည်/ပေးသည်"
      },
      {
        "word": "支払い",
        "reading": "しはらい",
        "mean": "ငွေချေမှု"
      }
    ]
  },
  {
    "kanji": "売",
    "hiragana": "う(る) / ばい",
    "romaji": "u(ru) / bai",
    "meaning": "ရောင်းချသည်",
    "examples": [
      {
        "word": "売る",
        "reading": "うる",
        "mean": "ရောင်းသည်"
      },
      {
        "word": "売り場",
        "reading": "うりば",
        "mean": "အရောင်းကောင်တာ"
      }
    ]
  },
  {
    "kanji": "屋",
    "hiragana": "や / おく",
    "romaji": "ya / oku",
    "meaning": "ဆိုင် / အမိုး",
    "examples": [
      {
        "word": "本屋",
        "reading": "ほんや",
        "mean": "စာအုပ်ဆိုင်"
      },
      {
        "word": "部屋",
        "reading": "へや",
        "mean": "အခန်း"
      },
      {
        "word": "屋上",
        "reading": "おくじょう",
        "mean": "ခေါင်မိုးထပ်"
      }
    ]
  },
  {
    "kanji": "漢",
    "hiragana": "かん",
    "romaji": "kan",
    "meaning": "တရုတ် / ဟန်လူမျိုး",
    "examples": [
      {
        "word": "漢字",
        "reading": "かんじ",
        "mean": "ကန်ဂျီစာလုံး"
      }
    ]
  },
  {
    "kanji": "字",
    "hiragana": "じ",
    "romaji": "ji",
    "meaning": "စာလုံး / အက္ခရာ",
    "examples": [
      {
        "word": "漢字",
        "reading": "かんじ",
        "mean": "ကန်ဂျီ"
      },
      {
        "word": "文字",
        "reading": "もじ",
        "mean": "စာလုံး (Moji)"
      }
    ]
  },
  {
    "kanji": "意",
    "hiragana": "い",
    "romaji": "i",
    "meaning": "စိတ်ကူး / အဓိပ္ပာယ်",
    "examples": [
      {
        "word": "意味",
        "reading": "いみ",
        "mean": "အဓိပ္ပာယ်"
      },
      {
        "word": "意見",
        "reading": "いけん",
        "mean": "ထင်မြင်ချက်"
      },
      {
        "word": "注意",
        "reading": "ちゅうい",
        "mean": "သတိထားရန်"
      }
    ]
  },
  {
    "kanji": "味",
    "hiragana": "あじ / み",
    "romaji": "aji / mi",
    "meaning": "အရသာ / အရသာခံစားမှု",
    "examples": [
      {
        "word": "味",
        "reading": "あじ",
        "mean": "အရသာ"
      },
      {
        "word": "意味",
        "reading": "いみ",
        "mean": "အဓိပ္ပာယ်"
      },
      {
        "word": "興味",
        "reading": "きょうみ",
        "mean": "စိတ်ဝင်စားမှု"
      }
    ]
  },
  {
    "kanji": "注",
    "hiragana": "そそ(ぐ) / ちゅう",
    "romaji": "chuu",
    "meaning": "လောင်းထည့်သည် / သတိပြုသည်",
    "examples": [
      {
        "word": "注意",
        "reading": "ちゅうい",
        "mean": "သတိပြုခြင်း"
      },
      {
        "word": "注文",
        "reading": "ちゅうもん",
        "mean": "အော်ဒါမှာခြင်း"
      }
    ]
  },
  {
    "kanji": "文",
    "hiragana": "ふみ / ぶん / もん",
    "romaji": "bun / mon",
    "meaning": "စာကြောင်း / စာပေ",
    "examples": [
      {
        "word": "作文",
        "reading": "さくぶん",
        "mean": "စာစီစာကုံး"
      },
      {
        "word": "文法",
        "reading": "ぶんぽう",
        "mean": "သဒ္ဒါ (Bunpou)"
      }
    ]
  },
  {
    "kanji": "痛",
    "hiragana": "いた(い) / つう",
    "romaji": "ita(i) / tsuu",
    "meaning": "နာကျင်သော",
    "examples": [
      {
        "word": "痛い",
        "reading": "いたい",
        "mean": "နာသည်"
      },
      {
        "word": "頭痛",
        "reading": "ずつう",
        "mean": "ခေါင်းကိုက်ခြင်း"
      }
    ]
  },
  {
    "kanji": "寒",
    "hiragana": "さむ(い) / かん",
    "romaji": "samu(i) / kan",
    "meaning": "အေးချမ်းသော (ရာသီဥတု)",
    "examples": [
      {
        "word": "寒い",
        "reading": "さむい",
        "mean": "အေးသော"
      }
    ]
  },
  {
    "kanji": "暑",
    "hiragana": "あつ(い) / しょ",
    "romaji": "atsu(i) / sho",
    "meaning": "ပူပြင်းသော (ရာသီဥတု)",
    "examples": [
      {
        "word": "暑い",
        "reading": "あつい",
        "mean": "ပူသော"
      }
    ]
  },
  {
    "kanji": "暖",
    "hiragana": "あたた(かい) / だん",
    "romaji": "atata(kai) / dan",
    "meaning": "နွေးထွေးသော (ရာသီဥတု)",
    "examples": [
      {
        "word": "暖かい",
        "reading": "あたたかい",
        "mean": "နွေးထွေးသော"
      }
    ]
  },
  {
    "kanji": "涼",
    "hiragana": "すず(しい) / りょう",
    "romaji": "suzu(shii) / ryou",
    "meaning": "အေးမြလန်းဆန်းသော",
    "examples": [
      {
        "word": "涼しい",
        "reading": "すずしい",
        "mean": "အေးမြသော"
      }
    ]
  },
  {
    "kanji": "春",
    "hiragana": "はる / しゅん",
    "romaji": "haru / shun",
    "meaning": "နွေဦးရာသီ",
    "examples": [
      {
        "word": "春",
        "reading": "はる",
        "mean": "နွေဦး"
      },
      {
        "word": "春休み",
        "reading": "はるやすみ",
        "mean": "နွေဦးကျောင်းပိတ်ရက်"
      }
    ]
  },
  {
    "kanji": "夏",
    "hiragana": "なつ / か",
    "romaji": "natsu / ka",
    "meaning": "နွေရာသီ",
    "examples": [
      {
        "word": "夏",
        "reading": "なつ",
        "mean": "နွေရာသီ"
      },
      {
        "word": "夏休み",
        "reading": "なつやすみ",
        "mean": "နွေရာသီကျောင်းပိတ်ရက်"
      }
    ]
  },
  {
    "kanji": "秋",
    "hiragana": "あき / しゅう",
    "romaji": "aki / shuu",
    "meaning": "ဆောင်းဦးရာသီ",
    "examples": [
      {
        "word": "秋",
        "reading": "あき",
        "mean": "ဆောင်းဦး"
      }
    ]
  },
  {
    "kanji": "冬",
    "hiragana": "ふゆ / とう",
    "romaji": "fuyu / tou",
    "meaning": "ဆောင်းရာသီ",
    "examples": [
      {
        "word": "冬",
        "reading": "ふゆ",
        "mean": "ဆောင်းရာသီ"
      },
      {
        "word": "冬休み",
        "reading": "ふゆやすみ",
        "mean": "ဆောင်းရာသီကျောင်းပိတ်ရက်"
      }
    ]
  },
  {
    "kanji": "朝",
    "hiragana": "あさ / ちょう",
    "romaji": "asa / chou",
    "meaning": "နံနက်ခင်း",
    "examples": [
      {
        "word": "朝",
        "reading": "あさ",
        "mean": "မနက်"
      },
      {
        "word": "今朝",
        "reading": "けさ",
        "mean": "ဒီမနက်"
      },
      {
        "word": "朝ご飯",
        "reading": "あさごはん",
        "mean": "မနက်စာ"
      }
    ]
  },
  {
    "kanji": "昼",
    "hiragana": "ひる / ちゅう",
    "romaji": "hiru / chuu",
    "meaning": "နေ့လယ်ခင်း",
    "examples": [
      {
        "word": "昼",
        "reading": "ひる",
        "mean": "နေ့လယ်"
      },
      {
        "word": "昼ご飯",
        "reading": "ひるごはん",
        "mean": "နေ့လယ်စာ"
      },
      {
        "word": "昼休み",
        "reading": "ひるやすみ",
        "mean": "နေ့လယ်နားချိန်"
      }
    ]
  },
  {
    "kanji": "夕",
    "hiragana": "ゆう / せき",
    "romaji": "yuu",
    "meaning": "ညနေခင်း",
    "examples": [
      {
        "word": "夕方",
        "reading": "ゆうがた",
        "mean": "ညနေစောင်း"
      },
      {
        "word": "夕食",
        "reading": "ゆうしょく",
        "mean": "ညစာ"
      }
    ]
  },
  {
    "kanji": "夜",
    "hiragana": "よる / よ / や",
    "romaji": "yoru / ya",
    "meaning": "ညအချိန်",
    "examples": [
      {
        "word": "夜",
        "reading": "よる",
        "mean": "ည"
      },
      {
        "word": "今夜",
        "reading": "こんや",
        "mean": "ဒီည"
      }
    ]
  },
  {
    "kanji": "切",
    "hiragana": "き(る) / せつ",
    "romaji": "ki(ru) / setsu",
    "meaning": "ဖြတ်တောက်သည် / အရေးကြီးသော",
    "examples": [
      {
        "word": "切る",
        "reading": "きる",
        "mean": "ဖြတ်သည်"
      },
      {
        "word": "切手",
        "reading": "きって",
        "mean": "တံဆိပ်ခေါင်း"
      },
      {
        "word": "大切",
        "reading": "たいせつ",
        "mean": "အရေးကြီးသော"
      }
    ]
  },
  {
    "kanji": "結",
    "hiragana": "むす(ぶ) / けつ",
    "romaji": "musu(bu) / ketsu",
    "meaning": "ချည်နှောင်သည် / ရလဒ်",
    "examples": [
      {
        "word": "結婚",
        "reading": "けっこん",
        "mean": "မင်္ဂလာဆောင်ခြင်း"
      },
      {
        "word": "結果",
        "reading": "けっか",
        "mean": "ရလဒ်"
      }
    ]
  },
  {
    "kanji": "婚",
    "hiragana": "こん",
    "romaji": "kon",
    "meaning": "လက်ထပ်ထိမ်းမြားခြင်း",
    "examples": [
      {
        "word": "結婚",
        "reading": "けっこん",
        "mean": "အိမ်ထောင်ပြုခြင်း"
      },
      {
        "word": "婚約",
        "reading": "こんやく",
        "mean": "စေ့စပ်ခြင်း"
      }
    ]
  },
  {
    "kanji": "離",
    "hiragana": "はな(れる) / り",
    "romaji": "hana(reru) / ri",
    "meaning": "ခွဲခွာသည် / ဝေးကွာသည်",
    "examples": [
      {
        "word": "離れる",
        "reading": "はなれる",
        "mean": "ခွာသည်"
      },
      {
        "word": "離婚",
        "reading": "りこん",
        "mean": "ကွာရှင်းခြင်း"
      }
    ]
  },
  {
    "kanji": "招",
    "hiragana": "まね(く) / しょう",
    "romaji": "mane(ku) / shoutai",
    "meaning": "ဖိတ်ခေါ်သည်",
    "examples": [
      {
        "word": "招待",
        "reading": "しょうたい",
        "mean": "ဖိတ်ကြားခြင်း"
      },
      {
        "word": "招く",
        "reading": "まねく",
        "mean": "ဖိတ်ခေါ်သည်"
      }
    ]
  },
  {
    "kanji": "呼",
    "hiragana": "よ(ぶ) / こ",
    "romaji": "yo(bu) / ko",
    "meaning": "ခေါ်ဆိုသည်",
    "examples": [
      {
        "word": "呼ぶ",
        "reading": "よぶ",
        "mean": "ခေါ်သည်"
      },
      {
        "word": "呼吸",
        "reading": "こきゅう",
        "mean": "အသက်ရှူခြင်း"
      }
    ]
  },
  {
    "kanji": "頼",
    "hiragana": "たの(む) / らい",
    "romaji": "tano(mu) / rai",
    "meaning": "အားကိုးသည် / အကူအညီတောင်းသည်",
    "examples": [
      {
        "word": "頼む",
        "reading": "たのむ",
        "mean": "တောင်းဆိုသည်"
      },
      {
        "word": "信頼",
        "reading": "しんらい",
        "mean": "ယုံကြည်ကိုးစားမှု"
      }
    ]
  },
  {
    "kanji": "世",
    "hiragana": "よ / せ / せい",
    "romaji": "yo / se",
    "meaning": "လောက / ခေတ်ကာလ",
    "examples": [
      {
        "word": "世界",
        "reading": "せかい",
        "mean": "ကမ္ဘာလောက"
      },
      {
        "word": "世紀",
        "reading": "せいき",
        "mean": "ရာစုနှစ်"
      }
    ]
  },
  {
    "kanji": "界",
    "hiragana": "かい",
    "romaji": "kai",
    "meaning": "နယ်ပယ် / ကမ္ဘာ",
    "examples": [
      {
        "word": "世界",
        "reading": "せかい",
        "mean": "ကမ္ဘာ"
      },
      {
        "word": "限界",
        "reading": "げんかい",
        "mean": "အတိုင်းအတာ/ကန့်သတ်ချက်"
      }
    ]
  },
  {
    "kanji": "代",
    "hiragana": "か(わる) / だい / たい",
    "romaji": "da(i)",
    "meaning": "ခေတ် / ကိုယ်စား / အဖိုးအခ",
    "examples": [
      {
        "word": "時代",
        "reading": "じだい",
        "mean": "ခေတ်"
      },
      {
        "word": "代わりに",
        "reading": "かわりに",
        "mean": "ကိုယ်စား"
      },
      {
        "word": "電気代",
        "reading": "でんきだい",
        "mean": "မီးဖိုး"
      }
    ]
  },
  {
    "kanji": "族",
    "hiragana": "ぞく",
    "romaji": "zoku",
    "meaning": "မိသားစု / မျိုးနွယ်",
    "examples": [
      {
        "word": "家族",
        "reading": "かぞく",
        "mean": "မိသားစု"
      },
      {
        "word": "親族",
        "reading": "しんぞく",
        "mean": "ဆွေမျိုး"
      }
    ]
  },
  {
    "kanji": "親",
    "hiragana": "おや / した(しい) / しん",
    "romaji": "oya / shin",
    "meaning": "မိဘ / ရင်းနှီးသော",
    "examples": [
      {
        "word": "親",
        "reading": "おや",
        "mean": "မိဘ"
      },
      {
        "word": "両親",
        "reading": "りょうしん",
        "mean": "မိဘနှစ်ပါး"
      },
      {
        "word": "親切",
        "reading": "しんせつ",
        "mean": "ဖော်ရွေသော"
      }
    ]
  },
  {
    "kanji": "主",
    "hiragana": "おも / ぬし / しゅ",
    "romaji": "omo / shu",
    "meaning": "အဓိက / သခင် / အိမ်ရှင်",
    "examples": [
      {
        "word": "主に",
        "reading": "おもに",
        "mean": "အဓိကအားဖြင့်"
      },
      {
        "word": "ご主人",
        "reading": "ごしゅじん",
        "mean": "ခင်ပွန်း"
      }
    ]
  },
  {
    "kanji": "軽",
    "hiragana": "かる(い) / けい",
    "romaji": "karu(i) / kei",
    "meaning": "ပေါ့ပါးသော",
    "examples": [
      {
        "word": "軽い",
        "reading": "かるい",
        "mean": "ပေါ့သော"
      },
      {
        "word": "軽食",
        "reading": "けいしょく",
        "mean": "အဆာပြေစာ"
      }
    ]
  },
  {
    "kanji": "重",
    "hiragana": "おも(い) / かさ(なる) / じゅう",
    "romaji": "omo(i) / juu",
    "meaning": "လေးလံသော / ထပ်ဆင့်သည်",
    "examples": [
      {
        "word": "重い",
        "reading": "おもい",
        "mean": "လေးသော"
      },
      {
        "word": "体重",
        "reading": "たいじゅう",
        "mean": "ကိုယ်အလေးချိန်"
      }
    ]
  },
  {
    "kanji": "広",
    "hiragana": "ひろ(い) / こう",
    "romaji": "hiro(i) / kou",
    "meaning": "ကျယ်ဝန်းသော",
    "examples": [
      {
        "word": "広い",
        "reading": "ひろい",
        "mean": "ကျယ်သော"
      },
      {
        "word": "広告",
        "reading": "こうこく",
        "mean": "ကြော်ငြာ"
      }
    ]
  },
  {
    "kanji": "狭",
    "hiragana": "せま(い) / きょう",
    "romaji": "sema(i) / kyou",
    "meaning": "ကျဉ်းမြောင်းသော",
    "examples": [
      {
        "word": "狭い",
        "reading": "せまい",
        "mean": "ကျဉ်းသော"
      }
    ]
  },
  {
    "kanji": "暗",
    "hiragana": "くら(い) / あん",
    "romaji": "kura(i) / an",
    "meaning": "မှောင်မိုက်သော",
    "examples": [
      {
        "word": "暗い",
        "reading": "くらい",
        "mean": "မှောင်သော"
      }
    ]
  },
  {
    "kanji": "明",
    "hiragana": "あか(るい) / めい",
    "romaji": "aka(rui) / mei",
    "meaning": "လင်းလက်သော / ထင်ရှားသော",
    "examples": [
      {
        "word": "明るい",
        "reading": "あかるい",
        "mean": "လင်းသော"
      },
      {
        "word": "説明",
        "reading": "せつめい",
        "mean": "ရှင်းပြချက်"
      }
    ]
  },
  {
    "kanji": "悪",
    "hiragana": "わる(い) / あく",
    "romaji": "waru(i) / aku",
    "meaning": "ဆိုးရွားသော / မကောင်းသော",
    "examples": [
      {
        "word": "悪い",
        "reading": "わるい",
        "mean": "ဆိုးသော"
      },
      {
        "word": "悪口",
        "reading": "わるくち",
        "mean": "အတင်းအဖျင်း"
      }
    ]
  },
  {
    "kanji": "遠",
    "hiragana": "とお(い) / えん",
    "romaji": "too(i) / en",
    "meaning": "ဝေးကွာသော",
    "examples": [
      {
        "word": "遠い",
        "reading": "とおい",
        "mean": "ဝေးသော"
      },
      {
        "word": "遠慮",
        "reading": "えんりょ",
        "mean": "အားနာခြင်း"
      }
    ]
  },
  {
    "kanji": "近",
    "hiragana": "ちか(い) / きん",
    "romaji": "chika(i) / kin",
    "meaning": "နီးကပ်သော",
    "examples": [
      {
        "word": "近い",
        "reading": "ちかい",
        "mean": "နီးသော"
      },
      {
        "word": "近所",
        "reading": "きんじょ",
        "mean": "အနီးအနားရပ်ကွက်"
      }
    ]
  },
  {
    "kanji": "速",
    "hiragana": "はや(い) / そく",
    "romaji": "haya(i) / soku",
    "meaning": "လျင်မြန်သော / အရှိန်",
    "examples": [
      {
        "word": "速い",
        "reading": "はやい",
        "mean": "မြန်သော"
      },
      {
        "word": "速度",
        "reading": "そくど",
        "mean": "အရှိန်နှုန်း"
      }
    ]
  },
  {
    "kanji": "遅",
    "hiragana": "おそ(い) / おく(れる) / ち",
    "romaji": "oso(i) / chi",
    "meaning": "နှေးကွေးသော / နောက်ကျသော",
    "examples": [
      {
        "word": "遅い",
        "reading": "おそい",
        "mean": "နှေးသော/နောက်ကျသော"
      },
      {
        "word": "遅れる",
        "reading": "おくれる",
        "mean": "နောက်ကျသည်"
      }
    ]
  },
  {
    "kanji": "港",
    "hiragana": "みなと / こう",
    "romaji": "minato / kou",
    "meaning": "ဆိပ်ကမ်း",
    "examples": [
      {
        "word": "港",
        "reading": "みなと",
        "mean": "ဆိပ်ကမ်း"
      },
      {
        "word": "空港",
        "reading": "くうこう",
        "mean": "လေဆိပ်"
      }
    ]
  },
  {
    "kanji": "船",
    "hiragana": "ふね / せん",
    "romaji": "fune / sen",
    "meaning": "သင်္ဘော / လှေ",
    "examples": [
      {
        "word": "船",
        "reading": "ふね",
        "mean": "သင်္ဘော"
      },
      {
        "word": "船便",
        "reading": "ふなびん",
        "mean": "သင်္ဘောတင်စာတိုက်"
      }
    ]
  },
  {
    "kanji": "飛",
    "hiragana": "と(ぶ) / ひ",
    "romaji": "to(bu) / hi",
    "meaning": "ပျံသန်းသည်",
    "examples": [
      {
        "word": "飛ぶ",
        "reading": "とぶ",
        "mean": "ပျံသည်"
      },
      {
        "word": "飛行機",
        "reading": "ひこうき",
        "mean": "လေယာဉ်ပျံ"
      }
    ]
  },
  {
    "kanji": "機",
    "hiragana": "き",
    "romaji": "ki",
    "meaning": "စက်ကိရိယာ / အခွင့်အရေး",
    "examples": [
      {
        "word": "飛行機",
        "reading": "ひこうき",
        "mean": "လေယာဉ်"
      },
      {
        "word": "機械",
        "reading": "きかい",
        "mean": "စက်ယန္တရား"
      },
      {
        "word": "機会",
        "reading": "きかい",
        "mean": "အခွင့်အရေး"
      }
    ]
  },
  {
    "kanji": "都",
    "hiragana": "みやこ / と / つ",
    "romaji": "to / tsu",
    "meaning": "မြို့တော် / အဆင်ပြေမှု",
    "examples": [
      {
        "word": "東京都",
        "reading": "とうきょうと",
        "mean": "တိုကျိုမြို့တော်"
      },
      {
        "word": "都合",
        "reading": "つごう",
        "mean": "အခြေအနေ/အဆင်ပြေမှု"
      }
    ]
  },
  {
    "kanji": "府",
    "hiragana": "ふ",
    "romaji": "fu",
    "meaning": "စီရင်စုနယ် (အိုဆာကာ/ကျိုတို)",
    "examples": [
      {
        "word": "大阪府",
        "reading": "おおさかふ",
        "mean": "အိုဆာကာစီရင်စု"
      },
      {
        "word": "京都府",
        "reading": "きょうとふ",
        "mean": "ကျိုတိုစီရင်စု"
      }
    ]
  },
  {
    "kanji": "県",
    "hiragana": "けん",
    "romaji": "ken",
    "meaning": "ခရိုင် / စီရင်စု",
    "examples": [
      {
        "word": "県",
        "reading": "けん",
        "mean": "စီရင်စု"
      }
    ]
  },
  {
    "kanji": "市",
    "hiragana": "いち / し",
    "romaji": "ichi / shi",
    "meaning": "မြို့ / စျေးကွက်",
    "examples": [
      {
        "word": "市",
        "reading": "し",
        "mean": "မြို့တော်"
      },
      {
        "word": "市民",
        "reading": "しみん",
        "mean": "မြို့ခံပြည်သူ"
      },
      {
        "word": "市場",
        "reading": "いちば",
        "mean": "စျေး"
      }
    ]
  },
  {
    "kanji": "区",
    "hiragana": "く",
    "romaji": "ku",
    "meaning": "မြို့နယ် / ရပ်ကွက်",
    "examples": [
      {
        "word": "区",
        "reading": "く",
        "mean": "မြို့နယ်"
      },
      {
        "word": "区役所",
        "reading": "くやくしょ",
        "mean": "မြို့နယ်ရုံး"
      }
    ]
  },
  {
    "kanji": "町",
    "hiragana": "まち / ちょう",
    "romaji": "machi / chou",
    "meaning": "မြို့နယ် / ရပ်ကွက်",
    "examples": [
      {
        "word": "町",
        "reading": "まち",
        "mean": "မြို့"
      }
    ]
  },
  {
    "kanji": "村",
    "hiragana": "むら / そん",
    "romaji": "mura / son",
    "meaning": "ကျေးရွာ",
    "examples": [
      {
        "word": "村",
        "reading": "むら",
        "mean": "ရွာ"
      },
      {
        "word": "農村",
        "reading": "のうそん",
        "mean": "လယ်ယာကျေးရွာ"
      }
    ]
  },
  {
    "kanji": "階",
    "hiragana": "かい / がい",
    "romaji": "kai / gai",
    "meaning": "အထပ် (Floor)",
    "examples": [
      {
        "word": "一階",
        "reading": "いっかい",
        "mean": "ပထမထပ်"
      },
      {
        "word": "階段",
        "reading": "かいだん",
        "mean": "လှေကား"
      }
    ]
  },
  {
    "kanji": "段",
    "hiragana": "だん",
    "romaji": "dan",
    "meaning": "အဆင့် / အထစ်",
    "examples": [
      {
        "word": "階段",
        "reading": "かいだん",
        "mean": "လှေကား"
      },
      {
        "word": "値段",
        "reading": "ねだん",
        "mean": "စျေးနှုန်း"
      }
    ]
  },
  {
    "kanji": "番",
    "hiragana": "ばん",
    "romaji": "ban",
    "meaning": "နံပါတ် / အလှည့်",
    "examples": [
      {
        "word": "一番",
        "reading": "いちばん",
        "mean": "နံပါတ်တစ်/အကောင်းဆုံး"
      },
      {
        "word": "交番",
        "reading": "こうばん",
        "mean": "ရဲကင်းစခန်း"
      }
    ]
  },
  {
    "kanji": "号",
    "hiragana": "ごう",
    "romaji": "gou",
    "meaning": "နံပါတ် / သင်္ကေတ",
    "examples": [
      {
        "word": "番号",
        "reading": "ばんごう",
        "mean": "ဖုန်း/ကုဒ်နံပါတ်"
      },
      {
        "word": "信号",
        "reading": "しんごう",
        "mean": "မီးပွိုင့်"
      }
    ]
  },
  {
    "kanji": "線",
    "hiragana": "せん",
    "romaji": "sen",
    "meaning": "မျဉ်းကြောင်း / မီးရထားလမ်း",
    "examples": [
      {
        "word": "線",
        "reading": "せん",
        "mean": "လိုင်း"
      },
      {
        "word": "新幹線",
        "reading": "しんかんせん",
        "mean": "ကျည်ဆန်ရထား"
      }
    ]
  },
  {
    "kanji": "局",
    "hiragana": "きょく",
    "romaji": "kyoku",
    "meaning": "ဌာန / ရုံး",
    "examples": [
      {
        "word": "郵便局",
        "reading": "ゆうびんきょく",
        "mean": "စာတိုက်"
      },
      {
        "word": "薬局",
        "reading": "やっきょく",
        "mean": "ဆေးဆိုင်"
      }
    ]
  },
  {
    "kanji": "練",
    "hiragana": "ね(る) / れん",
    "romaji": "ren",
    "meaning": "လေ့ကျင့်သည်",
    "examples": [
      {
        "word": "練習",
        "reading": "れんしゅう",
        "mean": "လေ့ကျင့်ခန်း"
      },
      {
        "word": "訓練",
        "reading": "くんれん",
        "mean": "လေ့ကျင့်သင်တန်း"
      }
    ]
  },
  {
    "kanji": "習",
    "hiragana": "なら(う) / しゅう",
    "romaji": "nara(u) / shuu",
    "meaning": "သင်ယူသည် / အလေ့အထ",
    "examples": [
      {
        "word": "習う",
        "reading": "ならう",
        "mean": "သင်သည်"
      },
      {
        "word": "練習",
        "reading": "れんしゅう",
        "mean": "လေ့ကျင့်မှု"
      },
      {
        "word": "復習",
        "reading": "ふくしゅう",
        "mean": "စာပြန်နွှေးခြင်း"
      }
    ]
  },
  {
    "kanji": "復",
    "hiragana": "ふく",
    "romaji": "fuku",
    "meaning": "ပြန်လည်ဖြစ်သည် / ပြန်နွှေးသည်",
    "examples": [
      {
        "word": "復習",
        "reading": "ふくしゅう",
        "mean": "စာပြန်ကြည့်ခြင်း"
      },
      {
        "word": "回復",
        "reading": "かいふく",
        "mean": "ပြန်လည်ကောင်းမွန်လာခြင်း"
      }
    ]
  },
  {
    "kanji": "予",
    "hiragana": "よ",
    "romaji": "yo",
    "meaning": "ကြိုတင်",
    "examples": [
      {
        "word": "予定",
        "reading": "よてい",
        "mean": "အစီအစဉ်"
      },
      {
        "word": "予約",
        "reading": "よやく",
        "mean": "ကြိုတင်ဘိုကင်တင်ခြင်း"
      }
    ]
  },
  {
    "kanji": "定",
    "hiragana": "さだ(める) / てい / じょう",
    "romaji": "tei",
    "meaning": "သတ်မှတ်သည် / သေချာသည်",
    "examples": [
      {
        "word": "予定",
        "reading": "よてい",
        "mean": "အစီအစဉ်"
      },
      {
        "word": "定休日",
        "reading": "ていきゅうび",
        "mean": "ပုံမှန်ပိတ်ရက်"
      }
    ]
  },
  {
    "kanji": "約",
    "hiragana": "やく",
    "romaji": "yaku",
    "meaning": "ခန့်မှန်းခြေ / ကတိကဝတ်",
    "examples": [
      {
        "word": "予約",
        "reading": "よやく",
        "mean": "ဘိုကင်"
      },
      {
        "word": "約束",
        "reading": "やくそく",
        "mean": "ကတိ"
      }
    ]
  },
  {
    "kanji": "計",
    "hiragana": "はか(る) / けい",
    "romaji": "haka(ru) / kei",
    "meaning": "တိုင်းတာသည် / တွက်ချက်သည်",
    "examples": [
      {
        "word": "時計",
        "reading": "とけい",
        "mean": "နာရီ"
      },
      {
        "word": "計画",
        "reading": "けいかく",
        "mean": "အစီအစဉ်"
      },
      {
        "word": "計算",
        "reading": "けいさん",
        "mean": "တွက်ချက်မှု"
      }
    ]
  },
  {
    "kanji": "算",
    "hiragana": "さん",
    "romaji": "san",
    "meaning": "တွက်ချက်သည်",
    "examples": [
      {
        "word": "計算",
        "reading": "けいさん",
        "mean": "တွက်ချက်ခြင်း"
      }
    ]
  },
  {
    "kanji": "数",
    "hiragana": "かず / かぞ(える) / すう",
    "romaji": "kazu / suu",
    "meaning": "အရေအတွက် / ရေတွက်သည်",
    "examples": [
      {
        "word": "数",
        "reading": "かず",
        "mean": "အရေအတွက်"
      },
      {
        "word": "数える",
        "reading": "かぞえる",
        "mean": "ရေတွက်သည်"
      },
      {
        "word": "数学",
        "reading": "すうがく",
        "mean": "သင်္ချာ"
      }
    ]
  },
  {
    "kanji": "形",
    "hiragana": "かたち / けい / ぎょう",
    "romaji": "katachi / kei",
    "meaning": "ပုံသဏ္ဌာန် / ပုံစံ",
    "examples": [
      {
        "word": "形",
        "reading": "かたち",
        "mean": "ပုံသဏ္ဌာန်"
      },
      {
        "word": "人形",
        "reading": "にんぎょう",
        "mean": "အရုပ်"
      }
    ]
  },
  {
    "kanji": "色",
    "hiragana": "いろ / しき / しょく",
    "romaji": "iro / shoku",
    "meaning": "အရောင်",
    "examples": [
      {
        "word": "色",
        "reading": "いろ",
        "mean": "အရောင်"
      },
      {
        "word": "景色",
        "reading": "けしき",
        "mean": "ရှုခင်း"
      }
    ]
  },
  {
    "kanji": "米",
    "hiragana": "こめ / まい / べい",
    "romaji": "kome / bei",
    "meaning": "ဆန်စပါး / အမေရိက",
    "examples": [
      {
        "word": "お米",
        "reading": "おこめ",
        "mean": "ဆန်"
      },
      {
        "word": "米国",
        "reading": "べいこく",
        "mean": "အမေရိကန်နိုင်ငံ"
      }
    ]
  },
  {
    "kanji": "茶",
    "hiragana": "ちゃ / さ",
    "romaji": "cha / sa",
    "meaning": "လက်ဖက်ရည် / လက်ဖက်",
    "examples": [
      {
        "word": "お茶",
        "reading": "おちゃ",
        "mean": "လက်ဖက်ရည်"
      },
      {
        "word": "茶道",
        "reading": "さどう",
        "mean": "လက်ဖက်ရည်ပွဲဓလေ့"
      }
    ]
  },
  {
    "kanji": "酒",
    "hiragana": "さけ / しゅ",
    "romaji": "sake / shu",
    "meaning": "အရက် / ဆာကေး",
    "examples": [
      {
        "word": "お酒",
        "reading": "おさけ",
        "mean": "အရက်"
      },
      {
        "word": "居酒屋",
        "reading": "いざかや",
        "mean": "ဂျပန်အရက်ဆိုင်"
      }
    ]
  },
  {
    "kanji": "菜",
    "hiragana": "な / さい",
    "romaji": "sai",
    "meaning": "ဟင်းသီးဟင်းရွက်",
    "examples": [
      {
        "word": "野菜",
        "reading": "やさい",
        "mean": "ဟင်းသီးဟင်းရွက်"
      }
    ]
  },
  {
    "kanji": "鳥",
    "hiragana": "とり / ちょう",
    "romaji": "tori / chou",
    "meaning": "ငှက် / ကြက်",
    "examples": [
      {
        "word": "鳥",
        "reading": "とり",
        "mean": "ငှက်"
      },
      {
        "word": "小鳥",
        "reading": "ことり",
        "mean": "ငှက်ငယ်လေး"
      }
    ]
  },
  {
    "kanji": "卵",
    "hiragana": "たまご / らん",
    "romaji": "tamago / ran",
    "meaning": "ဥ (ကြက်ဥ)",
    "examples": [
      {
        "word": "卵",
        "reading": "たまご",
        "mean": "ဥ"
      }
    ]
  },
  {
    "kanji": "建",
    "hiragana": "た(てる) / けん",
    "romaji": "ta(teru) / ken",
    "meaning": "တည်ဆောက်သည်",
    "examples": [
      {
        "word": "建てる",
        "reading": "たてる",
        "mean": "ဆောက်သည်"
      },
      {
        "word": "建物",
        "reading": "たてもの",
        "mean": "အဆောက်အအုံ"
      }
    ]
  },
  {
    "kanji": "物",
    "hiragana": "もの / ぶつ / もつ",
    "romaji": "mono / butsu",
    "meaning": "ပစ္စည်း / အရာဝတ္ထု",
    "examples": [
      {
        "word": "食べ物",
        "reading": "たべもの",
        "mean": "အစားအစာ"
      },
      {
        "word": "買い物",
        "reading": "かいもの",
        "mean": "စျေးဝယ်"
      },
      {
        "word": "動物",
        "reading": "どうぶつ",
        "mean": "တိရစ္ဆာန်"
      }
    ]
  },
  {
    "kanji": "庭",
    "hiragana": "にわ / てい",
    "romaji": "niwa / tei",
    "meaning": "ဥယျာဉ် / ခြံဝင်း",
    "examples": [
      {
        "word": "庭",
        "reading": "にわ",
        "mean": "ခြံဝင်း"
      },
      {
        "word": "校庭",
        "reading": "こうてい",
        "mean": "ကျောင်းကွင်း"
      }
    ]
  },
  {
    "kanji": "場",
    "hiragana": "ば / じょう",
    "romaji": "ba / jou",
    "meaning": "နေရာ / ကွင်း",
    "examples": [
      {
        "word": "場所",
        "reading": "ばしょ",
        "mean": "နေရာ"
      },
      {
        "word": "工場",
        "reading": "こうじょう",
        "mean": "စက်ရုံ"
      },
      {
        "word": "広場",
        "reading": "ひろば",
        "mean": "ရင်ပြင်"
      }
    ]
  },
  {
    "kanji": "所",
    "hiragana": "ところ / しょ",
    "romaji": "tokoro / sho",
    "meaning": "နေရာ",
    "examples": [
      {
        "word": "場所",
        "reading": "ばしょ",
        "mean": "နေရာ"
      },
      {
        "word": "住所",
        "reading": "じゅうしょ",
        "mean": "လိပ်စာ"
      },
      {
        "word": "近所",
        "reading": "きんじょ",
        "mean": "အနီးအနား"
      }
    ]
  },
  {
    "kanji": "体",
    "hiragana": "からだ / たい",
    "romaji": "karada / tai",
    "meaning": "ခန္ဓာကိုယ်",
    "examples": [
      {
        "word": "体",
        "reading": "からだ",
        "mean": "ခန္ဓာကိုယ်"
      },
      {
        "word": "体重",
        "reading": "たいじゅう",
        "mean": "ကိုယ်အလေးချိန်"
      }
    ]
  },
  {
    "kanji": "頭",
    "hiragana": "あたま / とう / ず",
    "romaji": "atama / tou",
    "meaning": "ဦးခေါင်း",
    "examples": [
      {
        "word": "頭",
        "reading": "あたま",
        "mean": "ခေါင်း"
      },
      {
        "word": "頭痛",
        "reading": "ずつう",
        "mean": "ခေါင်းကိုက်ခြင်း"
      }
    ]
  },
  {
    "kanji": "顔",
    "hiragana": "かお / がん",
    "romaji": "kao / gan",
    "meaning": "မျက်နှာ",
    "examples": [
      {
        "word": "顔",
        "reading": "かお",
        "mean": "မျက်နှာ"
      },
      {
        "word": "笑顔",
        "reading": "えがお",
        "mean": "အပြုံးမျက်နှာ"
      }
    ]
  },
  {
    "kanji": "声",
    "hiragana": "こえ / せい",
    "romaji": "koe / sei",
    "meaning": "အသံ (လူ/တိရစ္ဆာန်)",
    "examples": [
      {
        "word": "声",
        "reading": "こえ",
        "mean": "အသံ"
      },
      {
        "word": "大声",
        "reading": "おおごえ",
        "mean": "ကျယ်လောင်သောအသံ"
      }
    ]
  },
  {
    "kanji": "心",
    "hiragana": "こころ / しん",
    "romaji": "kokoro / shin",
    "meaning": "နှလုံးသား / စိတ်နှလုံး",
    "examples": [
      {
        "word": "心",
        "reading": "こころ",
        "mean": "စိတ်"
      },
      {
        "word": "安心",
        "reading": "あんしん",
        "mean": "စိတ်ချရသော"
      },
      {
        "word": "心配",
        "reading": "しんぱい",
        "mean": "စိတ်ပူခြင်း"
      }
    ]
  },
  {
    "kanji": "配",
    "hiragana": "くば(る) / はい / ぱい",
    "romaji": "kuba(ru) / hai / pai",
    "meaning": "ဝေငှသည် / စိတ်ပူသည်",
    "examples": [
      {
        "word": "配る",
        "reading": "くばる",
        "mean": "ဝေသည်"
      },
      {
        "word": "心配",
        "reading": "しんぱい",
        "mean": "စိတ်ပူသည်"
      },
      {
        "word": "配達",
        "reading": "はいたつ",
        "mean": "ပို့ဆောင်ခြင်း"
      }
    ]
  },
  {
    "kanji": "達",
    "hiragana": "たち / だつ / たつ",
    "romaji": "tachi / tatsu",
    "meaning": "ရောက်ရှိသည် / များ (plural)",
    "examples": [
      {
        "word": "友達",
        "reading": "ともだち",
        "mean": "သူငယ်ချင်းများ"
      },
      {
        "word": "配達",
        "reading": "はいたつ",
        "mean": "ပို့ဆောင်ခြင်း"
      },
      {
        "word": "速達",
        "reading": "そくたつ",
        "mean": "အမြန်ချောစာ"
      }
    ]
  },
  {
    "kanji": "届",
    "hiragana": "とど(く) / とど(ける)",
    "romaji": "todo(ku)",
    "meaning": "ရောက်ရှိသည် / ပို့ပေးသည်",
    "examples": [
      {
        "word": "届く",
        "reading": "とどく",
        "mean": "ရောက်သည်"
      },
      {
        "word": "届ける",
        "reading": "とどける",
        "mean": "ပို့ပေးသည်"
      }
    ]
  },
  {
    "kanji": "引",
    "hiragana": "ひ(く) / いん",
    "romaji": "hi(ku) / in",
    "meaning": "ဆွဲသည် / နုတ်ယူသည်",
    "examples": [
      {
        "word": "引く",
        "reading": "ひく",
        "mean": "ဆွဲသည်"
      },
      {
        "word": "引き出し",
        "reading": "ひきだし",
        "mean": "အံဆွဲ"
      },
      {
        "word": "割引",
        "reading": "わりびき",
        "mean": "လျှော့စျေး"
      }
    ]
  },
  {
    "kanji": "押",
    "hiragana": "お(す) / おう",
    "romaji": "o(su)",
    "meaning": "တွန်းသည် / နှိပ်သည်",
    "examples": [
      {
        "word": "押す",
        "reading": "おす",
        "mean": "တွန်းသည်/နှိပ်သည်"
      }
    ]
  },
  {
    "kanji": "拾",
    "hiragana": "ひろ(う) / しゅう",
    "romaji": "hiro(u) / shuu",
    "meaning": "ကောက်ယူသည်",
    "examples": [
      {
        "word": "拾う",
        "reading": "ひろう",
        "mean": "ကောက်သည်"
      }
    ]
  },
  {
    "kanji": "落",
    "hiragana": "お(ちる) / お(とす) / らく",
    "romaji": "o(chiru) / raku",
    "meaning": "ကျဆင်းသည် / ပြုတ်ကျသည်",
    "examples": [
      {
        "word": "落ちる",
        "reading": "おちる",
        "mean": "ကျသည်"
      },
      {
        "word": "落とす",
        "reading": "おとす",
        "mean": "ချသည်/ကျပျောက်သည်"
      }
    ]
  },
  {
    "kanji": "渡",
    "hiragana": "わた(る) / わた(す) / と",
    "romaji": "wata(ru)",
    "meaning": "ကူးဖြတ်သည် / လွှဲပြောင်းပေးသည်",
    "examples": [
      {
        "word": "渡る",
        "reading": "わたる",
        "mean": "ဖြတ်ကူးသည်"
      },
      {
        "word": "渡す",
        "reading": "わたす",
        "mean": "ပေးကမ်းသည်"
      }
    ]
  },
  {
    "kanji": "慣",
    "hiragana": "な(れる) / かん",
    "romaji": "na(reru) / kan",
    "meaning": "အလေ့အကျင့်ဖြစ်သည် / နေသားကျသည်",
    "examples": [
      {
        "word": "慣れる",
        "reading": "なれる",
        "mean": "ကျင့်သားရသည်"
      },
      {
        "word": "習慣",
        "reading": "しゅうかん",
        "mean": "ဓလေ့ထုံးတမ်း"
      }
    ]
  },
  {
    "kanji": "冷",
    "hiragana": "つめ(たい) / ひ(える) / れい",
    "romaji": "tsume(tai) / rei",
    "meaning": "အေးစက်သော (အထိအတွေ့)",
    "examples": [
      {
        "word": "冷たい",
        "reading": "つめたい",
        "mean": "အေးသော"
      },
      {
        "word": "冷蔵庫",
        "reading": "れいぞうこ",
        "mean": "ရေခဲသေတ္တာ"
      }
    ]
  },
  {
    "kanji": "蔵",
    "hiragana": "ぞう / くら",
    "romaji": "zou / kura",
    "meaning": "သိုလှောင်ရုံ",
    "examples": [
      {
        "word": "冷蔵庫",
        "reading": "れいぞうこ",
        "mean": "ရေခဲသေတ္တာ"
      }
    ]
  },
  {
    "kanji": "庫",
    "hiragana": "こ / く",
    "romaji": "ko",
    "meaning": "ဂိုဒေါင် / သိုလှောင်ခန်း",
    "examples": [
      {
        "word": "金庫",
        "reading": "きんこ",
        "mean": "သံမဏိသေတ္တာ"
      },
      {
        "word": "車庫",
        "reading": "しゃこ",
        "mean": "ကားဂိုဒေါင်"
      }
    ]
  },
  {
    "kanji": "案",
    "hiragana": "あん",
    "romaji": "an",
    "meaning": "အကြံဉာဏ် / အစီအစဉ်",
    "examples": [
      {
        "word": "案内",
        "reading": "あんない",
        "mean": "လမ်းညွှန်ပြသခြင်း"
      },
      {
        "word": "提案",
        "reading": "ていあん",
        "mean": "အကြံပြုချက်"
      }
    ]
  },
  {
    "kanji": "内",
    "hiragana": "うち / ない",
    "romaji": "uchi / nai",
    "meaning": "အတွင်းဘက်",
    "examples": [
      {
        "word": "案内",
        "reading": "あんない",
        "mean": "လမ်းညွှန်"
      },
      {
        "word": "家内",
        "reading": "かない",
        "mean": "ဇနီး"
      }
    ]
  },
  {
    "kanji": "参",
    "hiragana": "まい(る) / さん",
    "romaji": "mai(ru) / san",
    "meaning": "သွားသည်(နှိမ့်ချ) / ပါဝင်သည်",
    "examples": [
      {
        "word": "参加",
        "reading": "さんか",
        "mean": "ပါဝင်ဆင်နွှဲခြင်း"
      },
      {
        "word": "お参り",
        "reading": "おまいり",
        "mean": "ဘုရားဖူးခြင်း"
      }
    ]
  },
  {
    "kanji": "加",
    "hiragana": "くわ(える) / か",
    "romaji": "kuwa(eru) / ka",
    "meaning": "ပေါင်းထည့်သည် / ပါဝင်သည်",
    "examples": [
      {
        "word": "参加",
        "reading": "さんか",
        "mean": "ပါဝင်ခြင်း"
      },
      {
        "word": "追加",
        "reading": "ついか",
        "mean": "ထပ်ဖြည့်ခြင်း"
      }
    ]
  },
  {
    "kanji": "違",
    "hiragana": "ちが(う) / い",
    "romaji": "chiga(u) / i",
    "meaning": "ကွဲပြားသည် / မှားယွင်းသည်",
    "examples": [
      {
        "word": "違う",
        "reading": "ちがう",
        "mean": "မတူပါ/မှားသည်"
      },
      {
        "word": "間違い",
        "reading": "まちがい",
        "mean": "အမှား"
      }
    ]
  },
  {
    "kanji": "勝",
    "hiragana": "か(つ) / しょう",
    "romaji": "ka(tsu) / shou",
    "meaning": "အနိုင်ရသည်",
    "examples": [
      {
        "word": "勝つ",
        "reading": "かつ",
        "mean": "နိုင်သည်"
      },
      {
        "word": "優勝",
        "reading": "ゆうしょう",
        "mean": "ဗိုလ်စွဲခြင်း"
      }
    ]
  },
  {
    "kanji": "負",
    "hiragana": "ま(ける) / ふ",
    "romaji": "ma(keru) / fu",
    "meaning": "ရှုံးနိမ့်သည်",
    "examples": [
      {
        "word": "負ける",
        "reading": "まける",
        "mean": "ရှုံးသည်"
      }
    ]
  },
  {
    "kanji": "賛",
    "hiragana": "さん",
    "romaji": "san",
    "meaning": "ထောက်ခံသည်",
    "examples": [
      {
        "word": "賛成",
        "reading": "さんせい",
        "mean": "သဘောတူထောက်ခံခြင်း"
      }
    ]
  },
  {
    "kanji": "成",
    "hiragana": "な(る) / せい",
    "romaji": "na(ru) / sei",
    "meaning": "ဖြစ်မြောက်သည် / အောင်မြင်သည်",
    "examples": [
      {
        "word": "賛成",
        "reading": "さんせい",
        "mean": "ထောက်ခံသည်"
      },
      {
        "word": "成功",
        "reading": "せいこう",
        "mean": "အောင်မြင်မှု"
      }
    ]
  },
  {
    "kanji": "反",
    "hiragana": "はん / たん",
    "romaji": "han",
    "meaning": "ဆန့်ကျင်သည်",
    "examples": [
      {
        "word": "反対",
        "reading": "はんたい",
        "mean": "ဆန့်ကျင်သည်"
      }
    ]
  },
  {
    "kanji": "対",
    "hiragana": "たい / つい",
    "romaji": "tai",
    "meaning": "ဆန့်ကျင်ဘက် / ယှဉ်ပြိုင်မှု",
    "examples": [
      {
        "word": "反対",
        "reading": "はんたい",
        "mean": "ကန့်ကွက်သည်"
      },
      {
        "word": "絶対",
        "reading": "ぜったい",
        "mean": "လုံးဝ/မုချ"
      }
    ]
  },
  {
    "kanji": "夢",
    "hiragana": "ゆめ / む",
    "romaji": "yume / mu",
    "meaning": "အိပ်မက်",
    "examples": [
      {
        "word": "夢",
        "reading": "ゆめ",
        "mean": "အိပ်မက်"
      }
    ]
  },
  {
    "kanji": "眠",
    "hiragana": "ねむ(る) / ねむ(い) / みん",
    "romaji": "nemu(i) / min",
    "meaning": "အိပ်ငိုက်သော / အိပ်ပျော်သည်",
    "examples": [
      {
        "word": "眠い",
        "reading": "ねむい",
        "mean": "အိပ်ငိုက်သည်"
      },
      {
        "word": "睡眠",
        "reading": "すいみん",
        "mean": "အိပ်စက်ခြင်း"
      }
    ]
  },
  {
    "kanji": "覚",
    "hiragana": "おぼ(える) / さ(める) / かく",
    "romaji": "obo(eru) / kaku",
    "meaning": "မှတ်မိသည် / နိုးထသည်",
    "examples": [
      {
        "word": "覚える",
        "reading": "おぼえる",
        "mean": "မှတ်မိသည်"
      },
      {
        "word": "目を覚ます",
        "reading": "めをさます",
        "mean": "မျက်လုံးနိုးသည်"
      }
    ]
  },
  {
    "kanji": "咲",
    "hiragana": "さ(く)",
    "romaji": "sa(ku)",
    "meaning": "ပွင့်လန်းသည်",
    "examples": [
      {
        "word": "咲く",
        "reading": "さく",
        "mean": "ပွင့်သည်"
      }
    ]
  },
  {
    "kanji": "変",
    "hiragana": "か(わる) / か(える) / へん",
    "romaji": "ka(waru) / hen",
    "meaning": "ပြောင်းလဲသည် / ထူးဆန်းသော",
    "examples": [
      {
        "word": "変わる",
        "reading": "かわる",
        "mean": "ပြောင်းသည်"
      },
      {
        "word": "大変",
        "reading": "たいへん",
        "mean": "ပင်ပန်းသော"
      }
    ]
  },
  {
    "kanji": "踏",
    "hiragana": "ふ(む) / とう",
    "romaji": "fu(mu)",
    "meaning": "နင်းမိသည်",
    "examples": [
      {
        "word": "踏む",
        "reading": "ふむ",
        "mean": "နင်းသည်"
      },
      {
        "word": "踏切",
        "reading": "ふみきり",
        "mean": "မီးရထားသံလမ်းဂိတ်"
      }
    ]
  },
  {
    "kanji": "盗",
    "hiragana": "ぬす(む) / とう",
    "romaji": "nusu(mu) / tou",
    "meaning": "ခိုးယူသည်",
    "examples": [
      {
        "word": "盗む",
        "reading": "ぬすむ",
        "mean": "ခိုးသည်"
      },
      {
        "word": "強盗",
        "reading": "ごうとう",
        "mean": "ဓားပြ"
      }
    ]
  },
  {
    "kanji": "壊",
    "hiragana": "こわ(す) / こわ(れる) / かい",
    "romaji": "kowa(su) / kai",
    "meaning": "ပျက်စီးသည် / ဖျက်ဆီးသည်",
    "examples": [
      {
        "word": "壊す",
        "reading": "こわす",
        "mean": "ဖျက်သည်"
      },
      {
        "word": "壊れる",
        "reading": "こわれる",
        "mean": "ပျက်စီးသည်"
      }
    ]
  },
  {
    "kanji": "倒",
    "hiragana": "たお(れる) / たお(す) / とう",
    "romaji": "tao(reru) / tou",
    "meaning": "လဲကျသည် / လှဲချသည်",
    "examples": [
      {
        "word": "倒れる",
        "reading": "たおれる",
        "mean": "လဲကျသည်"
      },
      {
        "word": "倒す",
        "reading": "たおす",
        "mean": "လှဲချသည်"
      }
    ]
  },
  {
    "kanji": "祈",
    "hiragana": "いの(る) / き",
    "romaji": "ino(ru) / ki",
    "meaning": "ဆုတောင်းသည်",
    "examples": [
      {
        "word": "祈る",
        "reading": "いのる",
        "mean": "ဆုတောင်းသည်"
      },
      {
        "word": "お祈り",
        "reading": "おいのり",
        "mean": "ဆုတောင်းမေတ္တာ"
      }
    ]
  },
  {
    "kanji": "訪",
    "hiragana": "おとず(れる) / たず(ねる) / ほう",
    "romaji": "tazu(neru) / hou",
    "meaning": "လည်ပတ်သည် / သွားရောက်တွေ့ဆုံသည်",
    "examples": [
      {
        "word": "訪ねる",
        "reading": "たずねる",
        "mean": "လည်ပတ်တွေ့ဆုံသည်"
      },
      {
        "word": "訪問",
        "reading": "ほうもん",
        "mean": "အလည်အပတ်"
      }
    ]
  },
  {
    "kanji": "驚",
    "hiragana": "おどろ(く) / きょう",
    "romaji": "odoro(ku)",
    "meaning": "အံ့ဩတုန်လှုပ်သည်",
    "examples": [
      {
        "word": "驚く",
        "reading": "おどろく",
        "mean": "အံ့အားသင့်သည်"
      }
    ]
  },
  {
    "kanji": "息",
    "hiragana": "いき / そく",
    "romaji": "iki / soku",
    "meaning": "အသက်ရှူခြင်း / သား",
    "examples": [
      {
        "word": "息",
        "reading": "いき",
        "mean": "အသက်"
      },
      {
        "word": "息子",
        "reading": "むすこ",
        "mean": "သား"
      }
    ]
  },
  {
    "kanji": "娘",
    "hiragana": "むすめ / じょう",
    "romaji": "musume",
    "meaning": "သမီး",
    "examples": [
      {
        "word": "娘",
        "reading": "むすめ",
        "mean": "သမီး"
      }
    ]
  },
  {
    "kanji": "席",
    "hiragana": "せき",
    "romaji": "seki",
    "meaning": "ထိုင်ခုံ",
    "examples": [
      {
        "word": "席",
        "reading": "せき",
        "mean": "ထိုင်ခုံ"
      },
      {
        "word": "出席",
        "reading": "しゅっせき",
        "mean": "တက်ရောက်ခြင်း"
      }
    ]
  },
  {
    "kanji": "欠",
    "hiragana": "か(ける) / けつ",
    "romaji": "ka(keru) / ketsu",
    "meaning": "ပျက်ကွက်သည် / လိုအပ်ချက်",
    "examples": [
      {
        "word": "欠席",
        "reading": "けっせき",
        "mean": "ပျက်ကွက်ခြင်း"
      },
      {
        "word": "欠点",
        "reading": "けってん",
        "mean": "အားနည်းချက်"
      }
    ]
  },
  {
    "kanji": "晴",
    "hiragana": "は(れる) / せい",
    "romaji": "ha(reru) / sei",
    "meaning": "သာယာသော (ရာသီဥတု)",
    "examples": [
      {
        "word": "晴れ",
        "reading": "はれ",
        "mean": "ရာသီဥတုသာယာသည်"
      }
    ]
  },
  {
    "kanji": "雲",
    "hiragana": "くも / うん",
    "romaji": "kumo",
    "meaning": "တိမ်",
    "examples": [
      {
        "word": "雲",
        "reading": "くも",
        "mean": "တိမ်တိုက်"
      }
    ]
  },
  {
    "kanji": "雪",
    "hiragana": "ゆき / せつ",
    "romaji": "yuki / setsu",
    "meaning": "နှင်း",
    "examples": [
      {
        "word": "雪",
        "reading": "ゆき",
        "mean": "နှင်း"
      }
    ]
  },
  {
    "kanji": "風",
    "hiragana": "かぜ / ふう",
    "romaji": "kaze / fuu",
    "meaning": "လေ / ပုံစံ",
    "examples": [
      {
        "word": "風",
        "reading": "かぜ",
        "mean": "လေတိုက်ခတ်ခြင်း"
      },
      {
        "word": "台風",
        "reading": "たいふう",
        "mean": "မုန်တိုင်း"
      }
    ]
  },
  {
    "kanji": "波",
    "hiragana": "なみ / は",
    "romaji": "nami / ha",
    "meaning": "လှိုင်း",
    "examples": [
      {
        "word": "波",
        "reading": "なみ",
        "mean": "လှိုင်းလုံး"
      }
    ]
  },
  {
    "kanji": "海岸",
    "hiragana": "かいがん",
    "romaji": "kaigan",
    "meaning": "ပင်လယ်ကမ်းခြေ",
    "examples": [
      {
        "word": "海岸",
        "reading": "かいがん",
        "mean": "ပင်လယ်ကမ်းခြေ"
      }
    ]
  },
  {
    "kanji": "岸",
    "hiragana": "きし / がん",
    "romaji": "kishi / gan",
    "meaning": "ကမ်းပါး",
    "examples": [
      {
        "word": "岸",
        "reading": "きし",
        "mean": "ကမ်း"
      },
      {
        "word": "海岸",
        "reading": "かいがん",
        "mean": "ကမ်းခြေ"
      }
    ]
  },
  {
    "kanji": "島",
    "hiragana": "しま / とう",
    "romaji": "shima / tou",
    "meaning": "ကျွန်း",
    "examples": [
      {
        "word": "島",
        "reading": "しま",
        "mean": "ကျွန်း"
      },
      {
        "word": "半島",
        "reading": "はんとう",
        "mean": "ကျွန်းဆွယ်"
      }
    ]
  }
];

const N3_KANJI = [
  {
    "kanji": "断",
    "hiragana": "ことわ(る) / た(つ) / だん",
    "romaji": "kotowa(ru) / dan",
    "meaning": "ငြင်းပယ်သည် / ဖြတ်တောက်သည်",
    "tag": "第1週1日目",
    "examples": [
      {
        "word": "断る",
        "reading": "ことわる",
        "mean": "ငြင်းဆိုသည်"
      },
      {
        "word": "横断歩道",
        "reading": "おうだんほどう",
        "mean": "လူကူးမျဉ်းကျား"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "確",
    "hiragana": "たし(か) / かく",
    "romaji": "tashi(ka) / kaku",
    "meaning": "သေချာသော / အတည်ပြုသည်",
    "tag": "第1週2日目",
    "examples": [
      {
        "word": "正確",
        "reading": "せいかく",
        "mean": "တိကျသေချာသော"
      },
      {
        "word": "確認",
        "reading": "かくにん",
        "mean": "အတည်ပြုစစ်ဆေးခြင်း"
      },
      {
        "word": "確かめる",
        "reading": "たしかめる",
        "mean": "သေချာအောင်စစ်သည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "認",
    "hiragana": "みと(める) / にん",
    "romaji": "mito(meru) / nin",
    "meaning": "အသိအမှတ်ပြုသည်",
    "tag": "第1週2日目",
    "examples": [
      {
        "word": "認める",
        "reading": "みとめる",
        "mean": "အသိအမှတ်ပြုသည်"
      },
      {
        "word": "確認",
        "reading": "かくにん",
        "mean": "စစ်ဆေးအတည်ပြုခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "危",
    "hiragana": "あぶ(ない) / き",
    "romaji": "abu(nai) / ki",
    "meaning": "အန္တရာယ်",
    "tag": "第1週3日目",
    "examples": [
      {
        "word": "危険",
        "reading": "きけん",
        "mean": "အန္တရာယ်ရှိသော"
      },
      {
        "word": "危機",
        "reading": "きき",
        "mean": "အကျပ်အတည်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "険",
    "hiragana": "けん",
    "romaji": "ken",
    "meaning": "အန္တရာယ်",
    "tag": "第1週3日目",
    "examples": [
      {
        "word": "保険",
        "reading": "ほけん",
        "mean": "အာမခံ"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "捨",
    "hiragana": "す(てる) / しゃ",
    "romaji": "sute(ru) / sha",
    "meaning": "စွန့်ပစ်သည်",
    "tag": "第1週3日目",
    "examples": [
      {
        "word": "捨てる",
        "reading": "すてる",
        "mean": "ပစ်သည်"
      },
      {
        "word": "四捨五入",
        "reading": "ししゃごにゅう",
        "mean": "ဒသမဖြတ်ခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "普",
    "hiragana": "ふ",
    "romaji": "fu",
    "meaning": "သာမန် / ယေဘုယျ",
    "tag": "第1週4日目",
    "examples": [
      {
        "word": "普通",
        "reading": "ふつう",
        "mean": "သာမန် / ပုံမှန်ရထား"
      },
      {
        "word": "普及",
        "reading": "ふきゅう",
        "mean": "ကျယ်ပြန့်လာခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "過",
    "hiragana": "す(ぎる) / す(ごす) / か",
    "romaji": "su(giru) / ka",
    "meaning": "လွန်မြောက်သည် / ဖြတ်သန်းသည်",
    "tag": "第1週4日目",
    "examples": [
      {
        "word": "通過",
        "reading": "つうか",
        "mean": "ဖြတ်သန်းသွားခြင်း"
      },
      {
        "word": "過去",
        "reading": "かこ",
        "mean": "အတိတ်ကာလ"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "整",
    "hiragana": "ととの(える) / ととの(う) / せい",
    "romaji": "totono(eru) / sei",
    "meaning": "သပ်ရပ်အောင်စီစဉ်သည် / အဆင်သင့်ဖြစ်သည်",
    "tag": "第1週6日目",
    "examples": [
      {
        "word": "整理",
        "reading": "せいり",
        "mean": "ရှင်းလင်းသပ်ရပ်စေခြင်း"
      },
      {
        "word": "調整",
        "reading": "ちょうせい",
        "mean": "ညှိနှိုင်းချိန်ညှိခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "替",
    "hiragana": "か(える) / か(わる) / たい",
    "romaji": "ka(eru) / tai",
    "meaning": "လဲလှယ်သည်",
    "tag": "第1週6日目",
    "examples": [
      {
        "word": "乗り替える",
        "reading": "のりかえる",
        "mean": "ရထားပြောင်းစီးသည်"
      },
      {
        "word": "両替",
        "reading": "りょうがえ",
        "mean": "ငွေလဲလှယ်ခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "備",
    "hiragana": "そな(える) / び",
    "romaji": "sona(eru) / bi",
    "meaning": "ကြိုတင်ပြင်ဆင်သည် / တပ်ဆင်သည်",
    "tag": "第2週1日目",
    "examples": [
      {
        "word": "準備",
        "reading": "じゅんび",
        "mean": "ပြင်ဆင်ခြင်း"
      },
      {
        "word": "設備",
        "reading": "せつび",
        "mean": "စက်ကိရိယာတပ်ဆင်မှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "解",
    "hiragana": "と(く) / わか(る) / かい",
    "romaji": "to(ku) / kai",
    "meaning": "ဖြေရှင်းသည် / နားလည်သည်",
    "tag": "第2週2日目",
    "examples": [
      {
        "word": "理解",
        "reading": "りかい",
        "mean": "နားလည်သဘောပေါက်မှု"
      },
      {
        "word": "解答",
        "reading": "かいとう",
        "mean": "အဖြေ"
      },
      {
        "word": "解説",
        "reading": "かいせつ",
        "mean": "ရှင်းလင်းချက်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "協",
    "hiragana": "きょう",
    "romaji": "kyou",
    "meaning": "ပူးပေါင်းဆောင်ရွက်သည်",
    "tag": "第2週2日目",
    "examples": [
      {
        "word": "協力",
        "reading": "きょうりょく",
        "mean": "ပူးပေါင်းဆောင်ရွက်မှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "差",
    "hiragana": "さ(す) / さ",
    "romaji": "sa",
    "meaning": "ခြားနားချက် / ညွှန်ပြသည်",
    "tag": "第2週4日目",
    "examples": [
      {
        "word": "交差点",
        "reading": "こうさてん",
        "mean": "လမ်းဆုံ"
      },
      {
        "word": "時差",
        "reading": "じさ",
        "mean": "စံတော်ချိန်ကွာခြားချက်"
      },
      {
        "word": "差別",
        "reading": "さべつ",
        "mean": "ခွဲခြားဆက်ဆံမှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "折",
    "hiragana": "お(る) / お(れる) / せつ",
    "romaji": "o(ru) / setsu",
    "meaning": "ချိုးဖဲ့သည် / ခေါက်သည်",
    "tag": "第2週5日目",
    "examples": [
      {
        "word": "折る",
        "reading": "おる",
        "mean": "ချိုးသည်"
      },
      {
        "word": "骨折",
        "reading": "こっせつ",
        "mean": "အရိုးကျိုးသည်"
      },
      {
        "word": "右折",
        "reading": "うせつ",
        "mean": "ညာကွေ့"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "消",
    "hiragana": "しょう",
    "romaji": "shou",
    "meaning": "စားသုံးသည် / ကုန်ဆုံးသည်",
    "tag": "第2週6日目",
    "examples": [
      {
        "word": "消費",
        "reading": "しょうひ",
        "mean": "စားသုံးမှု"
      },
      {
        "word": "消化",
        "reading": "しょうか",
        "mean": "အစာကြေညက်ခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "防",
    "hiragana": "ふせ(ぐ) / ぼう",
    "romaji": "fuse(gu) / bou",
    "meaning": "ကာကွယ်သည်",
    "tag": "第2週6日目",
    "examples": [
      {
        "word": "予防",
        "reading": "よぼう",
        "mean": "ကြိုတင်ကာကွယ်ခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "救",
    "hiragana": "すく(う) / きゅう",
    "romaji": "suku(u) / kyuu",
    "meaning": "ကယ်ဆယ်သည်",
    "tag": "第2週6日目",
    "examples": [
      {
        "word": "救う",
        "reading": "すくう",
        "mean": "ကယ်တင်သည်"
      },
      {
        "word": "救急車",
        "reading": "きゅうきゅうしゃ",
        "mean": "လူနာတင်ယာဉ်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "警",
    "hiragana": "けい",
    "romaji": "kei",
    "meaning": "သတိပေးသည် / ရဲတပ်ဖွဲ့",
    "tag": "第2週6日目",
    "examples": [
      {
        "word": "警察",
        "reading": "けいさつ",
        "mean": "ရဲတပ်ဖွဲ့"
      },
      {
        "word": "警告",
        "reading": "けいこく",
        "mean": "သတိပေးချက်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "察",
    "hiragana": "さつ",
    "romaji": "satsu",
    "meaning": "စုံစမ်းထောက်လှမ်းသည်",
    "tag": "第2週6日目",
    "examples": [
      {
        "word": "警察",
        "reading": "けいさつ",
        "mean": "ရဲတပ်ဖွဲ့"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "故",
    "hiragana": "こ",
    "romaji": "ko",
    "meaning": "ဖြစ်ရပ် / အကြောင်းရင်း",
    "tag": "第2週6日目",
    "examples": [
      {
        "word": "事故",
        "reading": "じこ",
        "mean": "ယာဉ်မတော်တဆမှု"
      },
      {
        "word": "故障",
        "reading": "こしょう",
        "mean": "စက်ပျက်ခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "渡",
    "hiragana": "わた(る) / わた(す)",
    "romaji": "wata(ru) / wata(su)",
    "meaning": "ဖြတ်ကူးသည် / လွှဲပြောင်းပေးသည်",
    "tag": "第2週7日目",
    "examples": [
      {
        "word": "渡る",
        "reading": "わたる",
        "mean": "ဖြတ်ကူးသည်"
      },
      {
        "word": "渡す",
        "reading": "わたす",
        "mean": "ကမ်းပေးသည်/လွှဲပေးသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "冷",
    "hiragana": "つめ(たい) / ひ(やす) / れい",
    "romaji": "tsume(tai) / rei",
    "meaning": "အေးစက်သော",
    "tag": "第3週1日目",
    "examples": [
      {
        "word": "冷たい",
        "reading": "つめたい",
        "mean": "အေးသော"
      },
      {
        "word": "冷房",
        "reading": "れいぼう",
        "mean": "လေအေးပေးစက်"
      },
      {
        "word": "冷蔵庫",
        "reading": "れいぞうこ",
        "mean": "ရေခဲသေတ္တာ"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "蔵",
    "hiragana": "ぞう / くら",
    "romaji": "zou",
    "meaning": "သိုလှောင်ရုံ",
    "tag": "第3週1日目",
    "examples": [
      {
        "word": "冷蔵庫",
        "reading": "れいぞうこ",
        "mean": "ရေခဲသေတ္တာ"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "庫",
    "hiragana": "こ",
    "romaji": "ko",
    "meaning": "ဂိုဒေါင်",
    "tag": "第3週1日目",
    "examples": [
      {
        "word": "金庫",
        "reading": "きんこ",
        "mean": "သံမဏိသေတ္တာ"
      },
      {
        "word": "車庫",
        "reading": "しゃこ",
        "mean": "ကားဂိုဒေါင်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "存",
    "hiragana": "そん / ぞん",
    "romaji": "son",
    "meaning": "တည်ရှိသည်",
    "tag": "第3週1日目",
    "examples": [
      {
        "word": "存在",
        "reading": "そんざい",
        "mean": "တည်ရှိမှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "費",
    "hiragana": "つい(やす) / ひ",
    "romaji": "tsui(yasu) / hi",
    "meaning": "ကုန်ကျစရိတ် / အသုံးပြုသည်",
    "tag": "第3週2日目",
    "examples": [
      {
        "word": "費用",
        "reading": "ひよう",
        "mean": "ကုန်ကျစရိတ်"
      },
      {
        "word": "交通費",
        "reading": "こうつうひ",
        "mean": "လမ်းစရိတ်"
      },
      {
        "word": "学費",
        "reading": "がくひ",
        "mean": "ကျောင်းစရိတ်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "期",
    "hiragana": "き",
    "romaji": "ki",
    "meaning": "ကာလ / အချိန်ပိုင်း",
    "tag": "第3週2日目",
    "examples": [
      {
        "word": "期間",
        "reading": "きかん",
        "mean": "ကာလ"
      },
      {
        "word": "定期券",
        "reading": "ていきけん",
        "mean": "ရာသီလက်မှတ်"
      },
      {
        "word": "期待",
        "reading": "きたい",
        "mean": "မျှော်လင့်ချက်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "限",
    "hiragana": "かぎ(る) / げん",
    "romaji": "kagi(ru) / gen",
    "meaning": "ကန့်သတ်သည် / အကန့်အသတ်",
    "tag": "第3週2日目",
    "examples": [
      {
        "word": "限る",
        "reading": "かぎる",
        "mean": "ကန့်သတ်သည်"
      },
      {
        "word": "限界",
        "reading": "げんかい",
        "mean": "အတိုင်းအတာအကန့်အသတ်"
      },
      {
        "word": "期限",
        "reading": "きげん",
        "mean": "သတ်မှတ်ရက်စွဲ"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "製",
    "hiragana": "せい",
    "romaji": "sei",
    "meaning": "ထုတ်လုပ်သည် / ထုတ်ကုန်",
    "tag": "第3週2日目",
    "examples": [
      {
        "word": "製品",
        "reading": "せいひん",
        "mean": "ကုန်ထုတ်ပစ္စည်း"
      },
      {
        "word": "日本製",
        "reading": "にほんせい",
        "mean": "ဂျပန်နိုင်ငံထုတ်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "造",
    "hiragana": "つく(る) / ぞう",
    "romaji": "tsuku(ru) / zou",
    "meaning": "တည်ဆောက်ထုတ်လုပ်သည်",
    "tag": "第3週2日目",
    "examples": [
      {
        "word": "製造",
        "reading": "せいぞう",
        "mean": "ထုတ်လုပ်ခြင်း"
      },
      {
        "word": "造船",
        "reading": "ぞうせん",
        "mean": "သင်္ဘောတည်ဆောက်မှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "賞",
    "hiragana": "しょう",
    "romaji": "shou",
    "meaning": "ဆုလာဘ် / ဆုကြေး",
    "tag": "第3週2日目",
    "examples": [
      {
        "word": "賞味期限",
        "reading": "しょうみきげん",
        "mean": "သက်တမ်းကုန်ရက်"
      },
      {
        "word": "賞金",
        "reading": "しょうきん",
        "mean": "ဆုငွေ"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "増",
    "hiragana": "ふ(える) / ぞう",
    "romaji": "fu(eru) / zou",
    "meaning": "တိုးပွားသည်",
    "tag": "第3週3日目",
    "examples": [
      {
        "word": "増加",
        "reading": "ぞうか",
        "mean": "တိုးပွားခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "減",
    "hiragana": "へ(る) / げん",
    "romaji": "he(ru) / gen",
    "meaning": "လျော့နည်းသည်",
    "tag": "第3週3日目",
    "examples": [
      {
        "word": "減少",
        "reading": "げんしょう",
        "mean": "လျော့နည်းခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "返",
    "hiragana": "へん / かえ(す)",
    "romaji": "hen / kae(su)",
    "meaning": "ပြန်ပေးသည် / ပြန်လည်",
    "tag": "第3週3日目",
    "examples": [
      {
        "word": "返事",
        "reading": "へんじ",
        "mean": "အကြောင်းပြန်ကြားချက်"
      },
      {
        "word": "返却",
        "reading": "へんきゃく",
        "mean": "ပြန်အပ်ခြင်း"
      },
      {
        "word": "返す",
        "reading": "かえす",
        "mean": "ပြန်ပေးသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "混",
    "hiragana": "ま(ぜる) / こ(む) / こん",
    "romaji": "ma(zeru) / kon",
    "meaning": "ရောနှောသည် / ပြည့်ကျပ်သည်",
    "tag": "第3週4日目",
    "examples": [
      {
        "word": "混雑",
        "reading": "こんざつ",
        "mean": "လူကြပ်တည်းပြွမ်းတီးခြင်း"
      },
      {
        "word": "混乱",
        "reading": "こんらん",
        "mean": "ရုန်းရင်းဆန်ခတ်ဖြစ်ခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "表",
    "hiragana": "おもて / あらわ(す) / ひょう",
    "romaji": "omote / hyou",
    "meaning": "ဇယား / မျက်နှာပြင် / ဖော်ပြသည်",
    "tag": "第3週4日目",
    "examples": [
      {
        "word": "表",
        "reading": "ひょう",
        "mean": "ဇယား"
      },
      {
        "word": "発表",
        "reading": "はっぴょう",
        "mean": "တင်ပြချက်"
      },
      {
        "word": "代表",
        "reading": "だいひょう",
        "mean": "ကိုယ်စားလှယ်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "裏",
    "hiragana": "うら / り",
    "romaji": "ura",
    "meaning": "ကျောဘက် / အတွင်းဘက်",
    "tag": "第3週4日目",
    "examples": [
      {
        "word": "裏",
        "reading": "うら",
        "mean": "နောက်ကျောဘက်"
      },
      {
        "word": "裏口",
        "reading": "うらぐち",
        "mean": "အနောက်ပေါက်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "留",
    "hiragana": "と(める) / とど(まる) / りゅう / る",
    "romaji": "tome(ru) / ryuu",
    "meaning": "ကျန်ရစ်သည် / တားဆီးသည် / မှတ်ထားသည်",
    "tag": "第3週5日目",
    "examples": [
      {
        "word": "留学",
        "reading": "りゅうがく",
        "mean": "နိုင်ငံခြားပညာသင်"
      },
      {
        "word": "留守",
        "reading": "るす",
        "mean": "အိမ်မှာလူမရှိခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "守",
    "hiragana": "まも(る) / しゅ / す",
    "romaji": "mamo(ru) / shu",
    "meaning": "ကာကွယ်သည် / စောင့်ရှောက်သည် / စည်းကမ်းစောင့်သည်",
    "tag": "第3週5日目",
    "examples": [
      {
        "word": "守る",
        "reading": "まもる",
        "mean": "စောင့်ထိန်းသည်"
      },
      {
        "word": "留守",
        "reading": "るす",
        "mean": "အိမ်စောင့်/လူမရှိ"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "続",
    "hiragana": "ぞく / つづ(く) / つづ(ける)",
    "romaji": "zoku / tsuzu(ku)",
    "meaning": "ဆက်တိုက်ဖြစ်သည် / ဆက်လုပ်သည်",
    "tag": "第3週6日目",
    "examples": [
      {
        "word": "接続",
        "reading": "せつぞく",
        "mean": "ချိတ်ဆက်ခြင်း"
      },
      {
        "word": "続く",
        "reading": "つづく",
        "mean": "ဆက်ဖြစ်သည်"
      },
      {
        "word": "続ける",
        "reading": "つづける",
        "mean": "ဆက်လုပ်သည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "示",
    "hiragana": "じ / し / しめ(す)",
    "romaji": "ji / shime(su)",
    "meaning": "ညွှန်ပြသည် / ဖော်ပြသည်",
    "tag": "第3週6日目",
    "examples": [
      {
        "word": "表示",
        "reading": "ひょうじ",
        "mean": "ဖော်ပြချက်"
      },
      {
        "word": "指示",
        "reading": "しじ",
        "mean": "ညွှန်ကြားချက်"
      },
      {
        "word": "示す",
        "reading": "しめす",
        "mean": "ပြသသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "戻",
    "hiragana": "もど(る) / もど(す)",
    "romaji": "modo(ru) / modo(su)",
    "meaning": "ပြန်လာသည် / မူလအတိုင်းပြန်ထားသည်",
    "tag": "第3週6日目",
    "examples": [
      {
        "word": "戻る",
        "reading": "もどる",
        "mean": "ပြန်လာသည်"
      },
      {
        "word": "戻す",
        "reading": "もどす",
        "mean": "ပြန်ထားသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "完",
    "hiragana": "かん",
    "romaji": "kan",
    "meaning": "ပြီးပြည့်စုံသော",
    "tag": "第3週6日目",
    "examples": [
      {
        "word": "完了",
        "reading": "かんりょう",
        "mean": "ပြီးစီးခြင်း"
      },
      {
        "word": "完全",
        "reading": "かんぜん",
        "mean": "ပြီးပြည့်စုံသော"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "了",
    "hiragana": "りょう",
    "romaji": "ryou",
    "meaning": "ပြီးဆုံးခြင်း / နားလည်ခြင်း",
    "tag": "第3週6日目",
    "examples": [
      {
        "word": "了解",
        "reading": "りょうかい",
        "mean": "သဘောပေါက်နားလည်ခြင်း"
      },
      {
        "word": "終了",
        "reading": "しゅうりょう",
        "mean": "ပြီးဆုံးခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "種",
    "hiragana": "しゅ / たね",
    "romaji": "shu / tane",
    "meaning": "အမျိုးအစား / မျိုးစေ့",
    "tag": "第3週7日目",
    "examples": [
      {
        "word": "種類",
        "reading": "しゅるい",
        "mean": "အမျိုးအစား"
      },
      {
        "word": "種",
        "reading": "たね",
        "mean": "အစေ့/မျိုးစေ့"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "類",
    "hiragana": "るい",
    "romaji": "rui",
    "meaning": "အုပ်စု / အမျိုးအစား",
    "tag": "第3週7日目",
    "examples": [
      {
        "word": "書類",
        "reading": "しょるい",
        "mean": "စာရွက်စာတမ်း"
      },
      {
        "word": "分類",
        "reading": "ぶんるい",
        "mean": "အမျိုးအစားခွဲခြားခြင်း"
      },
      {
        "word": "人類",
        "reading": "じんるい",
        "mean": "လူသားမျိုးနွယ်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "割",
    "hiragana": "わ(る) / わ(れる) / わり / かつ",
    "romaji": "wa(ru) / wari",
    "meaning": "ခွဲစိတ်သည် / လျှော့စျေး / အချိုးအစား",
    "tag": "第4週2日目",
    "examples": [
      {
        "word": "割る",
        "reading": "わる",
        "mean": "ခွဲသည်"
      },
      {
        "word": "割引",
        "reading": "わりびき",
        "mean": "လျှော့စျေး"
      },
      {
        "word": "一割",
        "reading": "いちわり",
        "mean": "၁၀ ရာခိုင်နှုန်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "倍",
    "hiragana": "ばい",
    "romaji": "bai",
    "meaning": "ဆ (Times)",
    "tag": "第4週2日目",
    "examples": [
      {
        "word": "二倍",
        "reading": "にばい",
        "mean": "နှစ်ဆ"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "支",
    "hiragana": "ささ(える) / し",
    "romaji": "sasa(eru) / shi",
    "meaning": "ထောက်ပံ့သည် / ငွေချေသည်",
    "tag": "第4週2日目",
    "examples": [
      {
        "word": "支払う",
        "reading": "しはらう",
        "mean": "ငွေချေသည်"
      },
      {
        "word": "支店",
        "reading": "してん",
        "mean": "ဘဏ်/ဆိုင်ခွဲ"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "払",
    "hiragana": "はら(う)",
    "romaji": "hara(u)",
    "meaning": "ငွေချေသည်",
    "tag": "第4週2日目",
    "examples": [
      {
        "word": "払う",
        "reading": "はらう",
        "mean": "ရှင်းသည်"
      },
      {
        "word": "払い戻し",
        "reading": "はらいもどし",
        "mean": "ငွေပြန်အမ်းခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "性",
    "hiragana": "せい / しょう",
    "romaji": "sei / shou",
    "meaning": "လိင် / သဘာဝစရိုက်",
    "tag": "第4週4日目",
    "examples": [
      {
        "word": "性別",
        "reading": "せいべつ",
        "mean": "ကျား/မ လိင်ခွဲခြားခြင်း"
      },
      {
        "word": "性格",
        "reading": "せいかく",
        "mean": "စိတ်နေစိတ်ထား"
      },
      {
        "word": "女性",
        "reading": "じょせい",
        "mean": "အမျိုးသမီး"
      },
      {
        "word": "男性",
        "reading": "だんせい",
        "mean": "အမျိုးသား"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "届",
    "hiragana": "とど(ける) / とど(く)",
    "romaji": "todo(keru) / todo(ku)",
    "meaning": "ပို့ဆောင်သည် / ရောက်ရှိသည်",
    "tag": "第4週5日目",
    "examples": [
      {
        "word": "届ける",
        "reading": "とどける",
        "mean": "ပို့ပေးသည်"
      },
      {
        "word": "届く",
        "reading": "とどく",
        "mean": "ရောက်ရှိသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "配",
    "hiragana": "はい / くば(る)",
    "romaji": "hai / kuba(ru)",
    "meaning": "ဝေငှသည် / ဖြန့်ဝေသည်",
    "tag": "第4週5日目",
    "examples": [
      {
        "word": "配達",
        "reading": "はいたつ",
        "mean": "ပို့ဆောင်ခြင်း"
      },
      {
        "word": "配送料",
        "reading": "はいそうりょう",
        "mean": "ပို့ဆောင်ခ"
      },
      {
        "word": "心配",
        "reading": "しんぱい",
        "mean": "စိတ်ပူပန်ခြင်း"
      },
      {
        "word": "配る",
        "reading": "くばる",
        "mean": "ဝေငှသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "換",
    "hiragana": "かん / か(える)",
    "romaji": "kan / ka(eru)",
    "meaning": "လဲလှယ်သည် / ပြောင်းလဲသည်",
    "tag": "第4週5日目",
    "examples": [
      {
        "word": "交換",
        "reading": "こうかん",
        "mean": "အပြန်အလှန်လဲလှယ်ခြင်း"
      },
      {
        "word": "乗り換える",
        "reading": "のりかえる",
        "mean": "ရထား/ဘတ်စ်ကား ပြောင်းစီးသည်"
      },
      {
        "word": "代金引換",
        "reading": "だいきんひきかえ",
        "mean": "ပစ္စည်းရောက်မှ ငွေချေစနစ်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "預",
    "hiragana": "あず(ける) / あず(かる) / よ",
    "romaji": "azu(keru) / yo",
    "meaning": "အပ်နှံသည် / ထိန်းသိမ်းပေးသည်",
    "tag": "第4週6日目",
    "examples": [
      {
        "word": "預ける",
        "reading": "あずける",
        "mean": "အပ်သည်"
      },
      {
        "word": "預金",
        "reading": "よきん",
        "mean": "ဘဏ်အပ်ငွေ"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "勤",
    "hiragana": "きん / つと(める)",
    "romaji": "kin / tsuto(meru)",
    "meaning": "အလုပ်လုပ်သည် / တာဝန်ထမ်းဆောင်သည်",
    "tag": "第4週6日目",
    "examples": [
      {
        "word": "通勤",
        "reading": "つうきん",
        "mean": "အလုပ်အသွားအပြန်"
      },
      {
        "word": "勤める",
        "reading": "つとめる",
        "mean": "အလုပ်ထမ်းဆောင်သည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "帯",
    "hiragana": "たい / おび",
    "romaji": "tai / obi",
    "meaning": "ခါးပတ် / အပိုင်းအခြား",
    "tag": "第4週6日目",
    "examples": [
      {
        "word": "携帯電話",
        "reading": "けいたいでんわ",
        "mean": "လက်ကိုင်ဖုန်း"
      },
      {
        "word": "時間帯",
        "reading": "じかんたい",
        "mean": "သတ်မှတ်အချိန်ကာလ"
      },
      {
        "word": "帯",
        "reading": "おび",
        "mean": "ဂျပန်ဝတ်စုံခါးပတ်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "遅",
    "hiragana": "おそ(い) / おく(れる) / ち",
    "romaji": "oso(i) / chi",
    "meaning": "နှေးကွေးသော / နောက်ကျသော",
    "tag": "第5週1日目",
    "examples": [
      {
        "word": "遅い",
        "reading": "おそい",
        "mean": "နှေးသော"
      },
      {
        "word": "遅れる",
        "reading": "おくれる",
        "mean": "နောက်ကျသည်"
      },
      {
        "word": "遅刻",
        "reading": "ちこく",
        "mean": "အချိန်နောက်ကျခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "失",
    "hiragana": "うしな(う) / しつ",
    "romaji": "shitsu",
    "meaning": "ဆုံးရှုံးသည် / အမှား",
    "tag": "第5週1日目",
    "examples": [
      {
        "word": "失礼",
        "reading": "しつれい",
        "mean": "ရိုင်းပျမှု/ခွင့်ပြုပါ"
      },
      {
        "word": "失敗",
        "reading": "しっぱい",
        "mean": "ကျရှုံးမှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "調",
    "hiragana": "しら(べる) / ととの(う) / ちょう",
    "romaji": "shira(beru) / chou",
    "meaning": "စုံစမ်းစစ်ဆေးသည် / ညှိနှိုင်းသည်",
    "tag": "第5週2日目",
    "examples": [
      {
        "word": "調べる",
        "reading": "しらべる",
        "mean": "ရှာဖွေစစ်ဆေးသည်"
      },
      {
        "word": "調子",
        "reading": "ちょうし",
        "mean": "အခြေအနေ/စည်းချက်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "査",
    "hiragana": "さ",
    "romaji": "sa",
    "meaning": "စစ်ဆေးသည်",
    "tag": "第5週2日目",
    "examples": [
      {
        "word": "調査",
        "reading": "ちょうさ",
        "mean": "စုံစမ်းစစ်ဆေးမှု"
      },
      {
        "word": "検査",
        "reading": "けんさ",
        "mean": "စစ်ဆေးမှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "移",
    "hiragana": "い / うつ(る) / うつ(す)",
    "romaji": "i / utsu(ru)",
    "meaning": "ပြောင်းရွှေ့သည် / ကူးစက်သည်",
    "tag": "第5週2日目",
    "examples": [
      {
        "word": "移動",
        "reading": "いどう",
        "mean": "ရွှေ့ပြောင်းသွားလာခြင်း"
      },
      {
        "word": "移る",
        "reading": "うつる",
        "mean": "ကူးပြောင်းသည်"
      },
      {
        "word": "移す",
        "reading": "うつす",
        "mean": "ရွှေ့ပြောင်းသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "難",
    "hiragana": "なん / むずか(しい)",
    "romaji": "nan / muzuka(shii)",
    "meaning": "ခက်ခဲသော / ဘေးဒုက္ခ",
    "tag": "第5週2日目",
    "examples": [
      {
        "word": "困難",
        "reading": "こんなん",
        "mean": "ခက်ခဲမှု"
      },
      {
        "word": "難問",
        "reading": "なんもん",
        "mean": "ခက်ခဲသောပုစ္ဆာ"
      },
      {
        "word": "難しい",
        "reading": "むずかしい",
        "mean": "ခက်ခဲသော"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "適",
    "hiragana": "てき",
    "romaji": "teki",
    "meaning": "သင့်တော်သော",
    "tag": "第5週3日目",
    "examples": [
      {
        "word": "適当",
        "reading": "てきとう",
        "mean": "သင့်လျော်သော"
      },
      {
        "word": "快適",
        "reading": "かいてき",
        "mean": "သက်တောင့်သက်သာရှိသော"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "選",
    "hiragana": "えら(ぶ) / せん",
    "romaji": "era(bu) / sen",
    "meaning": "ရွေးချယ်သည်",
    "tag": "第5週3日目",
    "examples": [
      {
        "word": "選ぶ",
        "reading": "えらぶ",
        "mean": "ရွေးသည်"
      },
      {
        "word": "選手",
        "reading": "せんしゅ",
        "mean": "အားကစားသမား"
      },
      {
        "word": "選挙",
        "reading": "せんきょ",
        "mean": "ရွေးကောက်ပွဲ"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "違",
    "hiragana": "ちが(う) / ちが(える) / い",
    "romaji": "chiga(u) / chiga(eru)",
    "meaning": "ကွဲပြားသည် / မှားယွင်းသည်",
    "tag": "第5週3日目",
    "examples": [
      {
        "word": "違う",
        "reading": "ちがう",
        "mean": "မတူညီ/မှားယွင်းသည်"
      },
      {
        "word": "間違い",
        "reading": "まちがい",
        "mean": "အမှား"
      },
      {
        "word": "間違える",
        "reading": "まちがえる",
        "mean": "မှားလုပ်မိသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "直",
    "hiragana": "ちょく / じき / なお(る) / なお(す)",
    "romaji": "choku / jiki / nao(ru)",
    "meaning": "တည့်မတ်သော / ပြင်ဆင်သည်",
    "tag": "第5週3日目",
    "examples": [
      {
        "word": "直線",
        "reading": "ちょくせん",
        "mean": "မျဉ်းဖြောင့်"
      },
      {
        "word": "直接",
        "reading": "ちょくせつ",
        "mean": "တိုက်ရိုက်"
      },
      {
        "word": "直る",
        "reading": "なおる",
        "mean": "ကောင်းမွန်သွားသည်"
      },
      {
        "word": "直す",
        "reading": "なおす",
        "mean": "ပြင်ဆင်သည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "復",
    "hiragana": "ふく",
    "romaji": "fuku",
    "meaning": "ပြန်လည် / ထပ်မံ",
    "tag": "第5週3日目",
    "examples": [
      {
        "word": "復習",
        "reading": "ふくしゅう",
        "mean": "စာပြန်နွှေးခြင်း"
      },
      {
        "word": "往復",
        "reading": "おうふく",
        "mean": "အသွားအပြန်"
      },
      {
        "word": "回復",
        "reading": "かいふく",
        "mean": "ပြန်လည်သက်သာလာခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "宿",
    "hiragana": "しゅく / やど",
    "romaji": "shuku / yado",
    "meaning": "တည်းခိုသည် / တည်းခိုခန်း",
    "tag": "第5週3日目",
    "examples": [
      {
        "word": "宿題",
        "reading": "しゅくだい",
        "mean": "အိမ်စာ"
      },
      {
        "word": "下宿",
        "reading": "げしゅく",
        "mean": "အဆောင်ငှားနေထိုင်ခြင်း"
      },
      {
        "word": "宿",
        "reading": "やど",
        "mean": "တည်းခိုခန်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "治",
    "hiragana": "じ / ち",
    "romaji": "ji / chi",
    "meaning": "အုပ်ချုပ်သည် / ပျောက်ကင်းသည်",
    "tag": "第5週5日目",
    "examples": [
      {
        "word": "政治",
        "reading": "せいじ",
        "mean": "နိုင်ငံရေး"
      },
      {
        "word": "治療",
        "reading": "ちりょう",
        "mean": "ကုသမှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "求",
    "hiragana": "きゅう / もと(める)",
    "romaji": "kyuu / moto(meru)",
    "meaning": "တောင်းဆိုသည် / ရှာဖွေလိုလားသည်",
    "tag": "第6週2日目",
    "examples": [
      {
        "word": "要求",
        "reading": "ようきゅう",
        "mean": "တောင်းဆိုချက်"
      },
      {
        "word": "求人",
        "reading": "きゅうじん",
        "mean": "အလုပ်ခေါ်ယူခြင်း"
      },
      {
        "word": "請求書",
        "reading": "せいきゅうしょ",
        "mean": "ငွေတောင်းခံလွှာ"
      },
      {
        "word": "求める",
        "reading": "もとめる",
        "mean": "တောင်းဆိုလိုလားသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "募",
    "hiragana": "ぼ / つの(る)",
    "romaji": "bo / tsuno(ru)",
    "meaning": "ခေါ်ယူစုဆောင်းသည်",
    "tag": "第6週2日目",
    "examples": [
      {
        "word": "募集",
        "reading": "ぼしゅう",
        "mean": "လျှောက်လွှာခေါ်ယူခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "容",
    "hiragana": "よう",
    "romaji": "you",
    "meaning": "ပါဝင်မှု / ရုပ်သွင်",
    "tag": "第6週2日目",
    "examples": [
      {
        "word": "美容院",
        "reading": "びよういん",
        "mean": "အလှပြင်ဆိုင်"
      },
      {
        "word": "内容",
        "reading": "ないよう",
        "mean": "အကြောင်းအရာ/ပါဝင်မှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "勝",
    "hiragana": "しょう / か(つ) / まさ(る)",
    "romaji": "shou / ka(tsu)",
    "meaning": "အနိုင်ရသည်",
    "tag": "第6週3日目",
    "examples": [
      {
        "word": "優勝",
        "reading": "ゆうしょう",
        "mean": "ဗိုလ်စွဲခြင်း/ပထမရရှိခြင်း"
      },
      {
        "word": "決勝",
        "reading": "けっしょう",
        "mean": "ဗိုလ်လုပွဲ"
      },
      {
        "word": "勝つ",
        "reading": "かつ",
        "mean": "အနိုင်ရသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "負",
    "hiragana": "ふ / ま(ける) / お(う)",
    "romaji": "fu / ma(keru)",
    "meaning": "ရှုံးနိမ့်သည် / သယ်ဆောင်သည်",
    "tag": "第6週3日目",
    "examples": [
      {
        "word": "勝負",
        "reading": "しょうぶ",
        "mean": "အရှုံးအနိုင်အပြိုင်"
      },
      {
        "word": "負ける",
        "reading": "まける",
        "mean": "ရှုံးသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "投",
    "hiragana": "とう / な(げる)",
    "romaji": "tou / na(geru)",
    "meaning": "ပစ်ပေါက်သည် / ပစ်ချသည်",
    "tag": "第6週3日目",
    "examples": [
      {
        "word": "投手",
        "reading": "とうしゅ",
        "mean": "ဘေ့စ်ဘောပစ်သူ(pitcher)"
      },
      {
        "word": "投げる",
        "reading": "なげる",
        "mean": "ပစ်ပေါက်သည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "経",
    "hiragana": "けい",
    "romaji": "kei",
    "meaning": "ဖြတ်သန်းသည် / စီးပွားရေး",
    "tag": "第6週4日目",
    "examples": [
      {
        "word": "経済",
        "reading": "けいざい",
        "mean": "စီးပွားရေး"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "済",
    "hiragana": "ざい / さい",
    "romaji": "zai / sai",
    "meaning": "ပြီးစီးသည်",
    "tag": "第6週4日目",
    "examples": [
      {
        "word": "経済",
        "reading": "けいざい",
        "mean": "စီးပွားရေး"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "貿",
    "hiragana": "ぼう",
    "romaji": "bou",
    "meaning": "ကုန်သွယ်မှု",
    "tag": "第6週4日目",
    "examples": [
      {
        "word": "貿易",
        "reading": "ぼうえき",
        "mean": "နိုင်ငံတကာကုန်သွယ်မှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "易",
    "hiragana": "やさ(しい) / えき / い",
    "romaji": "yasa(shii) / eki / i",
    "meaning": "လွယ်ကူသော / ကုန်သွယ်သည်",
    "tag": "第6週4日目",
    "examples": [
      {
        "word": "貿易",
        "reading": "ぼうえき",
        "mean": "ကုန်သွယ်ရေး"
      },
      {
        "word": "容易な",
        "reading": "よういな",
        "mean": "လွယ်ကူသော"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "因",
    "hiragana": "いん / よ(る)",
    "romaji": "in / yo(ru)",
    "meaning": "အကြောင်းတရား",
    "tag": "第6週5日目",
    "examples": [
      {
        "word": "原因",
        "reading": "げんいん",
        "mean": "အကြောင်းရင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "際",
    "hiragana": "さい / きわ",
    "romaji": "sai / kiwa",
    "meaning": "အခါသမယ / နယ်နိမိတ်",
    "tag": "第6週5日目",
    "examples": [
      {
        "word": "国際",
        "reading": "こくさい",
        "mean": "နိုင်ငံတကာ"
      },
      {
        "word": "交際",
        "reading": "こうさい",
        "mean": "တွဲခေါ်ပေါင်းသင်းခြင်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "議",
    "hiragana": "ぎ",
    "romaji": "gi",
    "meaning": "ဆွေးနွေးတိုင်ပင်သည်",
    "tag": "第6週5日目",
    "examples": [
      {
        "word": "会議",
        "reading": "かいぎ",
        "mean": "အစည်းအဝေး"
      },
      {
        "word": "議員",
        "reading": "ぎいん",
        "mean": "လွှတ်တော်အမတ်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "活",
    "hiragana": "かつ",
    "romaji": "katsu",
    "meaning": "တက်ကြွသော / အသက်ဝင်သော",
    "tag": "第6週5日目",
    "examples": [
      {
        "word": "生活",
        "reading": "せいかつ",
        "mean": "လူနေမှုဘဝ"
      },
      {
        "word": "活動",
        "reading": "かつどう",
        "mean": "လှုပ်ရှားဆောင်ရွက်မှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "変",
    "hiragana": "へん / か(わる) / か(える)",
    "romaji": "hen / ka(waru)",
    "meaning": "ပြောင်းလဲသည် / ထူးဆန်းသော",
    "tag": "第6週5日目",
    "examples": [
      {
        "word": "大変",
        "reading": "たいへん",
        "mean": "ပင်ပန်းခက်ခဲသော"
      },
      {
        "word": "変化",
        "reading": "へんか",
        "mean": "ပြောင်းလဲခြင်း"
      },
      {
        "word": "変わる",
        "reading": "かわる",
        "mean": "ပြောင်းလဲသည်"
      },
      {
        "word": "変える",
        "reading": "かえる",
        "mean": "ပြောင်းလဲစေသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "政",
    "hiragana": "せい",
    "romaji": "sei",
    "meaning": "နိုင်ငံရေး",
    "tag": "第6週6日目",
    "examples": [
      {
        "word": "政治",
        "reading": "せいじ",
        "mean": "နိုင်ငံရေး"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "府",
    "hiragana": "ふ",
    "romaji": "fu",
    "meaning": "အစိုးရ / မြို့တော်စီရင်စု",
    "tag": "第6週6日目",
    "examples": [
      {
        "word": "政府",
        "reading": "せいふ",
        "mean": "အစိုးရ"
      },
      {
        "word": "都道府県",
        "reading": "とどうふけん",
        "mean": "ဂျပန်စီရင်စုများ"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "改",
    "hiragana": "かい / あらた(める)",
    "romaji": "kai / arata(meru)",
    "meaning": "ပြုပြင်ပြောင်းလဲသည်",
    "tag": "第6週6日目",
    "examples": [
      {
        "word": "改正",
        "reading": "かいせい",
        "mean": "ပြင်ဆင်သတ်မှတ်ခြင်း"
      },
      {
        "word": "改札口",
        "reading": "かいさつぐち",
        "mean": "လက်မှတ်စစ်ဂိတ်"
      },
      {
        "word": "改める",
        "reading": "あらためる",
        "mean": "ပြုပြင်သည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "否",
    "hiragana": "ひ / いな",
    "romaji": "hi / ina",
    "meaning": "ငြင်းပယ်သည် / မဟုတ်မမှန်",
    "tag": "第6週6日目",
    "examples": [
      {
        "word": "否定",
        "reading": "ひてい",
        "mean": "ငြင်းပယ်ခြင်း"
      },
      {
        "word": "否定的",
        "reading": "ひていてき",
        "mean": "အဆိုးမြင်ငြင်းပယ်သော"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "実",
    "hiragana": "じつ / み / みの(る)",
    "romaji": "jitsu / mi",
    "meaning": "အမှန်တရား / အသီးအပွင့်",
    "tag": "第6週6日目",
    "examples": [
      {
        "word": "実際に",
        "reading": "じっさいに",
        "mean": "လက်တွေ့အားဖြင့်"
      },
      {
        "word": "実は",
        "reading": "じつは",
        "mean": "အမှန်တကယ်တော့"
      },
      {
        "word": "実験",
        "reading": "じっけん",
        "mean": "လက်တွေ့စမ်းသပ်မှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "欠",
    "hiragana": "けつ / か(ける)",
    "romaji": "ketsu / ka(keru)",
    "meaning": "ချို့ယွင်းချက် / ပျက်ကွက်သည်",
    "tag": "第6週6日目",
    "examples": [
      {
        "word": "欠点",
        "reading": "けってん",
        "mean": "အားနည်းချက်"
      },
      {
        "word": "欠席",
        "reading": "けっせき",
        "mean": "ပျက်ကွက်ခြင်း"
      },
      {
        "word": "欠ける",
        "reading": "かける",
        "mean": "လိုအပ်ချို့ယွင်းသည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "亡",
    "hiragana": "ぼう / な(くなる)",
    "romaji": "bou / na(kunaru)",
    "meaning": "ကွယ်လွန်သည် / မရှိတော့သော",
    "tag": "第6週7日目",
    "examples": [
      {
        "word": "死亡",
        "reading": "しぼう",
        "mean": "သေဆုံးခြင်း"
      },
      {
        "word": "亡くなる",
        "reading": "なくなる",
        "mean": "ကွယ်လွန်သည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "忘",
    "hiragana": "ぼう / わす(れる)",
    "romaji": "bou / wasu(reru)",
    "meaning": "မေ့လျော့သည်",
    "tag": "第6週7日目",
    "examples": [
      {
        "word": "忘年会",
        "reading": "ぼうねんかい",
        "mean": "နှစ်ကုန်နှုတ်ဆက်ညစာစားပွဲ"
      },
      {
        "word": "忘れる",
        "reading": "わすれる",
        "mean": "မေ့သွားသည်"
      },
      {
        "word": "忘れ物",
        "reading": "わすれもの",
        "mean": "ကျန်ခဲ့သောပစ္စည်း"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "労",
    "hiragana": "ろう",
    "romaji": "rou",
    "meaning": "လုပ်အား / ပင်ပန်းမှု",
    "tag": "第6週7日目",
    "examples": [
      {
        "word": "労働",
        "reading": "ろうどう",
        "mean": "ကာယ/ဉာဏလုပ်အား"
      },
      {
        "word": "苦労",
        "reading": "くろう",
        "mean": "ပင်ပန်းဆင်းရဲမှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "加",
    "hiragana": "か / くわ(える) / くわ(わる)",
    "romaji": "ka / kuwa(eru)",
    "meaning": "ပေါင်းထည့်သည် / တိုးပွားသည်",
    "tag": "第6週7日目",
    "examples": [
      {
        "word": "参加",
        "reading": "さんか",
        "mean": "ပါဝင်ခြင်း"
      },
      {
        "word": "増加",
        "reading": "ぞうか",
        "mean": "တိုးပွားလာခြင်း"
      },
      {
        "word": "加える",
        "reading": "くわえる",
        "mean": "ပေါင်းထည့်သည်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "情",
    "hiragana": "じょう / せい / なさ(け)",
    "romaji": "jou / nasa(ke)",
    "meaning": "သတင်းအချက်အလက် / ခံစားချက် / စာနာမှု",
    "tag": "第6週7日目",
    "examples": [
      {
        "word": "情報",
        "reading": "じょうほう",
        "mean": "သတင်းအချက်အလက်"
      },
      {
        "word": "表情",
        "reading": "ひょうじょう",
        "mean": "မျက်နှာအမူအရာ"
      },
      {
        "word": "事情",
        "reading": "じじょう",
        "mean": "အခြေအနေအကြောင်းရင်း"
      },
      {
        "word": "感情",
        "reading": "かんじょう",
        "mean": "ခံစားချက်"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "反",
    "hiragana": "はん / たん / そ(る)",
    "romaji": "han / tan",
    "meaning": "ဆန့်ကျင်ဘက် / ကန့်ကွက်သည်",
    "tag": "第6週7日目",
    "examples": [
      {
        "word": "反対",
        "reading": "はんたい",
        "mean": "ဆန့်ကျင်ကန့်ကွက်ခြင်း"
      },
      {
        "word": "違反",
        "reading": "いはん",
        "mean": "ဖောက်ဖျက်မှု"
      }
    ],
    "isHot": true,
    "hotTag": "🔥 မေးခွန်းဟောင်း အမေးဆုံး"
  },
  {
    "kanji": "駐",
    "hiragana": "ちゅう",
    "romaji": "chuu",
    "meaning": "ကားရပ်နားသည်",
    "tag": "第1週1日目",
    "examples": [
      {
        "word": "駐車場",
        "reading": "ちゅうしゃじょう",
        "mean": "ကားပါကင်"
      },
      {
        "word": "駐車",
        "reading": "ちゅうしゃ",
        "mean": "ကားရပ်ခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "無",
    "hiragana": "な(い) / む / ぶ",
    "romaji": "mu / bu",
    "meaning": "မရှိသော / အခမဲ့",
    "tag": "第1週1日目",
    "examples": [
      {
        "word": "無料",
        "reading": "むりょう",
        "mean": "အခမဲ့"
      },
      {
        "word": "無理",
        "reading": "むり",
        "mean": "မဖြစ်နိုင်သော"
      },
      {
        "word": "無休",
        "reading": "むきゅう",
        "mean": "ပိတ်ရက်မရှိ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "満",
    "hiragana": "み(ちる) / まん",
    "romaji": "man",
    "meaning": "ပြည့်လျှံသော",
    "tag": "第1週1日目",
    "examples": [
      {
        "word": "満車",
        "reading": "まんしゃ",
        "mean": "ကားအပြည့်"
      },
      {
        "word": "満員",
        "reading": "まんいん",
        "mean": "လူပြည့်"
      },
      {
        "word": "満足",
        "reading": "まんぞく",
        "mean": "ကျေနပ်အားရမှု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "向",
    "hiragana": "む(かう) / む(く) / こう",
    "romaji": "muka(u) / kou",
    "meaning": "ဦးတည်သည် / မျက်နှာမူသည်",
    "tag": "第1週1日目",
    "examples": [
      {
        "word": "向かう",
        "reading": "むかう",
        "mean": "ဦးတည်သွားသည်"
      },
      {
        "word": "方向",
        "reading": "ほうこう",
        "mean": "ဦးတည်ရာ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "禁",
    "hiragana": "きん",
    "romaji": "kin",
    "meaning": "တားမြစ်သည်",
    "tag": "第1週1日目",
    "examples": [
      {
        "word": "禁止",
        "reading": "きんし",
        "mean": "တားမြစ်ချက်"
      },
      {
        "word": "禁煙",
        "reading": "きんえん",
        "mean": "ဆေးလိပ်မသောက်ရ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "関",
    "hiragana": "せき / かん",
    "romaji": "kan",
    "meaning": "ပတ်သက်သည်",
    "tag": "第1週1日目",
    "examples": [
      {
        "word": "関心",
        "reading": "かんしん",
        "mean": "စိတ်ဝင်စားမှု"
      },
      {
        "word": "関係",
        "reading": "かんけい",
        "mean": "ပတ်သက်မှု"
      },
      {
        "word": "関する",
        "reading": "かんする",
        "mean": "နှင့်ပတ်သက်သော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "係",
    "hiragana": "かかり / けい",
    "romaji": "kakari / kei",
    "meaning": "တာဝန်ကျသူ / ဆက်နွှယ်မှု",
    "tag": "第1週1日目",
    "examples": [
      {
        "word": "係員",
        "reading": "かかりいん",
        "mean": "တာဝန်ကျဝန်ထမ်း"
      },
      {
        "word": "関係",
        "reading": "かんけい",
        "mean": "ဆက်ဆံရေး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "横",
    "hiragana": "よこ / おう",
    "romaji": "yoko / ou",
    "meaning": "ဘေးတိုက် / ကန့်လန့်",
    "tag": "第1週2日目",
    "examples": [
      {
        "word": "横断歩道",
        "reading": "おうだんほどう",
        "mean": "လူကူးမျဉ်းကျား"
      },
      {
        "word": "横",
        "reading": "よこ",
        "mean": "ဘေးဘက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "押",
    "hiragana": "お(す) / お(さえる)",
    "romaji": "o(su)",
    "meaning": "တွန်းသည် / နှိပ်သည်",
    "tag": "第1週2日目",
    "examples": [
      {
        "word": "押す",
        "reading": "おす",
        "mean": "တွန်းသည်"
      },
      {
        "word": "押し入れ",
        "reading": "おしいれ",
        "mean": "နံရံကပ်ဗီရို"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "式",
    "hiragana": "しき",
    "romaji": "shiki",
    "meaning": "အခမ်းအနား / ပုံစံ",
    "tag": "第1週2日目",
    "examples": [
      {
        "word": "結婚式",
        "reading": "けっこんしき",
        "mean": "မင်္ဂလာဆောင်"
      },
      {
        "word": "入学式",
        "reading": "にゅうがくしき",
        "mean": "ကျောင်းဝင်ပွဲ"
      },
      {
        "word": "数式",
        "reading": "すうしき",
        "mean": "သင်္ချာညီမျှခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "信",
    "hiragana": "しん",
    "romaji": "shin",
    "meaning": "ယုံကြည်သည် / ဆက်သွယ်သည်",
    "tag": "第1週2日目",
    "examples": [
      {
        "word": "信じる",
        "reading": "しんじる",
        "mean": "ယုံသည်"
      },
      {
        "word": "信用",
        "reading": "しんよう",
        "mean": "ယုံကြည်ကိုးစားမှု"
      },
      {
        "word": "自信",
        "reading": "じしん",
        "mean": "မိမိကိုယ်ကိုယုံကြည်မှု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "号",
    "hiragana": "ごう",
    "romaji": "gou",
    "meaning": "နံပါတ် / သင်္ကေတ",
    "tag": "第1週2日目",
    "examples": [
      {
        "word": "信号",
        "reading": "しんごう",
        "mean": "မီးပွိုင့်"
      },
      {
        "word": "番号",
        "reading": "ばんごう",
        "mean": "နံပါတ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "飛",
    "hiragana": "と(ぶ) / ひ",
    "romaji": "to(bu) / hi",
    "meaning": "ပျံသန်းသည်",
    "tag": "第1週2日目",
    "examples": [
      {
        "word": "飛ぶ",
        "reading": "とぶ",
        "mean": "ပျံသည်"
      },
      {
        "word": "飛行場",
        "reading": "ひこうじょう",
        "mean": "လေဆိပ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "非",
    "hiragana": "ひ",
    "romaji": "hi",
    "meaning": "မဟုတ်သော / အမှား",
    "tag": "第1週3日目",
    "examples": [
      {
        "word": "非常",
        "reading": "ひじょう",
        "mean": "အရေးပေါ် / အလွန်"
      },
      {
        "word": "非難",
        "reading": "ひなん",
        "mean": "ဝေဖန်ပြစ်တင်မှု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "常",
    "hiragana": "つね / じょう",
    "romaji": "tsune / jou",
    "meaning": "အမြဲတမ်း / ပုံမှန်",
    "tag": "第1週3日目",
    "examples": [
      {
        "word": "日常",
        "reading": "にちじょう",
        "mean": "နေ့စဉ်ပုံမှန်"
      },
      {
        "word": "非常口",
        "reading": "ひじょうぐち",
        "mean": "အရေးပေါ်ထွက်ပေါက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "階",
    "hiragana": "かい",
    "romaji": "kai",
    "meaning": "အထပ်",
    "tag": "第1週3日目",
    "examples": [
      {
        "word": "階段",
        "reading": "かいだん",
        "mean": "လှေကား"
      },
      {
        "word": "二階",
        "reading": "にかい",
        "mean": "ဒုတိယထပ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "段",
    "hiragana": "だん",
    "romaji": "dan",
    "meaning": "အဆင့် / လှေကားထစ်",
    "tag": "第1週3日目",
    "examples": [
      {
        "word": "階段",
        "reading": "かいだん",
        "mean": "လှေကား"
      },
      {
        "word": "値段",
        "reading": "ねだん",
        "mean": "စျေးနှုန်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "箱",
    "hiragana": "はこ / ばこ",
    "romaji": "hako / bako",
    "meaning": "သေတ္တာ / ပုံး",
    "tag": "第1週3日目",
    "examples": [
      {
        "word": "ゴミ箱",
        "reading": "ごみばこ",
        "mean": "အမှိုက်ပုံး"
      },
      {
        "word": "本箱",
        "reading": "ほんばこ",
        "mean": "စာအုပ်စင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "線",
    "hiragana": "せん",
    "romaji": "sen",
    "meaning": "မျဉ်း / ရထားလိုင်း",
    "tag": "第1週4日目",
    "examples": [
      {
        "word": "線",
        "reading": "せん",
        "mean": "လိုင်း"
      },
      {
        "word": "新幹線",
        "reading": "しんかんせん",
        "mean": "ကျည်ဆန်ရထား"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "面",
    "hiragana": "おもて / つら / めん",
    "romaji": "omote / men",
    "meaning": "မျက်နှာပြင် / ဘက်ခြမ်း",
    "tag": "第1週4日目",
    "examples": [
      {
        "word": "面白い",
        "reading": "おもしろい",
        "mean": "စိတ်ဝင်စားဖွယ်"
      },
      {
        "word": "面接",
        "reading": "めんせつ",
        "mean": "လူတွေ့စစ်ဆေးခြင်း (Interview)"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "各",
    "hiragana": "おの / かく",
    "romaji": "kaku",
    "meaning": "အသီးသီး / တစ်ခုချင်း",
    "tag": "第1週4日目",
    "examples": [
      {
        "word": "各国",
        "reading": "かっこく",
        "mean": "နိုင်ငံအသီးသီး"
      },
      {
        "word": "各駅停車",
        "reading": "かくえきていしゃ",
        "mean": "ဘူတာတိုင်းရပ်ရထား"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "次",
    "hiragana": "つぎ / じ",
    "romaji": "tsugi / ji",
    "meaning": "နောက်ထပ် / အလှည့်",
    "tag": "第1週4日目",
    "examples": [
      {
        "word": "次",
        "reading": "つぎ",
        "mean": "နောက်တစ်ခု"
      },
      {
        "word": "目次",
        "reading": "もくじ",
        "mean": "မာတိကာ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "快",
    "hiragana": "こころよ(い) / かい",
    "romaji": "kai",
    "meaning": "သာယာမြန်ဆန်သော",
    "tag": "第1週4日目",
    "examples": [
      {
        "word": "快速",
        "reading": "かいそく",
        "mean": "အမြန်ရထား"
      },
      {
        "word": "快晴",
        "reading": "かいせい",
        "mean": "သာယာကြည်လင်သောမိုးလေဝသ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "速",
    "hiragana": "はや(い) / そく",
    "romaji": "haya(i) / soku",
    "meaning": "မြန်ဆန်သော / အရှိန်",
    "tag": "第1週4日目",
    "examples": [
      {
        "word": "速い",
        "reading": "はやい",
        "mean": "မြန်သော"
      },
      {
        "word": "速度",
        "reading": "そくど",
        "mean": "အရှိန်နှုန်း"
      },
      {
        "word": "早速",
        "reading": "さっそく",
        "mean": "ချက်ချင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "鉄",
    "hiragana": "てつ",
    "romaji": "tetsu",
    "meaning": "သံမဏိ / မီးရထား",
    "tag": "第1週4日目",
    "examples": [
      {
        "word": "地下鉄",
        "reading": "ちかてつ",
        "mean": "မြေအောက်ရထား"
      },
      {
        "word": "鉄道",
        "reading": "てつどう",
        "mean": "မီးရထားလမ်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "指",
    "hiragana": "ゆび / さ(す) / し",
    "romaji": "yubi / shi",
    "meaning": "လက်ချောင်း / ညွှန်ပြသည်",
    "tag": "第1週5日目",
    "examples": [
      {
        "word": "指",
        "reading": "ゆび",
        "mean": "လက်ချောင်း"
      },
      {
        "word": "指定席",
        "reading": "していせき",
        "mean": "ဘိုကင်ထိုင်ခုံ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "定",
    "hiragana": "さだ(める) / てい",
    "romaji": "tei",
    "meaning": "သတ်မှတ်သည်",
    "tag": "第1週5日目",
    "examples": [
      {
        "word": "定休日",
        "reading": "ていきゅうび",
        "mean": "ပုံမှန်ပိတ်ရက်"
      },
      {
        "word": "予定",
        "reading": "よてい",
        "mean": "အစီအစဉ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "席",
    "hiragana": "せき",
    "romaji": "seki",
    "meaning": "ထိုင်ခုံ",
    "tag": "第1週5日目",
    "examples": [
      {
        "word": "席",
        "reading": "せき",
        "mean": "ထိုင်ခုံ"
      },
      {
        "word": "指定席",
        "reading": "していせき",
        "mean": "ဘိုကင်ထိုင်ခုံ"
      },
      {
        "word": "自由席",
        "reading": "じゆうせき",
        "mean": "လွတ်လပ်စွာထိုင်နိုင်သောခုံ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "由",
    "hiragana": "よし / ゆう / ゆ",
    "romaji": "yuu",
    "meaning": "အကြောင်းရင်း / လွတ်လပ်ခွင့်",
    "tag": "第1週5日目",
    "examples": [
      {
        "word": "自由",
        "reading": "じゆう",
        "mean": "လွတ်လပ်မှု"
      },
      {
        "word": "理由",
        "reading": "りゆう",
        "mean": "အကြောင်းပြချက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "番",
    "hiragana": "ばん",
    "romaji": "ban",
    "meaning": "နံပါတ် / အလှည့်",
    "tag": "第1週5日目",
    "examples": [
      {
        "word": "一番",
        "reading": "いちばん",
        "mean": "အကောင်းဆုံး/နံပါတ်တစ်"
      },
      {
        "word": "交番",
        "reading": "こうばん",
        "mean": "ရဲကင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "窓",
    "hiragana": "まど / そう",
    "romaji": "mado / sou",
    "meaning": "ပြတင်းပေါက်",
    "tag": "第1週5日目",
    "examples": [
      {
        "word": "窓",
        "reading": "まど",
        "mean": "ပြတင်းပေါက်"
      },
      {
        "word": "窓口",
        "reading": "まどぐち",
        "mean": "ကောင်တာပေါက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "側",
    "hiragana": "がわ / そく",
    "romaji": "gawa / soku",
    "meaning": "ဘက်ခြမ်း / အနား",
    "tag": "第1週5日目",
    "examples": [
      {
        "word": "右側",
        "reading": "みぎがわ",
        "mean": "ညာဘက်ခြမ်း"
      },
      {
        "word": "側面",
        "reading": "そくめん",
        "mean": "ဘေးမျက်နှာပြင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "路",
    "hiragana": "じ / ろ",
    "romaji": "ro",
    "meaning": "လမ်း",
    "tag": "第1週5日目",
    "examples": [
      {
        "word": "道路",
        "reading": "どうろ",
        "mean": "ကားလမ်း"
      },
      {
        "word": "線路",
        "reading": "せんろ",
        "mean": "ရထားသံလမ်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "停",
    "hiragana": "てい",
    "romaji": "tei",
    "meaning": "ရပ်တန့်သည်",
    "tag": "第1週6日目",
    "examples": [
      {
        "word": "停車",
        "reading": "ていしゃ",
        "mean": "ရထား/ကားရပ်ခြင်း"
      },
      {
        "word": "バス停",
        "reading": "ばすてい",
        "mean": "ဘတ်စ်ကားမှတ်တိုင်"
      },
      {
        "word": "停電",
        "reading": "ていでん",
        "mean": "မီးပျက်ခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "券",
    "hiragana": "けん",
    "romaji": "ken",
    "meaning": "လက်မှတ် / ကူပွန်",
    "tag": "第1週6日目",
    "examples": [
      {
        "word": "乗車券",
        "reading": "じょうしゃけん",
        "mean": "စီးနင်းလက်မှတ်"
      },
      {
        "word": "定期券",
        "reading": "ていきけん",
        "mean": "ရာသီလက်မှတ်"
      },
      {
        "word": "旅券",
        "reading": "りょけん",
        "mean": "ပတ်စပို့"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "現",
    "hiragana": "あらわ(れる) / げん",
    "romaji": "arawa(reru) / gen",
    "meaning": "ပေါ်ပေါက်သည် / လက်ရှိ",
    "tag": "第1週6日目",
    "examples": [
      {
        "word": "現れる",
        "reading": "あらわれる",
        "mean": "ပေါ်လာသည်"
      },
      {
        "word": "現金",
        "reading": "げんきん",
        "mean": "လက်ငင်းငွေ"
      },
      {
        "word": "現代",
        "reading": "げんだい",
        "mean": "မျက်မှောက်ခေတ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "両",
    "hiragana": "りょう",
    "romaji": "ryou",
    "meaning": "နှစ်ဖက် / ကားတွဲ",
    "tag": "第1週6日目",
    "examples": [
      {
        "word": "両替",
        "reading": "りょうがえ",
        "mean": "ငွေလဲခြင်း"
      },
      {
        "word": "車両",
        "reading": "しゃりょう",
        "mean": "ရထားတွဲ"
      },
      {
        "word": "両親",
        "reading": "りょうしん",
        "mean": "မိဘနှစ်ပါး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "優",
    "hiragana": "やさ(しい) / すぐ(れる) / ゆう",
    "romaji": "yasa(shii) / yuu",
    "meaning": "ကြင်နာသော / ထူးချွန်သော",
    "tag": "第1週6日目",
    "examples": [
      {
        "word": "優しい",
        "reading": "やさしい",
        "mean": "ကြင်နာသော"
      },
      {
        "word": "優先",
        "reading": "ゆうせん",
        "mean": "ဦးစားပေး"
      },
      {
        "word": "女優",
        "reading": "じょゆう",
        "mean": "မင်းသမီး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "座",
    "hiragana": "すわ(る) / ざ",
    "romaji": "suwa(ru) / za",
    "meaning": "ထိုင်သည် / နေရာ",
    "tag": "第1週6日目",
    "examples": [
      {
        "word": "座る",
        "reading": "すわる",
        "mean": "ထိုင်သည်"
      },
      {
        "word": "座席",
        "reading": "ざせき",
        "mean": "ထိုင်ခုံ"
      },
      {
        "word": "口座",
        "reading": "こうざ",
        "mean": "ဘဏ်စာရင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "降",
    "hiragana": "お(りる) / お(ろす) / ふ(る) / こう",
    "romaji": "o(riru) / fu(ru) / kou",
    "meaning": "ဆင်းသက်သည် / မိုးရွာသည်",
    "tag": "第1週6日目",
    "examples": [
      {
        "word": "降りる",
        "reading": "おりる",
        "mean": "ဆင်းသည်"
      },
      {
        "word": "降る",
        "reading": "ふる",
        "mean": "မိုးရွာသည်"
      },
      {
        "word": "以降",
        "reading": "いこう",
        "mean": "နောက်ပိုင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "未",
    "hiragana": "み",
    "romaji": "mi",
    "meaning": "မ...သေးသော / မပြည့်မီ",
    "tag": "第1週7日目",
    "examples": [
      {
        "word": "未定",
        "reading": "みてい",
        "mean": "မသတ်မှတ်ရသေးသော"
      },
      {
        "word": "未来",
        "reading": "みらい",
        "mean": "အနာဂတ်"
      },
      {
        "word": "未満",
        "reading": "みまん",
        "mean": "မပြည့်မီ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "末",
    "hiragana": "まつ / すえ",
    "romaji": "matsu / sue",
    "meaning": "အဆုံး / အစွန်",
    "tag": "第1週7日目",
    "examples": [
      {
        "word": "週末",
        "reading": "しゅうまつ",
        "mean": "စနေတနင်္ဂနွေပိတ်ရက်"
      },
      {
        "word": "年末",
        "reading": "ねんまつ",
        "mean": "နှစ်ကုန်"
      },
      {
        "word": "月末",
        "reading": "げつまつ",
        "mean": "လကုန်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "若",
    "hiragana": "わか(い)",
    "romaji": "waka(i)",
    "meaning": "ငယ်ရွယ်သော",
    "tag": "第1週7日目",
    "examples": [
      {
        "word": "若い",
        "reading": "わかい",
        "mean": "ငယ်ရွယ်သော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "晩",
    "hiragana": "ばん",
    "romaji": "ban",
    "meaning": "ညနေ / ည",
    "tag": "第1週7日目",
    "examples": [
      {
        "word": "晩",
        "reading": "ばん",
        "mean": "ည"
      },
      {
        "word": "晩ご飯",
        "reading": "ばんごはん",
        "mean": "ညစာ"
      },
      {
        "word": "今晩",
        "reading": "こんばん",
        "mean": "ယနေ့ည"
      },
      {
        "word": "毎晩",
        "reading": "まいばん",
        "mean": "ညတိုင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "島",
    "hiragana": "とう / しま",
    "romaji": "tou / shima",
    "meaning": "ကျွန်း",
    "tag": "第1週7日目",
    "examples": [
      {
        "word": "島",
        "reading": "しま",
        "mean": "ကျွန်း"
      },
      {
        "word": "半島",
        "reading": "はんとう",
        "mean": "ကျွန်းဆွယ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "皿",
    "hiragana": "さら",
    "romaji": "sara",
    "meaning": "ပန်းကန်ပြား",
    "tag": "第1週7日目",
    "examples": [
      {
        "word": "皿",
        "reading": "さら",
        "mean": "ပန်းကန်ပြား"
      },
      {
        "word": "灰皿",
        "reading": "はいざら",
        "mean": "ဆေးလိပ်ပြာခွက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "血",
    "hiragana": "けつ / ち",
    "romaji": "ketsu / chi",
    "meaning": "သွေး",
    "tag": "第1週7日目",
    "examples": [
      {
        "word": "出血",
        "reading": "しゅっけつ",
        "mean": "သွေးထွက်ခြင်း"
      },
      {
        "word": "血",
        "reading": "ち",
        "mean": "သွေး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "助",
    "hiragana": "じょ / たす(ける)",
    "romaji": "jo / tasu(keru)",
    "meaning": "ကူညီသည် / ကယ်ဆယ်သည်",
    "tag": "第1週7日目",
    "examples": [
      {
        "word": "救助",
        "reading": "きゅうじょ",
        "mean": "ကယ်ဆယ်ရေး"
      },
      {
        "word": "助ける",
        "reading": "たすける",
        "mean": "ကူညီကယ်ဆယ်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "準",
    "hiragana": "じゅん",
    "romaji": "jun",
    "meaning": "စံနှုန်း / ပြင်ဆင်သည်",
    "tag": "第2週1日目",
    "examples": [
      {
        "word": "準備",
        "reading": "じゅんび",
        "mean": "ပြင်ဆင်ခြင်း"
      },
      {
        "word": "準急",
        "reading": "じゅんきゅう",
        "mean": "တစ်ပိုင်းအမြန်ရထား"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "営",
    "hiragana": "えい",
    "romaji": "ei",
    "meaning": "လုပ်ကိုင်လည်ပတ်သည်",
    "tag": "第2週1日目",
    "examples": [
      {
        "word": "営業",
        "reading": "えいぎょう",
        "mean": "ဆိုင်ဖွင့်/အရောင်းအဝယ်"
      },
      {
        "word": "経営",
        "reading": "けいえい",
        "mean": "စီမံခန့်ခွဲမှု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "閉",
    "hiragana": "し(める) / と(じる) / へい",
    "romaji": "shi(meru) / hei",
    "meaning": "ပိတ်သည်",
    "tag": "第2週1日目",
    "examples": [
      {
        "word": "閉まる",
        "reading": "しまる",
        "mean": "ပိတ်သည်"
      },
      {
        "word": "閉会",
        "reading": "へいかい",
        "mean": "အစည်းအဝေးပိတ်ခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "案",
    "hiragana": "あん",
    "romaji": "an",
    "meaning": "အကြံဉာဏ် / အစီအစဉ်",
    "tag": "第2週1日目",
    "examples": [
      {
        "word": "案内",
        "reading": "あんない",
        "mean": "လမ်းညွှန်"
      },
      {
        "word": "案",
        "reading": "あん",
        "mean": "အစီအစဉ်/အကြံ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "内",
    "hiragana": "うち / ない",
    "romaji": "uchi / nai",
    "meaning": "အတွင်း",
    "tag": "第2週1日目",
    "examples": [
      {
        "word": "案内",
        "reading": "あんない",
        "mean": "လမ်းညွှန်ပြသခြင်း"
      },
      {
        "word": "国内",
        "reading": "こくない",
        "mean": "ပြည်တွင်း"
      },
      {
        "word": "以内",
        "reading": "いない",
        "mean": "အတွင်း/အောက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "予",
    "hiragana": "よ",
    "romaji": "yo",
    "meaning": "ကြိုတင်",
    "tag": "第2週1日目",
    "examples": [
      {
        "word": "予定",
        "reading": "よてい",
        "mean": "အစီအစဉ်"
      },
      {
        "word": "予習",
        "reading": "よしゅう",
        "mean": "စာကြိုဖတ်ခြင်း"
      },
      {
        "word": "予約",
        "reading": "よやく",
        "mean": "ဘိုကင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "約",
    "hiragana": "やく",
    "romaji": "yaku",
    "meaning": "ကတိ / ခန့်မှန်းခြေ",
    "tag": "第2週1日目",
    "examples": [
      {
        "word": "予約",
        "reading": "よやく",
        "mean": "ဘိုကင်တင်ခြင်း"
      },
      {
        "word": "約束",
        "reading": "やくそく",
        "mean": "ကတိ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "煙",
    "hiragana": "けむり / えん",
    "romaji": "kemuri / en",
    "meaning": "မီးခိုး",
    "tag": "第2週2日目",
    "examples": [
      {
        "word": "煙",
        "reading": "けむり",
        "mean": "မီးခိုး"
      },
      {
        "word": "禁煙",
        "reading": "きんえん",
        "mean": "ဆေးလိပ်မသောက်ရ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "当",
    "hiragana": "あ(たる) / とう",
    "romaji": "a(taru) / tou",
    "meaning": "မှန်ကန်သော / ထိမှန်သည်",
    "tag": "第2週2日目",
    "examples": [
      {
        "word": "本当",
        "reading": "ほんとう",
        "mean": "အမှန်"
      },
      {
        "word": "当たる",
        "reading": "あたる",
        "mean": "ထိသည်/ပေါက်သည်"
      },
      {
        "word": "当時",
        "reading": "とうじ",
        "mean": "ထိုအချိန်တုန်းက"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "全",
    "hiragana": "まった(く) / ぜん",
    "romaji": "zen",
    "meaning": "အားလုံး / လုံးဝ",
    "tag": "第2週2日目",
    "examples": [
      {
        "word": "全部",
        "reading": "ぜんぶ",
        "mean": "အကုန်လုံး"
      },
      {
        "word": "安全",
        "reading": "あんぜん",
        "mean": "ဘေးကင်းသော"
      },
      {
        "word": "全員",
        "reading": "ぜんいん",
        "mean": "လူအားလုံး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "客",
    "hiragana": "きゃく",
    "romaji": "kyaku",
    "meaning": "ဧည့်သည် / ဖောက်သည်",
    "tag": "第2週2日目",
    "examples": [
      {
        "word": "客",
        "reading": "きゃく",
        "mean": "ဧည့်သည်"
      },
      {
        "word": "乗客",
        "reading": "じょうきゃく",
        "mean": "ခရီးသည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "様",
    "hiragana": "さま / よう",
    "romaji": "sama / you",
    "meaning": "သခင် / အခြေအနေ",
    "tag": "第2週2日目",
    "examples": [
      {
        "word": "お客様",
        "reading": "おきゃくさま",
        "mean": "ဧည့်သည်တော်"
      },
      {
        "word": "様子",
        "reading": "ようす",
        "mean": "အခြေအနေ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "願",
    "hiragana": "ねが(う) / がん",
    "romaji": "nega(u) / gan",
    "meaning": "တောင်းဆိုသည် / ဆုတောင်းသည်",
    "tag": "第2週2日目",
    "examples": [
      {
        "word": "願う",
        "reading": "ねがう",
        "mean": "ဆုတောင်းသည်"
      },
      {
        "word": "お願いします",
        "reading": "おねがいします",
        "mean": "ကျေးဇူးပြု၍"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "観",
    "hiragana": "み(る) / かん",
    "romaji": "kan",
    "meaning": "ရှုမြင်သည် / ကြည့်ရှုသည်",
    "tag": "第2週3日目",
    "examples": [
      {
        "word": "観光",
        "reading": "かんこう",
        "mean": "ခရီးသွားလည်ပတ်ခြင်း"
      },
      {
        "word": "観客",
        "reading": "かんきゃく",
        "mean": "ပရိသတ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "園",
    "hiragana": "その / えん",
    "romaji": "en",
    "meaning": "ဥယျာဉ် / ပန်းခြံ",
    "tag": "第2週3日目",
    "examples": [
      {
        "word": "動物園",
        "reading": "どうぶつえん",
        "mean": "တိရစ္ဆာန်ရုံ"
      },
      {
        "word": "公園",
        "reading": "こうえん",
        "mean": "ပန်းခြံ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "港",
    "hiragana": "みなと / こう",
    "romaji": "minato / kou",
    "meaning": "ဆိပ်ကမ်း",
    "tag": "第2週3日目",
    "examples": [
      {
        "word": "港",
        "reading": "みなと",
        "mean": "ဆိပ်ကမ်း"
      },
      {
        "word": "空港",
        "reading": "くうこう",
        "mean": "လေဆိပ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "遊",
    "hiragana": "あそ(ぶ) / ゆう",
    "romaji": "aso(bu) / yuu",
    "meaning": "ကစားသည် / အလည်သွားသည်",
    "tag": "第2週3日目",
    "examples": [
      {
        "word": "遊ぶ",
        "reading": "あそぶ",
        "mean": "ကစားသည်"
      },
      {
        "word": "遊園地",
        "reading": "ゆうえんち",
        "mean": "ကစားကွင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "美",
    "hiragana": "うつく(しい) / び",
    "romaji": "utsuku(shii) / bi",
    "meaning": "လှပသော",
    "tag": "第2週3日目",
    "examples": [
      {
        "word": "美しい",
        "reading": "うつくしい",
        "mean": "လှသော"
      },
      {
        "word": "美術",
        "reading": "びじゅつ",
        "mean": "အနုပညာ"
      },
      {
        "word": "美人",
        "reading": "びじん",
        "mean": "အမျိုးသမီးလှ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "術",
    "hiragana": "じゅつ",
    "romaji": "jutsu",
    "meaning": "အတတ်ပညာ / နည်းစနစ်",
    "tag": "第2週3日目",
    "examples": [
      {
        "word": "技術",
        "reading": "ぎじゅつ",
        "mean": "နည်းပညာ"
      },
      {
        "word": "手術",
        "reading": "しゅじゅつ",
        "mean": "ခွဲစိတ်မှု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "神",
    "hiragana": "かみ / しん / じん",
    "romaji": "kami / shin",
    "meaning": "ဘုရား / နတ်ဘုရား",
    "tag": "第2週3日目",
    "examples": [
      {
        "word": "神社",
        "reading": "じんじゃ",
        "mean": "ရှင်တိုနတ်ကွန်း"
      },
      {
        "word": "神様",
        "reading": "かみさま",
        "mean": "ဘုရားသခင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "寺",
    "hiragana": "てら / じ",
    "romaji": "tera / ji",
    "meaning": "ဘုရားကျောင်း",
    "tag": "第2週3日目",
    "examples": [
      {
        "word": "お寺",
        "reading": "おてら",
        "mean": "ဘုန်းကြီးကျောင်း/ဘုရားကျောင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "役",
    "hiragana": "やく / えき",
    "romaji": "yaku",
    "meaning": "တာဝန် / အသုံးဝင်မှု",
    "tag": "第2週4日目",
    "examples": [
      {
        "word": "役に立つ",
        "reading": "やくにたつ",
        "mean": "အသုံးဝင်သည်"
      },
      {
        "word": "市役所",
        "reading": "しやくしょ",
        "mean": "မြို့တော်ခန်းမရုံး"
      },
      {
        "word": "役割",
        "reading": "やくわり",
        "mean": "အခန်းကဏ္ဍ/တာဝန်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "郵",
    "hiragana": "ゆう",
    "romaji": "yuu",
    "meaning": "စာတိုက်",
    "tag": "第2週4日目",
    "examples": [
      {
        "word": "郵便",
        "reading": "ゆうびん",
        "mean": "စာတိုက်"
      },
      {
        "word": "郵送",
        "reading": "ゆうそう",
        "mean": "စာတိုက်မှပို့ခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "局",
    "hiragana": "きょく",
    "romaji": "kyoku",
    "meaning": "ဌာန / ရုံး",
    "tag": "第2週4日目",
    "examples": [
      {
        "word": "薬局",
        "reading": "やっきょく",
        "mean": "ဆေးဆိုင်"
      },
      {
        "word": "結局",
        "reading": "けっきょく",
        "mean": "အဆုံးစွန်တွင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "交",
    "hiragana": "まじ(わる) / こう",
    "romaji": "kou",
    "meaning": "ကူးလူးဆက်ဆံသည်",
    "tag": "第2週4日目",
    "examples": [
      {
        "word": "交番",
        "reading": "こうばん",
        "mean": "ရဲကင်း"
      },
      {
        "word": "交通",
        "reading": "こうつう",
        "mean": "ယာဉ်ကြော"
      },
      {
        "word": "交換",
        "reading": "こうかん",
        "mean": "ဖလှယ်ခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "点",
    "hiragana": "てん",
    "romaji": "ten",
    "meaning": "အမှတ် / အစက်",
    "tag": "第2週4日目",
    "examples": [
      {
        "word": "点数",
        "reading": "てんすう",
        "mean": "ရမှတ်"
      },
      {
        "word": "交差点",
        "reading": "こうさてん",
        "mean": "လမ်းဆုံ"
      },
      {
        "word": "欠点",
        "reading": "けってん",
        "mean": "အားနည်းချက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "橋",
    "hiragana": "はし / きょう",
    "romaji": "hashi / kyou",
    "meaning": "တံတား",
    "tag": "第2週4日目",
    "examples": [
      {
        "word": "橋",
        "reading": "はし",
        "mean": "တံတား"
      },
      {
        "word": "歩道橋",
        "reading": "ほどうきょう",
        "mean": "လူကူးတံတား"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "公",
    "hiragana": "おおやけ / こう",
    "romaji": "kou",
    "meaning": "အများပြည်သူ",
    "tag": "第2週4日目",
    "examples": [
      {
        "word": "公園",
        "reading": "こうえん",
        "mean": "ပန်းခြံ"
      },
      {
        "word": "公務員",
        "reading": "こうむいん",
        "mean": "နိုင်ငံ့ဝန်ထမ်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "受",
    "hiragana": "う(ける) / じゅ",
    "romaji": "u(keru) / ju",
    "meaning": "လက်ခံသည် / ဖြေဆိုသည်",
    "tag": "第2週5日目",
    "examples": [
      {
        "word": "受付",
        "reading": "うけつけ",
        "mean": "ဧည့်ကြိုကောင်တာ"
      },
      {
        "word": "受ける",
        "reading": "うける",
        "mean": "စာမေးပွဲဖြေသည်/လက်ခံသည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "付",
    "hiragana": "つ(ける) / つ(く) / ふ",
    "romaji": "tsu(keru) / fu",
    "meaning": "ကပ်သည် / တွဲဆက်သည်",
    "tag": "第2週5日目",
    "examples": [
      {
        "word": "受付",
        "reading": "うけつけ",
        "mean": "ဧည့်ကြို"
      },
      {
        "word": "片付ける",
        "reading": "かたづける",
        "mean": "သိမ်းဆည်းသပ်ရပ်စေသည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "科",
    "hiragana": "か",
    "romaji": "ka",
    "meaning": "ဌာန / ပညာရပ်",
    "tag": "第2週5日目",
    "examples": [
      {
        "word": "内科",
        "reading": "ないか",
        "mean": "အတွင်းလူနာဌာန"
      },
      {
        "word": "外科",
        "reading": "げか",
        "mean": "ခွဲစိတ်ဌာန"
      },
      {
        "word": "教科書",
        "reading": "きょうかしょ",
        "mean": "ပြဋ္ဌာန်းစာအုပ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "鼻",
    "hiragana": "び / はな",
    "romaji": "bi / hana",
    "meaning": "နှာခေါင်း",
    "tag": "第2週5日目",
    "examples": [
      {
        "word": "耳鼻科",
        "reading": "じびか",
        "mean": "နား နှာခေါင်း လည်ချောင်း အထူးကု"
      },
      {
        "word": "鼻",
        "reading": "はな",
        "mean": "နှာခေါင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "婦",
    "hiragana": "ふ",
    "romaji": "fu",
    "meaning": "အမျိုးသမီး",
    "tag": "第2週5日目",
    "examples": [
      {
        "word": "婦人",
        "reading": "ふじん",
        "mean": "အမျိုးသမီး"
      },
      {
        "word": "主婦",
        "reading": "しゅふ",
        "mean": "အိမ်ရှင်မ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "形",
    "hiragana": "けい / ぎょう / かたち",
    "romaji": "kei / gyou / katachi",
    "meaning": "ပုံသဏ္ဌာန် / ပုံစံ",
    "tag": "第2週5日目",
    "examples": [
      {
        "word": "形式",
        "reading": "けいしき",
        "mean": "ပုံစံ"
      },
      {
        "word": "図形",
        "reading": "ずけい",
        "mean": "ပုံရိပ်/ပုံသဏ္ဌာန်"
      },
      {
        "word": "整形外科",
        "reading": "せいけいげか",
        "mean": "အရိုးအကြောပြင်ခွဲစိတ်"
      },
      {
        "word": "人形",
        "reading": "にんぎょう",
        "mean": "အရုပ်"
      },
      {
        "word": "形",
        "reading": "かたち",
        "mean": "ပုံသဏ္ဌာန်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "骨",
    "hiragana": "ほね / こつ",
    "romaji": "hone / kotsu",
    "meaning": "အရိုး",
    "tag": "第2週5日目",
    "examples": [
      {
        "word": "骨",
        "reading": "ほね",
        "mean": "အရိုး"
      },
      {
        "word": "骨折",
        "reading": "こっせつ",
        "mean": "အရိုးကျိုးခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "困",
    "hiragana": "こま(る) / こん",
    "romaji": "koma(ru) / kon",
    "meaning": "ဒုက္ခရောက်သည် / အခက်ကြုံသည်",
    "tag": "第2週6日目",
    "examples": [
      {
        "word": "困る",
        "reading": "こまる",
        "mean": "အခက်တွေ့သည်"
      },
      {
        "word": "困難",
        "reading": "こんなん",
        "mean": "အခက်အခဲ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "伝",
    "hiragana": "つた(える) / つた(わる) / でん",
    "romaji": "tsuta(eru) / den",
    "meaning": "လက်ဆင့်ကမ်းသည် / မှာကြားသည်",
    "tag": "第2週6日目",
    "examples": [
      {
        "word": "伝える",
        "reading": "つたえる",
        "mean": "ပြောပြသည်"
      },
      {
        "word": "手伝う",
        "reading": "てつだう",
        "mean": "ကူညီသည်"
      },
      {
        "word": "伝言",
        "reading": "でんごん",
        "mean": "မှာစကား"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "黄",
    "hiragana": "き / こう",
    "romaji": "ki / kou",
    "meaning": "အဝါရောင်",
    "tag": "第2週7日目",
    "examples": [
      {
        "word": "黄色",
        "reading": "きいろ",
        "mean": "အဝါရောင်"
      },
      {
        "word": "黄色い",
        "reading": "きいろい",
        "mean": "ဝါသော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "絵",
    "hiragana": "かい / え",
    "romaji": "kai / e",
    "meaning": "ပန်းချီ / ပုံဆွဲကား",
    "tag": "第2週7日目",
    "examples": [
      {
        "word": "絵画",
        "reading": "かいが",
        "mean": "ပန်းချီကား"
      },
      {
        "word": "絵",
        "reading": "え",
        "mean": "ပုံ/ပန်းချီ"
      },
      {
        "word": "絵本",
        "reading": "えほん",
        "mean": "ရုပ်ပြပုံပြင်စာအုပ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "組",
    "hiragana": "く(む) / くみ / そ",
    "romaji": "kumi / so",
    "meaning": "ဖွဲ့စည်းသည် / အသင်း",
    "tag": "第2週7日目",
    "examples": [
      {
        "word": "番組",
        "reading": "ばんぐみ",
        "mean": "တီဗွီအစီအစဉ်"
      },
      {
        "word": "組み立てる",
        "reading": "くみたてる",
        "mean": "တပ်ဆင်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "束",
    "hiragana": "そく / たば",
    "romaji": "soku / taba",
    "meaning": "စည်းနှောင်သည် / အစည်း",
    "tag": "第2週7日目",
    "examples": [
      {
        "word": "約束",
        "reading": "やくそく",
        "mean": "ကတိ"
      },
      {
        "word": "花束",
        "reading": "はなたば",
        "mean": "ပန်းစည်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "授",
    "hiragana": "じゅ / さず(ける)",
    "romaji": "ju",
    "meaning": "သင်ကြားပို့ချသည် / ပေးအပ်သည်",
    "tag": "第2週7日目",
    "examples": [
      {
        "word": "授業",
        "reading": "じゅぎょう",
        "mean": "စာသင်ချိန်"
      },
      {
        "word": "教授",
        "reading": "きょうじゅ",
        "mean": "ပါမောက္ခ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "昔",
    "hiragana": "むかし",
    "romaji": "mukashi",
    "meaning": "ရှေးယခင်က / အတိတ်",
    "tag": "第2週7日目",
    "examples": [
      {
        "word": "昔",
        "reading": "むかし",
        "mean": "ရှေးယခင်က"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "要",
    "hiragana": "い(る) / かなめ / よう",
    "romaji": "i(ru) / you",
    "meaning": "လိုအပ်သော / အဓိကအချက်",
    "tag": "第3週1日目",
    "examples": [
      {
        "word": "必要",
        "reading": "ひつよう",
        "mean": "လိုအပ်သော"
      },
      {
        "word": "重要",
        "reading": "じゅうよう",
        "mean": "အရေးကြီးသော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "凍",
    "hiragana": "こお(る) / とう",
    "romaji": "koo(ru) / tou",
    "meaning": "ရေခဲသည် / ခဲသွားသည်",
    "tag": "第3週1日目",
    "examples": [
      {
        "word": "凍る",
        "reading": "こおる",
        "mean": "ခဲသည်"
      },
      {
        "word": "冷凍庫",
        "reading": "れいとうこ",
        "mean": "ရေခဲအေးခဲခန်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "召",
    "hiragana": "め(す)",
    "romaji": "me(su)",
    "meaning": "စားသုံးသည် (ယဉ်ကျေးစကား)",
    "tag": "第3週1日目",
    "examples": [
      {
        "word": "召し上がる",
        "reading": "めしあがる",
        "mean": "သုံးဆောင်ပါ (စားပါ)"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "保",
    "hiragana": "たも(つ) / ほ",
    "romaji": "tamo(tsu) / ho",
    "meaning": "ထိန်းသိမ်းသည် / ကာကွယ်သည်",
    "tag": "第3週1日目",
    "examples": [
      {
        "word": "保護",
        "reading": "ほご",
        "mean": "ကာကွယ်စောင့်ရှောက်ခြင်း"
      },
      {
        "word": "保存",
        "reading": "ほぞん",
        "mean": "သိမ်းဆည်းထားခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "必",
    "hiragana": "かなら(ず) / ひつ",
    "romaji": "kanara(zu) / hitsu",
    "meaning": "မုချ / မဖြစ်မနေ",
    "tag": "第3週1日目",
    "examples": [
      {
        "word": "必ず",
        "reading": "かならず",
        "mean": "သေချာပေါက်"
      },
      {
        "word": "必要",
        "reading": "ひつよう",
        "mean": "လိုအပ်ချက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "法",
    "hiragana": "ほう",
    "romaji": "hou",
    "meaning": "နည်းလမ်း / ဥပဒေ",
    "tag": "第3週2日目",
    "examples": [
      {
        "word": "方法",
        "reading": "ほうほう",
        "mean": "နည်းလမ်း"
      },
      {
        "word": "文法",
        "reading": "ぶんぽう",
        "mean": "သဒ္ဒါ"
      },
      {
        "word": "法律",
        "reading": "ほうりつ",
        "mean": "ဥပဒေ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "温",
    "hiragana": "あたた(かい) / おん",
    "romaji": "atata(kai) / on",
    "meaning": "နွေးထွေးသော / အပူချိန်",
    "tag": "第3週2日目",
    "examples": [
      {
        "word": "温度",
        "reading": "おんど",
        "mean": "အပူချိန်"
      },
      {
        "word": "気温",
        "reading": "きおん",
        "mean": "လေထုအပူချိန်"
      },
      {
        "word": "温泉",
        "reading": "おんせん",
        "mean": "ရေပူစမ်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "販",
    "hiragana": "はん",
    "romaji": "han",
    "meaning": "ရောင်းဝယ်ဖောက်ကားသည်",
    "tag": "第3週3日目",
    "examples": [
      {
        "word": "自動販売機",
        "reading": "じどうはんばいき",
        "mean": "အလိုအလျောက်အရောင်းစက်"
      },
      {
        "word": "市販",
        "reading": "しはん",
        "mean": "စျေးကွက်တင်ရောင်းချမှု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "機",
    "hiragana": "き",
    "romaji": "ki",
    "meaning": "စက်ကိရိယာ / အခွင့်အရေး",
    "tag": "第3週3日目",
    "examples": [
      {
        "word": "飛行機",
        "reading": "ひこうき",
        "mean": "လေယာဉ်ပျံ"
      },
      {
        "word": "機械",
        "reading": "きかい",
        "mean": "စက်ယန္တရား"
      },
      {
        "word": "機会",
        "reading": "きかい",
        "mean": "အခွင့်အရေး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "量",
    "hiragana": "はか(る) / りょう",
    "romaji": "ryou",
    "meaning": "ပမာဏ / အလေးချိန်",
    "tag": "第3週3日目",
    "examples": [
      {
        "word": "量",
        "reading": "りょう",
        "mean": "ပမာဏ"
      },
      {
        "word": "大量",
        "reading": "たいりょう",
        "mean": "အများအပြား"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "氷",
    "hiragana": "こおり / ひょう",
    "romaji": "koori / hyou",
    "meaning": "ရေခဲ",
    "tag": "第3週3日目",
    "examples": [
      {
        "word": "氷",
        "reading": "こおり",
        "mean": "ရေခဲ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "湯",
    "hiragana": "ゆ / とう",
    "romaji": "yu / tou",
    "meaning": "ရေနွေး / ရေပူ",
    "tag": "第3週3日目",
    "examples": [
      {
        "word": "お湯",
        "reading": "おゆ",
        "mean": "ရေနွေး"
      },
      {
        "word": "湯船",
        "reading": "ゆぶね",
        "mean": "ရေချိုးကန်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "材",
    "hiragana": "ざい",
    "romaji": "zai",
    "meaning": "ကုန်ကြမ်း / သစ်သား",
    "tag": "第3週4日目",
    "examples": [
      {
        "word": "材料",
        "reading": "ざいりょう",
        "mean": "ပါဝင်ပစ္စည်း/ကုန်ကြမ်း"
      },
      {
        "word": "木材",
        "reading": "もくざい",
        "mean": "သစ်သား"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "卵",
    "hiragana": "たまご / らん",
    "romaji": "tamago",
    "meaning": "ဥ",
    "tag": "第3週4日目",
    "examples": [
      {
        "word": "卵",
        "reading": "たまご",
        "mean": "ကြက်ဥ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "乳",
    "hiragana": "ちち / にゅう",
    "romaji": "chichi / nyuu",
    "meaning": "နို့ရည်",
    "tag": "第3週4日目",
    "examples": [
      {
        "word": "牛乳",
        "reading": "ぎゅうにゅう",
        "mean": "နွားနို့"
      },
      {
        "word": "乳製品",
        "reading": "にゅうせいひん",
        "mean": "နို့ထွက်ပစ္စည်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "粉",
    "hiragana": "こな / ふん",
    "romaji": "kona / fun",
    "meaning": "အမှုန့် / ဂျုံ",
    "tag": "第3週4日目",
    "examples": [
      {
        "word": "小麦粉",
        "reading": "こむぎこ",
        "mean": "ဂျုံမှုန့်"
      },
      {
        "word": "粉末",
        "reading": "ふんまつ",
        "mean": "အမှုန့်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "袋",
    "hiragana": "ふくろ / ぶくろ",
    "romaji": "fukuro",
    "meaning": "အိတ်",
    "tag": "第3週4日目",
    "examples": [
      {
        "word": "紙袋",
        "reading": "かみぶくろ",
        "mean": "စက္ကူအိတ်"
      },
      {
        "word": "手袋",
        "reading": "てぶくろ",
        "mean": "လက်အိတ်"
      },
      {
        "word": "ゴミ袋",
        "reading": "ごみぶくろ",
        "mean": "အမှိုက်အိတ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "焼",
    "hiragana": "や(く) / しょう",
    "romaji": "ya(ku)",
    "meaning": "ကင်သည် / ဖုတ်သည်",
    "tag": "第3週4日目",
    "examples": [
      {
        "word": "焼く",
        "reading": "やく",
        "mean": "ကင်သည်"
      },
      {
        "word": "日焼け",
        "reading": "ひやけ",
        "mean": "နေလောင်ခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "濃",
    "hiragana": "こ(い)",
    "romaji": "ko(i)",
    "meaning": "ပြင်းသော / ရင့်သော (အရောင်၊ အရသာ)",
    "tag": "第3週5日目",
    "examples": [
      {
        "word": "濃い",
        "reading": "こい",
        "mean": "ပြင်းသော/ပျစ်သော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "薄",
    "hiragana": "うす(い) / はく",
    "romaji": "usu(i) / haku",
    "meaning": "ပါးလွှာသော / ဖျော့သော",
    "tag": "第3週5日目",
    "examples": [
      {
        "word": "薄い",
        "reading": "うすい",
        "mean": "ပါးလွှာသော/ဖျော့သော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "部",
    "hiragana": "ぶ",
    "romaji": "bu",
    "meaning": "အစိတ်အပိုင်း / ဌာန",
    "tag": "第3週5日目",
    "examples": [
      {
        "word": "部分",
        "reading": "ぶぶん",
        "mean": "အစိတ်အပိုင်း"
      },
      {
        "word": "学部",
        "reading": "がくぶ",
        "mean": "မဟာဌာန"
      },
      {
        "word": "部長",
        "reading": "ぶちょう",
        "mean": "ဌာနမှူး"
      },
      {
        "word": "部屋",
        "reading": "へや",
        "mean": "အခန်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "数",
    "hiragana": "すう / かず / かぞ(える)",
    "romaji": "suu / kazu",
    "meaning": "ကိန်းဂဏန်း / ရေတွက်သည်",
    "tag": "第3週5日目",
    "examples": [
      {
        "word": "数字",
        "reading": "すうじ",
        "mean": "ဂဏန်း"
      },
      {
        "word": "数学",
        "reading": "すうがく",
        "mean": "သင်္ချာ"
      },
      {
        "word": "数",
        "reading": "かず",
        "mean": "အရေအတွက်"
      },
      {
        "word": "数える",
        "reading": "かぞえる",
        "mean": "ရေတွက်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "件",
    "hiragana": "けん",
    "romaji": "ken",
    "meaning": "ကိစ္စရပ် / အမှုတွဲ",
    "tag": "第3週5日目",
    "examples": [
      {
        "word": "件名",
        "reading": "けんめい",
        "mean": "အကြောင်းအရာ"
      },
      {
        "word": "事件",
        "reading": "じけん",
        "mean": "ဖြစ်ရပ်/အမှုအခင်း"
      },
      {
        "word": "用件",
        "reading": "ようけん",
        "mean": "ပြောစရာကိစ္စ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "再",
    "hiragana": "さい / さ",
    "romaji": "sai / sa",
    "meaning": "ထပ်မံ / ပြန်လည်",
    "tag": "第3週5日目",
    "examples": [
      {
        "word": "再入国",
        "reading": "さいにゅうこく",
        "mean": "ပြန်လည်ဝင်ရောက်ခြင်း"
      },
      {
        "word": "再生",
        "reading": "さいせい",
        "mean": "ပြန်လည်ဖွင့်ပြခြင်း/ရှင်သန်ခြင်း"
      },
      {
        "word": "再来週",
        "reading": "さらいしゅう",
        "mean": "နောက်တစ်ပတ်ကျော်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "接",
    "hiragana": "つ(ぐ) / せつ",
    "romaji": "setsu",
    "meaning": "ထိတွေ့သည် / ဆက်သွယ်သည်",
    "tag": "第3週6日目",
    "examples": [
      {
        "word": "面接",
        "reading": "めんせつ",
        "mean": "အင်တာဗျူး"
      },
      {
        "word": "直接",
        "reading": "ちょくせつ",
        "mean": "တိုက်ရိုက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "登",
    "hiragana": "のぼ(る) / とう / と",
    "romaji": "nobo(ru) / tou",
    "meaning": "တက်ရောက်သည် / တောင်တက်သည် / မှတ်ပုံတင်သည်",
    "tag": "第3週6日目",
    "examples": [
      {
        "word": "登る",
        "reading": "のぼる",
        "mean": "တက်သည်"
      },
      {
        "word": "登録",
        "reading": "とうろく",
        "mean": "မှတ်ပုံတင်ခြင်း"
      },
      {
        "word": "登山",
        "reading": "とざん",
        "mean": "တောင်တက်ခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "録",
    "hiragana": "ろく",
    "romaji": "roku",
    "meaning": "အသံ/မှတ်တမ်းတင်သည်",
    "tag": "第3週6日目",
    "examples": [
      {
        "word": "記録",
        "reading": "きろく",
        "mean": "စံချိန်မှတ်တမ်း"
      },
      {
        "word": "録音",
        "reading": "ろくおん",
        "mean": "အသံသွင်းခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "育",
    "hiragana": "いく",
    "romaji": "iku",
    "meaning": "ပညာရေး",
    "tag": "第3週7日目",
    "examples": [
      {
        "word": "教育",
        "reading": "きょういく",
        "mean": "ပညာရေး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "師",
    "hiragana": "し",
    "romaji": "shi",
    "meaning": "ဆရာ / ကျွမ်းကျင်ပညာရှင်",
    "tag": "第3週7日目",
    "examples": [
      {
        "word": "教師",
        "reading": "きょうし",
        "mean": "ဆရာ"
      },
      {
        "word": "医師",
        "reading": "いし",
        "mean": "ဆရာဝန်"
      },
      {
        "word": "看護師",
        "reading": "かんごし",
        "mean": "သူနာပြု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "妻",
    "hiragana": "さい / つま",
    "romaji": "sai / tsuma",
    "meaning": "ဇနီးမယား",
    "tag": "第3週7日目",
    "examples": [
      {
        "word": "夫妻",
        "reading": "ふさい",
        "mean": "ဇနီးမောင်နှံ"
      },
      {
        "word": "妻",
        "reading": "つま",
        "mean": "ဇနီး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "馬",
    "hiragana": "ば / うま",
    "romaji": "ba / uma",
    "meaning": "မြင်း",
    "tag": "第3週7日目",
    "examples": [
      {
        "word": "馬",
        "reading": "うま",
        "mean": "မြင်း"
      },
      {
        "word": "乗馬",
        "reading": "じょうば",
        "mean": "မြင်းစီးခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "石",
    "hiragana": "せき / いし",
    "romaji": "seki / ishi",
    "meaning": "ကျောက်ခဲ / ကျောက်တုံး",
    "tag": "第3週7日目",
    "examples": [
      {
        "word": "石けん",
        "reading": "せっけん",
        "mean": "ဆပ်ပြာ"
      },
      {
        "word": "石",
        "reading": "いし",
        "mean": "ကျောက်ခဲ"
      },
      {
        "word": "石油",
        "reading": "せきゆ",
        "mean": "ရေနံ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "砂",
    "hiragana": "すな / さ",
    "romaji": "suna / sa",
    "meaning": "သဲ",
    "tag": "第4週1日目",
    "examples": [
      {
        "word": "砂糖",
        "reading": "さとう",
        "mean": "သကြား"
      },
      {
        "word": "砂",
        "reading": "すな",
        "mean": "သဲပြင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "塩",
    "hiragana": "しお / えん",
    "romaji": "shio / en",
    "meaning": "ဆား",
    "tag": "第4週1日目",
    "examples": [
      {
        "word": "塩",
        "reading": "しお",
        "mean": "ဆား"
      },
      {
        "word": "食塩",
        "reading": "しょくえん",
        "mean": "စားပွဲတင်ဆား"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "油",
    "hiragana": "あぶら / ゆ",
    "romaji": "abura / yu",
    "meaning": "ဆီ",
    "tag": "第4週1日目",
    "examples": [
      {
        "word": "油",
        "reading": "あぶら",
        "mean": "ဆီ"
      },
      {
        "word": "しょう油",
        "reading": "しょうゆ",
        "mean": "ပဲငံပြာရည်"
      },
      {
        "word": "石油",
        "reading": "せきゆ",
        "mean": "ရေနံ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "緑",
    "hiragana": "みどり / りょく",
    "romaji": "midori / ryoku",
    "meaning": "အစိမ်းရောင်",
    "tag": "第4週1日目",
    "examples": [
      {
        "word": "緑",
        "reading": "みどり",
        "mean": "အစိမ်း"
      },
      {
        "word": "緑茶",
        "reading": "りょくちゃ",
        "mean": "လက်ဖက်ရည်စိမ်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "紅",
    "hiragana": "べに / こう",
    "romaji": "kou",
    "meaning": "ကြက်သွေးရောင် / နီနီရဲရဲ",
    "tag": "第4週1日目",
    "examples": [
      {
        "word": "紅茶",
        "reading": "こうちゃ",
        "mean": "လက်ဖက်ရည်အနက် (Black tea)"
      },
      {
        "word": "口紅",
        "reading": "くちべに",
        "mean": "နှုတ်ခမ်းနီ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "冊",
    "hiragana": "さつ",
    "romaji": "satsu",
    "meaning": "စာအုပ်ရေတွက်ပုဒ် (အုပ်)",
    "tag": "第4週1日目",
    "examples": [
      {
        "word": "一冊",
        "reading": "いっさつ",
        "mean": "တစ်အုပ်"
      },
      {
        "word": "冊数",
        "reading": "さっすう",
        "mean": "စာအုပ်အရေအတွက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "個",
    "hiragana": "こ",
    "romaji": "ko",
    "meaning": "အလုံးရေတွက်ပုဒ် (လုံး/ခု)",
    "tag": "第4週1日目",
    "examples": [
      {
        "word": "一個",
        "reading": "いっこ",
        "mean": "တစ်ခု"
      },
      {
        "word": "個人",
        "reading": "こじん",
        "mean": "တစ်ဦးချင်းစီ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "枚",
    "hiragana": "まい",
    "romaji": "mai",
    "meaning": "ပါးလွှာသောပစ္စည်းရေတွက်ပုဒ် (ချပ်)",
    "tag": "第4週1日目",
    "examples": [
      {
        "word": "一枚",
        "reading": "いちまい",
        "mean": "တစ်ချပ်"
      },
      {
        "word": "枚数",
        "reading": "まいすう",
        "mean": "ရွက်ရေ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "告",
    "hiragana": "こく / つ(げる)",
    "romaji": "koku / tsu(geru)",
    "meaning": "အသိပေးကြေညာသည်",
    "tag": "第4週2日目",
    "examples": [
      {
        "word": "広告",
        "reading": "こうこく",
        "mean": "ကြော်ငြာ"
      },
      {
        "word": "報告",
        "reading": "ほうこく",
        "mean": "အစီရင်ခံစာ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "利",
    "hiragana": "り",
    "romaji": "ri",
    "meaning": "အကျိုးကျေးဇူး / အဆင်ပြေမှု",
    "tag": "第4週2日目",
    "examples": [
      {
        "word": "便利",
        "reading": "べんり",
        "mean": "အဆင်ပြေသော"
      },
      {
        "word": "利用",
        "reading": "りよう",
        "mean": "အသုံးချခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "値",
    "hiragana": "ね / ち",
    "romaji": "ne / chi",
    "meaning": "တန်ဖိုး / စျေး",
    "tag": "第4週2日目",
    "examples": [
      {
        "word": "値段",
        "reading": "ねだん",
        "mean": "စျေးနှုန်း"
      },
      {
        "word": "値下げ",
        "reading": "ねさげ",
        "mean": "စျေးလျှော့ခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "商",
    "hiragana": "しょう",
    "romaji": "shou",
    "meaning": "စီးပွားရေး / ကုန်သွယ်",
    "tag": "第4週2日目",
    "examples": [
      {
        "word": "商品",
        "reading": "しょうひん",
        "mean": "ကုန်ပစ္စည်း"
      },
      {
        "word": "商店",
        "reading": "しょうてん",
        "mean": "စျေးဆိုင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "米",
    "hiragana": "べい / こめ",
    "romaji": "bei / kome",
    "meaning": "ဆန်စပါး / အမေရိက",
    "tag": "第4週3日目",
    "examples": [
      {
        "word": "米国",
        "reading": "べいこく",
        "mean": "အမေရိကန်ပြည်ထောင်စု"
      },
      {
        "word": "米",
        "reading": "こめ",
        "mean": "ဆန်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "級",
    "hiragana": "きゅう",
    "romaji": "kyuu",
    "meaning": "အဆင့်အတန်း / အတန်း",
    "tag": "第4週3日目",
    "examples": [
      {
        "word": "高級",
        "reading": "こうきゅう",
        "mean": "အဆင့်မြင့်"
      },
      {
        "word": "中級",
        "reading": "ちゅうきゅう",
        "mean": "အလယ်အလတ်အဆင့်"
      },
      {
        "word": "上級",
        "reading": "じょうきゅう",
        "mean": "အထက်တန်းအဆင့်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "残",
    "hiragana": "ざん / のこ(る) / のこ(す)",
    "romaji": "zan / noko(ru)",
    "meaning": "ကျန်ရှိသည်",
    "tag": "第4週3日目",
    "examples": [
      {
        "word": "残業",
        "reading": "ざんぎょう",
        "mean": "အချိန်ပိုဆင်းခြင်း"
      },
      {
        "word": "残り",
        "reading": "のこり",
        "mean": "ကျန်ရှိသောအရာ"
      },
      {
        "word": "残る",
        "reading": "のこる",
        "mean": "ကျန်ရစ်သည်"
      },
      {
        "word": "残す",
        "reading": "のこす",
        "mean": "ချန်ထားသည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "型",
    "hiragana": "かた / けい",
    "romaji": "kata / kei",
    "meaning": "ပုံစံ / မော်ဒယ် / အရွယ်အစား",
    "tag": "第4週3日目",
    "examples": [
      {
        "word": "大型",
        "reading": "おおがた",
        "mean": "အရွယ်အစားကြီး"
      },
      {
        "word": "小型",
        "reading": "こがた",
        "mean": "အရွယ်အစားသေး"
      },
      {
        "word": "新型",
        "reading": "しんがた",
        "mean": "မော်ဒယ်သစ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "税",
    "hiragana": "ぜい",
    "romaji": "zei",
    "meaning": "အခွန်",
    "tag": "第4週3日目",
    "examples": [
      {
        "word": "税金",
        "reading": "ぜいきん",
        "mean": "အခွန်ငွေ"
      },
      {
        "word": "消費税",
        "reading": "しょうひぜい",
        "mean": "ကုန်စည်ခွန် (VAT)"
      },
      {
        "word": "非課税",
        "reading": "ひかぜい",
        "mean": "အခွန်လွတ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "込",
    "hiragana": "こ(む) / こ(める)",
    "romaji": "ko(mu)",
    "meaning": "ပြည့်ကျပ်သည် / ထည့်သွင်းသည်",
    "tag": "第4週3日目",
    "examples": [
      {
        "word": "申し込む",
        "reading": "もうしこむ",
        "mean": "လျှောက်ထားသည်"
      },
      {
        "word": "人混み",
        "reading": "ひとごみ",
        "mean": "လူအုပ်ကြီး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "価",
    "hiragana": "か / あたい",
    "romaji": "ka / atai",
    "meaning": "တန်ဖိုး / ဈေးနှုန်း",
    "tag": "第4週3日目",
    "examples": [
      {
        "word": "価格",
        "reading": "かかく",
        "mean": "ဈေးနှုန်း"
      },
      {
        "word": "定価",
        "reading": "ていか",
        "mean": "သတ်မှတ်ဈေး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "格",
    "hiragana": "かく",
    "romaji": "kaku",
    "meaning": "အဆင့် / စံနှုန်း / အရည်အချင်း",
    "tag": "第4週3日目",
    "examples": [
      {
        "word": "合格",
        "reading": "ごうかく",
        "mean": "စာမေးပွဲအောင်မြင်ခြင်း"
      },
      {
        "word": "格安",
        "reading": "かくやす",
        "mean": "ဈေးအထူးချိုသာသော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "申",
    "hiragana": "もう(す) / しん",
    "romaji": "mou(su) / shin",
    "meaning": "ပြောကြားသည် (နှိမ့်ချစကား) / လျှောက်သည်",
    "tag": "第4週4日目",
    "examples": [
      {
        "word": "申す",
        "reading": "もうす",
        "mean": "ပြောပါသည်"
      },
      {
        "word": "申し込む",
        "reading": "もうしこむ",
        "mean": "လျှောက်ထားသည်"
      },
      {
        "word": "申請",
        "reading": "しんせい",
        "mean": "တရားဝင်လျှောက်ထားမှု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "記",
    "hiragana": "き / しる(す)",
    "romaji": "ki / shiru(su)",
    "meaning": "မှတ်တမ်းတင်သည် / ရေးသားသည်",
    "tag": "第4週4日目",
    "examples": [
      {
        "word": "記入",
        "reading": "きにゅう",
        "mean": "ဖြည့်စွက်ရေးသားခြင်း"
      },
      {
        "word": "日記",
        "reading": "にっき",
        "mean": "ဒိုင်ယာရီ"
      },
      {
        "word": "記事",
        "reading": "きじ",
        "mean": "ဆောင်းပါး"
      },
      {
        "word": "記号",
        "reading": "きごう",
        "mean": "သင်္ကေတ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "例",
    "hiragana": "れい / たと(えば)",
    "romaji": "rei / tato(eba)",
    "meaning": "ဥပမာ / နမူနာ",
    "tag": "第4週4日目",
    "examples": [
      {
        "word": "例",
        "reading": "れい",
        "mean": "ဥပမာ"
      },
      {
        "word": "例えば",
        "reading": "たとえば",
        "mean": "ဥပမာအားဖြင့်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "齢",
    "hiragana": "れい",
    "romaji": "rei",
    "meaning": "အသက်အရွယ်",
    "tag": "第4週4日目",
    "examples": [
      {
        "word": "年齢",
        "reading": "ねんれい",
        "mean": "အသက်အရွယ်"
      },
      {
        "word": "高齢",
        "reading": "こうれい",
        "mean": "သက်ကြီးရွယ်အို"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "歳",
    "hiragana": "さい / せい",
    "romaji": "sai / sei",
    "meaning": "အသက် (နှစ်)",
    "tag": "第4週4日目",
    "examples": [
      {
        "word": "〜歳",
        "reading": "さい",
        "mean": "...နှစ် (အသက်)"
      },
      {
        "word": "二十歳",
        "reading": "はたち",
        "mean": "အသက် ၂၀"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "連",
    "hiragana": "れん / つ(れる)",
    "romaji": "ren / tsu(reru)",
    "meaning": "ဆက်စပ်သည် / ခေါ်ဆောင်သည်",
    "tag": "第4週4日目",
    "examples": [
      {
        "word": "連休",
        "reading": "れんきゅう",
        "mean": "ဆက်တိုက်ရုံးပိတ်ရက်"
      },
      {
        "word": "連れて行く",
        "reading": "つれていく",
        "mean": "ခေါ်ဆောင်သွားသည်"
      },
      {
        "word": "連れて来る",
        "reading": "つれてくる",
        "mean": "ခေါ်ဆောင်လာသည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "絡",
    "hiragana": "らく / から(む)",
    "romaji": "raku",
    "meaning": "အဆက်အသွယ် / ဆက်သွယ်သည်",
    "tag": "第4週4日目",
    "examples": [
      {
        "word": "連絡",
        "reading": "れんらく",
        "mean": "အဆက်အသွယ်ပြုလုပ်ခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "宅",
    "hiragana": "たく",
    "romaji": "taku",
    "meaning": "နေအိမ် (ယဉ်ကျေးစကား)",
    "tag": "第4週5日目",
    "examples": [
      {
        "word": "自宅",
        "reading": "じたく",
        "mean": "မိမိအိမ်"
      },
      {
        "word": "帰宅",
        "reading": "きたく",
        "mean": "အိမ်ပြန်ခြင်း"
      },
      {
        "word": "お宅",
        "reading": "おたく",
        "mean": "သင့်အိမ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "希",
    "hiragana": "き",
    "romaji": "ki",
    "meaning": "မျှော်လင့်ချက် / ရှားပါးသော",
    "tag": "第4週5日目",
    "examples": [
      {
        "word": "希望",
        "reading": "きぼう",
        "mean": "မျှော်လင့်တောင့်တချက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "望",
    "hiragana": "ぼう / のぞ(む)",
    "romaji": "bou / nozo(mu)",
    "meaning": "မျှော်လင့်သည် / လိုလားသည်",
    "tag": "第4週5日目",
    "examples": [
      {
        "word": "失望",
        "reading": "しつぼう",
        "mean": "စိတ်ပျက်ခြင်း"
      },
      {
        "word": "望む",
        "reading": "のぞむ",
        "mean": "မျှော်လင့်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "荷",
    "hiragana": "か / に",
    "romaji": "ka / ni",
    "meaning": "ကုန်ပစ္စည်း / အထုပ်အပိုး",
    "tag": "第4週5日目",
    "examples": [
      {
        "word": "入荷",
        "reading": "にゅうか",
        "mean": "ပစ္စည်းဝင်ခြင်း"
      },
      {
        "word": "出荷",
        "reading": "しゅっか",
        "mean": "ပစ္စည်းတင်ပို့ခြင်း"
      },
      {
        "word": "荷物",
        "reading": "にもつ",
        "mean": "အထုတ်အပိုး"
      },
      {
        "word": "手荷物",
        "reading": "てにもつ",
        "mean": "လက်ဆွဲအိတ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "額",
    "hiragana": "ひたい / がく",
    "romaji": "hitai / gaku",
    "meaning": "နဖူး / ပမာဏငွေကြေး",
    "tag": "第4週5日目",
    "examples": [
      {
        "word": "金額",
        "reading": "きんがく",
        "mean": "ငွေပမာဏ"
      },
      {
        "word": "半額",
        "reading": "はんがく",
        "mean": "တစ်ဝက်စျေး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "在",
    "hiragana": "ざい / あ(る)",
    "romaji": "zai / a(ru)",
    "meaning": "တည်ရှိသည် / ရှိနေသည်",
    "tag": "第4週6日目",
    "examples": [
      {
        "word": "不在",
        "reading": "ふざい",
        "mean": "မရှိခြင်း/လူမရှိ"
      },
      {
        "word": "現在",
        "reading": "げんざい",
        "mean": "မျက်မှောက်ကာလ/လက်ရှိ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "取",
    "hiragana": "と(る) / しゅ",
    "romaji": "to(ru) / shu",
    "meaning": "ယူသည် / ကိုင်တွယ်သည်",
    "tag": "第4週6日目",
    "examples": [
      {
        "word": "取る",
        "reading": "とる",
        "mean": "ယူသည်"
      },
      {
        "word": "受け取る",
        "reading": "うけとる",
        "mean": "လက်ခံရယူသည်"
      },
      {
        "word": "受取人",
        "reading": "うけとりにん",
        "mean": "လက်ခံသူ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "衣",
    "hiragana": "い / ころも",
    "romaji": "i / koromo",
    "meaning": "အဝတ်အထည်",
    "tag": "第4週6日目",
    "examples": [
      {
        "word": "衣類",
        "reading": "いるい",
        "mean": "အဝတ်အထည်အမျိုးမျိုး"
      },
      {
        "word": "衣服",
        "reading": "いふく",
        "mean": "အဝတ်အစား"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "参",
    "hiragana": "さん / まい(る)",
    "romaji": "san / mai(ru)",
    "meaning": "ပါဝင်သည် / သွားရောက်သည် (ယဉ်ကျေး)",
    "tag": "第4週6日目",
    "examples": [
      {
        "word": "参加",
        "reading": "さんか",
        "mean": "ပါဝင်တက်ရောက်ခြင်း"
      },
      {
        "word": "参考書",
        "reading": "さんこうしょ",
        "mean": "ကိုးကားရည်ညွှန်းစာအုပ်"
      },
      {
        "word": "参る",
        "reading": "まいる",
        "mean": "သွားသည်/လာသည် (နှိမ့်ချစကား)"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "達",
    "hiragana": "たつ / たち",
    "romaji": "tatsu / tachi",
    "meaning": "ရောက်ရှိသည် / အများဆိုင်စကားလုံး",
    "tag": "第4週6日目",
    "examples": [
      {
        "word": "上達",
        "reading": "じょうたつ",
        "mean": "တိုးတက်ကျွမ်းကျင်လာခြင်း"
      },
      {
        "word": "速達",
        "reading": "そくたつ",
        "mean": "အမြန်ချောစာ"
      },
      {
        "word": "友達",
        "reading": "ともだち",
        "mean": "သူငယ်ချင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "細",
    "hiragana": "ほそ(い) / こま(かい) / さい",
    "romaji": "hoso(i) / koma(kai)",
    "meaning": "သေးသွယ်သော / အသေးစိတ်ကျသော",
    "tag": "第4週7日目",
    "examples": [
      {
        "word": "細い",
        "reading": "ほそい",
        "mean": "သေးသွယ်သော"
      },
      {
        "word": "細かい",
        "reading": "こまかい",
        "mean": "အသေးစိတ်ကျသော/အကြွေ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "戸",
    "hiragana": "と / こ",
    "romaji": "to / ko",
    "meaning": "တံခါး",
    "tag": "第4週7日目",
    "examples": [
      {
        "word": "戸",
        "reading": "と",
        "mean": "တံခါး"
      },
      {
        "word": "雨戸",
        "reading": "あまど",
        "mean": "မိုးကာတံခါးရှပ်တာ"
      },
      {
        "word": "戸だな",
        "reading": "とだな",
        "mean": "ဗီရို/စင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "湖",
    "hiragana": "こ / みずうみ",
    "romaji": "ko / mizuumi",
    "meaning": "ရေကန် / အင်း",
    "tag": "第4週7日目",
    "examples": [
      {
        "word": "びわ湖",
        "reading": "びわこ",
        "mean": "ဘိဝရေကန်"
      },
      {
        "word": "湖",
        "reading": "みずうみ",
        "mean": "ရေကန်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "船",
    "hiragana": "せん / ふね",
    "romaji": "sen / fune",
    "meaning": "သင်္ဘော / လှေ",
    "tag": "第4週7日目",
    "examples": [
      {
        "word": "風船",
        "reading": "ふうせん",
        "mean": "မိုးပျံပူဖောင်း"
      },
      {
        "word": "船長",
        "reading": "せんちょう",
        "mean": "သင်္ဘောကပ္ပတိန်"
      },
      {
        "word": "船",
        "reading": "ふね",
        "mean": "သင်္ဘော"
      },
      {
        "word": "船便",
        "reading": "ふなびん",
        "mean": "သင်္ဘောချောတိုက်ပို့စနစ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "角",
    "hiragana": "かく / かど / つの",
    "romaji": "kaku / kado",
    "meaning": "ထောင့် / ဂျို",
    "tag": "第4週7日目",
    "examples": [
      {
        "word": "角度",
        "reading": "かくど",
        "mean": "ထောင့်ဒီဂရီ"
      },
      {
        "word": "三角形",
        "reading": "さんかくけい",
        "mean": "တြိဂံ"
      },
      {
        "word": "四角形",
        "reading": "しかくけい",
        "mean": "စတုဂံ"
      },
      {
        "word": "角",
        "reading": "かど",
        "mean": "လမ်းထောင့်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "夫",
    "hiragana": "ふ / ふう / おっと",
    "romaji": "fu / fuu / otto",
    "meaning": "ခင်ပွန်း / ယောက်ျား",
    "tag": "第4週7日目",
    "examples": [
      {
        "word": "夫妻",
        "reading": "ふさい",
        "mean": "ဇနီးမောင်နှံ"
      },
      {
        "word": "夫婦",
        "reading": "ふうふ",
        "mean": "လင်မယား"
      },
      {
        "word": "夫",
        "reading": "おっと",
        "mean": "ခင်ပွန်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "苦",
    "hiragana": "くる(しい) / にが(い) / く",
    "romaji": "kuru(shii) / niga(i) / ku",
    "meaning": "ဆင်းရဲဒုက္ခရောက်သော / ခါးသက်သော",
    "tag": "第4週7日目",
    "examples": [
      {
        "word": "苦しい",
        "reading": "くるしい",
        "mean": "ဆင်းရဲဒုက္ခများသော"
      },
      {
        "word": "苦い",
        "reading": "にがい",
        "mean": "ခါးသော"
      },
      {
        "word": "苦手",
        "reading": "にがて",
        "mean": "အားနည်းသော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "礼",
    "hiragana": "れい / らい",
    "romaji": "rei / rai",
    "meaning": "ကျေးဇူးတင်ခြင်း / အရိုအသေပေးခြင်း",
    "tag": "第5週1日目",
    "examples": [
      {
        "word": "お礼",
        "reading": "おれい",
        "mean": "ကျေးဇူးတုံ့ပြန်ခြင်း"
      },
      {
        "word": "礼儀",
        "reading": "れいぎ",
        "mean": "ယဉ်ကျေးမှုအမူအရာ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "伺",
    "hiragana": "うかが(う)",
    "romaji": "ukaga(u)",
    "meaning": "မေးမြန်းလည်ပတ်သည် (ယဉ်ကျေးစကား)",
    "tag": "第5週1日目",
    "examples": [
      {
        "word": "伺う",
        "reading": "うかがう",
        "mean": "မေးမြန်းပါရစေ / လာပါမည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "汗",
    "hiragana": "あせ / かん",
    "romaji": "ase",
    "meaning": "ချွေး",
    "tag": "第5週1日目",
    "examples": [
      {
        "word": "汗",
        "reading": "あせ",
        "mean": "ချွေး"
      },
      {
        "word": "汗をかく",
        "reading": "あせをかく",
        "mean": "ချွေးထွက်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "念",
    "hiragana": "ねん",
    "romaji": "nen",
    "meaning": "သတိရစိတ် / စိတ်ကူး",
    "tag": "第5週1日目",
    "examples": [
      {
        "word": "残念",
        "reading": "ざんねん",
        "mean": "နှမြောစရာကောင်းသော"
      },
      {
        "word": "記念",
        "reading": "きねん",
        "mean": "အထိမ်းအမှတ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "涙",
    "hiragana": "なみだ / るい",
    "romaji": "namida",
    "meaning": "မျက်ရည်",
    "tag": "第5週1日目",
    "examples": [
      {
        "word": "涙",
        "reading": "なみだ",
        "mean": "မျက်ရည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "笑",
    "hiragana": "わら(う) / え(む) / しょう",
    "romaji": "wara(u) / shou",
    "meaning": "ရယ်မောသည် / ပြုံးသည်",
    "tag": "第5週1日目",
    "examples": [
      {
        "word": "笑う",
        "reading": "わらう",
        "mean": "ရယ်သည်"
      },
      {
        "word": "笑顔",
        "reading": "えがお",
        "mean": "အပြုံးမျက်နှာ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "簡",
    "hiragana": "かん",
    "romaji": "kan",
    "meaning": "ရိုးရှင်းသော / အတိုချုံး",
    "tag": "第5週2日目",
    "examples": [
      {
        "word": "簡単",
        "reading": "かんたん",
        "mean": "လွယ်ကူရိုးရှင်းသော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "単",
    "hiragana": "たん",
    "romaji": "tan",
    "meaning": "တစ်ခုတည်းသော / ရိုးရှင်းသော",
    "tag": "第5週2日目",
    "examples": [
      {
        "word": "単語",
        "reading": "たんご",
        "mean": "ဝေါဟာရ"
      },
      {
        "word": "単位",
        "reading": "たんい",
        "mean": "ယူနစ်/အတိုင်းအတာ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "感",
    "hiragana": "かん",
    "romaji": "kan",
    "meaning": "ခံစားမှု / ခံစားချက်",
    "tag": "第5週2日目",
    "examples": [
      {
        "word": "感じる",
        "reading": "かんじる",
        "mean": "ခံစားရသည်"
      },
      {
        "word": "感動",
        "reading": "かんどう",
        "mean": "စိတ်လှုပ်ရှားထိခိုက်မှု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "想",
    "hiragana": "そう",
    "romaji": "sou",
    "meaning": "စိတ်ကူး / အတွေးအမြင်",
    "tag": "第5週2日目",
    "examples": [
      {
        "word": "感想",
        "reading": "かんそう",
        "mean": "ခံစားချက်အတွေးအမြင်"
      },
      {
        "word": "予想",
        "reading": "よそう",
        "mean": "ကြိုတင်ခန့်မှန်းချက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "練",
    "hiragana": "れん / ね(る)",
    "romaji": "ren / ne(ru)",
    "meaning": "လေ့ကျင့်သည်",
    "tag": "第5週3日目",
    "examples": [
      {
        "word": "練習",
        "reading": "れんしゅう",
        "mean": "လေ့ကျင့်ခန်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "最",
    "hiragana": "さい / もっと(も)",
    "romaji": "sai / motto(mo)",
    "meaning": "အ...ဆုံး / အလွန်ဆုံး",
    "tag": "第5週3日目",
    "examples": [
      {
        "word": "最近",
        "reading": "さいきん",
        "mean": "မကြာသေးမီက"
      },
      {
        "word": "最初",
        "reading": "さいしょ",
        "mean": "အစပိုင်း"
      },
      {
        "word": "最後",
        "reading": "さいご",
        "mean": "နောက်ဆုံး"
      },
      {
        "word": "最も",
        "reading": "もっとも",
        "mean": "အလွန်ဆုံး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "辞",
    "hiragana": "じ / や(める)",
    "romaji": "ji / ya(meru)",
    "meaning": "နှုတ်ထွက်သည် / စကားလုံး",
    "tag": "第5週3日目",
    "examples": [
      {
        "word": "辞書",
        "reading": "じしょ",
        "mean": "အဘိဓာန်"
      },
      {
        "word": "辞める",
        "reading": "やめる",
        "mean": "အလုပ်ထွက်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "昨",
    "hiragana": "さく",
    "romaji": "saku",
    "meaning": "လွန်ခဲ့သော (မနေ့က/မနှစ်က)",
    "tag": "第5週4日目",
    "examples": [
      {
        "word": "昨日",
        "reading": "きのう",
        "mean": "မနေ့က"
      },
      {
        "word": "昨夜",
        "reading": "さくや",
        "mean": "မနေ့ညက"
      },
      {
        "word": "昨年",
        "reading": "さくねん",
        "mean": "မနှစ်က"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "君",
    "hiragana": "くん / きみ",
    "romaji": "kun / kimi",
    "meaning": "မင်း / မောင်",
    "tag": "第5週4日目",
    "examples": [
      {
        "word": "君",
        "reading": "きみ",
        "mean": "မင်း (သင်)"
      },
      {
        "word": "〇〇君",
        "reading": "くん",
        "mean": "...မောင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "結",
    "hiragana": "むす(ぶ) / けつ",
    "romaji": "musu(bu) / ketsu",
    "meaning": "ချည်နှောင်သည် / ရလဒ်",
    "tag": "第5週4日目",
    "examples": [
      {
        "word": "結婚",
        "reading": "けっこん",
        "mean": "လက်ထပ်ခြင်း"
      },
      {
        "word": "結果",
        "reading": "けっか",
        "mean": "ရလဒ်"
      },
      {
        "word": "結論",
        "reading": "けつろん",
        "mean": "နိဂုံးချုပ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "婚",
    "hiragana": "こん",
    "romaji": "kon",
    "meaning": "ထိမ်းမြားလက်ထပ်ခြင်း",
    "tag": "第5週4日目",
    "examples": [
      {
        "word": "結婚",
        "reading": "けっこん",
        "mean": "မင်္ဂလာဆောင်"
      },
      {
        "word": "新婚旅行",
        "reading": "しんこんりょこう",
        "mean": "ပျားရည်ဆမ်းခရီး"
      },
      {
        "word": "婚約",
        "reading": "こんやく",
        "mean": "စေ့စပ်ခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "祝",
    "hiragana": "しゅく / いわ(う)",
    "romaji": "shuku / iwa(u)",
    "meaning": "ဂုဏ်ပြုကျင်းပသည် / ဆုမွန်ကောင်းတောင်းသည်",
    "tag": "第5週4日目",
    "examples": [
      {
        "word": "祝日",
        "reading": "しゅくじつ",
        "mean": "အများပြည်သူရုံးပိတ်ရက်"
      },
      {
        "word": "祝う",
        "reading": "いわう",
        "mean": "ဂုဏ်ပြုကျင်းပသည်"
      },
      {
        "word": "お祝い",
        "reading": "おいわい",
        "mean": "ဂုဏ်ပြုပွဲ/လက်ဆောင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "曲",
    "hiragana": "きょく / ま(がる) / ま(げる)",
    "romaji": "kyoku / ma(garu)",
    "meaning": "တေးဂီတ / ကွေ့ကောက်သည်",
    "tag": "第5週4日目",
    "examples": [
      {
        "word": "曲",
        "reading": "きょく",
        "mean": "တေးသီချင်း"
      },
      {
        "word": "曲線",
        "reading": "きょくせん",
        "mean": "မျဉ်းကွေး"
      },
      {
        "word": "曲がる",
        "reading": "まがる",
        "mean": "ကွေ့သည်"
      },
      {
        "word": "曲げる",
        "reading": "まげる",
        "mean": "ကွေးညွှတ်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "奥",
    "hiragana": "おく",
    "romaji": "oku",
    "meaning": "အတွင်းပိုင်း / အတွင်းကျကျ",
    "tag": "第5週4日目",
    "examples": [
      {
        "word": "奥さん",
        "reading": "おくさん",
        "mean": "ဇနီးသည် (အခြားသူ၏)"
      },
      {
        "word": "奥",
        "reading": "おく",
        "mean": "အတွင်းဘက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "寝",
    "hiragana": "ね(る) / ね(かす) / しん",
    "romaji": "ne(ru) / shin",
    "meaning": "အိပ်စက်သည်",
    "tag": "第5週4日目",
    "examples": [
      {
        "word": "寝る",
        "reading": "ねる",
        "mean": "အိပ်သည်"
      },
      {
        "word": "寝坊",
        "reading": "ねぼう",
        "mean": "အိပ်ရာထနောက်ကျခြင်း"
      },
      {
        "word": "昼寝",
        "reading": "ひるね",
        "mean": "နေ့လယ်တစ်ရေးအိပ်ခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "痛",
    "hiragana": "つう / いた(い) / いた(む)",
    "romaji": "tsuu / ita(i)",
    "meaning": "နာကျင်ကိုက်ခဲသော",
    "tag": "第5週5日目",
    "examples": [
      {
        "word": "頭痛",
        "reading": "ずつう",
        "mean": "ခေါင်းကိုက်ခြင်း"
      },
      {
        "word": "腹痛",
        "reading": "ふくつう",
        "mean": "ဗိုက်အောင့်ခြင်း"
      },
      {
        "word": "痛い",
        "reading": "いたい",
        "mean": "နာကျင်သော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "熱",
    "hiragana": "ねつ / あつ(い)",
    "romaji": "netsu / atsu(i)",
    "meaning": "အပူချိန် / အဖျား / စိတ်အားထက်သန်မှု",
    "tag": "第5週5日目",
    "examples": [
      {
        "word": "熱",
        "reading": "ねつ",
        "mean": "အဖျား/အပူ"
      },
      {
        "word": "熱心",
        "reading": "ねっしん",
        "mean": "စိတ်အားထက်သန်သော"
      },
      {
        "word": "熱い",
        "reading": "あつい",
        "mean": "ပူသော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "虫",
    "hiragana": "むし / ちゅう",
    "romaji": "mushi / chuu",
    "meaning": "ပိုးမွှား / အင်းဆက်",
    "tag": "第5週5日目",
    "examples": [
      {
        "word": "虫",
        "reading": "むし",
        "mean": "ပိုးကောင်/အင်းဆက်"
      },
      {
        "word": "虫歯",
        "reading": "むしば",
        "mean": "သွားပိုးစားခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "歯",
    "hiragana": "し / は",
    "romaji": "shi / ha",
    "meaning": "သွား (ကိုယ်ခန္ဓာ)",
    "tag": "第5週5日目",
    "examples": [
      {
        "word": "歯科",
        "reading": "しか",
        "mean": "သွားနှင့်ခံတွင်းဆေးကုသဌာန"
      },
      {
        "word": "歯",
        "reading": "は",
        "mean": "သွား"
      },
      {
        "word": "歯医者",
        "reading": "はいしゃ",
        "mean": "သွားဆရာဝန်"
      },
      {
        "word": "虫歯",
        "reading": "むしば",
        "mean": "သွားပိုးစားခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "汚",
    "hiragana": "よご(れる) / きたな(い) / お",
    "romaji": "yogo(reru) / o",
    "meaning": "ညစ်ပတ်သော / ညစ်ညမ်းသည်",
    "tag": "第5週5日目",
    "examples": [
      {
        "word": "汚い",
        "reading": "きたない",
        "mean": "ညစ်ပတ်သော"
      },
      {
        "word": "汚染",
        "reading": "おせん",
        "mean": "ညစ်ညမ်းမှု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "並",
    "hiragana": "なら(ぶ) / なら(べる) / へい",
    "romaji": "nara(bu) / nara(beru)",
    "meaning": "စီတန်းသည် / ယှဉ်တွဲသည်",
    "tag": "第5週5日目",
    "examples": [
      {
        "word": "並ぶ",
        "reading": "ならぶ",
        "mean": "တန်းစီသည်"
      },
      {
        "word": "並べる",
        "reading": "ならべる",
        "mean": "စီထားသည်"
      },
      {
        "word": "歯並び",
        "reading": "はならび",
        "mean": "သွားအစီအစဉ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "他",
    "hiragana": "た / ほか",
    "romaji": "ta / hoka",
    "meaning": "အခြားသော",
    "tag": "第5週5日目",
    "examples": [
      {
        "word": "他の",
        "reading": "ほかの",
        "mean": "အခြားသော"
      },
      {
        "word": "この他",
        "reading": "このほか",
        "mean": "ဤအရာမှအပ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "身",
    "hiragana": "しん / み",
    "romaji": "shin / mi",
    "meaning": "ကိုယ်ခန္ဓာ / မိမိကိုယ်ကိုယ်",
    "tag": "第5週6日目",
    "examples": [
      {
        "word": "身長",
        "reading": "しんちょう",
        "mean": "အရပ်အမောင်း"
      },
      {
        "word": "独身",
        "reading": "どくしん",
        "mean": "လူလွတ်/လူပျိုအပျို"
      },
      {
        "word": "身分",
        "reading": "みぶん",
        "mean": "လူမှုအဆင့်အတန်း"
      },
      {
        "word": "刺身",
        "reading": "さしみ",
        "mean": "ငါးအစိမ်းလွှာ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "酒",
    "hiragana": "しゅ / さけ / さか",
    "romaji": "shu / sake",
    "meaning": "အရက်သေစာ / ဂျပန်အရက်",
    "tag": "第5週6日目",
    "examples": [
      {
        "word": "日本酒",
        "reading": "にほんしゅ",
        "mean": "ဂျပန်အရက်ဆာကေး"
      },
      {
        "word": "料理酒",
        "reading": "りょうりしゅ",
        "mean": "ဟင်းချက်အရက်"
      },
      {
        "word": "お酒",
        "reading": "おさけ",
        "mean": "အရက်"
      },
      {
        "word": "酒屋",
        "reading": "さかや",
        "mean": "အရက်ဆိုင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "吸",
    "hiragana": "きゅう / す(う)",
    "romaji": "kyuu / su(u)",
    "meaning": "ရှူရှိုက်သည် / စုပ်ယူသည်",
    "tag": "第5週6日目",
    "examples": [
      {
        "word": "呼吸",
        "reading": "こきゅう",
        "mean": "အသက်ရှူခြင်း"
      },
      {
        "word": "吸う",
        "reading": "すう",
        "mean": "ရှူသည်/စုပ်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "欲",
    "hiragana": "よく / ほ(しい)",
    "romaji": "yoku / ho(shii)",
    "meaning": "လိုချင်တပ်မက်သည်",
    "tag": "第5週6日目",
    "examples": [
      {
        "word": "食欲",
        "reading": "しょくよく",
        "mean": "အစာစားချင်စိတ်"
      },
      {
        "word": "意欲",
        "reading": "いよく",
        "mean": "စိတ်အားထက်သန်တက်ကြွမှု"
      },
      {
        "word": "欲しい",
        "reading": "ほしい",
        "mean": "လိုချင်သော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "眠",
    "hiragana": "みん / ねむ(い) / ねむ(る)",
    "romaji": "min / nemu(i)",
    "meaning": "အိပ်ငိုက်သည် / အိပ်ပျော်သည်",
    "tag": "第5週6日目",
    "examples": [
      {
        "word": "睡眠",
        "reading": "すいみん",
        "mean": "အိပ်စက်ခြင်း"
      },
      {
        "word": "眠い",
        "reading": "ねむい",
        "mean": "အိပ်ငိုက်သော"
      },
      {
        "word": "眠る",
        "reading": "ねむる",
        "mean": "အိပ်ပျော်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "疲",
    "hiragana": "つか(れる) / ひ",
    "romaji": "tsuka(reru) / hi",
    "meaning": "မောပန်းနွမ်းနယ်သည်",
    "tag": "第5週6日目",
    "examples": [
      {
        "word": "疲れる",
        "reading": "つかれる",
        "mean": "မောပန်းသည်"
      },
      {
        "word": "疲労",
        "reading": "ひろう",
        "mean": "ပင်ပန်းနွမ်းနယ်မှု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "息",
    "hiragana": "いき / そく",
    "romaji": "iki / soku",
    "meaning": "အသက်ရှူထုတ်သံ / သား",
    "tag": "第5週6日目",
    "examples": [
      {
        "word": "息",
        "reading": "いき",
        "mean": "အသက်ရှူသံ"
      },
      {
        "word": "息切れ",
        "reading": "いきぎれ",
        "mean": "အမောဖောက်ခြင်း"
      },
      {
        "word": "息子",
        "reading": "むすこ",
        "mean": "သား"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "呼",
    "hiragana": "こ / よ(ぶ)",
    "romaji": "ko / yo(bu)",
    "meaning": "ခေါ်ဝေါ်သည် / အသက်ရှူသည်",
    "tag": "第5週6日目",
    "examples": [
      {
        "word": "呼吸",
        "reading": "こきゅう",
        "mean": "အသက်ရှူခြင်း"
      },
      {
        "word": "呼ぶ",
        "reading": "よぶ",
        "mean": "ခေါ်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "厚",
    "hiragana": "あつ(い) / こう",
    "romaji": "atsu(i) / kou",
    "meaning": "ထူထဲသော / နွေးထွေးကြင်နာသော",
    "tag": "第5週7日目",
    "examples": [
      {
        "word": "厚い",
        "reading": "あつい",
        "mean": "ထူသော"
      },
      {
        "word": "濃厚",
        "reading": "のうこう",
        "mean": "ပြင်းပျစ်သော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "泣",
    "hiragana": "な(く) / きゅう",
    "romaji": "na(ku)",
    "meaning": "ငိုကြွေးသည်",
    "tag": "第5週7日目",
    "examples": [
      {
        "word": "泣く",
        "reading": "なく",
        "mean": "ငိုသည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "鳴",
    "hiragana": "な(く) / な(る) / めい",
    "romaji": "na(ku) / na(ru)",
    "meaning": "အော်မြည်သည် / အသံမြည်သည်",
    "tag": "第5週7日目",
    "examples": [
      {
        "word": "鳴く",
        "reading": "なく",
        "mean": "အော်မြည်သည် (တိရစ္ဆာန်)"
      },
      {
        "word": "鳴る",
        "reading": "なる",
        "mean": "မြည်သည် (ခေါင်းလောင်း/ဖုန်း)"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "初",
    "hiragana": "しょ / はじ(め) / はじ(めて) / はつ",
    "romaji": "sho / haji(me)",
    "meaning": "ပထမဆုံး / စတင်ခြင်း",
    "tag": "第5週7日目",
    "examples": [
      {
        "word": "最初",
        "reading": "さいしょ",
        "mean": "အစပိုင်း"
      },
      {
        "word": "初級",
        "reading": "しょきゅう",
        "mean": "အခြေခံအဆင့်"
      },
      {
        "word": "初め",
        "reading": "はじめ",
        "mean": "အစ"
      },
      {
        "word": "初めて",
        "reading": "はじめて",
        "mean": "ပထမဆုံးအကြိမ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "泊",
    "hiragana": "はく / と(まる) / と(める)",
    "romaji": "haku / to(maru)",
    "meaning": "တည်းခိုအိပ်စက်သည်",
    "tag": "第5週7日目",
    "examples": [
      {
        "word": "宿泊",
        "reading": "しゅくはく",
        "mean": "တည်းခိုခြင်း"
      },
      {
        "word": "泊まる",
        "reading": "とまる",
        "mean": "တည်းခိုသည်"
      },
      {
        "word": "泊める",
        "reading": "とめる",
        "mean": "တည်းခိုစေသည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "葉",
    "hiragana": "よう / は",
    "romaji": "you / ha",
    "meaning": "သစ်ရွက် / စကားလုံး",
    "tag": "第5週7日目",
    "examples": [
      {
        "word": "紅葉",
        "reading": "こうよう",
        "mean": "ဆောင်းဦးသစ်ရွက်နီ"
      },
      {
        "word": "葉",
        "reading": "は",
        "mean": "သစ်ရွက်"
      },
      {
        "word": "言葉",
        "reading": "ことば",
        "mean": "စကားလုံး/ဘာသာစကား"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "報",
    "hiragana": "むく(いる) / ほう",
    "romaji": "hou",
    "meaning": "သတင်းအချက်အလက် / သတင်းပို့သည်",
    "tag": "第6週1日目",
    "examples": [
      {
        "word": "天気予報",
        "reading": "てんきよほう",
        "mean": "မိုးလေဝသခန့်မှန်းချက်"
      },
      {
        "word": "報告",
        "reading": "ほうこく",
        "mean": "အစီရင်ခံစာ"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "晴",
    "hiragana": "は(れる) / せい",
    "romaji": "ha(reru) / sei",
    "meaning": "သာယာကြည်လင်သော (ရာသီဥတု)",
    "tag": "第6週1日目",
    "examples": [
      {
        "word": "晴れる",
        "reading": "はれる",
        "mean": "ရာသီဥတုသာယာသည်"
      },
      {
        "word": "晴れ",
        "reading": "はれ",
        "mean": "သာယာသောနေ့"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "雲",
    "hiragana": "くも / うん",
    "romaji": "kumo / un",
    "meaning": "တိမ်တိုက်",
    "tag": "第6週1日目",
    "examples": [
      {
        "word": "雲",
        "reading": "くも",
        "mean": "တိမ်တိုက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "吹",
    "hiragana": "ふ(く) / すい",
    "romaji": "fu(ku) / sui",
    "meaning": "လေတိုက်သည် / မှုတ်သည်",
    "tag": "第6週1日目",
    "examples": [
      {
        "word": "吹く",
        "reading": "ふく",
        "mean": "လေတိုက်သည်/မှုတ်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "暖",
    "hiragana": "だん / あたた(かい)",
    "romaji": "dan / atata(kai)",
    "meaning": "နွေးထွေးသော",
    "tag": "第6週1日目",
    "examples": [
      {
        "word": "暖房",
        "reading": "だんぼう",
        "mean": "အနွေးဓာတ်ပေးစနစ်"
      },
      {
        "word": "暖かい",
        "reading": "あたたかい",
        "mean": "နွေးထွေးသော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "雪",
    "hiragana": "ゆき / せつ",
    "romaji": "yuki / setsu",
    "meaning": "ဆီးနှင်း",
    "tag": "第6週1日目",
    "examples": [
      {
        "word": "雪",
        "reading": "ゆき",
        "mean": "ဆီးနှင်း"
      },
      {
        "word": "大雪",
        "reading": "おおゆき",
        "mean": "နှင်းမုန်တိုင်း/နှင်းထူထပ်စွာကျခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "震",
    "hiragana": "ふる(える) / しん",
    "romaji": "furu(eru) / shin",
    "meaning": "တုန်ခါသည် / မြေငလျင်",
    "tag": "第6週1日目",
    "examples": [
      {
        "word": "地震",
        "reading": "じしん",
        "mean": "ငလျင်"
      },
      {
        "word": "震度",
        "reading": "しんど",
        "mean": "ငလျင်ပြင်းအား"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "波",
    "hiragana": "は / なみ",
    "romaji": "ha / nami",
    "meaning": "လှိုင်း / လှိုင်းတံပိုး",
    "tag": "第6週1日目",
    "examples": [
      {
        "word": "電波",
        "reading": "でんぱ",
        "mean": "ရေဒီယို/ဖုန်းလိုင်း"
      },
      {
        "word": "波",
        "reading": "なみ",
        "mean": "လှိုင်း"
      },
      {
        "word": "津波",
        "reading": "つなみ",
        "mean": "ဆူနာမီလှိုင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "職",
    "hiragana": "しょく",
    "romaji": "shoku",
    "meaning": "အလုပ်အကိုင် / ရာထူး",
    "tag": "第6週2日目",
    "examples": [
      {
        "word": "職業",
        "reading": "しょくぎょう",
        "mean": "အလုပ်အကိုင်"
      },
      {
        "word": "就職",
        "reading": "しゅうしょく",
        "mean": "အလုပ်ရရှိခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "技",
    "hiragana": "ぎ / わざ",
    "romaji": "gi / waza",
    "meaning": "ကျွမ်းကျင်မှု / နည်းပညာ",
    "tag": "第6週2日目",
    "examples": [
      {
        "word": "技術",
        "reading": "ぎじゅつ",
        "mean": "နည်းပညာ/အတတ်ပညာ"
      },
      {
        "word": "技術者",
        "reading": "ぎじゅつしゃ",
        "mean": "အင်ဂျင်နီယာ/ကျွမ်းကျင်ပညာရှင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "般",
    "hiragana": "はん",
    "romaji": "han",
    "meaning": "ယေဘုယျ / အများ",
    "tag": "第6週2日目",
    "examples": [
      {
        "word": "一般",
        "reading": "いっぱん",
        "mean": "ယေဘုယျအားဖြင့်"
      },
      {
        "word": "一般に",
        "reading": "いっぱんに",
        "mean": "ယေဘုယျအားဖြင့်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "務",
    "hiragana": "つと(める) / む",
    "romaji": "tsuto(meru) / mu",
    "meaning": "တာဝန်ထမ်းဆောင်သည်",
    "tag": "第6週2日目",
    "examples": [
      {
        "word": "事務所",
        "reading": "じむしょ",
        "mean": "ရုံးခန်း"
      },
      {
        "word": "公務員",
        "reading": "こうむいん",
        "mean": "နိုင်ငံ့ဝန်ထမ်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "課",
    "hiragana": "か",
    "romaji": "ka",
    "meaning": "ဌာနခွဲ / သင်ခန်းစာ",
    "tag": "第6週2日目",
    "examples": [
      {
        "word": "課長",
        "reading": "かちょう",
        "mean": "ဌာနခွဲမှူး"
      },
      {
        "word": "課題",
        "reading": "かだい",
        "mean": "တာဝန်/ဆောင်ရွက်ရန်အချက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "球",
    "hiragana": "きゅう / たま",
    "romaji": "kyuu / tama",
    "meaning": "အလုံး / ဘောလုံး / ကမ္ဘာ",
    "tag": "第6週3日目",
    "examples": [
      {
        "word": "地球",
        "reading": "ちきゅう",
        "mean": "ကမ္ဘာမြေ"
      },
      {
        "word": "野球",
        "reading": "やきゅう",
        "mean": "ဘေ့စ်ဘော"
      },
      {
        "word": "電球",
        "reading": "でんきゅう",
        "mean": "မီးသီး"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "決",
    "hiragana": "けつ / き(める) / き(まる)",
    "romaji": "ketsu / ki(meru)",
    "meaning": "ဆုံးဖြတ်သည်",
    "tag": "第6週3日目",
    "examples": [
      {
        "word": "決して",
        "reading": "けっして",
        "mean": "လုံးဝ/မည်သည့်အခါမျှ"
      },
      {
        "word": "決定",
        "reading": "けってい",
        "mean": "ဆုံးဖြတ်ချက်"
      },
      {
        "word": "決める",
        "reading": "きめる",
        "mean": "ဆုံးဖြတ်သည်"
      },
      {
        "word": "決まる",
        "reading": "きまる",
        "mean": "ဆုံးဖြတ်ပြီးဖြစ်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "対",
    "hiragana": "たい / つい",
    "romaji": "tai / tsui",
    "meaning": "ဆန့်ကျင်ဘက် / ယှဉ်ပြိုင်မှု / နှိုင်းယှဉ်",
    "tag": "第6週3日目",
    "examples": [
      {
        "word": "１対２",
        "reading": "いちたいに",
        "mean": "၁ ဂိုး ၂"
      },
      {
        "word": "反対",
        "reading": "はんたい",
        "mean": "ဆန့်ကျင်ဘက်/သဘောမတူခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "流",
    "hiragana": "りゅう / なが(れる) / なが(す)",
    "romaji": "ryuu / naga(reru)",
    "meaning": "စီးဆင်းသည်",
    "tag": "第6週3日目",
    "examples": [
      {
        "word": "流れる",
        "reading": "ながれる",
        "mean": "စီးဆင်းသည်"
      },
      {
        "word": "流す",
        "reading": "ながす",
        "mean": "မျှောသည်/စီးဆင်းစေသည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "果",
    "hiragana": "は(たす) / か",
    "romaji": "ka",
    "meaning": "အသီးအပွင့် / ရလဒ်",
    "tag": "第6週3日目",
    "examples": [
      {
        "word": "果物",
        "reading": "くだもの",
        "mean": "သစ်သီး"
      },
      {
        "word": "結果",
        "reading": "けっか",
        "mean": "ရလဒ်"
      },
      {
        "word": "効果",
        "reading": "こうか",
        "mean": "အကျိုးသက်ရောက်မှု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "戦",
    "hiragana": "せん / たたか(う)",
    "romaji": "sen / tataka(u)",
    "meaning": "တိုက်ပွဲ / စစ်ပွဲ / တိုက်ခိုက်သည်",
    "tag": "第6週4日目",
    "examples": [
      {
        "word": "戦後",
        "reading": "せんご",
        "mean": "စစ်ပြီးခေတ်"
      },
      {
        "word": "戦争",
        "reading": "せんそう",
        "mean": "စစ်ပွဲ"
      },
      {
        "word": "戦う",
        "reading": "たたかう",
        "mean": "တိုက်ခိုက်ယှဉ်ပြိုင်သည်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "成",
    "hiragana": "せい / じょう / な(る)",
    "romaji": "sei / jyou / na(ru)",
    "meaning": "ဖြစ်ထွန်းသည် / ပြီးမြောက်သည်",
    "tag": "第6週4日目",
    "examples": [
      {
        "word": "成長",
        "reading": "せいちょう",
        "mean": "ကြီးပြင်းဖွံ့ဖြိုးမှု"
      },
      {
        "word": "完成",
        "reading": "かんせい",
        "mean": "ပြီးပြည့်စုံခြင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "輸",
    "hiragana": "ゆ",
    "romaji": "yu",
    "meaning": "တင်ပို့သည် / သယ်ယူသည်",
    "tag": "第6週4日目",
    "examples": [
      {
        "word": "輸入",
        "reading": "ゆにゅう",
        "mean": "သွင်းကုန်"
      },
      {
        "word": "輸出",
        "reading": "ゆしゅつ",
        "mean": "ပို့ကုန်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "相",
    "hiragana": "そう / しょう / あい",
    "romaji": "sou / shou / ai",
    "meaning": "အပြန်အလှန် / တစ်ဖက်လူ / ဝန်ကြီး",
    "tag": "第6週4日目",
    "examples": [
      {
        "word": "相手",
        "reading": "あいて",
        "mean": "တစ်ဖက်လူ/လက်တွဲဖော်"
      },
      {
        "word": "相談",
        "reading": "そうだん",
        "mean": "တိုင်ပင်ဆွေးနွေးခြင်း"
      },
      {
        "word": "首相",
        "reading": "しゅしょう",
        "mean": "ဝန်ကြီးချုပ်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "化",
    "hiragana": "か",
    "romaji": "ka",
    "meaning": "ပြောင်းလဲခြင်း",
    "tag": "第6週5日目",
    "examples": [
      {
        "word": "文化",
        "reading": "ぶんか",
        "mean": "ယဉ်ကျေးမှု"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "比",
    "hiragana": "ひ / くら(べる)",
    "romaji": "hi / kura(beru)",
    "meaning": "နှိုင်းယှဉ်သည်",
    "tag": "第6週5日目",
    "examples": [
      {
        "word": "比べる",
        "reading": "くらべる",
        "mean": "နှိုင်းယှဉ်သည်"
      },
      {
        "word": "比較",
        "reading": "ひかく",
        "mean": "နှိုင်းယှဉ်ချက်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "原",
    "hiragana": "げん / はら",
    "romaji": "gen / hara",
    "meaning": "မူလ / ကွင်းပြင်",
    "tag": "第6週5日目",
    "examples": [
      {
        "word": "原料",
        "reading": "げんりょう",
        "mean": "ကုန်ကြမ်း"
      },
      {
        "word": "原因",
        "reading": "げんいん",
        "mean": "အကြောင်းရင်း"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "的",
    "hiragana": "てき / まと",
    "romaji": "teki / mato",
    "meaning": "...ဆန်သော / ပစ်မှတ်",
    "tag": "第6週6日目",
    "examples": [
      {
        "word": "目的",
        "reading": "もくてき",
        "mean": "ရည်ရွယ်ချက်"
      },
      {
        "word": "国際的",
        "reading": "こくさいてき",
        "mean": "နိုင်ငံတကာဆန်သော"
      },
      {
        "word": "個人的",
        "reading": "こじんてき",
        "mean": "တစ်ဦးချင်းကိုယ်ပိုင်ဆန်သော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "専",
    "hiragana": "せん / もっぱ(ら)",
    "romaji": "sen",
    "meaning": "အထူးပြု / သီးသန့်",
    "tag": "第6週6日目",
    "examples": [
      {
        "word": "専門",
        "reading": "せんもん",
        "mean": "အထူးပြုဘာသာ"
      },
      {
        "word": "専門家",
        "reading": "せんもんか",
        "mean": "ကျွမ်းကျင်ပညာရှင်"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "忙",
    "hiragana": "ぼう / いそが(しい)",
    "romaji": "bou / isoga(shii)",
    "meaning": "အလုပ်များသော",
    "tag": "第6週7日目",
    "examples": [
      {
        "word": "多忙",
        "reading": "たぼう",
        "mean": "အလွန်အလုပ်များသော"
      },
      {
        "word": "忙しい",
        "reading": "いそがしい",
        "mean": "အလုပ်ရှုပ်သော"
      }
    ],
    "isHot": false
  },
  {
    "kanji": "祭",
    "hiragana": "さい / まつ(り) / まつ(る)",
    "romaji": "sai / matsu(ri)",
    "meaning": "ပွဲတော် / ယဇ်ပူဇော်ပွဲ",
    "tag": "第6週7日目",
    "examples": [
      {
        "word": "文化祭",
        "reading": "ぶんかさい",
        "mean": "ယဉ်ကျေးမှုပွဲတော်"
      },
      {
        "word": "お祭り",
        "reading": "おまつり",
        "mean": "ရိုးရာပွဲတော်"
      }
    ],
    "isHot": false
  }
];
