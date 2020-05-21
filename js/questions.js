const QUESTIONS = {
    hiragana: [{
            jp: 'あ',
            trad: 'A'
        },
        {
            jp: 'い',
            trad: 'I'
        },
        {
            jp: 'う',
            trad: 'U'
        },
        {
            jp: 'え',
            trad: 'E'
        },
        {
            jp: 'お',
            trad: 'O'
        },
        {
            jp: 'か',
            trad: 'KA'
        },
        {
            jp: 'き',
            trad: 'KI'
        },
        {
            jp: 'く',
            trad: 'KU'
        },
        {
            jp: 'け',
            trad: 'KE'
        },
        {
            jp: 'こ',
            trad: 'KO'
        },
        {
            jp: 'が',
            trad: 'GA'
        },
        {
            jp: 'ぎ',
            trad: 'GI'
        },
        {
            jp: 'ぐ',
            trad: 'GU'
        },
        {
            jp: 'げ',
            trad: 'GE'
        },
        {
            jp: 'ご',
            trad: 'GO'
        },
        {
            jp: 'さ',
            trad: 'SA'
        },
        {
            jp: 'し',
            trad: 'SHI'
        },
        {
            jp: 'す',
            trad: 'SU'
        },
        {
            jp: 'せ',
            trad: 'SE'
        },
        {
            jp: 'そ',
            trad: 'SO'
        },
        {
            jp: 'ざ',
            trad: 'ZA'
        },
        {
            jp: 'じ',
            trad: 'JI'
        },
        {
            jp: 'ず',
            trad: 'ZU'
        },
        {
            jp: 'ぜ',
            trad: 'ZE'
        },
        {
            jp: 'ぞ',
            trad: 'ZO'
        },
        {
            jp: 'た',
            trad: 'TA'
        },
        {
            jp: 'ち',
            trad: 'CHI'
        },
        {
            jp: 'つ',
            trad: 'TSU'
        },
        {
            jp: 'て',
            trad: 'TE'
        },
        {
            jp: 'と',
            trad: 'TO'
        },
        {
            jp: 'だ',
            trad: 'DA'
        },
        {
            jp: 'ぢ',
            trad: 'JI'
        },
        {
            jp: 'づ',
            trad: 'ZU'
        },
        {
            jp: 'で',
            trad: 'DE'
        },
        {
            jp: 'ど',
            trad: 'DO'
        },
        {
            jp: 'な',
            trad: 'NA'
        },
        {
            jp: 'に',
            trad: 'NI'
        },
        {
            jp: 'ぬ',
            trad: 'NU'
        },
        {
            jp: 'ね',
            trad: 'NE'
        },
        {
            jp: 'の',
            trad: 'NO'
        },
        {
            jp: 'は',
            trad: 'HA'
        },
        {
            jp: 'ひ',
            trad: 'HI'
        },
        {
            jp: 'ふ',
            trad: 'FU'
        },
        {
            jp: 'へ',
            trad: 'HE'
        },
        {
            jp: 'ほ',
            trad: 'HO'
        },
        {
            jp: 'ば',
            trad: 'BA'
        },
        {
            jp: 'び',
            trad: 'BI'
        },
        {
            jp: 'ぶ',
            trad: 'BU'
        },
        {
            jp: 'べ',
            trad: 'BE'
        },
        {
            jp: 'ぼ',
            trad: 'BO'
        },
        {
            jp: 'ぱ',
            trad: 'PA'
        },
        {
            jp: 'ぴ',
            trad: 'PI'
        },
        {
            jp: 'ぷ',
            trad: 'PU'
        },
        {
            jp: 'ぺ',
            trad: 'PE'
        },
        {
            jp: 'ぽ',
            trad: 'PO'
        },
        {
            jp: 'ま',
            trad: 'MA'
        },
        {
            jp: 'み',
            trad: 'MI'
        },
        {
            jp: 'む',
            trad: 'MU'
        },
        {
            jp: 'め',
            trad: 'ME'
        },
        {
            jp: 'も',
            trad: 'MO'
        },
        {
            jp: 'や',
            trad: 'YA'
        },
        {
            jp: 'ゆ',
            trad: 'YU'
        },
        {
            jp: 'よ',
            trad: 'YO'
        },
        {
            jp: 'ら',
            trad: 'RA'
        },
        {
            jp: 'り',
            trad: 'RI'
        },
        {
            jp: 'る',
            trad: 'RU'
        },
        {
            jp: 'れ',
            trad: 'RE'
        },
        {
            jp: 'ろ',
            trad: 'RO'
        },
        {
            jp: 'わ',
            trad: 'WA'
        },
        {
            jp: 'を',
            trad: 'WO'
        },
        {
            jp: 'ん',
            trad: 'N'
        }
    ],
    hiraganaDigraphs: [{
            jp: 'きゃ',
            trad: 'KYA'
        },
        {
            jp: 'きゅ',
            trad: 'KYU'
        },
        {
            jp: 'きょ',
            trad: 'KYO'
        },
        {
            jp: 'ぎゃ',
            trad: 'GYA'
        },
        {
            jp: 'ぎゅ',
            trad: 'GYU'
        },
        {
            jp: 'ぎょ',
            trad: 'GYO'
        },
        {
            jp: 'しゃ',
            trad: 'SHA'
        },
        {
            jp: 'しゅ',
            trad: 'SHU'
        },
        {
            jp: 'しょ',
            trad: 'SHO'
        },
        {
            jp: 'じゃ',
            trad: 'JA'
        },
        {
            jp: 'じゅ',
            trad: 'JU'
        },
        {
            jp: 'じょ',
            trad: 'JO'
        },
        {
            jp: 'ちゃ',
            trad: 'CHA'
        },
        {
            jp: 'ちゅ',
            trad: 'CHU'
        },
        {
            jp: 'ちょ',
            trad: 'CHO'
        },
        {
            jp: 'にゃ',
            trad: 'NYA'
        },
        {
            jp: 'にゅ',
            trad: 'NYU'
        },
        {
            jp: 'にょ',
            trad: 'NYO'
        },
        {
            jp: 'ひゃ',
            trad: 'HYA'
        },
        {
            jp: 'ひゅ',
            trad: 'HYU'
        },
        {
            jp: 'ひょ',
            trad: 'HYO'
        },
        {
            jp: 'びゃ',
            trad: 'BYA'
        },
        {
            jp: 'びゅ',
            trad: 'BYU'
        },
        {
            jp: 'びょ',
            trad: 'BYO'
        },
        {
            jp: 'ぴゃ',
            trad: 'PYA'
        },
        {
            jp: 'ぴゅ',
            trad: 'PYU'
        },
        {
            jp: 'ぴょ',
            trad: 'PYO'
        },
        {
            jp: 'みゃ',
            trad: 'MYA'
        },
        {
            jp: 'みゅ',
            trad: 'MYU'
        },
        {
            jp: 'みょ',
            trad: 'MYO'
        },
        {
            jp: 'りゃ',
            trad: 'RYA'
        },
        {
            jp: 'りゅ',
            trad: 'RYU'
        },
        {
            jp: 'りょ',
            trad: 'RYO'
        }
    ],
    katakana: [{
            jp: 'ア',
            trad: 'A'
        },
        {
            jp: 'イ',
            trad: 'I'
        },
        {
            jp: 'ウ',
            trad: 'U'
        },
        {
            jp: 'エ',
            trad: 'E'
        },
        {
            jp: 'オ',
            trad: 'O'
        },
        {
            jp: 'カ',
            trad: 'KA'
        },
        {
            jp: 'キ',
            trad: 'KI'
        },
        {
            jp: 'ク',
            trad: 'KU'
        },
        {
            jp: 'ケ',
            trad: 'KE'
        },
        {
            jp: 'コ',
            trad: 'KO'
        },
        {
            jp: 'サ',
            trad: 'SA'
        },
        {
            jp: 'シ',
            trad: 'SHI'
        },
        {
            jp: 'ス',
            trad: 'SU'
        },
        {
            jp: 'セ',
            trad: 'SE'
        },
        {
            jp: 'ソ',
            trad: 'SO'
        },
        {
            jp: 'タ',
            trad: 'TA'
        },
        {
            jp: 'チ',
            trad: 'CHI'
        },
        {
            jp: 'ツ',
            trad: 'TSU'
        },
        {
            jp: 'テ',
            trad: 'TE'
        },
        {
            jp: 'ト',
            trad: 'TO'
        },
        {
            jp: 'ナ',
            trad: 'NA'
        },
        {
            jp: 'ニ',
            trad: 'NI'
        },
        {
            jp: 'ヌ',
            trad: 'NU'
        },
        {
            jp: 'ネ',
            trad: 'NE'
        },
        {
            jp: 'ノ',
            trad: 'NO'
        },
        {
            jp: 'ハ',
            trad: 'HA'
        },
        {
            jp: 'ヒ',
            trad: 'HI'
        },
        {
            jp: 'フ',
            trad: 'FU'
        },
        {
            jp: 'ヘ',
            trad: 'HE'
        },
        {
            jp: 'ホ',
            trad: 'HO'
        },
        {
            jp: 'マ',
            trad: 'MA'
        },
        {
            jp: 'ミ',
            trad: 'MI'
        },
        {
            jp: 'ム',
            trad: 'MU'
        },
        {
            jp: 'メ',
            trad: 'ME'
        },
        {
            jp: 'モ',
            trad: 'MO'
        },
        {
            jp: 'ヤ',
            trad: 'YA'
        },
        {
            jp: 'ユ',
            trad: 'YU'
        },
        {
            jp: 'ヨ',
            trad: 'YO'
        },
        {
            jp: 'ラ',
            trad: 'RA'
        },
        {
            jp: 'リ',
            trad: 'RI'
        },
        {
            jp: 'ル',
            trad: 'RU'
        },
        {
            jp: 'レ',
            trad: 'RE'
        },
        {
            jp: 'ロ',
            trad: 'RO'
        },
        {
            jp: 'ワ',
            trad: 'WA'
        },
        {
            jp: 'ヲ',
            trad: 'WO'
        },
        {
            jp: 'ン',
            trad: 'N'
        },
        {
            jp: 'ガ',
            trad: 'GA'
        },
        {
            jp: 'ギ',
            trad: 'GI'
        },
        {
            jp: 'グ',
            trad: 'GU'
        },
        {
            jp: 'ゲ',
            trad: 'GE'
        },
        {
            jp: 'ゴ',
            trad: 'GO'
        },
        {
            jp: 'ザ',
            trad: 'ZA'
        },
        {
            jp: 'ジ',
            trad: 'JI'
        },
        {
            jp: 'ズ',
            trad: 'ZU'
        },
        {
            jp: 'ゼ',
            trad: 'ZE'
        },
        {
            jp: 'ゾ',
            trad: 'ZO'
        },
        {
            jp: 'ダ',
            trad: 'DA'
        },
        {
            jp: 'ヂ',
            trad: 'JI'
        },
        {
            jp: 'ヅ',
            trad: 'ZU'
        },
        {
            jp: 'デ',
            trad: 'DE'
        },
        {
            jp: 'ド',
            trad: 'DO'
        },
        {
            jp: 'バ',
            trad: 'BA'
        },
        {
            jp: 'ビ',
            trad: 'BI'
        },
        {
            jp: 'ブ',
            trad: 'BU'
        },
        {
            jp: 'ベ',
            trad: 'BE'
        },
        {
            jp: 'ボ',
            trad: 'BO'
        },
        {
            jp: 'パ',
            trad: 'PA'
        },
        {
            jp: 'ピ',
            trad: 'PI'
        },
        {
            jp: 'プ',
            trad: 'PU'
        },
        {
            jp: 'ペ',
            trad: 'PE'
        },
        {
            jp: 'ポ',
            trad: 'PO'
        }
    ],
    katakanaDigraphs: [{
            jp: 'キャ',
            trad: 'KYA'
        },
        {
            jp: 'キュ',
            trad: 'KYU'
        },
        {
            jp: 'キョ',
            trad: 'KYO'
        },
        {
            jp: 'ギャ',
            trad: 'GYA'
        },
        {
            jp: 'ギュ',
            trad: 'GYU'
        },
        {
            jp: 'ギョ',
            trad: 'GYO'
        },
        {
            jp: 'シャ',
            trad: 'SHA'
        },
        {
            jp: 'シュ',
            trad: 'SHU'
        },
        {
            jp: 'ショ',
            trad: 'SHO'
        },
        {
            jp: 'ジャ',
            trad: 'JA'
        },
        {
            jp: 'ジュ',
            trad: 'JU'
        },
        {
            jp: 'ジョ',
            trad: 'JO'
        },
        {
            jp: 'チャ',
            trad: 'CHA'
        },
        {
            jp: 'チュ',
            trad: 'CHU'
        },
        {
            jp: 'チョ',
            trad: 'CHO'
        },
        {
            jp: 'ニャ',
            trad: 'NYA'
        },
        {
            jp: 'ニュ',
            trad: 'NYU'
        },
        {
            jp: 'ニョ',
            trad: 'NYO'
        },
        {
            jp: 'ヒャ',
            trad: 'HYA'
        },
        {
            jp: 'ヒュ',
            trad: 'HYU'
        },
        {
            jp: 'ヒョ',
            trad: 'HYO'
        },
        {
            jp: 'ビャ',
            trad: 'BYA'
        },
        {
            jp: 'ビュ',
            trad: 'BYU'
        },
        {
            jp: 'ビョ',
            trad: 'BYO'
        },
        {
            jp: 'ピャ',
            trad: 'PYA'
        },
        {
            jp: 'ピュ',
            trad: 'PYU'
        },
        {
            jp: 'ピョ',
            trad: 'PYO'
        },
        {
            jp: 'ミャ',
            trad: 'MYA'
        },
        {
            jp: 'ミュ',
            trad: 'MYU'
        },
        {
            jp: 'ミョ',
            trad: 'MYO'
        },
        {
            jp: 'リャ',
            trad: 'RYA'
        },
        {
            jp: 'リュ',
            trad: 'RYU'
        },
        {
            jp: 'リョ',
            trad: 'RYO'
        }
    ],
    kanji: [
        {
            jp: '一',
            on: 'いち',
            kun: 'ひと－つ',
            trad: 'one'
        },
        {
            jp: '二',
            on: 'に',
            kun: 'ふた－つ',
            trad: 'two'
        },
        {
            jp: '三',
            on: 'さん',
            kun: 'みっ－つ',
            trad: 'three'
        },
        {
            jp: '四',
            on: 'し',
            kun: 'よん / よっ－つ',
            trad: 'four'
        },
        {
            jp: '五',
            on: 'ご',
            kun: 'いつ－つ',
            trad: 'five'
        },
        {
            jp: '六',
            on: 'ろく',
            kun: 'むっ－つ / むい',
            trad: 'six'
        },
        {
            jp: '七',
            on: 'しち',
            kun: 'なな－つ / なの / なぬ',
            trad: 'seven'
        },
        {
            jp: '八',
            on: 'はち',
            kun: 'やっ－つ / よう',
            trad: 'eight'
        },
        {
            jp: '九',
            on: 'きゅう / く',
            kun: 'ここの－つ',
            trad: 'nine'
        },
        {
            jp: '十',
            on: 'じゅう',
            kun: 'とお / とう',
            trad: 'ten'
        },
        {
            jp: '百',
            on: 'ひゃく',
            kun: 'もも',
            trad: 'hundred'
        },
        {
            jp: '千',
            on: 'せん',
            kun: 'ち',
            trad: 'thousand'
        },
        {
            jp: '万',
            on: 'ばん / まん',
            kun: 'よろず',
            trad: 'ten thousand'
        },
        {
            jp: '円',
            on: 'えん',
            kun: 'まる－い / まど－か / つぶ－ら',
            trad: 'circle / round / yen'
        },
        {
            jp: '日',
            on: 'じつ / にち',
            kun: 'ひ / か',
            trad: 'sun / day'
        },
        {
            jp: '週',
            on: '',
            kun: '',
            trad: 'week'
        },
        {
            jp: '月',
            on: 'がつ / げつ',
            kun: 'つき',
            trad: 'moon / month'
        },
        {
            jp: '年',
            on: 'ねん',
            kun: 'とし',
            trad: 'year'
        },
        {
            jp: '時',
            on: 'じ',
            kun: 'とき',
            trad: 'time / hour'
        },
        {
            jp: '間',
            on: 'かん / けん',
            kun: 'あいだ / ま',
            trad: 'interval / span of time / time frame'
        },
        {
            jp: '分',
            on: 'ぶん / ふん / ぶ',
            kun: 'わ－ける / わ－かる / わ－かつ',
            trad: 'minute / part / to divide / to understand'
        },
        {
            jp: '午',
            on: 'ご',
            kun: 'うま',
            trad: 'noon'
        },
        {
            jp: '前',
            on: 'ぜん',
            kun: 'まえ / さき',
            trad: 'before / in front of / previous'
        },
        {
            jp: '後',
            on: 'ご / こう',
            kun: 'うし－ろ / のち / あと',
            trad: 'after / behind / later'
        },
        {
            jp: '今',
            on: 'こん / きん',
            kun: 'いま',
            trad: 'now / the present'
        },
        {
            jp: '先',
            on: 'せん',
            kun: 'さき',
            trad: 'previous / ahead / the future'
        },
        {
            jp: '来',
            on: 'らい',
            kun: 'く－る',
            trad: 'to come'
        },
        {
            jp: '半',
            on: 'はん',
            kun: 'なか－ば',
            trad: 'half / middle'
        },
        {
            jp: '毎',
            on: 'まい',
            kun: 'ごと',
            trad: 'every / each'
        },
        {
            jp: '何',
            on: 'か',
            kun: 'なに / なん / いず－れ',
            trad: 'what / which / how many'
        },
        {
            jp: '人',
            on: 'じん / にん',
            kun: 'ひと',
            trad: 'person'
        },
        {
            jp: '男',
            on: 'だん / なん',
            kun: 'おとこ / おのこ / お',
            trad: 'man / male'
        },
        {
            jp: '女',
            on: 'じょ / にょ',
            kun: 'おんな',
            trad: 'woman / female'
        },
        {
            jp: '子',
            on: 'し / す',
            kun: 'こ / ね',
            trad: 'child'
        },
        {
            jp: '母',
            on: 'ぼ / も',
            kun: 'はは',
            trad: 'mother'
        },
        {
            jp: '父',
            on: 'ふ',
            kun: 'ちち',
            trad: 'father'
        },
        {
            jp: '友',
            on: 'ゆう',
            kun: 'とも',
            trad: 'friend'
        },
        {
            jp: '火',
            on: 'か',
            kun: 'ひ / ほ',
            trad: 'fire / light'
        },
        {
            jp: '水',
            on: 'すい',
            kun: 'みず',
            trad: 'water'
        },
        {
            jp: '木',
            on: 'もく / ぼく',
            kun: 'き',
            trad: 'tree / wood'
        },
        {
            jp: '土',
            on: 'ど / と',
            kun: 'つち',
            trad: 'earth / ground / soil'
        },
        {
            jp: '金',
            on: 'きん / こん',
            kun: 'かね',
            trad: 'gold / money'
        },
        {
            jp: '本',
            on: 'ほん',
            kun: 'もと',
            trad: 'root / source / book'
        },
        {
            jp: '川',
            on: 'せん',
            kun: 'かわ',
            trad: 'river / stream'
        },
        {
            jp: '花',
            on: '',
            kun: '',
            trad: 'flower'
        },
        {
            jp: '気',
            on: 'き / け',
            kun: '',
            trad: 'spirit / intention / mind / power / energy'
        },
        {
            jp: '生',
            on: 'せい / しょう',
            kun: 'う－む / い－きる / なま',
            trad: 'birth / life / to give birth / to live / raw'
        },
        {
            jp: '魚',
            on: '',
            kun: '',
            trad: 'fish'
        },
        {
            jp: '天',
            on: 'てん',
            kun: 'あま / あめ',
            trad: 'heaven / sky'
        },
        {
            jp: '空',
            on: '',
            kun: '',
            trad: 'sky / empty'
        },
        {
            jp: '山',
            on: 'さん / せん',
            kun: 'やま',
            trad: 'mountain'
        },
        {
            jp: '雨',
            on: 'う',
            kun: 'あま / あめ',
            trad: 'rain'
        },
        {
            jp: '電',
            on: 'でん',
            kun: 'いかずち',
            trad: 'electricity / electric powered'
        },
        {
            jp: '車',
            on: 'しゃ',
            kun: 'くるま',
            trad: 'wheel / vehicle / car'
        },
        {
            jp: '語',
            on: 'ご',
            kun: 'かたり / かた－る',
            trad: 'word / speech / language / narration / to tell / to speak'
        },
        {
            jp: '耳',
            on: '',
            kun: '',
            trad: 'ear'
        },
        {
            jp: '手',
            on: '',
            kun: '',
            trad: 'hand'
        },
        {
            jp: '足',
            on: '',
            kun: '',
            trad: 'foot'
        },
        {
            jp: '目',
            on: '',
            kun: '',
            trad: 'eye'
        },
        {
            jp: '口',
            on: '',
            kun: '',
            trad: 'mouth'
        },
        {
            jp: '名',
            on: 'めい / みょう',
            kun: 'な',
            trad: 'name / fame / famous / name'
        },
        {
            jp: '店',
            on: '',
            kun: '',
            trad: 'shop'
        },
        {
            jp: '駅',
            on: '',
            kun: '',
            trad: 'station'
        },
        {
            jp: '道',
            on: '',
            kun: '',
            trad: 'street'
        },
        {
            jp: '社',
            on: '',
            kun: '',
            trad: 'shrine / society'
        },
        {
            jp: '国',
            on: 'こく / ごく',
            kun: 'くに',
            trad: 'country / nation'
        },
        {
            jp: '外',
            on: 'がい / げ / うい',
            kun: 'ほか / そと',
            trad: 'outside / foreign / other'
        },
        {
            jp: '学',
            on: 'がく',
            kun: 'まな－ぶ',
            trad: 'school / learning / science / to learn'
        },
        {
            jp: '校',
            on: 'こう',
            kun: 'あぜ',
            trad: 'school'
        },
        {
            jp: '上',
            on: 'じょう / しょう',
            kun: 'うえ / うわ / あ－げる / あ－がる / のぼ－る / のぼ－せる / かみ',
            trad: 'top / above / to raise / to rise / up'
        },
        {
            jp: '下',
            on: 'か / げ',
            kun: 'した / しも / さ－げる / さ－がる / くだ－る / くだ－す / お－りる / お－ろす',
            trad: 'bottom / under / down'
        },
        {
            jp: '中',
            on: 'ちゅう / じゅう',
            kun: 'なか / あた－る',
            trad: 'middle / center / within / inside'
        },
        {
            jp: '北',
            on: 'ほく',
            kun: 'きた',
            trad: 'north'
        },
        {
            jp: '西',
            on: 'せい / さい',
            kun: 'にし',
            trad: 'west'
        },
        {
            jp: '東',
            on: 'とう',
            kun: 'ひがし / ひんがし',
            trad: 'east'
        },
        {
            jp: '南',
            on: 'なん',
            kun: 'みなみ',
            trad: 'south'
        },
        {
            jp: '右',
            on: 'ゆう / う',
            kun: 'みぎ',
            trad: 'right'
        },
        {
            jp: '左',
            on: 'さ',
            kun: 'ひだり',
            trad: 'left'
        },
        {
            jp: '見',
            on: 'けん',
            kun: 'み－る / み－せる',
            trad: 'to see / to show'
        },
        {
            jp: '聞',
            on: 'ぶん / もん',
            kun: 'き－く',
            trad: 'to hear / to listen / to ask'
        },
        {
            jp: '書',
            on: 'しょ',
            kun: 'か－く',
            trad: 'book / document / to write'
        },
        {
            jp: '読',
            on: 'どく / とう',
            kun: 'よ－む',
            trad: 'to read'
        },
        {
            jp: '話',
            on: 'わ',
            kun: 'はなし / はな－す',
            trad: 'to talk / conversation / topic'
        },
        {
            jp: '買',
            on: '',
            kun: '',
            trad: 'to buy'
        },
        {
            jp: '行',
            on: 'ぎょう / こう / あん',
            kun: 'い－く / ゆ－く',
            trad: 'to go'
        },
        {
            jp: '出',
            on: 'しゅつ / すい',
            kun: 'だ－す / いだ－す / で－る',
            trad: 'to go out / leave'
        },
        {
            jp: '入',
            on: 'にゅう / じゅ',
            kun: 'い－る / はい－る',
            trad: 'enter / to go in / to insert'
        },
        {
            jp: '休',
            on: 'きゅう',
            kun: 'やす－み / やす－む',
            trad: 'to rest / vacation'
        },
        {
            jp: '食',
            on: 'じき / しょく',
            kun: 'く－う / た－べる',
            trad: 'to eat / meal / food'
        },
        {
            jp: '飲',
            on: '',
            kun: '',
            trad: 'to drink'
        },
        {
            jp: '言',
            on: '',
            kun: '',
            trad: 'to talk / word'
        },
        {
            jp: '立',
            on: '',
            kun: '',
            trad: 'to stand'
        },
        {
            jp: '会',
            on: 'かい / え',
            kun: 'あ－う',
            trad: 'to meet / society'
        },
        {
            jp: '多',
            on: '',
            kun: '',
            trad: 'a lot / many'
        },
        {
            jp: '少',
            on: '',
            kun: '',
            trad: 'a little / few'
        },
        {
            jp: '古',
            on: '',
            kun: '',
            trad: 'old'
        },
        {
            jp: '新',
            on: '',
            kun: '',
            trad: 'new'
        },
        {
            jp: '大',
            on: 'だい / たい',
            kun: 'おお－きい',
            trad: 'great / big'
        },
        {
            jp: '小',
            on: 'しょう',
            kun: 'こ / お / ちい－さい',
            trad: 'small / little'
        },
        {
            jp: '安',
            on: '',
            kun: '',
            trad: 'cheap / safety / peace'
        },
        {
            jp: '高',
            on: 'こう',
            kun: 'たか－い / たか',
            trad: 'high / costly / tall'
        },
        {
            jp: '長',
            on: 'ちょう',
            kun: 'なが－い',
            trad: 'leader / long'
        },
        {
            jp: '白',
            on: 'はく / びゃく',
            kun: 'しろ / しら / しろ－い',
            trad: 'white'
        }
    ],
    vocabulary: [{
            jp: '一人',
            trad: 'one person, alone'
        },
        {
            jp: '二人',
            trad: 'two people, pair'
        },
        {
            jp: '三日',
            trad: '3rd day of the month'
        },
        {
            jp: '四日',
            trad: '4th day of the month'
        },
        {
            jp: '五日',
            trad: '5th day of the month'
        },
        {
            jp: '六日',
            trad: '6th day of the month'
        },
        {
            jp: '七日',
            trad: '7th day of the month'
        },
        {
            jp: '八日',
            trad: '8th day of the month'
        },
        {
            jp: '九日',
            trad: '9th day of the month'
        },
        {
            jp: '十日',
            trad: '10th day of the month'
        },
        {
            jp: '百万円',
            trad: '1 million Yen'
        },
        {
            jp: '千万円',
            trad: '10 million Yen'
        },
        {
            jp: '万年筆',
            trad: 'fountain pen'
        },
        {
            jp: '円い',
            trad: 'round'
        },
        {
            jp: '明日',
            trad: 'tomorrow'
        },
        {
            jp: '毎週',
            trad: 'every week'
        },
        {
            jp: '月曜日',
            trad: 'Monday'
        },
        {
            jp: '今年',
            trad: 'this year'
        },
        {
            jp: '去年',
            trad: 'last year'
        },
        {
            jp: '時計',
            trad: 'clock, watch'
        },
        {
            jp: '時間',
            trad: 'time, hours'
        },
        {
            jp: '三十分',
            trad: 'thirty minutes'
        },
        {
            jp: '自分',
            trad: 'oneself'
        },
        {
            jp: '午前',
            trad: 'morning, A.M.'
        },
        {
            jp: '名前',
            trad: 'name'
        },
        {
            jp: '午後',
            trad: 'afternoon, P.M.'
        },
        {
            jp: '今晩',
            trad: 'this evening'
        },
        {
            jp: '今朝',
            trad: 'this morning'
        },
        {
            jp: '先週',
            trad: 'last week'
        },
        {
            jp: '先生',
            trad: 'teacher, master'
        },
        {
            jp: '来月',
            trad: 'next month'
        },
        {
            jp: '来る',
            trad: 'to come'
        },
        {
            jp: '半分',
            trad: 'half'
        },
        {
            jp: '毎日',
            trad: 'every day'
        },
        {
            jp: '何曜日',
            trad: 'what day of the week'
        },
        {
            jp: '人々',
            trad: 'people'
        },
        {
            jp: '男の子',
            trad: 'boy'
        },
        {
            jp: '女の子',
            trad: 'girl'
        },
        {
            jp: '子供',
            trad: 'child'
        },
        {
            jp: '母',
            trad: 'mother'
        },
        {
            jp: '父',
            trad: 'father'
        },
        {
            jp: '友達',
            trad: 'friend'
        },
        {
            jp: '火曜日',
            trad: 'Tuesday'
        },
        {
            jp: '水曜日',
            trad: 'Wednesday'
        },
        {
            jp: '木曜日',
            trad: 'Thursday'
        },
        {
            jp: '土曜日',
            trad: 'Saturday'
        },
        {
            jp: '金曜日',
            trad: 'Friday'
        },
        {
            jp: '日本語',
            trad: 'Japanese'
        },
        {
            jp: '川',
            trad: 'river'
        },
        {
            jp: '花火',
            trad: 'fireworks'
        },
        {
            jp: '元気',
            trad: 'healthy, spirit, fine'
        },
        {
            jp: '生徒',
            trad: 'pupil'
        },
        {
            jp: '魚',
            trad: 'fish'
        },
        {
            jp: '天気',
            trad: 'weather'
        },
        {
            jp: '空',
            trad: 'sky'
        },
        {
            jp: '山',
            trad: 'mountain'
        },
        {
            jp: '雨',
            trad: 'rain'
        },
        {
            jp: '電気',
            trad: 'electricity'
        },
        {
            jp: '電車',
            trad: 'electric train'
        },
        {
            jp: '英語',
            trad: 'English'
        },
        {
            jp: '耳',
            trad: 'ear'
        },
        {
            jp: '手紙',
            trad: 'letter'
        },
        {
            jp: '足',
            trad: 'foot'
        },
        {
            jp: '目',
            trad: 'eye'
        },
        {
            jp: '出口',
            trad: 'exit'
        },
        {
            jp: '名前',
            trad: 'name'
        },
        {
            jp: '喫茶店',
            trad: 'coffee shop'
        },
        {
            jp: '駅前',
            trad: 'in front of the station'
        },
        {
            jp: '道具',
            trad: 'tool'
        },
        {
            jp: '社長',
            trad: 'president of a company'
        },
        {
            jp: '外国人',
            trad: 'foreigner'
        },
        {
            jp: '外国',
            trad: 'foreign country'
        },
        {
            jp: '大学',
            trad: 'university'
        },
        {
            jp: '学校',
            trad: 'school'
        },
        {
            jp: '上着',
            trad: 'jacket'
        },
        {
            jp: '靴下',
            trad: 'socks'
        },
        {
            jp: '日中',
            trad: 'during the day, midday'
        },
        {
            jp: '北',
            trad: 'north'
        },
        {
            jp: '西',
            trad: 'west'
        },
        {
            jp: '東京',
            trad: 'Tokyo'
        },
        {
            jp: '南',
            trad: 'south'
        },
        {
            jp: '右',
            trad: 'right'
        },
        {
            jp: '左',
            trad: 'left'
        },
        {
            jp: '見せる',
            trad: 'to show'
        },
        {
            jp: '聞く',
            trad: 'to listen, to hear'
        },
        {
            jp: '辞書',
            trad: 'dictionary'
        },
        {
            jp: '読む',
            trad: 'to read'
        },
        {
            jp: '電話',
            trad: 'telephone'
        },
        {
            jp: '買い物',
            trad: 'shopping'
        },
        {
            jp: '銀行',
            trad: 'bank'
        },
        {
            jp: '出かける',
            trad: 'to go out'
        },
        {
            jp: '入口',
            trad: 'entrance'
        },
        {
            jp: '休む',
            trad: 'to take a day off'
        },
        {
            jp: '食堂',
            trad: 'dining room'
        },
        {
            jp: '飲み物',
            trad: 'beverage'
        },
        {
            jp: '言う',
            trad: 'to say'
        },
        {
            jp: '立つ',
            trad: 'to stand'
        },
        {
            jp: '会社',
            trad: 'company'
        },
        {
            jp: '多い',
            trad: 'many'
        },
        {
            jp: '多分',
            trad: 'probably'
        },
        {
            jp: '少ない',
            trad: 'few'
        },
        {
            jp: '古い',
            trad: 'old'
        },
        {
            jp: '新しい',
            trad: 'new'
        },
        {
            jp: '新聞',
            trad: 'newspaper'
        },
        {
            jp: '大きい',
            trad: 'big'
        },
        {
            jp: '大変',
            trad: 'dreadful, immense'
        },
        {
            jp: '小さい',
            trad: 'little'
        },
        {
            jp: '安い',
            trad: 'cheap'
        },
        {
            jp: '高い',
            trad: 'expensive'
        },
        {
            jp: '長い',
            trad: 'long'
        },
        {
            jp: '部長',
            trad: 'manager'
        },
        {
            jp: '白い',
            trad: 'white'
        },
        {
            jp: '面白い',
            trad: 'interesting'
        }
    ]
}