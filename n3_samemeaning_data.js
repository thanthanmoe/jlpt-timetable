// JLPT N3 Frequently Asked Same-Meaning / Paraphrase Words (類義語・言い換え)
const N3_SAMEMEANING_DATA = [
  {
    "word": "がっかりした",
    "reading": "がっかりした",
    "sameMeaning": "失望した",
    "sameMeaningReading": "しつぼうした",
    "meaning": "စိတ်ပျက်အားလျော့သွားခဲ့သည်",
    "example": "試験の結果を聞いて、がっかりした（＝失望した）。",
    "exampleRuby": "<ruby>試験<rt>しけん</rt></ruby>の<ruby>結果<rt>けっか</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて、がっかりした（＝<ruby>失望<rt>しつぼう</rt></ruby>した）。",
    "exampleMeaning": "စာမေးပွဲရလဒ်ကို ကြားရပြီးနောက် စိတ်ပျက်အားလျော့သွားခဲ့သည်။"
  },
  {
    "word": "おしまい",
    "reading": "おしまい",
    "sameMeaning": "終わり",
    "sameMeaningReading": "おわり",
    "meaning": "ပြီးဆုံးခြင်း / အဆုံးသတ်",
    "example": "今日の授業はこれでおしまいです（＝終わりです）。",
    "exampleRuby": "<ruby>今日<rt>きょう</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>はこれでおしまいです（＝<ruby>終<rt>お</rt></ruby>わりです）。",
    "exampleMeaning": "ယနေ့ စာသင်ချိန်သည် ဤနေရာဖြင့် ပြီးဆုံးပါပြီ။"
  },
  {
    "word": "アイディア",
    "reading": "アイディア",
    "sameMeaning": "考え",
    "sameMeaningReading": "かんがえ",
    "meaning": "အကြံဉာဏ်သစ်",
    "example": "何か新しいアイディア（＝考え）はありませんか。",
    "exampleRuby": "<ruby>何<rt>なに</rt></ruby>か<ruby>新<rt>あたら</rt></ruby>しいアイディア（＝<ruby>考<rt>かんが</rt></ruby>え）はありませんか。",
    "exampleMeaning": "တစ်စုံတစ်ခု အကြံဉာဏ်သစ် မရှိဘူးလား။"
  },
  {
    "word": "確かめて",
    "reading": "たしかめて",
    "sameMeaning": "確認して",
    "sameMeaningReading": "かくにんして",
    "meaning": "သေချာအောင် စစ်ဆေးအတည်ပြုသည်",
    "example": "電車の時間をも一度確かめて（＝確認して）ください。",
    "exampleRuby": "<ruby>電車<rt>でんしゃ</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>をもう<ruby>一度<rt>いちど</rt></ruby><ruby>確<rt>たし</rt></ruby>かめて（＝<ruby>確認<rt>かくにん</rt></ruby>して）ください。",
    "exampleMeaning": "ရထားအချိန်ကို နောက်တစ်ကြိမ် သေချာအောင် စစ်ဆေးအတည်ပြုပေးပါ။"
  },
  {
    "word": "ぶつかった",
    "reading": "ぶつかった",
    "sameMeaning": "衝突した",
    "sameMeaningReading": "しょうとつした",
    "meaning": "တိုက်မိသည် / တိုက်ခိုက်မိသည်",
    "example": "交差点で二台の車がぶつかった（＝衝突した）。",
    "exampleMeaning": "လမ်းဆုံတွင် ကားနှစ်စီး တိုက်မိခဲ့သည်။",
    "exampleRuby": "<ruby>交差点<rt>こうさてん</rt></ruby>で<ruby>二台<rt>にだい</rt></ruby>の<ruby>車<rt>くるま</rt></ruby>がぶつかった（＝<ruby>衝突<rt>しょうとつ</rt></ruby>した）。"
  },
  {
    "word": "あわてる",
    "reading": "あわてる",
    "sameMeaning": "落ち着かない",
    "sameMeaningReading": "おちつかない",
    "meaning": "ပြာပြာသလဲဖြစ်သည် / တည်ငြိမ်မှုမရှိ",
    "example": "急な知らせにあわてて（＝落ち着かなくなって）しまった。",
    "exampleRuby": "<ruby>急<rt>きゅう</rt></ruby>な<ruby>知<rt>し</rt></ruby>らせにあわてて（＝<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>かなくなって）しまった。",
    "exampleMeaning": "ရုတ်တရက် သတင်းကြားရသဖြင့် ပြာပြာသလဲ ဖြစ်သွားခဲ့သည်။"
  },
  {
    "word": "そっくり",
    "reading": "そっくり",
    "sameMeaning": "よく似ている",
    "sameMeaningReading": "よくにている",
    "meaning": "တစ်ပုံစံတည်း တူညီသော",
    "example": "この双子の兄弟はそっくりだ（＝よく似ている）。",
    "exampleRuby": "この<ruby>双子<rt>ふたご</rt></ruby>の<ruby>兄弟<rt>きょうだい</rt></ruby>はそっくりだ（＝よく<ruby>似<rt>に</rt></ruby>ている）。",
    "exampleMeaning": "ဤ အမွှာညီအစ်ကိုသည် တစ်ပုံစံတည်း တူညီကြသည်။"
  },
  {
    "word": "さっそく",
    "reading": "さっそく",
    "sameMeaning": "すぐに",
    "sameMeaningReading": "すぐに",
    "meaning": "ချက်ချင်းလက်ငင်း / နှောင့်နှေးမနေဘဲ",
    "example": "新しい本を買ったので、さっそく（＝すぐに）読み始めた。",
    "exampleRuby": "<ruby>新<rt>あたら</rt></ruby>しい<ruby>本<rt>ほん</rt></ruby>を<ruby>買<rt>か</rt></ruby>ったので、さっそく（＝すぐに）<ruby>読<rt>よ</rt></ruby>み<ruby>始<rt>はじ</rt></ruby>めた。",
    "exampleMeaning": "စာအုပ်အသစ်ဝယ်လာသဖြင့် ချက်ချင်း ဖတ်ရှုစတင်ခဲ့သည်။"
  },
  {
    "word": "いきなり",
    "reading": "いきなり",
    "sameMeaning": "急に",
    "sameMeaningReading": "きゅうに",
    "meaning": "ရုတ်တရက် မမျှော်လင့်ဘဲ",
    "example": "後ろからいきなり（＝急に）声をかけられて驚いた。",
    "exampleRuby": "<ruby>後<rt>うし</rt></ruby>ろからいきなり（＝<ruby>急<rt>きゅう</rt></ruby>に）<ruby>声<rt>こえ</rt></ruby>をかけられて<ruby>驚<rt>おどろ</rt></ruby>いた。",
    "exampleMeaning": "နောက်ဘက်မှ ရုတ်တရက် အသံပေးခေါ်ခံရသဖြင့် လန့်သွားခဲ့သည်။"
  },
  {
    "word": "ますます",
    "reading": "ますます",
    "sameMeaning": "もっと",
    "sameMeaningReading": "もっと",
    "meaning": "ပို၍ပို၍",
    "example": "風がますます（＝もっと）強くなってきた。",
    "exampleRuby": "<ruby>風<rt>かぜ</rt></ruby>がますます（＝もっと）<ruby>強<rt>つよ</rt></ruby>くなってきた。",
    "exampleMeaning": "လေသည် ပို၍ပို၍ ပြင်းထန်လာခဲ့သည်။"
  },
  {
    "word": "たまに",
    "reading": "たまに",
    "sameMeaning": "時々",
    "sameMeaningReading": "ときどき",
    "meaning": "တစ်ခါတလေ / ရံဖန်ရံခါ",
    "example": "たまに（＝時々）家族で外食をします。",
    "exampleRuby": "たまに（＝<ruby>時々<rt>ときどき</rt></ruby>）<ruby>家族<rt>かぞく</rt></ruby>で<ruby>外食<rt>がいしょく</rt></ruby>をします。",
    "exampleMeaning": "တစ်ခါတလေ မိသားစုနှင့် အပြင်မှာ အတူထမင်းစားလေ့ရှိသည်။"
  },
  {
    "word": "回収する",
    "reading": "かいしゅうする",
    "sameMeaning": "集める",
    "sameMeaningReading": "あつめる",
    "meaning": "စုဆောင်းသိမ်းဆည်းသည်",
    "example": "先生がテスト用紙を回収した（＝集めた）。",
    "exampleRuby": "<ruby>先生<rt>せんせい</rt></ruby>がテスト<ruby>用紙<rt>ようし</rt></ruby>を<ruby>回収<rt>かいしゅう</rt></ruby>した（＝<ruby>集<rt>あつ</rt></ruby>めた）。",
    "exampleMeaning": "ဆရာက စာမေးပွဲအဖြေလွှာများကို စုဆောင်းသိမ်းဆည်းခဲ့သည်။"
  },
  {
    "word": "ずるい",
    "reading": "ずるい",
    "sameMeaning": "不公平だ",
    "sameMeaningReading": "ふこうへいだ",
    "meaning": "မရိုးသားသော / မတရားသော",
    "example": "一人だけお菓子を多くもらうなんてずるい（＝不公平だ）。",
    "exampleRuby": "<ruby>一人<rt>ひとり</rt></ruby>だけお<ruby>菓子<rt>かし</rt></ruby>を<ruby>多<rt>おお</rt></ruby>くもらうなんてずるい（＝<ruby>不公平<rt>ふこうへい</rt></ruby>だ）。",
    "exampleMeaning": "တစ်ယောက်တည်း မုန့်ပိုရတာ မတရားဘူး (မရိုးသားဘူး)။"
  },
  {
    "word": "あきらめる",
    "reading": "あきらめる",
    "sameMeaning": "やめる",
    "sameMeaningReading": "やめる",
    "meaning": "လက်လျှော့လိုက်သည် / စွန့်လွှတ်သည်",
    "example": "雨がひどいので、登山をあきらめた（＝やめた）。",
    "exampleRuby": "<ruby>雨<rt>あめ</rt></ruby>がひどいので、<ruby>登山<rt>とざん</rt></ruby>をあきらめた（＝やめた）。",
    "exampleMeaning": "မိုးအရမ်းသည်းနေသဖြင့် တောင်တက်ခြင်းကို လက်လျှော့လိုက်သည်။"
  },
  {
    "word": "おろそかにする",
    "reading": "おろそかにする",
    "sameMeaning": "いい加減にする",
    "sameMeaningReading": "いいかげんにする",
    "meaning": "ပေါ့ပေါ့ဆဆ ပြုလုပ်သည်",
    "example": "基本の勉強をおろそかにしては（＝いい加減にしては）いけない。",
    "exampleRuby": "<ruby>基本<rt>きほん</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>をおろそかにしては（＝いい<ruby>加減<rt>かげん</rt></ruby>にしては）いけない。",
    "exampleMeaning": "အခြေခံစာကျက်ခြင်းကို ပေါ့ပေါ့ဆဆ မလုပ်သင့်ပါ။"
  },
  {
    "word": "みっともない",
    "reading": "みっともない",
    "sameMeaning": "恥ずかしい",
    "sameMeaningReading": "はずかしい",
    "meaning": "အရှက်ရစရာဖြစ်သော / မသင့်လျော်သော",
    "example": "人前で大声を出すのはみっともない（＝恥ずかしい）。",
    "exampleRuby": "<ruby>人前<rt>ひとまえ</rt></ruby>で<ruby>大声<rt>おおごえ</rt></ruby>を<ruby>出<rt>だ</rt></ruby>すのはみっともない（＝<ruby>恥<rt>はず</rt></ruby>かしい）。",
    "exampleMeaning": "လူရှေ့တွင် အော်ဟစ်ဆူညံခြင်းသည် အရှက်ရစရာ ဖြစ်သည်။"
  },
  {
    "word": "済ませる",
    "reading": "すませる",
    "sameMeaning": "終わらせる",
    "sameMeaningReading": "おわらせる",
    "meaning": "ပြီးစီးစေသည် / အဆုံးသတ်သည်",
    "example": "午前中に宿題を済ませた（＝終わらせた）。",
    "exampleRuby": "<ruby>午前中<rt>ごぜんちゅう</rt></ruby>に<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>済<rt>す</rt></ruby>ませた（＝<ruby>終<rt>お</rt></ruby>わらせた）。",
    "exampleMeaning": "မနက်ပိုင်းအတွင်းမှာပင် အိမ်စာများကို အပြီးသတ်ခဲ့သည်။"
  },
  {
    "word": "お詫びする",
    "reading": "おわびする",
    "sameMeaning": "謝る",
    "sameMeaningReading": "あやまる",
    "meaning": "တောင်းပန်သည် (ယဉ်ကျေးစကား)",
    "example": "ご迷惑をおかけしたことをお詫びします（＝謝ります）。",
    "exampleRuby": "ご<ruby>迷惑<rt>めいわく</rt></ruby>をおかけしたことをお<ruby>詫<rt>わ</rt></ruby>びします（＝<ruby>謝<rt>あやま</rt></ruby>ります）。",
    "exampleMeaning": "အခက်အခဲဖြစ်စေခဲ့မိသဖြင့် တောင်းပန်အပ်ပါသည်။"
  },
  {
    "word": "気に入る",
    "reading": "きにいる",
    "sameMeaning": "好きになる",
    "sameMeaningReading": "すきになる",
    "meaning": "ကြိုက်နှစ်သက်သည်",
    "example": "このデザインがとても気に入った（＝好きになった）。",
    "exampleRuby": "このデザインがとても<ruby>気<rt>き</rt></ruby>に<ruby>入<rt>い</rt></ruby>った（＝<ruby>好<rt>す</rt></ruby>きになった）。",
    "exampleMeaning": "ဤဒီဇိုင်းကို အလွန် ကြိုက်နှစ်သက်မိသည်။"
  },
  {
    "word": "短所",
    "reading": "たんしょ",
    "sameMeaning": "欠点",
    "sameMeaningReading": "けってん",
    "meaning": "အားနည်းချက် / ချို့ယွင်းချက်",
    "example": "自分の短所（＝欠点）を直したい。",
    "exampleRuby": "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>短所<rt>たんしょ</rt></ruby>（＝<ruby>欠点<rt>けってん</rt></ruby>）を<ruby>直<rt>なお</rt></ruby>したい。",
    "exampleMeaning": "မိမိ၏ အားနည်းချက်ကို ပြုပြင်လိုသည်။"
  },
  {
    "word": "長所",
    "reading": "ちょうしょ",
    "sameMeaning": "良いところ",
    "sameMeaningReading": "よいところ",
    "meaning": "အားသာချက် / ကောင်းကွက်",
    "example": "彼の長所（＝良いところ）はいつも明るいことだ。",
    "exampleRuby": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>長所<rt>ちょうしょ</rt></ruby>（＝<ruby>良<rt>よ</rt></ruby>いところ）はいつも<ruby>明<rt>あか</rt></ruby>るいことだ。",
    "exampleMeaning": "သူ၏ အားသာချက်မှာ အမြဲတမ်း ပျော်ပျော်ရွှင်ရွှင်ရှိခြင်း ဖြစ်သည်။"
  },
  {
    "word": "年中",
    "reading": "ねんじゅう",
    "sameMeaning": "いつも",
    "sameMeaningReading": "いつも",
    "meaning": "အမြဲတမ်း / တစ်နှစ်ပတ်လုံး",
    "example": "あの店は年中（＝いつも）混んでいる。",
    "exampleRuby": "あの<ruby>店<rt>みせ</rt></ruby>は<ruby>年中<rt>ねんじゅう</rt></ruby>（＝いつも）<ruby>混<rt>こ</rt></ruby>んでいる。",
    "exampleMeaning": "ဟိုဆိုင်သည် အမြဲတမ်း လူကျပ်နေသည်။"
  },
  {
    "word": "だらしない",
    "reading": "だらしない",
    "sameMeaning": "きちんとしていない",
    "sameMeaningReading": "きちんとしていない",
    "meaning": "စနစ်တကျမရှိသော / ပေါ့လျော့သော",
    "example": "部屋が散らかっていてだらしない（＝きちんとしていない）。",
    "exampleRuby": "<ruby>部屋<rt>へや</rt></ruby>が<ruby>散<rt>ち</rt></ruby>らかっていてだらしない（＝きちんとしていない）。",
    "exampleMeaning": "အခန်းရှုပ်ပွနေပြီး စနစ်တကျမရှိပေ။"
  },
  {
    "word": "再三",
    "reading": "さいさん",
    "sameMeaning": "何度も",
    "sameMeaningReading": "なんども",
    "meaning": "ထပ်ခါတလဲလဲ / အကြိမ်ကြိမ်",
    "example": "再三（＝何度も）注意したのに直らない。",
    "exampleRuby": "<ruby>再三<rt>さいさん</rt></ruby>（＝<ruby>何問<rt>なんども</rt></ruby>）<ruby>注意<rt>ちゅうい</rt></ruby>したのに<ruby>直<rt>なお</rt></ruby>らない。",
    "exampleMeaning": "အကြိမ်ကြိမ် သတိပေးပါလျက်နှင့် မပြင်ပေ။"
  },
  {
    "word": "わざと",
    "reading": "わざと",
    "sameMeaning": "故意に",
    "sameMeaningReading": "こいに",
    "meaning": "တမင်တကာ ရည်ရွယ်ချက်ရှိရှိ",
    "example": "わざと（＝故意に）負けてあげた。",
    "exampleRuby": "わざと（＝<ruby>故意<rt>こい</rt></ruby>に）<ruby>負<rt>ま</rt></ruby>けてあげた。",
    "exampleMeaning": "တမင်တကာ ရည်ရွယ်ချက်ရှိရှိ အရှုံးပေးလိုက်သည်။"
  },
  {
    "word": "ざっと",
    "reading": "ざっと",
    "sameMeaning": "おおよそ / 大体",
    "sameMeaningReading": "だいたい",
    "meaning": "အကြမ်းဖျင်းအားဖြင့်",
    "example": "書類にざっと（＝大体）目を通した。",
    "exampleRuby": "<ruby>書類<rt>しょるい</rt></ruby>にざっと（＝<ruby>大体<rt>だいたい</rt></ruby>）<ruby>目<rt>め</rt></ruby>を<ruby>通<rt>とお</rt></ruby>した。",
    "exampleMeaning": "စာရွက်စာတမ်းကို အကြမ်းဖျင်း ဖြတ်ဖတ်ကြည့်လိုက်သည်။"
  },
  {
    "word": "慎重に",
    "reading": "しんちょうに",
    "sameMeaning": "注意深く",
    "sameMeaningReading": "ちゅういぶかく",
    "meaning": "အထူးသတိကြီးစွာ / သိုသိုသိပ်သိပ်",
    "example": "契約書は慎重に（＝注意深く）読んでください。",
    "exampleRuby": "<ruby>契約書<rt>けいやくしょ</rt></ruby>は<ruby>慎重<rt>しんちょう</rt></ruby>に（＝<ruby>注意深<rt>ちゅういぶか</rt></ruby>く）<ruby>読<rt>よ</rt></ruby>んでください。",
    "exampleMeaning": "စာချုပ်ကို အထူးသတိကြီးစွာ သေချာဖတ်ပါ။"
  },
  {
    "word": "つねに",
    "reading": "つねに",
    "sameMeaning": "いつも",
    "sameMeaningReading": "いつも",
    "meaning": "အမြဲတစေ / အစဉ်အမြဲ",
    "example": "健康につねに（＝いつも）気をつけている。",
    "exampleRuby": "<ruby>健康<rt>けんこう</rt></ruby>につねに（＝いつも）<ruby>気<rt>き</rt></ruby>をつけている。",
    "exampleMeaning": "ကျန်းမာရေးကို အစဉ်အမြဲ ဂရုစိုက်နေသည်။"
  },
  {
    "word": "単に",
    "reading": "たんに",
    "sameMeaning": "ただ",
    "sameMeaningReading": "ただ",
    "meaning": "ရိုးရိုးမျှသာ",
    "example": "単に（＝ただ）噂を聞いただけです。",
    "exampleRuby": "<ruby>単<rt>たん</rt></ruby>に（＝ただ）<ruby>噂<rt>うわさ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いただけです。",
    "exampleMeaning": "ရိုးရိုး ကောလာဟလ သတင်းတစ်ခု ကြားရုံမျှသာ ဖြစ်သည်။"
  },
  {
    "word": "奇妙な",
    "reading": "きみょうな",
    "sameMeaning": "変な",
    "sameMeaningReading": "へんな",
    "meaning": "ထူးဆန်းသော",
    "example": "奇妙な（＝変な）音が聞こえてきた。",
    "exampleRuby": "<ruby>奇妙<rt>きみょう</rt></ruby>な（＝<ruby>変<rt>へん</rt></ruby>な）<ruby>音<rt>おと</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえてきた。",
    "exampleMeaning": "ထူးဆန်းသော အသံတစ်ခု ကြားခဲ့ရသည်။"
  },
  {
    "word": "豊富だ",
    "reading": "ほうふだ",
    "sameMeaning": "たくさんある",
    "sameMeaningReading": "たくさんある",
    "meaning": "ပေါများကြွယ်ဝသည်",
    "example": "この地域は水資源が豊富だ（＝たくさんある）。",
    "exampleRuby": "この<ruby>地域<rt>ちいき</rt></ruby>は<ruby>水資源<rt>みずしげん</rt></ruby>が<ruby>豊富<rt>ほうふ</rt></ruby>だ（＝たくさんある）。",
    "exampleMeaning": "ဤဒေသသည် ရေအရင်းအမြစ် ပေါများကြွယ်ဝသည်။"
  },
  {
    "word": "あつかましい",
    "reading": "あつかましい",
    "sameMeaning": "ずうずうしい",
    "sameMeaningReading": "ずうずうしい",
    "meaning": "မျက်နှာပြောင်တိုက်သော / အရှက်မရှိသော",
    "example": "そんな頼みをするなんて、あつかましい（＝ずうずうしい）人だ。",
    "exampleRuby": "そんな<ruby>頼<rt>たの</rt></ruby>みをするなんて、あつかましい（＝ずうずうしい）<ruby>人<rt>ひと</rt></ruby>だ。",
    "exampleMeaning": "ထိုကဲ့သို့သော အကူအညီတောင်းရဲလောက်အောင် မျက်နှာပြောင်တိုက်သူ ဖြစ်သည်။"
  },
  {
    "word": "くたびれた",
    "reading": "くたびれた",
    "sameMeaning": "疲れた",
    "sameMeaningReading": "つかれた",
    "meaning": "ပင်ပန်းနွမ်းနယ်ခဲ့သည်",
    "example": "一日中歩いて、くたびれた（＝疲れた）。",
    "exampleRuby": "<ruby>一日中<rt>いちにちじゅう</rt></ruby><ruby>歩<rt>ある</rt></ruby>いて、くたびれた（＝<ruby>疲<rt>つか</rt></ruby>れた）。",
    "exampleMeaning": "တစ်နေကုန် လမ်းလျှောက်ခဲ့ရသဖြင့် ပင်ပန်းနွမ်းနယ်ခဲ့သည်။"
  },
  {
    "word": "朗らかな",
    "reading": "ほがらかな",
    "sameMeaning": "明るい",
    "sameMeaningReading": "あかるい",
    "meaning": "ရွှင်လန်းတက်ကြွသော",
    "example": "彼女はいつも朗らかな（＝明るい）笑顔をしている。",
    "exampleRuby": "<ruby>彼女<rt>かのじょ</rt></ruby>はいつも<ruby>朗<rt>ほが</rt></ruby>らかな（＝<ruby>明<rt>あか</rt></ruby>るい）<ruby>笑顔<rt>えがお</rt></ruby>をしている。",
    "exampleMeaning": "သူမသည် အမြဲတမ်း ရွှင်လန်းတက်ကြွသော အပြုံးကို ဆင်မြန်းထားသည်။"
  },
  {
    "word": "曖昧だ",
    "reading": "あいまいだ",
    "sameMeaning": "はっきりしない",
    "sameMeaningReading": "はっきりしない",
    "meaning": "ဝေဝါးသော / မပြတ်သားသော",
    "example": "彼の態度は曖昧だ（＝はっきりしない）。",
    "exampleRuby": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>態度<rt>たいど</rt></ruby>は<ruby>曖昧<rt>あいまい</rt></ruby>だ（＝はっきりしない）。",
    "exampleMeaning": "သူ၏ သဘောထားမှာ ဝေဝါးနေသည် (မပြတ်သားပေ)။"
  },
  {
    "word": "ほぼ",
    "reading": "ほぼ",
    "sameMeaning": "だいたい",
    "sameMeaningReading": "だいたい",
    "meaning": "အားလုံးနီးပါး / အကြမ်းဖျင်း",
    "example": "宿題はほぼ（＝だいたい）終わりました。",
    "exampleRuby": "<ruby>宿題<rt>しゅくだい</rt></ruby>はほぼ（＝だいたい）<ruby>終<rt>お</rt></ruby>わりました。",
    "exampleMeaning": "အိမ်စာသည် အားလုံးနီးပါး ပြီးစီးသွားပါပြီ။"
  },
  {
    "word": "すっかり",
    "reading": "すっかり",
    "sameMeaning": "完全に",
    "sameMeaningReading": "かんぜんに",
    "meaning": "လုံးဝဥဿုံ / အပြည့်အဝ",
    "example": "風邪はすっかり（＝完全に）治りました。",
    "exampleRuby": "<ruby>風邪<rt>かぜ</rt></ruby>はすっかり（＝<ruby>完全<rt>かんぜん</rt></ruby>に）<ruby>治<rt>なお</rt></ruby>りました。",
    "exampleMeaning": "အအေးမိဖျားနာခြင်းသည် လုံးဝဥဿုံ ပျောက်ကင်းသွားပါပြီ။"
  }
];
