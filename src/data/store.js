import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const bearStore = set => ({
	turn: 1,
	incrTurn: () => set(state => ({ turn: state.turn + 1 })),
	turnZero: () => set(state => ({ turn: 1 })),
	nameStore1: 'player',
	currentName: '',
	changeCurrentName: cName =>
		set(state => ({ currentName: (state.currentName = cName) })),
	changeName1: name1 =>
		set(state => ({ nameStore1: (state.nameStore1 = name1) })),
	count1: 0,
	incrNum1: () => set(state => ({ count1: state.count1 + 1 })),
	decrNum1: () => set(state => ({ count1: state.count1 - 1 })),
	incrNum1P2: () => set(state => ({ count1: state.count1 + 2 })),
	incrNum1P3: () => set(state => ({ count1: state.count1 + 3 })),

	nameStore2: 'player',
	changeName2: name2 =>
		set(state => ({ nameStore2: (state.nameStore2 = name2) })),
	count2: 0,
	incrNum2: () => set(state => ({ count2: state.count2 + 1 })),
	decrNum2: () => set(state => ({ count2: state.count2 - 1 })),
	incrNum2P2: () => set(state => ({ count2: state.count2 + 2 })),
	incrNum2P3: () => set(state => ({ count2: state.count2 + 3 })),

	nameStore3: 'player',
	changeName3: name3 =>
		set(state => ({ nameStore3: (state.nameStore3 = name3) })),
	count3: 0,
	incrNum3: () => set(state => ({ count3: state.count3 + 1 })),
	decrNum3: () => set(state => ({ count3: state.count3 - 1 })),
	incrNum3P2: () => set(state => ({ count3: state.count3 + 2 })),
	incrNum3P3: () => set(state => ({ count3: state.count3 + 3 })),

	nameStore4: 'player',
	changeName4: name4 =>
		set(state => ({ nameStore4: (state.nameStore4 = name4) })),
	count4: 0,
	incrNum4: () => set(state => ({ count4: state.count4 + 1 })),
	decrNum4: () => set(state => ({ count4: state.count4 - 1 })),
	incrNum4P2: () => set(state => ({ count4: state.count4 + 2 })),
	incrNum4P3: () => set(state => ({ count4: state.count4 + 3 })),

	nameStore5: 'player',
	changeName5: name5 =>
		set(state => ({ nameStore5: (state.nameStore5 = name5) })),
	count5: 0,
	incrNum5: () => set(state => ({ count5: state.count5 + 1 })),
	decrNum5: () => set(state => ({ count5: state.count5 - 1 })),
	incrNum5P2: () => set(state => ({ count5: state.count5 + 2 })),
	incrNum5P3: () => set(state => ({ count5: state.count5 + 3 })),

	nameStore6: 'player',
	changeName6: name6 =>
		set(state => ({ nameStore6: (state.nameStore6 = name6) })),
	count6: 0,
	incrNum6: () => set(state => ({ count6: state.count6 + 1 })),
	decrNum6: () => set(state => ({ count6: state.count6 - 1 })),
	incrNum6P2: () => set(state => ({ count6: state.count6 + 2 })),
	incrNum6P3: () => set(state => ({ count6: state.count6 + 3 })),

	nameStore7: 'player',
	changeName7: name7 =>
		set(state => ({ nameStore7: (state.nameStore7 = name7) })),
	count7: 0,
	incrNum7: () => set(state => ({ count7: state.count7 + 1 })),
	decrNum7: () => set(state => ({ count7: state.count7 - 1 })),
	incrNum7P2: () => set(state => ({ count7: state.count7 + 2 })),
	incrNum7P3: () => set(state => ({ count7: state.count7 + 3 })),

	nameStore8: 'player',
	changeName8: name8 =>
		set(state => ({ nameStore8: (state.nameStore8 = name8) })),
	count8: 0,
	incrNum8: () => set(state => ({ count8: state.count8 + 1 })),
	decrNum8: () => set(state => ({ count8: state.count8 - 1 })),
	incrNum8P2: () => set(state => ({ count8: state.count8 + 2 })),
	incrNum8P3: () => set(state => ({ count8: state.count8 + 3 })),

	nameStore9: 'player',
	changeName9: name9 =>
		set(state => ({ nameStore9: (state.nameStore9 = name9) })),
	count9: 0,
	incrNum9: () => set(state => ({ count9: state.count9 + 1 })),
	decrNum9: () => set(state => ({ count9: state.count9 - 1 })),
	incrNum9P2: () => set(state => ({ count9: state.count9 + 2 })),
	incrNum9P3: () => set(state => ({ count9: state.count9 + 3 })),

	nameStore10: 'player',
	changeName10: name10 =>
		set(state => ({ nameStore10: (state.nameStore10 = name10) })),
	count10: 0,
	incrNum10: () => set(state => ({ count10: state.count10 + 1 })),
	decrNum10: () => set(state => ({ count10: state.count10 - 1 })),
	incrNum10P2: () => set(state => ({ count10: state.count10 + 2 })),
	incrNum10P3: () => set(state => ({ count10: state.count10 + 3 })),

	questionsSimple: [
		{
			question: '3 грызуна',
			index: 1,
		},
		{
			question: '3 примата',
			index: 2,
		},
		{
			question: '3 бабочки',
			index: 3,
		},
		{
			question: '3 жука',
			index: 4,
		},
		{
			question: '3 кошачьих',
			index: 5,
		},
		{
			question: '3 дерева',
			index: 6,
		},
		{
			question: '3 куста',
			index: 7,
		},
		{
			question: '3 морских хищника',
			index: 8,
		},
		{
			question: '3 слова, начинающиеся "ра"',
			index: 9,
		},
		{
			question: '3 вида сыров',
			index: 10,
		},
		{
			question: '3 страны Африки',
			index: 11,
		},
		{
			question: '3 правила дорожного движения',
			index: 12,
		},
		{
			question: '3 правила этикета',
			index: 13,
		},
		{
			question: '3 варианта, чтобы в сумме получилось 2.5',
			index: 14,
		},
		{
			question: '3 болезни',
			index: 15,
		},
		{
			question: '3 вида конечностей у животных',
			index: 16,
		},
		{
			question: '3 единицы измерения веса',
			index: 17,
		},
		{
			question: '3 единицы измерения длины',
			index: 18,
		},
		{
			question: '3 известных мультика',
			index: 19,
		},
		{
			question: '3 места где скушно',
			index: 20,
		},
		{
			question: '3 места где можно культурно провести время',
			index: 21,
		},
		{
			question: '3 известных фильма',
			index: 22,
		},
		{
			question: '3 игральных карты выше 10',
			index: 23,
		},
		{
			question: '3 озера',
			index: 24,
		},
		{
			question: '3 океана',
			index: 25,
		},
		{
			question: '3 электрических величины',
			index: 26,
		},
		{
			question: '3 войны',
			index: 27,
		},
		{
			question: '3 спортивных упражнения',
			index: 28,
		},
		{
			question: '3 прически',
			index: 29,
		},
		{
			question: '3 головных убора',
			index: 30,
		},
		{
			question: '3 вида обуви',
			index: 31,
		},
		{
			question: '3 варианта, как развести огонь',
			index: 32,
		},
		{
			question: '3 варианта, как погасить огонь',
			index: 33,
		},
		{
			question: '3 правила техники безопасности на дому',
			index: 34,
		},
		{
			question: '3 предлога/прийменника',
			index: 35,
		},
		{
			question: '3 местоимения/займенники',
			index: 36,
		},
		{
			question: '3 прилагательных/ прикметники',
			index: 37,
		},
		{
			question: '3 жидкости, которые ты пьешь каждый день',
			index: 38,
		},
		{
			question: '3 способа закрыть окно',
			index: 39,
		},
		{
			question: '3 вида искусства',
			index: 40,
		},
		{
			question: '3 чуда света',
			index: 41,
		},
		{
			question: '3 настольных игры',
			index: 42,
		},
		{
			question: '3 вида спорта с натянутой сеткой',
			index: 43,
		},
		{
			question: '3 зимних видов спорта',
			index: 44,
		},
		{
			question: '3 причины уйти раньше с работы',
			index: 45,
		},
		{
			question: '3 причины пойти на собрание',
			index: 46,
		},
		{
			question: '3 причины пойти в служение',
			index: 47,
		},
		{
			question: '3 причины служить пионером',
			index: 48,
		},
		{
			question: '3 причины служить на стройке',
			index: 49,
		},
		{
			question: '3 причины не заниматься спортом',
			index: 50,
		},
		{
			question: '3 причины заниматься спортом',
			index: 51,
		},
		{
			question: '3 ядовитых животных',
			index: 52,
		},
		{
			question: '3 футболиста',
			index: 53,
		},
		{
			question: '3 вида лесов',
			index: 54,
		},
		{
			question: '3 футбольных клуба',
			index: 55,
		},
		{
			question: '3 покемонов',
			index: 56,
		},
		{
			question: '3 вещи, которые всегда заставляют вас смеяться',
			index: 57,
		},
		{
			question: '3 вещи, которые вы часто забываете дома',
			index: 58,
		},
		{
			question: '3 слова, которыми можешь описать себя',
			index: 59,
		},
		{
			question: '3 деликатеса',
			index: 60,
		},
		{
			question: '3 клички собаки',
			index: 61,
		},
		{
			question: '3 красивых животных',
			index: 62,
		},
		{
			question: '3 транспорта без двигателя',
			index: 63,
		},
		{
			question: '3 вида оружия',
			index: 64,
		},
		{
			question: '3 комплимента',
			index: 65,
		},
		{
			question: '3 замечания',
			index: 66,
		},
		{
			question: '3 прочтенных книги',
			index: 67,
		},
		{
			question: '3 способа очистить воду',
			index: 68,
		},
		{
			question: '3 оранжевых фрукта',
			index: 69,
		},
		{
			question: '3 сказки',
			index: 70,
		},
		{
			question: '3 еврейских имени',
			index: 71,
		},
		{
			question: '3 поросят из сказки',
			index: 72,
		},
		{
			question: '3 языка программирования',
			index: 73,
		},
		{
			question: '3 штата Америки',
			index: 74,
		},
		{
			question: '3 варианта перемещения по воздуху',
			index: 75,
		},
		{
			question: '3 цвета, которых нет в радуге',
			index: 76,
		},
		{
			question: '3 места, куда можно присесть в лесу',
			index: 77,
		},
		{
			question: '3 шахматные фигуры',
			index: 78,
		},
		{
			question: '3 реки',
			index: 79,
		},
		{
			question: '3 вида облаков',
			index: 80,
		},
		{
			question: '3 врача',
			index: 81,
		},
		{
			question: '3 валюты разных стран',
			index: 82,
		},
		{
			question: '3 танцевальных направления',
			index: 83,
		},
		{
			question: '3 оружия древнего человека',
			index: 84,
		},
		{
			question: '3 вида общественного транспорта',
			index: 85,
		},
		{
			question: '3 десерта',
			index: 86,
		},
		{
			question: '3 вида ткани',
			index: 87,
		},
		{
			question: '3 способа снять стресс ',
			index: 88,
		},
		{
			question: '3 профессии, где надо носить форму ',
			index: 89,
		},
		{
			question: '3 съедобных гриба',
			index: 90,
		},
		{
			question: '3 признака старости',
			index: 91,
		},
		{
			question: '3 социальных сети',
			index: 92,
		},
		{
			question: '3 супа',
			index: 93,
		},
		{
			question: '3 жанра фильмов',
			index: 94,
		},
		{
			question: '3 карточные игры ',
			index: 95,
		},
		{
			question: '3 вида орехов',
			index: 96,
		},
		{
			question: '3 предмета из дерева',
			index: 97,
		},
		{
			question: '3 повода съесть торт',
			index: 98,
		},
		{
			question: '3 вещи, которые можно воткнуть в розетку',
			index: 99,
		},
		{
			question: '3 применения камня',
			index: 100,
		},
		{
			question: '3 вида учебных заведений',
			index: 101,
		},
		{
			question: '3 вида молочных продуктов',
			index: 102,
		},
		{
			question: '3 слова из 3 букв',
			index: 103,
		},
		{
			question: '3 слова из 4 букв',
			index: 104,
		},
		{
			question: '3 слова из 5 букв',
			index: 105,
		},
		{
			question: '3 драгоценных металла',
			index: 106,
		},
		{
			question: '3 предмета, обычно встречающихся на кухне',
			index: 107,
		},
		{
			question: '3 геометрические фигуры',
			index: 108,
		},
		{
			question: '3 напольные покрытия',
			index: 109,
		},
		{
			question: '"3" на 3 разных языках',
			index: 110,
		},
		{
			question: '3 человека к кому хотели б в гости',
			index: 111,
		},
		{
			question: '3 способа использовать зеркало',
			index: 112,
		},
		{
			question: '3 животных, которые ходят на 2 лапах',
			index: 113,
		},
		{
			question: '3 способа использовать лёд',
			index: 114,
		},
	],
	questionsHard: [
		{
			question: '3 физических явления света',
			index: 1,
		},
		{
			question: '3 рок группы',
			index: 2,
		},
		{
			question: '3 убитых мировых лидеров',
			index: 3,
		},
		{
			question: 'Назовите 3 ваших вредных привычки',
			index: 4,
		},
		{
			question: 'Назовите 3 животных на букву «D (англ.)»',
			index: 5,
		},
		{
			question: 'Назовите трех греческих богов кроме Зевса и Посейдона',
			index: 6,
		},
		{
			question: 'Назовите 3 имени, состоящие из трех букв',
			index: 7,
		},
		{
			question: '3 слова с приставкой ПРИ-',
			index: 8,
		},
		{
			question: '3 известных картины (без Малевича)',
			index: 9,
		},
		{
			question: '3 известных скульптуры',
			index: 10,
		},
		{
			question: '3 животных (не птицы), несущих яйца',
			index: 11,
		},
		{
			question: '3 известных полководцев (не библ.)',
			index: 12,
		},
		{
			question: '3 вида спорта с клюшкой',
			index: 13,
		},
		{
			question: '3 птицы, которых мы никогда не увидим летящими по небу',
			index: 14,
		},
		{
			question: '3 города или страны на букву я',
			index: 15,
		},
		{
			question: '3 слова на итальянском языке',
			index: 16,
		},
		{
			question: '3 баскетболиста',
			index: 17,
		},
		{
			question: '3 страны на которые начинается с одной и той же буквы',
			index: 18,
		},
		{
			question: '3 Белоруских города (кроме Минска)',
			index: 19,
		},
		{
			question: '3 знаменитых философа (кроме Аристотеля и Сократа)',
			index: 20,
		},
		{
			question: 'Назовите трех убитых мировых лидеров',
			index: 21,
		},
		{
			question: '3 мультика с главными героями животными',
			index: 22,
		},
		{
			question: '3 известных моста (не Укр. и не Рус.) ',
			index: 23,
		},
		{
			question: '3 комбинации, как в шахматах поставить мат',
			index: 24,
		},
		{
			question: '3 Американских столицы',
			index: 25,
		},
		{
			question: '3 марки холодильников',
			index: 26,
		},
		{
			question: '3 произведения Шевченка',
			index: 27,
		},
		{
			question: 'три результата 4.9',
			index: 28,
		},
		{
			question: '3 вулкана?',
			index: 29,
		},
		{
			question: '3 ядовитых гриба',
			index: 30,
		},
		{
			question: '3 фильма, в которых есть собаки',
			index: 31,
		},
		{
			question: '3 острова (кроме Ямайки и Мадагаскара )',
			index: 32,
		},
		{
			question: '3 шахматиста',
			index: 33,
		},
		{
			question: '3 известных спортсмена (не футболиста)',
			index: 34,
		},
		{
			question: '3 динозавра',
			index: 35,
		},
		{
			question: '3 японские марки авто',
			index: 36,
		},
		{
			question: 'Назови 3 рифмы к слову "рыба"',
			index: 37,
		},
		{
			question: '3 сходства человека и чайника',
			index: 38,
		},
		{
			question: '3 инструментов для художников',
			index: 39,
		},
		{
			question: '3 сказочных существ',
			index: 40,
		},
		{
			question: '3 флага на которых есть белый цвет',
			index: 40,
		},
	],

	questionsBible: [
		{
			question: '3 Евангелия',
			index: 1,
		},
		{
			question: '3 пророка',
			index: 2,
		},
		{
			question: '3 Библейские книги на П',
			index: 3,
		},
		{
			question: '3 царей',
			index: 4,
		},
		{
			question: '3 закона Моисея',
			index: 5,
		},
		{
			question: '3 свойства любви',
			index: 6,
		},
		{
			question: '3 злых персонажей',
			index: 7,
		},
		{
			question: '3 пророчества',
			index: 8,
		},
		{
			question: '3 пророческие книги',
			index: 9,
		},
		{
			question: '3 человек из окружения Давида',
			index: 10,
		},
		{
			question: '3 сыновей Ноя',
			index: 11,
		},
		{
			question: '3 друга Даниила',
			index: 12,
		},
		{
			question: '3 сына Иакова',
			index: 13,
		},
		{
			question: '3 апостола',
			index: 14,
		},
		{
			question: '3 пастуха',
			index: 15,
		},
		{
			question: '3 рыбака',
			index: 16,
		},
		{
			question: '3 ангела',
			index: 17,
		},
		{
			question: '3 поэтические книги',
			index: 18,
		},
		{
			question: '3 исторических книги',
			index: 19,
		},
		{
			question: '3 малых пророческих книги',
			index: 20,
		},
		{
			question: '3 зверя из книги Даниила',
			index: 21,
		},
		{
			question: '3 предмета лежавших в ковчеге завещания',
			index: 22,
		},
		{
			question: '3 Библейских города',
			index: 23,
		},
		{
			question: '3 дерева упомянутых в Бибиле',
			index: 24,
		},
		{
			question: '3 персонажей которых свело сребролюбие',
			index: 25,
		},
		{
			question: '3 вида жертв',
			index: 26,
		},
		{
			question: '3 запрета в Библии',
			index: 27,
		},
		{
			question: '3 части духовных доспехов',
			index: 28,
		},
		{
			question: '3 чуда Иисуса',
			index: 29,
		},
		{
			question: '3 чуда Елисея',
			index: 30,
		},
		{
			question: '3 притчи',
			index: 31,
		},
		{
			question: '3 воина',
			index: 32,
		},
		{
			question: '3 вида денег',
			index: 33,
		},
		{
			question: '3 воскресенья',
			index: 34,
		},
		{
			question: '3 персонажа замужем',
			index: 35,
		},
		{
			question: '3 вдовы',
			index: 36,
		},
		{
			question: '3 титулы Иеговы',
			index: 37,
		},
		{
			question: '3 Титулы Сатаны',
			index: 38,
		},
		{
			question: '3 титулы Иисуса',
			index: 39,
		},
		{
			question: '3 разговаривающих животных',
			index: 40,
		},
		{
			question: '3 уничтоженных города',
			index: 41,
		},
		{
			question: '3 составляющие фимиама',
			index: 42,
		},
		{
			question: '3 праздника в Библии',
			index: 43,
		},
		{
			question: '3 национальности',
			index: 44,
		},
		{
			question: '3 священника',
			index: 45,
		},
		{
			question: '3 еврейских месяца',
			index: 46,
		},
		{
			question: '3 Библейские книги с цифрой 2',
			index: 47,
		},
		{
			question: '3 книги на букву Ф',
			index: 48,
		},
		{
			question: '3 Библейские реки',
			index: 49,
		},
		{
			question: '3 элемента святой палатки',
			index: 50,
		},
		{
			question: '3 элемента одежды священника',
			index: 51,
		},
		{
			question: '3 степени веса',
			index: 52,
		},
		{
			question: '3 меры длины',
			index: 53,
		},
		{
			question: '3 кары на Египет',
			index: 54,
		},
		{
			question: '3 неверные женщины',
			index: 55,
		},
		{
			question: '3 чуда Моисея',
			index: 56,
		},
		{
			question: '3 писателей псалмов',
			index: 57,
		},
		{
			question: '3 советчик Иова',
			index: 58,
		},
		{
			question: '3 использование рыбы в Библии',
			index: 59,
		},
		{
			question: '3 плода в Библии',
			index: 60,
		},
		{
			question: '3 плоды духа',
			index: 61,
		},
		{
			question: '3 поступки плоти',
			index: 62,
		},
		{
			question: '3 признака конца',
			index: 63,
		},
		{
			question: '3 причины почему Библия полезна',
			index: 64,
		},
		{
			question: '3 явления чего нет в могиле',
			index: 65,
		},
		{
			question: '3 пророчества о будущем',
			index: 66,
		},
		{
			question: '3 чего не будет после того, как Бог вытрет слезы',
			index: 67,
		},
		{
			question: '3 группы воскресших',
			index: 68,
		},
		{
			question: '3 алкогольных напитка в Библии',
			index: 69,
		},
		{
			question: '3 причины быть счастливым',
			index: 70,
		},
		{
			question: '3 молитвы в Библии',
			index: 71,
		},
		{
			question: '3 письма к людям',
			index: 72,
		},
		{
			question: '3 письма к сборам',
			index: 73,
		},
		{
			question: '3 писателя Библии',
			index: 74,
		},
		{
			question: '3 храма',
			index: 75,
		},
		{
			question: '3 выдающихся года',
			index: 76,
		},
		{
			question: '3 патриарха',
			index: 77,
		},
		{
			question: '3 строителя',
			index: 78,
		},
		{
			question: '3 профессии',
			index: 79,
		},
		{
			question: '3 кары на Иону',
			index: 80,
		},
		{
			question: '3 религии',
			index: 81,
		},
		{
			question: '3 символических понятия',
			index: 82,
		},
		{
			question: '3 черты Давида',
			index: 83,
		},
		{
			question: '3 образа Святого Духа',
			index: 84,
		},
		{
			question: '3 вида почвы',
			index: 85,
		},
		{
			question: '3 чудесных спасения',
			index: 86,
		},
		{
			question: '3 персонажа с переменными именами',
			index: 87,
		},
		{
			question: '3 фальшивых бога',
			index: 88,
		},
		{
			question: '3 сына Адама',
			index: 89,
		},
		{
			question: '3 характеристики служебного помошника',
			index: 90,
		},
		{
			question: '3 всадника апокалипсиса',
			index: 91,
		},
		{
			question: '3 проповедника',
			index: 92,
		},
		{
			question: '3 языка в Библии',
			index: 93,
		},
		{
			question: '3 болезни записаные в Библии',
			index: 94,
		},
		{
			question: '3 компонента крови',
			index: 95,
		},
		{
			question: '3 персонажа потерявшие родных',
			index: 96,
		},
		{
			question: '3 зверя в которых вселялись духовные существа',
			index: 97,
		},
		{
			question: '3 задания ангелов',
			index: 98,
		},
		{
			question: '3 публикации из орудий для учений',
			index: 99,
		},
		{
			question: '3 фильма',
			index: 100,
		},
		{
			question: '3 брошюры',
			index: 101,
		},
		{
			question: '3 книги',
			index: 102,
		},
		{
			question: '3 песни',
			index: 103,
		},
		{
			question: '3 другие названия Библии',
			index: 104,
		},
		{
			question: '3 вещи зеленого цвета',
			index: 105,
		},
		{
			question: '3 предмета красного цвета',
			index: 106,
		},
		{
			question: '3 книги которые написал Иван',
			index: 107,
		},
		{
			question: '3 книги, которые написал Павло',
			index: 108,
		},
		{
			question: '3 книги Моисея',
			index: 109,
		},
	],

	questionsTest: [
		{
			question: '1',
			index: 1,
		},
		{
			question: '2',
			index: 2,
		},
		{
			question: '3',
			index: 3,
		},
		{
			question: '4',
			index: 4,
		},
		{
			question: '5',
			index: 5,
		},
		{
			question: '6',
			index: 6,
		},
		{
			question: '7',
			index: 7,
		},
		{
			question: '8',
			index: 8,
		},
		{
			question: '9',
			index: 9,
		},
		{
			question: '10',
			index: 10,
		},
	],
})

