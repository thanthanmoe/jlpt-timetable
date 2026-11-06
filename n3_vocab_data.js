// JLPT N3 Frequently Tested Vocabulary (with Furigana Ruby)
const N3_VOCAB_DATA = [
  {
    "word": "売り切れる",
    "reading": "うりきれる",
    "romaji": "urikireru",
    "category": "compound",
    "meaning": "ရောင်းကုန်သွားသည် / ပစ္စည်းပြတ်သည်",
    "example": "人気のあるコンサートのチケットはすぐに売り切れた。",
    "exampleRuby": "<ruby>人気<rt>にんき</rt></ruby>のあるコンサートのチケットはすぐに<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れた。",
    "exampleMeaning": "လူကြိုက်များသော ဖျော်ဖြေပွဲလက်မှတ်များသည် ချက်ချင်း ရောင်းကုန်သွားခဲ့သည်။"
  },
  {
    "word": "問い合わせる",
    "reading": "といあわせる",
    "romaji": "toiawaseru",
    "category": "compound",
    "meaning": "စုံစမ်းမေးမြန်းသည်",
    "example": "詳しい日程については、事務所に問い合わせてください。",
    "exampleRuby": "<ruby>詳<rt>くわ</rt></ruby>しい<ruby>日程<rt>にってい</rt></ruby>については、<ruby>事務所<rt>じむしょ</rt></ruby>に<ruby>問<rt>と</rt></ruby>い<ruby>合<rt>あ</rt></ruby>わせてください。",
    "exampleMeaning": "အသေးစိတ်ရက်စွဲများနှင့် ပတ်သက်၍ ရုံးခန်းသို့ စုံစမ်းမေးမြန်းပါ။"
  },
  {
    "word": "申し込む",
    "reading": "もうしこむ",
    "romaji": "moushikomu",
    "category": "compound",
    "meaning": "လျှောက်ထားသည် / စာရင်းသွင်းသည်",
    "example": "JLPT試験の受験をインターネットで申し込んだ。",
    "exampleRuby": "JLPT<ruby>試験<rt>しけん</rt></ruby>の<ruby>受験<rt>じゅけん</rt></ruby>をインターネットで<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>んだ。",
    "exampleMeaning": "JLPT စာမေးပွဲဖြေဆိုရန် အင်တာနက်မှ လျှောက်ထားခဲ့သည်။"
  },
  {
    "word": "思い出す",
    "reading": "おもいだす",
    "romaji": "omoidasu",
    "category": "compound",
    "meaning": "သတိရသည် / ပြန်လည်စဉ်းစားမိသည်",
    "example": "子どものころの写真を見て、昔のことを思い出した。",
    "exampleRuby": "<ruby>子<rt>こ</rt></ruby>どものころの<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>て、<ruby>昔<rt>むかし</rt></ruby>のことを<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>した。",
    "exampleMeaning": "ငယ်စဉ်က ဓာတ်ပုံများကိုကြည့်ပြီး အတိတ်ကအကြောင်းများကို သတိရမိခဲ့သည်။"
  },
  {
    "word": "引き受ける",
    "reading": "ひきうける",
    "romaji": "hikiukeru",
    "category": "compound",
    "meaning": "တာဝန်ယူ လက်ခံသည်",
    "example": "忙しかったが、先輩に頼まれて仕事を引き受けた。",
    "exampleRuby": "<ruby>忙<rt>いそが</rt></ruby>しかったが、<ruby>先輩<rt>せんぱい</rt></ruby>に<ruby>頼<rt>たの</rt></ruby>まれて<ruby>仕事<rt>しごと</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けた。",
    "exampleMeaning": "အလုပ်များနေသော်လည်း စီနီယာက အကူအညီတောင်းသဖြင့် အလုပ်ကို တာဝန်ယူလက်ခံခဲ့သည်။"
  },
  {
    "word": "見直す",
    "reading": "みなおす",
    "romaji": "minaosu",
    "category": "compound",
    "meaning": "ပြန်လည်စစ်ဆေးသည် / အမြင်သစ်ဖြင့် ပြန်ကြည့်သည်",
    "example": "テストを提出する前にもう一度見直してください。",
    "exampleRuby": "テストを<ruby>提出<rt>ていしゅつ</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>にもう<ruby>一度<rt>いちど</rt></ruby><ruby>見<rt>み</rt></ruby><ruby>直<rt>なお</rt></ruby>してください。",
    "exampleMeaning": "စာမေးပွဲအဖြေလွှာ မတင်မီ နောက်တစ်ကြိမ် ပြန်လည်စစ်ဆေးပါ။"
  },
  {
    "word": "取り消す",
    "reading": "とりけす",
    "romaji": "torikesu",
    "category": "compound",
    "meaning": "ပယ်ဖျက်သည် / Cancel လုပ်သည်",
    "example": "急用ができたので、ホテルの予約を取り消した。",
    "exampleRuby": "<ruby>急用<rt>きゅうよう</rt></ruby>ができたので、ホテルの<ruby>予約<rt>よやく</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>消<rt>け</rt></ruby>した。",
    "exampleMeaning": "အရေးပေါ်ကိစ္စပေါ်လာသဖြင့် ဟိုတယ်ဘိုကင်ကို ပယ်ဖျက်လိုက်သည်။"
  },
  {
    "word": "間に合う",
    "reading": "まにあう",
    "romaji": "maniau",
    "category": "compound",
    "meaning": "အချိန်မီသည်",
    "example": "走ったので、始発電車に間に合った。",
    "exampleRuby": "<ruby>走<rt>hashi</rt></ruby>ったので、<ruby>始発<rt>しはつ</rt></ruby><ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>間<rt>ま</rt></ruby>に<ruby>合<rt>あ</rt></ruby>った。",
    "exampleMeaning": "ပြေးသွားခဲ့သဖြင့် ပထမဆုံးရထားကို အချိန်မီခဲ့သည်။"
  },
  {
    "word": "立ち直る",
    "reading": "たちなおる",
    "romaji": "tachinaoru",
    "category": "compound",
    "meaning": "စိတ်ပြန်လည်သက်သာနလန်ထူသည်",
    "example": "失敗したが、友人の励ましですぐに立ち直った。",
    "exampleRuby": "<ruby>失敗<rt>しっぱい</rt></ruby>したが、<ruby>友人<rt>ゆうじん</rt></ruby>の<ruby>励<rt>はげ</rt></ruby>ましですぐに<ruby>立<rt>た</rt></ruby>ち<ruby>直<rt>なお</rt></ruby>った。",
    "exampleMeaning": "ကျရှုံးခဲ့သော်လည်း သူငယ်ချင်း၏ အားပေးမှုကြောင့် ချက်ချင်း စိတ်ပြန်လည်နလန်ထူခဲ့သည်။"
  },
  {
    "word": "追いつく",
    "reading": "おいつく",
    "romaji": "oitsuku",
    "category": "compound",
    "meaning": "အမှီလိုက်နိုင်သည်",
    "example": "毎日勉強して、クラスのトップに追いつきたい。",
    "exampleRuby": "<ruby>毎日<rt>まいにち</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>して、クラスのトップに<ruby>追<rt>お</rt></ruby>いつきたい。",
    "exampleMeaning": "နေ့စဉ်စာကျက်ပြီး အတန်းထဲက ထိပ်ဆုံးလူကို အမှီလိုက်ချင်သည်။"
  },
  {
    "word": "乗り過ごす",
    "reading": "のりすごす",
    "romaji": "norisugosu",
    "category": "compound",
    "meaning": "ဘူတာကျော်လွန်စီးမိသည်",
    "example": "電車の中で居眠りをして、降りる駅を乗り過ごしてしまった。",
    "exampleRuby": "<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>居眠<rt>いねむ</rt></ruby>りをして、<ruby>降<rt>お</rt></ruby>りる<ruby>駅<rt>えき</rt></ruby>を<ruby>乗<rt>の</rt></ruby>り<ruby>過<rt>す</rt></ruby>ごしてしまった。",
    "exampleMeaning": "ရထားပေါ်တွင် ငိုက်မျဉ်းမိပြီး ဆင်းရမည့်ဘူတာကို ကျော်လွန်စီးမိသွားခဲ့သည်။"
  },
  {
    "word": "通りかかる",
    "reading": "とおりかかる",
    "romaji": "toorikakaru",
    "category": "compound",
    "meaning": "မတော်တဆ ဖြတ်သွားသည်",
    "example": "事故の現場を通りかかったので、警察に通報した。",
    "exampleRuby": "<ruby>事故<rt>じこ</rt></ruby>の<ruby>現場<rt>げんば</rt></ruby>を<ruby>通<rt>とお</rt></ruby>りかかったので、<ruby>警察<rt>けいさつ</rt></ruby>に<ruby>通報<rt>つうほう</rt></ruby>した。",
    "exampleMeaning": "မတော်တဆမှုဖြစ်သည့်နေရာကို မတော်တဆ ဖြတ်သွားမိသဖြင့် ရဲကို ဖုန်းဆက်အကြောင်းကြားခဲ့သည်။"
  },
  {
    "word": "打ち合わせる",
    "reading": "うちあわせる",
    "romaji": "uchiawaseru",
    "category": "compound",
    "meaning": "ကြိုတင်ညှိနှိုင်းဆွေးနွေးသည်",
    "example": "会議の前に、担当者と詳細を打ち合わせた。",
    "exampleRuby": "<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に、<ruby>担当者<rt>たんとうしゃ</rt></ruby>と<ruby>詳細<rt>しょうさい</rt></ruby>を<ruby>打<rt>う</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせた。",
    "exampleMeaning": "အစည်းအဝေးမတိုင်မီ တာဝန်ခံနှင့် အသေးစိတ် ကြိုတင်ညှိနှိုင်းဆွေးနွေးခဲ့သည်။"
  },
  {
    "word": "受け付ける",
    "reading": "うけつける",
    "romaji": "uketsukeru",
    "category": "compound",
    "meaning": "လက်ခံသည် (လျှောက်လွှာ/အမှာစာ)",
    "example": "願書の提出は明日まで受け付けています。",
    "exampleRuby": "<ruby>願書<rt>がんしょ</rt></ruby>の<ruby>提出<rt>ていしゅつ</rt></ruby>は<ruby>明日<rt>あした</rt></ruby>まで<ruby>受<rt>う</rt></ruby>け<ruby>付<rt>つ</rt></ruby>けています。",
    "exampleMeaning": "လျှောက်လွှာတင်သွင်းခြင်းကို မနက်ဖြန်အထိ လက်ခံပေးနေပါသည်။"
  },
  {
    "word": "落ち込む",
    "reading": "おちこむ",
    "romaji": "ochikomu",
    "category": "compound",
    "meaning": "စိတ်ဓာတ်ကျသည် / စိတ်ညစ်သည်",
    "example": "試験の結果が悪くて、すっかり落ち込んでしまった。",
    "exampleRuby": "<ruby>試験<rt>しけん</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くて、すっかり<ruby>落<rt>お</rt></ruby>ち<ruby>込<rt>こ</rt></ruby>んでしまった。",
    "exampleMeaning": "စာမေးပွဲရလဒ်ဆိုးသဖြင့် လုံးဝ စိတ်ဓာတ်ကျသွားခဲ့သည်။"
  },
  {
    "word": "差し上げる",
    "reading": "さしあげる",
    "romaji": "sashiageru",
    "category": "compound",
    "meaning": "ပေးကမ်းလှူဒါန်းသည် (ယဉ်ကျေးနှိမ့်ချစကား)",
    "example": "先生にお礼の品を差し上げました。",
    "exampleRuby": "<ruby>先生<rt>せんせい</rt></ruby>にお<ruby>礼<rt>れい</rt></ruby>の<ruby>品<rt>しな</rt></ruby>を<ruby>差<rt>さ</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げました。",
    "exampleMeaning": "ဆရာ့ထံသို့ ကျေးဇူးတင်လက်ဆောင် ပေးအပ်ခဲ့ပါသည်။"
  },
  {
    "word": "支払う",
    "reading": "しはらう",
    "romaji": "shiharau",
    "category": "compound",
    "meaning": "ငွေပေးချေသည်",
    "example": "レストランの代金をクレジットカードで支払った。",
    "exampleRuby": "レストランの<ruby>代金<rt>だいきん</rt></ruby>をクレジットカードで<ruby>支払<rt>しはら</rt></ruby>った。",
    "exampleMeaning": "စားသောက်ဆိုင်ဘေလ်ကို ကရက်ဒစ်ကတ်ဖြင့် ပေးချေခဲ့သည်။"
  },
  {
    "word": "立ち止まる",
    "reading": "たちどまる",
    "romaji": "tachidomaru",
    "category": "compound",
    "meaning": "ခြေလှမ်းရပ်တန့်သည်",
    "example": "美しい音楽が聞こえてきて、思わず立ち止まった。",
    "exampleRuby": "<ruby>美<rt>うつく</rt></ruby>しい<ruby>音楽<rt>おんがく</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえてきて、<ruby>思<rt>おも</rt></ruby>わず<ruby>立<rt>た</rt></ruby>ち<ruby>止<rt>ど</rt></ruby>まった。",
    "exampleMeaning": "သာယာသော တေးသံကို ကြားရသဖြင့် မသိစိတ်ဖြင့် ခြေလှမ်းရပ်တန့်မိခဲ့သည်။"
  },
  {
    "word": "出会う",
    "reading": "であう",
    "romaji": "deau",
    "category": "compound",
    "meaning": "မမျှော်လင့်ဘဲ ဆုံတွေ့သည်",
    "example": "留学中に多くの素晴らしい友人と出会った。",
    "exampleRuby": "<ruby>留学中<rt>りゅうがくちゅう</rt></ruby>に<ruby>多<rt>おお</rt></ruby>くの<ruby>素晴<rt>すばら</rt></ruby>しい<ruby>友人<rt>ゆうじん</rt></ruby>と<ruby>出<rt>で</rt></ruby><ruby>会<rt>あ</rt></ruby>った。",
    "exampleMeaning": "နိုင်ငံခြားပညာသင်ကြားစဉ် မိတ်ဆွေကောင်းများစွာနှင့် မမျှော်လင့်ဘဲ ဆုံတွေ့ခဲ့သည်။"
  },
  {
    "word": "振り返る",
    "reading": "ふりかえる",
    "romaji": "furikaeru",
    "category": "compound",
    "meaning": "နောက်သို့ လှည့်ကြည့်သည် / အတိတ်ကို ပြန်စဉ်းစားသည်",
    "example": "名前を呼ばれて振り返ったが、誰もいなかった。",
    "exampleRuby": "<ruby>名前<rt>なまえ</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>ばれて<ruby>振<rt>ふ</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>ったが、<ruby>誰<rt>だれ</rt></ruby>もいなかった。",
    "exampleMeaning": "နာမည်ခေါ်သံကြား၍ နောက်လှည့်ကြည့်သော်လည်း မည်သူမျှ မရှိခဲ့ပါ။"
  },
  {
    "word": "割り込む",
    "reading": "わりこむ",
    "romaji": "warikomu",
    "category": "compound",
    "meaning": "ကြားဖြတ်ဝင်သည် (တန်းစီရာတွင်)",
    "example": "並んでいる列に割り込むのはマナー違反だ。",
    "exampleRuby": "<ruby>並<rt>なら</rt></ruby>んでいる<ruby>列<rt>れつ</rt></ruby>に<ruby>割<rt>わ</rt></ruby>り<ruby>込<rt>こ</rt></ruby>むのはマナー<ruby>違反<rt>いはん</rt></ruby>だ。",
    "exampleMeaning": "တန်းစီနေသောတန်းထဲသို့ ကြားဖြတ်ဝင်ခြင်းသည် လူမှုစည်းကမ်းချိုးဖောက်ခြင်းဖြစ်သည်။"
  },
  {
    "word": "助け合う",
    "reading": "たすけあう",
    "romaji": "tasukeau",
    "category": "compound",
    "meaning": "အချင်းချင်း ရိုင်းပင်းကူညီသည်",
    "example": "困難なときは、お互いに助け合うことが大切だ。",
    "exampleRuby": "<ruby>困難<rt>こんなん</rt></ruby>なときは、お<ruby>互<rt>たが</rt></ruby>いに<ruby>助<rt>たす</rt></ruby>け<ruby>合<rt>あ</rt></ruby>うことが<ruby>大切<rt>たいせつ</rt></ruby>だ。",
    "exampleMeaning": "အခက်အခဲကြုံတွေ့ရချိန်တွင် အချင်းချင်း ရိုင်းပင်းကူညီရန် အရေးကြီးသည်။"
  },
  {
    "word": "組み立てる",
    "reading": "くみたてる",
    "romaji": "kumitateru",
    "category": "compound",
    "meaning": "တပ်ဆင်တည်ဆောက်သည်",
    "example": "説明書を見ながら新しい本棚を組み立てた。",
    "exampleRuby": "<ruby>説明書<rt>せつめいしょ</rt></ruby>を<ruby>見<rt>み</rt></ruby>ながら<ruby>新<rt>あたら</rt></ruby>しい<ruby>本棚<rt>ほんだな</rt></ruby>を<ruby>組<rt>く</rt></ruby>み<ruby>立<rt>た</rt></ruby>てた。",
    "exampleMeaning": "လမ်းညွှန်စာအုပ်ကိုကြည့်ရင်း စာအုပ်စင်အသစ်ကို တပ်ဆင်ခဲ့သည်။"
  },
  {
    "word": "払い戻す",
    "reading": "はらいもどす",
    "romaji": "haraimodosu",
    "category": "compound",
    "meaning": "ငွေပြန်အမ်းသည် (Refund)",
    "example": "飛行機が欠航になったので、料金が払い戻された。",
    "exampleRuby": "<ruby>飛行機<rt>ひこうき</rt></ruby>が<ruby>欠航<rt>けっこう</rt></ruby>になったので、<ruby>料金<rt>りょうきん</rt></ruby>が<ruby>払<rt>はら</rt></ruby>い<ruby>戻<rt>もど</rt></ruby>された。",
    "exampleMeaning": "လေယာဉ်ခရီးစဉ် ဖျက်သိမ်းလိုက်သဖြင့် လက်မှတ်ခကို ပြန်အမ်းပေးခဲ့သည်။"
  },
  {
    "word": "話し合う",
    "reading": "はなしあう",
    "romaji": "hanashiau",
    "category": "compound",
    "meaning": "အပြန်အလှန် ဆွေးနွေးတိုင်ပင်သည်",
    "example": "家族と将来の進路についてじっくり話し合った。",
    "exampleRuby": "<ruby>家族<rt>かぞく</rt></ruby>と<ruby>将来<rt>しょうらい</rt></ruby>の<ruby>進路<rt>しんろ</rt></ruby>についてじっくり<ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>った。",
    "exampleMeaning": "မိသားစုနှင့် အနာဂတ်ပညာရေးလမ်းကြောင်းအကြောင်း စိတ်အေးလက်အေး ဆွေးနွေးတိုင်ပင်ခဲ့သည်။"
  },
  {
    "word": "待ち合わせる",
    "reading": "まちあわせる",
    "romaji": "machiawaseru",
    "category": "compound",
    "meaning": "ချိန်းဆိုတွေ့ဆုံသည်",
    "example": "駅の改札口で友人と待ち合わせた。",
    "exampleRuby": "<ruby>駅<rt>えき</rt></ruby>の<ruby>改札口<rt>かいさつぐち</rt></ruby>で<ruby>友人<rt>ゆうじん</rt></ruby>と<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせた。",
    "exampleMeaning": "ဘူတာရုံ လက်မှတ်စစ်ဂိတ်တွင် သူငယ်ချင်းနှင့် ချိန်းဆိုတွေ့ဆုံခဲ့သည်။"
  },
  {
    "word": "似合う",
    "reading": "にあう",
    "romaji": "niau",
    "category": "compound",
    "meaning": "လိုက်ဖက်ညီသည်",
    "example": "その青いシャツはあなたによく似合っている。",
    "exampleRuby": "その<ruby>青<rt>あお</rt></ruby>いシャツはあなたによく<ruby>似合<rt>にあ</rt></ruby>っている。",
    "exampleMeaning": "ထို အပြာရောင်ရှပ်အင်္ကျီသည် သင်နှင့် အလွန်လိုက်ဖက်သည်။"
  },
  {
    "word": "やり直す",
    "reading": "やりなおす",
    "romaji": "yarinaosu",
    "category": "compound",
    "meaning": "အစကနေ ပြန်လုပ်သည်",
    "example": "間違いが多かったので、最初からやり直した。",
    "exampleRuby": "<ruby>間違<rt>まちが</rt></ruby>いが<ruby>多<rt>おお</rt></ruby>かったので、<ruby>最初<rt>さいしょ</rt></ruby>からやり<ruby>直<rt>なお</rt></ruby>した。",
    "exampleMeaning": "အမှားများသဖြင့် အစကနေ ပြန်လုပ်ခဲ့သည်။"
  },
  {
    "word": "見失う",
    "reading": "みうしなう",
    "romaji": "miushinau",
    "category": "compound",
    "meaning": "မျက်ခြည်ပြတ်သွားသည်",
    "example": "人混みの中で友人を見失ってしまった。",
    "exampleRuby": "<ruby>人混<rt>ひとご</rt></ruby>みの<ruby>中<rt>なか</rt></ruby>で<ruby>友人<rt>ゆうじん</rt></ruby>を<ruby>見失<rt>みうしな</rt></ruby>ってしまった。",
    "exampleMeaning": "လူအုပ်ကြီးထဲတွင် သူငယ်ချင်းကို မျက်ခြည်ပြတ်သွားခဲ့သည်။"
  },
  {
    "word": "繰り返す",
    "reading": "くりかえす",
    "romaji": "kurikaesu",
    "category": "compound",
    "meaning": "ထပ်ခါတလဲလဲ ပြုလုပ်သည်",
    "example": "練習を何度も繰り返すことで上達する。",
    "exampleRuby": "<ruby>練習<rt>れんしゅう</rt></ruby>を<ruby>何問<rt>なんども</rt></ruby><ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>すことで<ruby>上達<rt>じょうたつ</rt></ruby>する。",
    "exampleMeaning": "လေ့ကျင့်ခန်းကို အကြိမ်ကြိမ် ထပ်ခါတလဲလဲ လုပ်ခြင်းဖြင့် တိုးတက်လာမည်။"
  },
  {
    "word": "うっかり",
    "reading": "うっかり",
    "romaji": "ukkari",
    "category": "adverb",
    "meaning": "သတိလက်လွတ် မရည်ရွယ်ဘဲ ဖြစ်မိသော",
    "example": "うっかり大切な書類を家に忘れてしまった。",
    "exampleRuby": "うっかり<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>書類<rt>しょるい</rt></ruby>を<ruby>家<rt>いえ</rt></ruby>に<ruby>忘<rt>わす</rt></ruby>れてしまった。",
    "exampleMeaning": "သတိလက်လွတ်ဖြစ်ပြီး အရေးကြီးသော စာရွက်စာတမ်းကို အိမ်မှာ မေ့ကျန်ခဲ့သည်။"
  },
  {
    "word": "すっきり",
    "reading": "すっきり",
    "romaji": "sukkiri",
    "category": "adverb",
    "meaning": "စိတ်ပေါ့ပါးလန်းဆန်းသွားသော",
    "example": "シャワーを浴びて、気分がすっきりした。",
    "exampleRuby": "シャワーを<ruby>浴<rt>あ</rt></ruby>びて、<ruby>気分<rt>きぶん</rt></ruby>がすっきりした。",
    "exampleMeaning": "ရေချိုးလိုက်ပြီးနောက် စိတ်ပေါ့ပါးလန်းဆန်းသွားခဲ့သည်။"
  },
  {
    "word": "ぐっすり",
    "reading": "ぐっすり",
    "romaji": "gussuri",
    "category": "adverb",
    "meaning": "နှစ်နှစ်ခြိုက်ခြိုက် (အိပ်ပျော်သည်)",
    "example": "昨夜は疲れていたので、朝までぐっすり眠った。",
    "exampleRuby": "<ruby>昨夜<rt>さくや</rt></ruby>は<ruby>疲<rt>つか</rt></ruby>れていたので、<ruby>朝<rt>あさ</rt></ruby>までぐっすり<ruby>眠<rt>ねむ</rt></ruby>った。",
    "exampleMeaning": "မနေ့ညက မောပန်းနေသဖြင့် မနက်အထိ နှစ်နှစ်ခြိုက်ခြိုက် အိပ်ပျော်သွားခဲ့သည်။"
  },
  {
    "word": "はっきり",
    "reading": "はっきり",
    "romaji": "hakkiri",
    "category": "adverb",
    "meaning": "ရှင်းရှင်းလင်းလင်း ပြတ်ပြတ်သားသား",
    "example": "遠くの山がはっきりと見えた。",
    "exampleRuby": "<ruby>遠<rt>とお</rt></ruby>くの<ruby>山<rt>やま</rt></ruby>がはっきりと<ruby>見<rt>み</rt></ruby>えた。",
    "exampleMeaning": "ဝေးလံသော တောင်တန်းကြီးကို ရှင်းရှင်းလင်းလင်း မြင်တွေ့ခဲ့ရသည်။"
  },
  {
    "word": "ぴったり",
    "reading": "ぴったり",
    "romaji": "pittari",
    "category": "adverb",
    "meaning": "ကွက်တိ / အတိအကျ လိုက်ဖက်သော",
    "example": "この靴は私の足のサイズにぴったりだ。",
    "exampleRuby": "この<ruby>靴<rt>くつ</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>の<ruby>足<rt>あし</rt></ruby>のサイズにぴったりだ。",
    "exampleMeaning": "ဤဖိနပ်သည် ကျွန်ုပ်၏ ခြေထောက်ဆိုဒ်နှင့် ကွက်တိပင်ဖြစ်သည်။"
  },
  {
    "word": "ぼんやり",
    "reading": "ぼんやり",
    "romaji": "bonyari",
    "category": "adverb",
    "meaning": "မှုန်ဝါးဝါး / စိတ်လွင့်ငေးမောနေသော",
    "example": "窓の外をぼんやり眺めていた。",
    "exampleRuby": "<ruby>窓<rt>まど</rt></ruby>の<ruby>外<rt>そと</rt></ruby>をぼんやり<ruby>眺<rt>なが</rt></ruby>めていた。",
    "exampleMeaning": "ပြတင်းပေါက်အပြင်ဘက်ကို စိတ်လွင့်ငေးမောရင်း ကြည့်နေခဲ့သည်။"
  },
  {
    "word": "さっぱり",
    "reading": "さっぱり",
    "romaji": "sappari",
    "category": "adverb",
    "meaning": "လုံးဝ (နားမလည်) / လန်းဆန်းသော",
    "example": "先生の説明を聞いても、さっぱり分からなかった。",
    "exampleRuby": "<ruby>先生<rt>せんせい</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いても、さっぱり<ruby>分<rt>わ</rt></ruby>からなかった。",
    "exampleMeaning": "ဆရာရှင်းပြတာကို နားထောင်သော်လည်း လုံးဝ နားမလည်ခဲ့ပါ။"
  },
  {
    "word": "がっかり",
    "reading": "がっかり",
    "romaji": "gakkari",
    "category": "adverb",
    "meaning": "စိတ်ပျက်အားလျော့သွားသော",
    "example": "期待していた試合に負けて、がっかりした。",
    "exampleRuby": "<ruby>期待<rt>きたい</rt></ruby>していた<ruby>試合<rt>しあい</rt></ruby>に<ruby>負<rt>ま</rt></ruby>けて、がっかりした。",
    "exampleMeaning": "မျှော်လင့်ထားသော ပွဲစဉ်တွင် ရှုံးနိမ့်ခဲ့သဖြင့် စိတ်ပျက်အားလျော့သွားခဲ့သည်။"
  },
  {
    "word": "そっくり",
    "reading": "そっくり",
    "romaji": "sokkuri",
    "category": "adverb",
    "meaning": "တစ်ပုံစံတည်း တူညီသော",
    "example": "彼は父親に顔も声もそっくりだ。",
    "exampleRuby": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>父親<rt>ちちおや</rt></ruby>に<ruby>顔<rt>かお</rt></ruby>も<ruby>声<rt>こえ</rt></ruby>もそっくりだ。",
    "exampleMeaning": "သူသည် ဖခင်ဖြစ်သူနှင့် မျက်နှာရော အသံပါ တစ်ပုံစံတည်း တူသည်။"
  },
  {
    "word": "ぎっしり",
    "reading": "ぎっしり",
    "romaji": "gisshiri",
    "category": "adverb",
    "meaning": "ကျပ်ညပ်ပြည့်သိပ်နေသော",
    "example": "箱の中にチョコレートがぎっしり詰まっている。",
    "exampleRuby": "<ruby>箱<rt>はこ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>にチョコレートがぎっしり<ruby>詰<rt>つ</rt></ruby>まっている。",
    "exampleMeaning": "သေတ္တာထဲတွင် ချောကလက်များ ကျပ်ညပ်ပြည့်သိပ်နေသည်။"
  },
  {
    "word": "どんどん",
    "reading": "どんどん",
    "romaji": "dondon",
    "category": "adverb",
    "meaning": "တရစပ် / လျင်မြန်စွာ",
    "example": "日本語の単語をどんどん覚えていこう。",
    "exampleRuby": "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>単語<rt>たんご</rt></ruby>をどんどん<ruby>覚<rt>おぼ</rt></ruby>えていこう。",
    "exampleMeaning": "ဂျပန်စာဝေါဟာရများကို တရစပ် မှတ်သားသွားကြပါစို့။"
  },
  {
    "word": "ますます",
    "reading": "ますます",
    "romaji": "masumasu",
    "category": "adverb",
    "meaning": "ပို၍ပို၍",
    "example": "雨はますます激しくなってきた。",
    "exampleRuby": "<ruby>雨<rt>あめ</rt></ruby>はますます<ruby>激<rt>はげ</rt></ruby>しくなってきた。",
    "exampleMeaning": "မိုးသည် ပို၍ပို၍ ပြင်းထန်လာခဲ့သည်။"
  },
  {
    "word": "いよいよ",
    "reading": "いよいよ",
    "romaji": "iyoiyo",
    "category": "adverb",
    "meaning": "နောက်ဆုံးတော့ အချိန်ရောက်လာပြီဖြစ်သော",
    "example": "いよいよ明日、JLPTの試験本番だ。",
    "exampleRuby": "いよいよ<ruby>明日<rt>あした</rt></ruby>、JLPTの<ruby>試験<rt>しけん</rt></ruby><ruby>本番<rt>ほんばん</rt></ruby>だ。",
    "exampleMeaning": "နောက်ဆုံးတော့ မနက်ဖြန်ဟာ JLPT စာမေးပွဲဖြေဆိုရမည့် နေ့စစ်စစ် ဖြစ်လာပြီ။"
  },
  {
    "word": "とうとう",
    "reading": "とうとう",
    "romaji": "toutou",
    "category": "adverb",
    "meaning": "နောက်ဆုံးမှာတော့",
    "example": "長い努力の末、とうとう夢をかなえた。",
    "exampleRuby": "<ruby>長<rt>なが</rt></ruby>い<ruby>努力<rt>どりょく</rt></ruby>の<ruby>末<rt>すえ</rt></ruby>、とうとう<ruby>夢<rt>ゆめ</rt></ruby>をかなえた。",
    "exampleMeaning": "အချိန်ကြာမြင့်စွာ ကြိုးစားပြီးနောက် နောက်ဆုံးမှာတော့ အိပ်မက်ကို အကောင်အထည်ဖော်နိုင်ခဲ့သည်။"
  },
  {
    "word": "ついに",
    "reading": "ついに",
    "romaji": "tsuini",
    "category": "adverb",
    "meaning": "နောက်ဆုံးတွင် (ရလဒ်/အောင်မြင်မှု ပေါ်ထွက်ခြင်း)",
    "example": "数か月の研究を経て、ついに新薬を開発した。",
    "exampleRuby": "<ruby>数<rt>すう</rt></ruby>か<ruby>月<rt>げつ</rt></ruby>の<ruby>研究<rt>けんきゅう</rt></ruby>を<ruby>経<rt>へ</rt></ruby>て、ついに<ruby>新薬<rt>しんやく</rt></ruby>を<ruby>開発<rt>かいはつ</rt></ruby>した。",
    "exampleMeaning": "လပေါင်းများစွာ သုတေသနပြုပြီးနောက် နောက်ဆုံးတွင် ဆေးဝါးသစ်ကို တီထွင်နိုင်ခဲ့သည်။"
  },
  {
    "word": "偶然",
    "reading": "ぐうぜん",
    "romaji": "guuzen",
    "category": "adverb",
    "meaning": "မတော်တဆ / မမျှော်လင့်ဘဲ",
    "example": "街を歩いていたら、偶然昔の同級生に会った。",
    "exampleRuby": "<ruby>街<rt>まち</rt></ruby>を<ruby>歩<rt>ある</rt></ruby>いていたら、<ruby>偶然<rt>ぐうぜん</rt></ruby><ruby>昔<rt>むかし</rt></ruby>の<ruby>同級生<rt>どうきゅうせい</rt></ruby>に<ruby>会<rt>あ</rt></ruby>った。",
    "exampleMeaning": "လမ်းလျှောက်နေစဉ် မတော်တဆ အတန်းဖော်ဟောင်းနှင့် ဆုံတွေ့ခဲ့သည်။"
  },
  {
    "word": "突然",
    "reading": "とつぜん",
    "romaji": "totsuzen",
    "category": "adverb",
    "meaning": "ရုတ်တရက် / ကောက်ကာငင်ကာ",
    "example": "突然大雨が降り出してきた。",
    "exampleRuby": "<ruby>突然<rt>とつぜん</rt></ruby><ruby>大雨<rt>おおあめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>り<ruby>出<rt>だ</rt></ruby>してきた。",
    "exampleMeaning": "ရုတ်တရက် မိုးသည်းထန်စွာ ရွာသွန်းလာခဲ့သည်။"
  },
  {
    "word": "必死に",
    "reading": "ひっしに",
    "romaji": "hisshini",
    "category": "adverb",
    "meaning": "အသည်းအသန် / အစွမ်းကုန်",
    "example": "試験に合格するために必死に勉強した。",
    "exampleRuby": "<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>するために<ruby>必死<rt>ひっし</rt></ruby>に<ruby>勉強<rt>べんきょう</rt></ruby>した。",
    "exampleMeaning": "စာမေးပွဲအောင်မြင်ရန်အတွက် အသည်းအသန် စာကျက်ခဲ့သည်။"
  },
  {
    "word": "思わず",
    "reading": "おもわず",
    "romaji": "omowazu",
    "category": "adverb",
    "meaning": "မသိစိတ်ဖြင့် မရည်ရွယ်ဘဲ ပြုလုပ်မိသော",
    "example": "映画の結末を見て、思わず涙を流した。",
    "exampleRuby": "<ruby>映画<rt>えいが</rt></ruby>の<ruby>結末<rt>けつまつ</rt></ruby>を<ruby>見<rt>み</rt></ruby>て、<ruby>思<rt>おも</rt></ruby>わず<ruby>涙<rt>なみだ</rt></ruby>を<ruby>流<rt>なが</rt></ruby>した。",
    "exampleMeaning": "ရုပ်ရှင်ဇာတ်သိမ်းကိုကြည့်ရင်း မသိစိတ်ဖြင့် မျက်ရည်ကျမိခဲ့သည်။"
  },
  {
    "word": "わざわざ",
    "reading": "わざわざ",
    "romaji": "wazawaza",
    "category": "adverb",
    "meaning": "သီးသန့် အပင်ပန်းခံ၍",
    "example": "忙しいのに、わざわざ空港まで見送りに来てくれた。",
    "exampleRuby": "<ruby>忙<rt>いそが</rt></ruby>しいのに、わざわざ<ruby>空港<rt>くうこう</rt></ruby>まで<ruby>見送<rt>みおく</rt></ruby>りに<ruby>来<rt>き</rt></ruby>てくれた。",
    "exampleMeaning": "အလုပ်များနေပါလျက်နှင့် သီးသန့် အပင်ပန်းခံပြီး လေဆိပ်အထိ လာပို့ပေးခဲ့သည်။"
  },
  {
    "word": "せっかく",
    "reading": "せっかく",
    "romaji": "sekkaku",
    "category": "adverb",
    "meaning": "ခဲရာခဲဆစ် အခွင့်အရေးရပါလျက်နှင့်",
    "example": "せっかく日本に来たのだから、富士山に登りたい。",
    "exampleRuby": "せっかく<ruby>日本<rt>にほん</rt></ruby>に<ruby>来<rt>き</rt></ruby>たのだから、<ruby>富士山<rt>ふじさん</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>りたい。",
    "exampleMeaning": "ဂျပန်ကို ခဲရာခဲဆစ် ရောက်လာခဲ့တာဖြစ်လို့ ဖူဂျီတောင်ကို တက်ချင်သည်။"
  },
  {
    "word": "直ちに",
    "reading": "ただちに",
    "romaji": "tadachini",
    "category": "adverb",
    "meaning": "ချက်ချင်းလက်ငင်း",
    "example": "火事を発見したら、直ちに避難してください。",
    "exampleRuby": "<ruby>火事<rt>かじ</rt></ruby>を<ruby>発見<rt>はっけん</rt></ruby>したら、<ruby>直<rt>ただ</rt></ruby>ちに<ruby>避難<rt>ひなん</rt></ruby>してください。",
    "exampleMeaning": "မီးလောင်မှုတွေ့ရှိပါက ချက်ချင်းလက်ငင်း ဘေးလွတ်ရာသို့ ရွှေ့ပြောင်းပါ။"
  },
  {
    "word": "必ずしも",
    "reading": "かならずしも",
    "romaji": "kanarazushimo",
    "category": "adverb",
    "meaning": "မုချဧကန် မဟုတ်ပါ (အငြင်းလိုက်)",
    "example": "お金持ちが必ずしも幸せだとは限らない。",
    "exampleRuby": "お<ruby>金持<rt>かねも</rt></ruby>ちが<ruby>必<rt>かなら</rt></ruby>ずしも<ruby>幸<rt>しあわ</rt></ruby>せだとは<ruby>限<rt>かぎ</rt></ruby>らない。",
    "exampleMeaning": "ချမ်းသာသူတိုင်း မုချဧကန် ပျော်ရွှင်သည်ဟု မဆိုနိုင်ပါ။"
  },
  {
    "word": "めったに",
    "reading": "めったに",
    "romaji": "mettani",
    "category": "adverb",
    "meaning": "အလွန်တရာ ရှားပါးစွာ (အငြင်းလိုက်)",
    "example": "彼はめったに怒らない優しい人だ。",
    "exampleRuby": "<ruby>彼<rt>かれ</rt></ruby>はめったに<ruby>怒<rt>おこ</rt></ruby>らない<ruby>優<rt>やさ</rt></ruby>しい<ruby>人<rt>ひと</rt></ruby>だ。",
    "exampleMeaning": "သူသည် ဒေါသထွက်လေ့ အလွန်ရှားပါးသော သဘောကောင်းသူ ဖြစ်သည်။"
  },
  {
    "word": "相変わらず",
    "reading": "あいかわらず",
    "romaji": "aikawarazu",
    "category": "adverb",
    "meaning": "အရင်အတိုင်း မပြောင်းမလဲ",
    "example": "彼は相変わらず元気に働いている。",
    "exampleRuby": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>相変<rt>あいか</rt></ruby>わらず<ruby>元気<rt>げんき</rt></ruby>に<ruby>働<rt>はたら</rt></ruby>いている。",
    "exampleMeaning": "သူသည် အရင်အတိုင်း မပြောင်းမလဲ တက်ကြွစွာ အလုပ်လုပ်နေသည်။"
  },
  {
    "word": "ぎりぎり",
    "reading": "ぎりぎり",
    "romaji": "girigiri",
    "category": "adverb",
    "meaning": "ကပ်သီးကပ်သတ် / နောက်ဆုံးအချိန်မှီ",
    "example": "試験開始の５分前、ぎりぎりで教室に到着した。",
    "exampleRuby": "<ruby>試験開始<rt>しけんかいし</rt></ruby>の５<ruby>分前<rt>ふんまえ</rt></ruby>、ぎりぎりで<ruby>教室<rt>きょうしつ</rt></ruby>に<ruby>到着<rt>とうちゃく</rt></ruby>した。",
    "exampleMeaning": "စာမေးပွဲစတင်ရန် ၅ မိနစ်အလို ကပ်သီးကပ်သတ်ဖြင့် စာသင်ခန်းသို့ ရောက်ရှိခဲ့သည်။"
  },
  {
    "word": "じっくり",
    "reading": "じっくり",
    "romaji": "jikkuri",
    "category": "adverb",
    "meaning": "စိတ်အေးလက်အေး အချိန်ယူစဉ်းစားသော",
    "example": "将来のことをじっくり考えて決めるべきだ。",
    "exampleRuby": "<ruby>将来<rt>しょうらい</rt></ruby>のことをじっくり<ruby>考<rt>かんが</rt></ruby>えて<ruby>決<rt>き</rt></ruby>めるべきだ。",
    "exampleMeaning": "အနာဂတ်အရေးကို စိတ်အေးလက်အေး အချိန်ယူစဉ်းစားပြီး ဆုံးဖြတ်သင့်သည်။"
  },
  {
    "word": "アイデア",
    "reading": "アイデア",
    "romaji": "aidea",
    "category": "katakana",
    "meaning": "အကြံဉာဏ်သစ် (Idea)",
    "example": "新しいプロジェクトのための良いアイデアが浮かんだ。",
    "exampleRuby": "<ruby>新<rt>あたら</rt></ruby>しいプロジェクトのための<ruby>良<rt>よ</rt></ruby>いアイデアが<ruby>浮<rt>う</rt></ruby>かんだ。",
    "exampleMeaning": "ပရောဂျက်အသစ်အတွက် ကောင်းမွန်သော အကြံဉာဏ်သစ် ပေါ်လာခဲ့သည်။"
  },
  {
    "word": "アナウンス",
    "reading": "アナウンス",
    "romaji": "anaunsu",
    "category": "katakana",
    "meaning": "အသံလွှင့်ကြေညာချက် (Announce)",
    "example": "駅のアナウンスをよく聞いてから電車に乗った。",
    "exampleRuby": "<ruby>駅<rt>えき</rt></ruby>のアナウンスをよく<ruby>聞<rt>き</rt></ruby>いてから<ruby>電車<rt>でんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>った。",
    "exampleMeaning": "ဘူတာရုံ၏ အသံလွှင့်ကြေညာချက်ကို သေချာနားထောင်ပြီးမှ ရထားစီးခဲ့သည်။"
  },
  {
    "word": "アドバイス",
    "reading": "アドバイス",
    "romaji": "adobaisu",
    "category": "katakana",
    "meaning": "အကြံပေးချက် (Advice)",
    "example": "先輩からのアドバイスのおかげで問題が解決した。",
    "exampleRuby": "<ruby>先輩<rt>せんぱい</rt></ruby>からのアドバイスのおかげで<ruby>問題<rt>もんだい</rt></ruby>が<ruby>解決<rt>かいけつ</rt></ruby>した。",
    "exampleMeaning": "စီနီယာ၏ အကြံပေးချက်ကြောင့် ပြဿနာ ပြေလည်သွားခဲ့သည်။"
  },
  {
    "word": "インタビュー",
    "reading": "インタビュー",
    "romaji": "intabyuu",
    "category": "katakana",
    "meaning": "အင်တာဗျူး မေးမြန်းခြင်း (Interview)",
    "example": "テレビ番組で有名な作家にインタビューした。",
    "exampleRuby": "テレビ<ruby>番組<rt>ばんぐみ</rt></ruby>で<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>作家<rt>さっか</rt></ruby>にインタビューした。",
    "exampleMeaning": "တီဗီအစီအစဉ်တွင် နာမည်ကြီးစာရေးဆရာတစ်ဦးကို အင်တာဗျူး မေးမြန်းခဲ့သည်။"
  },
  {
    "word": "エネルギー",
    "reading": "エネルギー",
    "romaji": "enerugii",
    "category": "katakana",
    "meaning": "စွမ်းအင် (Energy)",
    "example": "太陽光は環境に優しいクリーンエネルギーだ。",
    "exampleRuby": "<ruby>太陽光<rt>たいようこう</rt></ruby>は<ruby>環境<rt>かんきょう</rt></ruby>に<ruby>優<rt>やさ</rt></ruby>しいクリーンエネルギーだ。",
    "exampleMeaning": "နေရောင်ခြည်စွမ်းအင်သည် သဘာဝပတ်ဝန်းကျင်နှင့် ညီညွတ်သော သန့်ရှင်းစွမ်းအင်ဖြစ်သည်။"
  },
  {
    "word": "キャンセル",
    "reading": "キャンセル",
    "romaji": "kyanseru",
    "category": "katakana",
    "meaning": "ဖျက်သိမ်းခြင်း (Cancel)",
    "example": "体調を崩したため、旅行をキャンセルした。",
    "exampleRuby": "<ruby>体調<rt>たいちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>したため、<ruby>旅行<rt>りょこう</rt></ruby>をキャンセルした。",
    "exampleMeaning": "နေမကောင်းဖြစ်သဖြင့် ခရီးစဉ်ကို ဖျက်သိမ်းခဲ့သည်။"
  },
  {
    "word": "キャリア",
    "reading": "キャリア",
    "romaji": "kyaria",
    "category": "katakana",
    "meaning": "အလုပ်အကိုင်အတွေ့အကြုံ / လုပ်သက် (Career)",
    "example": "IT業界で長いキャリアを積んできた。",
    "exampleRuby": "IT<ruby>業界<rt>ぎょうかい</rt></ruby>で<ruby>長<rt>なが</rt></ruby>いキャリアを<ruby>積<rt>つ</rt></ruby>んできた。",
    "exampleMeaning": "IT နယ်ပယ်တွင် လုပ်သက်အတွေ့အကြုံများစွာ စုဆောင်းခဲ့သည်။"
  },
  {
    "word": "コミュニケーション",
    "reading": "コミュニケーション",
    "romaji": "komyunikeeshon",
    "category": "katakana",
    "meaning": "အပြန်အလှန် ဆက်သွယ်ပြောဆိုမှု (Communication)",
    "example": "職場では同僚とのコミュニケーションが重要だ。",
    "exampleRuby": "<ruby>職場<rt>しょくば</rt></ruby>では<ruby>同僚<rt>どうりょう</rt></ruby>とのコミュニケーションが<ruby>重要<rt>じゅうよう</rt></ruby>だ。",
    "exampleMeaning": "လုပ်ငန်းခွင်တွင် လုပ်ဖော်ကိုင်ဖက်များနှင့် အပြန်အလှန် ဆက်သွယ်ပြောဆိုမှုသည် အရေးကြီးသည်။"
  },
  {
    "word": "スケジュール",
    "reading": "スケジュール",
    "romaji": "sukejuuru",
    "category": "katakana",
    "meaning": "အချိန်ဇယား / အစီအစဉ် (Schedule)",
    "example": "試験までのスケジュールを手帳に書き込んだ。",
    "exampleRuby": "<ruby>試験<rt>しけん</rt></ruby>までのスケジュールを<ruby>手帳<rt>てちょう</rt></ruby>に<ruby>書<rt>か</rt></ruby>き<ruby>込<rt>こ</rt></ruby>んだ。",
    "exampleMeaning": "စာမေးပွဲအထိ အချိန်ဇယားကို မှတ်စုစာအုပ်ထဲတွင် ရေးမှတ်ထားခဲ့သည်။"
  },
  {
    "word": "ストレス",
    "reading": "ストレス",
    "romaji": "sutoresu",
    "category": "katakana",
    "meaning": "စိတ်ဖိစီးမှု (Stress)",
    "example": "運動をして日頃のストレスを発散する。",
    "exampleRuby": "<ruby>運動<rt>うんどう</rt></ruby>をして<ruby>日頃<rt>ひごろ</rt></ruby>のストレスを<ruby>発散<rt>はっさん</rt></ruby>する。",
    "exampleMeaning": "လေ့ကျင့်ခန်းလုပ်ပြီး နေ့စဉ်စိတ်ဖိစီးမှုများကို လျှော့ချသည်။"
  },
  {
    "word": "トラブル",
    "reading": "トラブル",
    "romaji": "toraburu",
    "category": "katakana",
    "meaning": "ပြဿနာ / အခက်အခဲ (Trouble)",
    "example": "機械のトラブルで工場が一時停止した。",
    "exampleRuby": "<ruby>機械<rt>きかい</rt></ruby>のトラブルで<ruby>工場<rt>こうじょう</rt></ruby>が<ruby>一時停止<rt>いちじていし</rt></ruby>した。",
    "exampleMeaning": "စက်ချွတ်ယွင်းမှု ပြဿနာကြောင့် စက်ရုံ ခေတ္တရပ်ဆိုင်းခဲ့သည်။"
  },
  {
    "word": "バランス",
    "reading": "バランス",
    "romaji": "baransu",
    "category": "katakana",
    "meaning": "ဟန်ချက်ညီမျှမှု (Balance)",
    "example": "栄養のバランスを考えて食事をとる。",
    "exampleRuby": "<ruby>栄養<rt>えいよう</rt></ruby>のバランスを<ruby>考<rt>かんが</rt></ruby>えて<ruby>食事<rt>しょくじ</rt></ruby>をとる。",
    "exampleMeaning": "အာဟာရဓာတ် ဟန်ချက်ညီမျှမှုကို ထည့်သွင်းစဉ်းစားပြီး အစားအသောက် စားသုံးသည်။"
  },
  {
    "word": "メリット",
    "reading": "メリット",
    "romaji": "meritto",
    "category": "katakana",
    "meaning": "အားသာချက် / ကောင်းကျိုး (Merit)",
    "example": "オンライン授業には通学時間がかからないメリットがある。",
    "exampleRuby": "オンライン<ruby>授業<rt>じゅぎょう</rt></ruby>には<ruby>通学時間<rt>つうがくじかん</rt></ruby>がかからないメリットがある。",
    "exampleMeaning": "အွန်လိုင်းအတန်းတွင် ကျောင်းသွားချိန် မကုန်သည့် အားသာချက်ရှိသည်။"
  },
  {
    "word": "デメリット",
    "reading": "デメリット",
    "romaji": "demeritto",
    "category": "katakana",
    "meaning": "အားနည်းချက် / ဆိုးကျိုး (Demerit)",
    "example": "どんな方法にもメリットとデメリットがある。",
    "exampleRuby": "どんな<ruby>方法<rt>ほうほう</rt></ruby>にもメリットとデメリットがある。",
    "exampleMeaning": "မည်သည့်နည်းလမ်းတွင်မဆို အားသာချက်နှင့် အားနည်းချက် ရှိစမြဲဖြစ်သည်။"
  },
  {
    "word": "リサイクル",
    "reading": "リサイクル",
    "romaji": "risaikuru",
    "category": "katakana",
    "meaning": "ပြန်လည်အသုံးပြုခြင်း (Recycle)",
    "example": "ペットボトルをリサイクルしてゴミを減らす。",
    "exampleRuby": "ペットボトルをリサイクルしてゴミを<ruby>減<rt>へ</rt></ruby>らす。",
    "exampleMeaning": "ပလတ်စတစ်ဘူးခွံများကို ပြန်လည်အသုံးပြုပြီး အမှိုက်ကို လျှော့ချသည်။"
  },
  {
    "word": "味わう",
    "reading": "あじわう",
    "romaji": "ajiwau",
    "category": "verb_adj",
    "meaning": "အရသာခံသည် / ခံစားသိရှိသည်",
    "example": "母が作ってくれた郷土料理をじっくり味わった。",
    "exampleRuby": "<ruby>母<rt>はは</rt></ruby>が<ruby>作<rt>つく</rt></ruby>ってくれた<ruby>郷土料理<rt>きょうどりょうり</rt></ruby>をじっくり<ruby>味<rt>あじ</rt></ruby>わった。",
    "exampleMeaning": "အမေချက်ပေးသော ဒေသရိုးရာဟင်းလျာကို စိတ်အေးလက်အေး အရသာခံ စားသုံးခဲ့သည်။"
  },
  {
    "word": "慌てる",
    "reading": "あわてる",
    "romaji": "awateru",
    "category": "verb_adj",
    "meaning": "ပြာပြာသလဲဖြစ်သည် / ကယောင်ကတမ်းဖြစ်သည်",
    "example": "地震が起きても、慌てずに落ち着いて行動してください。",
    "exampleRuby": "<ruby>地震<rt>じしん</rt></ruby>が<ruby>起<rt>お</rt></ruby>きても、<ruby>慌<rt>あわ</rt></ruby>てずに<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて<ruby>行動<rt>こうどう</rt></ruby>してください。",
    "exampleMeaning": "ငလျင်လှုပ်သော်လည်း ပြာပြာသလဲမဖြစ်ဘဲ တည်ငြိမ်စွာ လှုပ်ရှားပါ။"
  },
  {
    "word": "疑う",
    "reading": "うたがう",
    "romaji": "utagau",
    "category": "verb_adj",
    "meaning": "သံသယဖြစ်သည် / မယုံသင်္ကာဖြစ်သည်",
    "example": "彼の言葉を疑う理由は何もない。",
    "exampleRuby": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>言葉<rt>ことば</rt></ruby>を<ruby>疑<rt>うたが</rt></ruby>う<ruby>理由<rt>りゆう</rt></ruby>は<ruby>何<rt>なに</rt></ruby>もない。",
    "exampleMeaning": "သူ၏ စကားကို သံသယဖြစ်ရမည့် မည်သည့်အကြောင်းရင်းမျှ မရှိပါ။"
  },
  {
    "word": "悔やむ",
    "reading": "くやむ",
    "romaji": "kuyamu",
    "category": "verb_adj",
    "meaning": "နောင်တရသည် / စိတ်မကောင်းဖြစ်သည်",
    "example": "過去の失敗をいつまでも悔やんでも仕方がない。",
    "exampleRuby": "<ruby>過去<rt>かこ</rt></ruby>の<ruby>失敗<rt>しっぱい</rt></ruby>をいつまでも<ruby>悔<rt>く</rt></ruby>やんでも<ruby>仕方<rt>しかた</rt></ruby>がない。",
    "exampleMeaning": "အတိတ်က အမှားများကို အချိန်မရွေး နောင်တရနေလည်း အလကားပင်ဖြစ်သည်။"
  },
  {
    "word": "逆らう",
    "reading": "さからう",
    "romaji": "sakarau",
    "category": "verb_adj",
    "meaning": "ဆန့်ကျင်ဖီဆန်သည် (ရေဆန်/လူကြီး)",
    "example": "川の流れに逆らって泳ぐのは危険だ。",
    "exampleRuby": "<ruby>川<rt>かわ</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れに<ruby>逆<rt>さက</rt></ruby>らって<ruby>泳<rt>およ</rt></ruby>ぐのは<ruby>危険<rt>きけん</rt></ruby>だ。",
    "exampleMeaning": "မြစ်ရေစီးကြောင်းကို ဆန်တက်ပြီး ရေကူးခြင်းသည် အန္တရာယ်များသည်။"
  },
  {
    "word": "従う",
    "reading": "したがう",
    "romaji": "shitagau",
    "category": "verb_adj",
    "meaning": "လိုက်နာသည် / နာခံသည်",
    "example": "交通ルールに従って安全に運転する。",
    "exampleRuby": "<ruby>交通<rt>こうつう</rt></ruby>ルールに<ruby>従<rt>したが</rt></ruby>って<ruby>安全<rt>あんぜん</rt></ruby>に<ruby>運転<rt>うんてん</rt></ruby>する。",
    "exampleMeaning": "ယာဉ်စည်းကမ်းကို လိုက်နာပြီး ဘေးကင်းစွာ မောင်းနှင်သည်။"
  },
  {
    "word": "怠ける",
    "reading": "なまける",
    "romaji": "namakeru",
    "category": "verb_adj",
    "meaning": "ပျင်းရိသည် / ပျက်ကွက်သည်",
    "example": "勉強を怠けると、試験で良い点は取れない。",
    "exampleRuby": "<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>怠<rt>なま</rt></ruby>けると、<ruby>試験<rt>しけん</rt></ruby>で<ruby>良<rt>よ</rt></ruby>い<ruby>点<rt>てん</rt></ruby>は<ruby>取<rt>と</rt></ruby>れない。",
    "exampleMeaning": "စာကျက်ရန် ပျင်းရိနေပါက စာမေးပွဲတွင် အမှတ်ကောင်း ရရှိမည်မဟုတ်ပါ။"
  },
  {
    "word": "補う",
    "reading": "おぎなう",
    "romaji": "oginau",
    "category": "verb_adj",
    "meaning": "ဖြည့်ဆည်းပေးသည် / အစားထိုးသည်",
    "example": "睡眠不足を休日の昼寝で補った。",
    "exampleRuby": "<ruby>睡眠不足<rt>すいみんぶそく</rt></ruby>を<ruby>休日<rt>きゅうじつ</rt></ruby>の<ruby>昼寝<rt>ひるね</rt></ruby>で<ruby>補<rt>おぎな</rt></ruby>った。",
    "exampleMeaning": "အိပ်ရေးမဝမှုကို ရုံးပိတ်ရက် နေ့လယ်တစ်ရေးအိပ်ခြင်းဖြင့် ဖြည့်ဆည်းခဲ့သည်။"
  },
  {
    "word": "招く",
    "reading": "まねく",
    "romaji": "maneku",
    "category": "verb_adj",
    "meaning": "ဖိတ်ခေါ်သည် / အန္တရာယ်ကို ဖိတ်ခေါ်သလိုဖြစ်သည်",
    "example": "不注意な発言が大きな誤解を招いてしまった。",
    "exampleRuby": "<ruby>不注意<rt>ふちゅうい</rt></ruby>な<ruby>発言<rt>はつげん</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きな<ruby>誤解<rt>ごかい</rt></ruby>を<ruby>招<rt>まね</rt></ruby>いてしまった。",
    "exampleMeaning": "သတိမမူသော ပြောစကားက ကြီးမားသော နားလည်မှုလွဲမှားခြင်းကို ဖိတ်ခေါ်သလို ဖြစ်သွားခဲ့သည်။"
  },
  {
    "word": "恵まれる",
    "reading": "めぐまれる",
    "romaji": "megumareru",
    "category": "verb_adj",
    "meaning": "ကံကောင်းစွာ ရရှိခံစားရသည်",
    "example": "素晴らしい友人や先生に恵まれて幸せだ。",
    "exampleRuby": "<ruby>素晴<rt>すばら</rt></ruby>しい<ruby>友人<rt>ゆうじん</rt></ruby>や<ruby>先生<rt>せんせい</rt></ruby>に<ruby>恵<rt>めぐ</rt></ruby>まれて<ruby>幸<rt>しあわ</rt></ruby>せだ。",
    "exampleMeaning": "မိတ်ဆွေကောင်း၊ ဆရာကောင်းများ ရရှိခံစားရသဖြင့် ပျော်ရွှင်ရပါသည်။"
  },
  {
    "word": "惜しい",
    "reading": "おしい",
    "romaji": "oshii",
    "category": "verb_adj",
    "meaning": "နှမြောဖို့ကောင်းသော / နီးနီးလေး လွဲသွားသော",
    "example": "あと１点で合格だったのに、本当に惜しかった。",
    "exampleRuby": "あと１<ruby>点<rt>てん</rt></ruby>で<ruby>合格<rt>ごうかく</rt></ruby>だったのに、<ruby>本当<rt>ほんとう</rt></ruby>に<ruby>惜<rt>お</rt></ruby>しかった。",
    "exampleMeaning": "နောက်ထပ် ၁ မှတ်ရရုံနှင့် အောင်မြင်မှာဖြစ်သော်လည်း တကယ်ကို နှမြောဖို့ကောင်းခဲ့သည်။"
  },
  {
    "word": "怪しい",
    "reading": "あやしい",
    "romaji": "ayashii",
    "category": "verb_adj",
    "meaning": "သံသယဖြစ်ဖွယ်ကောင်းသော / မသင်္ကာဖွယ်",
    "example": "夜遅く、怪しい男が家の周りを歩いていた。",
    "exampleRuby": "<ruby>夜遅<rt>よるおそ</rt></ruby>く、<ruby>怪<rt>あや</rt></ruby>しい<ruby>男<rt>おとこ</rt></ruby>が<ruby>家<rt>いえ</rt></ruby>の<ruby>周<rt>まわ</rt></ruby>りを<ruby>歩<rt>ある</rt></ruby>いていた。",
    "exampleMeaning": "ညဉ့်နက်သန်းခေါင်တွင် မသင်္ကာဖွယ် အမျိုးသားတစ်ဦး အိမ်အနီး လျှောက်သွားနေခဲ့သည်။"
  },
  {
    "word": "悔しい",
    "reading": "くやしい",
    "romaji": "kuyashii",
    "category": "verb_adj",
    "meaning": "နာကျည်းခံပြင်းရသော / စိတ်မကျေနပ်သော",
    "example": "ライバルに負けてとても悔しかった。",
    "exampleRuby": "ライバルに<ruby>負<rt>ま</rt></ruby>けてとても<ruby>悔<rt>くや</rt></ruby>しかった。",
    "exampleMeaning": "ပြိုင်ဘက်ကို ရှုံးနိမ့်ခဲ့သဖြင့် အလွန်ပင် နာကျည်းခံပြင်းခဲ့ရသည်။"
  },
  {
    "word": "険しい",
    "reading": "けわしい",
    "romaji": "kewashii",
    "category": "verb_adj",
    "meaning": "မတ်စောက်ခက်ခဲသော / တင်းမာသော",
    "example": "険しい山道を登りきって頂上に着いた。",
    "exampleRuby": "<ruby>険<rt>けわ</rt></ruby>しい<ruby>山道<rt>やまみち</rt></ruby>を<ruby>登<rt>のぼ</rt></ruby>りきって<ruby>頂上<rt>ちょうじょう</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いた。",
    "exampleMeaning": "မတ်စောက်ခက်ခဲသော တောင်တက်လမ်းကို ကျော်ဖြတ်ပြီး တောင်ထိပ်သို့ ရောက်ရှိခဲ့သည်။"
  },
  {
    "word": "くだらない",
    "reading": "くだらない",
    "romaji": "kudaranai",
    "category": "verb_adj",
    "meaning": "တန်ဖိုးမရှိသော / အဓိပ္ပာယ်မရှိသော",
    "example": "くだらない冗談を言って、みんなを笑わせた。",
    "exampleRuby": "くだらない<ruby>冗談<rt>じょうだん</rt></ruby>を<ruby>言<rt>い</rt></ruby>って、みんなを<ruby>笑<rt>わら</rt></ruby>わせた。",
    "exampleMeaning": "အဓိပ္ပာယ်မရှိသော ဟာသကိုပြောပြီး လူတိုင်းကို ရယ်မောစေခဲ့သည်။"
  },
  {
    "word": "贅沢な",
    "reading": "ぜいたくな",
    "romaji": "zeitakuna",
    "category": "verb_adj",
    "meaning": "ဇိမ်ခံဆန်သော / ဖြုန်းတီးသော",
    "example": "たまには高級レストランで贅沢な食事を楽しみたい。",
    "exampleRuby": "たまには<ruby>高級<rt>こうきゅう</rt></ruby>レストランで<ruby>贅沢<rt>ぜいたく</rt></ruby>な<ruby>食事<rt>しょくじ</rt></ruby>を<ruby>楽<rt>たの</rt></ruby>しみたい。",
    "exampleMeaning": "တစ်ခါတလေတော့ အဆင့်မြင့်စားသောက်ဆိုင်တွင် ဇိမ်ခံဆန်သော အစားအစာကို စားချင်သည်။"
  },
  {
    "word": "厄介な",
    "reading": "やっかいな",
    "romaji": "yakkaina",
    "category": "verb_adj",
    "meaning": "ဒုက္ခများသော / ရှုပ်ထွေးသော",
    "example": "厄介な問題が起きて、対応に追われている。",
    "exampleRuby": "<ruby>厄介<rt>やっかい</rt></ruby>な<ruby>問題<rt>もんだい</rt></ruby>が<ruby>起<rt>お</rt></ruby>きて、<ruby>対応<rt>たいおう</rt></ruby>に<ruby>追<rt>お</rt></ruby>われている。",
    "exampleMeaning": "ဒုက္ခများသော ပြဿနာပေါ်လာသဖြင့် ဖြေရှင်းရန် အလုပ်ရှုပ်နေရသည်။"
  },
  {
    "word": "慎重な",
    "reading": "しんちょうな",
    "romaji": "shinchouna",
    "category": "verb_adj",
    "meaning": "အထူးသတိကြီးသော / သိုသိုသိပ်သိပ်ရှိသော",
    "example": "大事な決断をするときは、慎重に考える必要がある。",
    "exampleRuby": "<ruby>大事<rt>だいじ</rt></ruby>な<ruby>決断<rt>けつだん</rt></ruby>をするときは、<ruby>慎重<rt>しんちょう</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>える<ruby>必要<rt>ひつよう</rt></ruby>がある。",
    "exampleMeaning": "အရေးကြီးသော ဆုံးဖြတ်ချက်ချသည့်အခါ အထူးသတိကြီးစွာ စဉ်းစားရန် လိုအပ်သည်။"
  },
  {
    "word": "曖昧な",
    "reading": "あいまいな",
    "romaji": "aimaina",
    "category": "verb_adj",
    "meaning": "မသဲကွဲသော / ဝေဝါးသော",
    "example": "曖昧な返事をしないで、はっきりと答えてください。",
    "exampleRuby": "<ruby>曖昧<rt>あいまい</rt></ruby>な<ruby>返事<rt>へんじ</rt></ruby>をしないで、はっきりと<ruby>答<rt>こた</rt></ruby>えてください。",
    "exampleMeaning": "ဝေဝါးသော အဖြေမပေးဘဲ ရှင်းရှင်းလင်းလင်း ဖြေကြားပေးပါ။"
  },
  {
    "word": "頼もしい",
    "reading": "たのもしい",
    "romaji": "tanomoshii",
    "category": "verb_adj",
    "meaning": "အားကိုးထိုက်သော / စိတ်ချရသော",
    "example": "困ったときに助けてくれる彼はとても頼もしい。",
    "exampleRuby": "<ruby>困<rt>こま</rt></ruby>ったときに<ruby>助<rt>たす</rt></ruby>けてくれる<ruby>彼<rt>かれ</rt></ruby>はとても<ruby>頼<rt>たの</rt></ruby>もしい。",
    "exampleMeaning": "ဒုက္ခရောက်ချိန်တွင် ကူညီပေးတတ်သော သူသည် အလွန် အားကိုးထိုက်သည်။"
  },
  {
    "word": "羨ましい",
    "reading": "うらやましい",
    "romaji": "urayamashii",
    "category": "verb_adj",
    "meaning": "အားကျစရာကောင်းသော",
    "example": "世界中を旅行している友人が羨ましい。",
    "exampleRuby": "<ruby>世界中<rt>せかいじゅう</rt></ruby>を<ruby>旅行<rt>りょこう</rt></ruby>している<ruby>友人<rt>ゆうじん</rt></ruby>が<ruby>羨<rt>うらや</rt></ruby>ましい。",
    "exampleMeaning": "တစ်ကမ္ဘာလုံးကို ခရီးသွားနေသော သူငယ်ချင်းကို အားကျမိသည်။"
  },
  {
    "word": "厚かましい",
    "reading": "あつかましい",
    "romaji": "atsukamashii",
    "category": "verb_adj",
    "meaning": "မျက်နှာပြောင်တိုက်သော / အရှက်မရှိသော",
    "example": "何度も無理な頼み事をしてくるなんて、厚かましい人だ。",
    "exampleRuby": "<ruby>何問<rt>なんども</rt></ruby><ruby>無理<rt>むり</rt></ruby>な<ruby>頼<rt>たの</rt></ruby>み<ruby>事<rt>ごと</rt></ruby>をしてくるなんて、<ruby>厚<rt>あつ</rt></ruby>かましい<ruby>人<rt>ひと</rt></ruby>だ。",
    "exampleMeaning": "မဖြစ်နိုင်သော အကူအညီများကို အကြိမ်ကြိမ် လာတောင်းဆိုရဲအောင် မျက်နှာပြောင်တိုက်သူ ဖြစ်သည်။"
  }
];