const useBearStore = create(devtools(persist(bearStore, { name: 'question' })))
export default useBearStore

/* 	questionSimple: [
		{
			question: '',
			index: 1,
		},
		{
			question: '',
			index: 2,
		},
		{
			question: '',
			index: 3,
		},
		{
			question: '',
			index: 4,
		},
		{
			question: '',
			index: 5,
		},
		{
			question: '',
			index: 6,
		},
		{
			question: '',
			index: 7,
		},
		{
			question: '',
			index: 8,
		},
		{
			question: '',
			index: 9,
		},
		{
			question: '',
			index: 10,
		},
		{
			question: '',
			index: 11,
		},
		{
			question: '',
			index: 12,
		},
		{
			question: '',
			index: 13,
		},
		{
			question: '',
			index: 14,
		},
		{
			question: '',
			index: 15,
		},
		{
			question: '',
			index: 16,
		},
		{
			question: '',
			index: 17,
		},
		{
			question: '',
			index: 18,
		},
		{
			question: '',
			index: 19,
		},
		{
			question: '',
			index: 20,
		},
		{
			question: '',
			index: 21,
		},
		{
			question: '',
			index: 22,
		},
		{
			question: '',
			index: 23,
		},
		{
			question: '',
			index: 24,
		},
		{
			question: '',
			index: 25,
		},
		{
			question: '',
			index: 26,
		},
		{
			question: '',
			index: 27,
		},
		{
			question: '',
			index: 28,
		},
		{
			question: '',
			index: 29,
		},
		{
			question: '',
			index: 30,
		},
		{
			question: '',
			index: 31,
		},
		{
			question: '',
			index: 32,
		},
		{
			question: '',
			index: 33,
		},
		{
			question: '',
			index: 34,
		},
		{
			question: '',
			index: 35,
		},
		{
			question: '',
			index: 36,
		},
		{
			question: '',
			index: 37,
		},
		{
			question: '',
			index: 38,
		},
		{
			question: '',
			index: 39,
		},
		{
			question: '',
			index: 40,
		},
		{
			question: '',
			index: 41,
		},
		{
			question: '',
			index: 42,
		},
		{
			question: '',
			index: 43,
		},
		{
			question: '',
			index: 44,
		},
		{
			question: '',
			index: 45,
		},
		{
			question: '',
			index: 46,
		},
		{
			question: '',
			index: 47,
		},
		{
			question: '',
			index: 48,
		},
		{
			question: '',
			index: 49,
		},
		{
			question: '',
			index: 50,
		},
		{
			question: '',
			index: 51,
		},
		{
			question: '',
			index: 52,
		},
		{
			question: '',
			index: 53,
		},
		{
			question: '',
			index: 54,
		},
		{
			question: '',
			index: 55,
		},
				{
			question: '',
			index: 56,
		},		{
			question: '',
			index: 57,
		},		{
			question: '',
			index: 58,
		},		{
			question: '',
			index: 59,
		},
		{
			question: '',
			index: 60,
		},		{
			question: '',
			index: 61,
		},		{
			question: '',
			index: 62,
		},		{
			question: '',
			index: 63,
		},		{
			question: '',
			index: 64,
		},		{
			question: '',
			index: 65,
		},		{
			question: '',
			index: 66,
		},		{
			question: '',
			index: 67,
		},		{
			question: '',
			index: 68,
		},{
			question: '',
			index: 69,
		},{
			question: '',
			index: 70,
		},{
			question: '',
			index: 71,
		},{
			question: '',
			index: 72,
		},{
			question: '',
			index: 73,
		},{
			question: '',
			index: 74,
		},{
			question: '',
			index: 75,
		},{
			question: '',
			index: 76,
		},{
			question: '',
			index: 77,
		},{
			question: '',
			index: 78,
		},{
			question: '',
			index: 79,
		},{
			question: '',
			index: 80,
		},{
			question: '',
			index: 81,
		},{
			question: '',
			index: 82,
		},{
			question: '',
			index: 83,
		},{
			question: '',
			index: 84,
		},{
			question: '',
			index: 85,
		},{
			question: '',
			index: 86,
		},{
			question: '',
			index: 87,
		},{
			question: '',
			index: 88,
		},{
			question: '',
			index: 89,
		},{
			question: '',
			index: 90,
		},{
			question: '',
			index: 91,
		},{
			question: '',
			index: 92,
		},{
			question: '',
			index: 93,
		},{
			question: '',
			index: 94,
		},{
			question: '',
			index: 95,
		},{
			question: '',
			index: 96,
		},{
			question: '',
			index: 97,
		},{
			question: '',
			index: 98,
		},{
			question: '',
			index: 99,
		},{
			question: '',
			index: 100,
		},
	] */
