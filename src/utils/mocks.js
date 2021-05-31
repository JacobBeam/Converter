const data = [
  {
    "Date": "2021-05-29T11:30:00+03:00",
    "PreviousDate": "2021-05-28T11:30:00+03:00",
    "PreviousURL": "\/\/www.cbr-xml-daily.ru\/archive\/2021\/05\/28\/daily_json.js",
    "Timestamp": "2021-05-29T17:00:00+03:00",
    "Valute": {
        "AUD": {
            "ID": "R01010",
            "NumCode": "036",
            "CharCode": "AUD",
            "Nominal": 1,
            "Name": "Австралийский доллар",
            "Value": 56.8828,
            "Previous": 56.9667
        },
        "AZN": {
            "ID": "R01020A",
            "NumCode": "944",
            "CharCode": "AZN",
            "Nominal": 1,
            "Name": "Азербайджанский манат",
            "Value": 43.3119,
            "Previous": 43.236
        },
        "GBP": {
            "ID": "R01035",
            "NumCode": "826",
            "CharCode": "GBP",
            "Nominal": 1,
            "Name": "Фунт стерлингов Соединенного королевства",
            "Value": 104.4567,
            "Previous": 103.8549
        },
        "AMD": {
            "ID": "R01060",
            "NumCode": "051",
            "CharCode": "AMD",
            "Nominal": 100,
            "Name": "Армянских драмов",
            "Value": 14.1302,
            "Previous": 14.1081
        },
        "BYN": {
            "ID": "R01090B",
            "NumCode": "933",
            "CharCode": "BYN",
            "Nominal": 1,
            "Name": "Белорусский рубль",
            "Value": 29.0594,
            "Previous": 29.1269
        },
        "BGN": {
            "ID": "R01100",
            "NumCode": "975",
            "CharCode": "BGN",
            "Nominal": 1,
            "Name": "Болгарский лев",
            "Value": 45.8886,
            "Previous": 45.8625
        },
        "BRL": {
            "ID": "R01115",
            "NumCode": "986",
            "CharCode": "BRL",
            "Nominal": 1,
            "Name": "Бразильский реал",
            "Value": 14.0447,
            "Previous": 13.8284
        },
        "HUF": {
            "ID": "R01135",
            "NumCode": "348",
            "CharCode": "HUF",
            "Nominal": 100,
            "Name": "Венгерских форинтов",
            "Value": 25.7965,
            "Previous": 25.7224
        },
        "HKD": {
            "ID": "R01200",
            "NumCode": "344",
            "CharCode": "HKD",
            "Nominal": 10,
            "Name": "Гонконгских долларов",
            "Value": 94.8115,
            "Previous": 94.6477
        },
        "DKK": {
            "ID": "R01215",
            "NumCode": "208",
            "CharCode": "DKK",
            "Nominal": 1,
            "Name": "Датская крона",
            "Value": 12.0698,
            "Previous": 12.0631
        },
        "USD": {
            "ID": "R01235",
            "NumCode": "840",
            "CharCode": "USD",
            "Nominal": 1,
            "Name": "Доллар США",
            "Value": 73.587,
            "Previous": 73.458
        },
        "EUR": {
            "ID": "R01239",
            "NumCode": "978",
            "CharCode": "EUR",
            "Nominal": 1,
            "Name": "Евро",
            "Value": 89.6731,
            "Previous": 89.6555
        },
        "INR": {
            "ID": "R01270",
            "NumCode": "356",
            "CharCode": "INR",
            "Nominal": 10,
            "Name": "Индийских рупий",
            "Value": 10.1599,
            "Previous": 10.114
        },
        "KZT": {
            "ID": "R01335",
            "NumCode": "398",
            "CharCode": "KZT",
            "Nominal": 100,
            "Name": "Казахстанских тенге",
            "Value": 17.167,
            "Previous": 17.1289
        },
        "CAD": {
            "ID": "R01350",
            "NumCode": "124",
            "CharCode": "CAD",
            "Nominal": 1,
            "Name": "Канадский доллар",
            "Value": 60.9416,
            "Previous": 60.684
        },
        "KGS": {
            "ID": "R01370",
            "NumCode": "417",
            "CharCode": "KGS",
            "Nominal": 100,
            "Name": "Киргизских сомов",
            "Value": 88.2232,
            "Previous": 88.4606
        },
        "CNY": {
            "ID": "R01375",
            "NumCode": "156",
            "CharCode": "CNY",
            "Nominal": 1,
            "Name": "Китайский юань",
            "Value": 11.5594,
            "Previous": 11.5208
        },
        "MDL": {
            "ID": "R01500",
            "NumCode": "498",
            "CharCode": "MDL",
            "Nominal": 10,
            "Name": "Молдавских леев",
            "Value": 41.8227,
            "Previous": 41.7256
        },
        "NOK": {
            "ID": "R01535",
            "NumCode": "578",
            "CharCode": "NOK",
            "Nominal": 10,
            "Name": "Норвежских крон",
            "Value": 88.2412,
            "Previous": 87.9989
        },
        "PLN": {
            "ID": "R01565",
            "NumCode": "985",
            "CharCode": "PLN",
            "Nominal": 1,
            "Name": "Польский злотый",
            "Value": 19.9992,
            "Previous": 19.9479
        },
        "RON": {
            "ID": "R01585F",
            "NumCode": "946",
            "CharCode": "RON",
            "Nominal": 1,
            "Name": "Румынский лей",
            "Value": 18.244,
            "Previous": 18.2409
        },
        "XDR": {
            "ID": "R01589",
            "NumCode": "960",
            "CharCode": "XDR",
            "Nominal": 1,
            "Name": "СДР (специальные права заимствования)",
            "Value": 106.3089,
            "Previous": 106.2504
        },
        "SGD": {
            "ID": "R01625",
            "NumCode": "702",
            "CharCode": "SGD",
            "Nominal": 1,
            "Name": "Сингапурский доллар",
            "Value": 55.6129,
            "Previous": 55.5238
        },
        "TJS": {
            "ID": "R01670",
            "NumCode": "972",
            "CharCode": "TJS",
            "Nominal": 10,
            "Name": "Таджикских сомони",
            "Value": 64.5217,
            "Previous": 64.4086
        },
        "TRY": {
            "ID": "R01700J",
            "NumCode": "949",
            "CharCode": "TRY",
            "Nominal": 10,
            "Name": "Турецких лир",
            "Value": 85.9591,
            "Previous": 87.1491
        },
        "TMT": {
            "ID": "R01710A",
            "NumCode": "934",
            "CharCode": "TMT",
            "Nominal": 1,
            "Name": "Новый туркменский манат",
            "Value": 21.0549,
            "Previous": 21.018
        },
        "UZS": {
            "ID": "R01717",
            "NumCode": "860",
            "CharCode": "UZS",
            "Nominal": 10000,
            "Name": "Узбекских сумов",
            "Value": 69.4936,
            "Previous": 69.2353
        },
        "UAH": {
            "ID": "R01720",
            "NumCode": "980",
            "CharCode": "UAH",
            "Nominal": 10,
            "Name": "Украинских гривен",
            "Value": 26.7711,
            "Previous": 26.7026
        },
        "CZK": {
            "ID": "R01760",
            "NumCode": "203",
            "CharCode": "CZK",
            "Nominal": 10,
            "Name": "Чешских крон",
            "Value": 35.2715,
            "Previous": 35.2553
        },
        "SEK": {
            "ID": "R01770",
            "NumCode": "752",
            "CharCode": "SEK",
            "Nominal": 10,
            "Name": "Шведских крон",
            "Value": 88.7928,
            "Previous": 88.5474
        },
        "CHF": {
            "ID": "R01775",
            "NumCode": "756",
            "CharCode": "CHF",
            "Nominal": 1,
            "Name": "Швейцарский франк",
            "Value": 81.9911,
            "Previous": 81.9569
        },
        "ZAR": {
            "ID": "R01810",
            "NumCode": "710",
            "CharCode": "ZAR",
            "Nominal": 10,
            "Name": "Южноафриканских рэндов",
            "Value": 53.2275,
            "Previous": 53.6734
        },
        "KRW": {
            "ID": "R01815",
            "NumCode": "410",
            "CharCode": "KRW",
            "Nominal": 1000,
            "Name": "Вон Республики Корея",
            "Value": 66.0474,
            "Previous": 65.7987
        },
        "JPY": {
            "ID": "R01820",
            "NumCode": "392",
            "CharCode": "JPY",
            "Nominal": 100,
            "Name": "Японских иен",
            "Value": 66.9917,
            "Previous": 67.3525
        }
    }
},
{
  "Date": "2021-05-29T11:30:00+03:00",
  "PreviousDate": "2021-05-28T11:30:00+03:00",
  "PreviousURL": "\/\/www.cbr-xml-daily.ru\/archive\/2021\/05\/28\/daily_json.js",
  "Timestamp": "2021-05-30T19:00:00+03:00",
  "Valute": {
      "AUD": {
          "ID": "R01010",
          "NumCode": "036",
          "CharCode": "AUD",
          "Nominal": 1,
          "Name": "Австралийский доллар",
          "Value": 56.8828,
          "Previous": 56.9667
      },
      "AZN": {
          "ID": "R01020A",
          "NumCode": "944",
          "CharCode": "AZN",
          "Nominal": 1,
          "Name": "Азербайджанский манат",
          "Value": 43.3119,
          "Previous": 43.236
      },
      "GBP": {
          "ID": "R01035",
          "NumCode": "826",
          "CharCode": "GBP",
          "Nominal": 1,
          "Name": "Фунт стерлингов Соединенного королевства",
          "Value": 104.4567,
          "Previous": 103.8549
      },
      "AMD": {
          "ID": "R01060",
          "NumCode": "051",
          "CharCode": "AMD",
          "Nominal": 100,
          "Name": "Армянских драмов",
          "Value": 14.1302,
          "Previous": 14.1081
      },
      "BYN": {
          "ID": "R01090B",
          "NumCode": "933",
          "CharCode": "BYN",
          "Nominal": 1,
          "Name": "Белорусский рубль",
          "Value": 29.0594,
          "Previous": 29.1269
      },
      "BGN": {
          "ID": "R01100",
          "NumCode": "975",
          "CharCode": "BGN",
          "Nominal": 1,
          "Name": "Болгарский лев",
          "Value": 45.8886,
          "Previous": 45.8625
      },
      "BRL": {
          "ID": "R01115",
          "NumCode": "986",
          "CharCode": "BRL",
          "Nominal": 1,
          "Name": "Бразильский реал",
          "Value": 14.0447,
          "Previous": 13.8284
      },
      "HUF": {
          "ID": "R01135",
          "NumCode": "348",
          "CharCode": "HUF",
          "Nominal": 100,
          "Name": "Венгерских форинтов",
          "Value": 25.7965,
          "Previous": 25.7224
      },
      "HKD": {
          "ID": "R01200",
          "NumCode": "344",
          "CharCode": "HKD",
          "Nominal": 10,
          "Name": "Гонконгских долларов",
          "Value": 94.8115,
          "Previous": 94.6477
      },
      "DKK": {
          "ID": "R01215",
          "NumCode": "208",
          "CharCode": "DKK",
          "Nominal": 1,
          "Name": "Датская крона",
          "Value": 12.0698,
          "Previous": 12.0631
      },
      "USD": {
          "ID": "R01235",
          "NumCode": "840",
          "CharCode": "USD",
          "Nominal": 1,
          "Name": "Доллар США",
          "Value": 73.587,
          "Previous": 73.458
      },
      "EUR": {
          "ID": "R01239",
          "NumCode": "978",
          "CharCode": "EUR",
          "Nominal": 1,
          "Name": "Евро",
          "Value": 89.6731,
          "Previous": 89.6555
      },
      "INR": {
          "ID": "R01270",
          "NumCode": "356",
          "CharCode": "INR",
          "Nominal": 10,
          "Name": "Индийских рупий",
          "Value": 10.1599,
          "Previous": 10.114
      },
      "KZT": {
          "ID": "R01335",
          "NumCode": "398",
          "CharCode": "KZT",
          "Nominal": 100,
          "Name": "Казахстанских тенге",
          "Value": 17.167,
          "Previous": 17.1289
      },
      "CAD": {
          "ID": "R01350",
          "NumCode": "124",
          "CharCode": "CAD",
          "Nominal": 1,
          "Name": "Канадский доллар",
          "Value": 60.9416,
          "Previous": 60.684
      },
      "KGS": {
          "ID": "R01370",
          "NumCode": "417",
          "CharCode": "KGS",
          "Nominal": 100,
          "Name": "Киргизских сомов",
          "Value": 88.2232,
          "Previous": 88.4606
      },
      "CNY": {
          "ID": "R01375",
          "NumCode": "156",
          "CharCode": "CNY",
          "Nominal": 1,
          "Name": "Китайский юань",
          "Value": 11.5594,
          "Previous": 11.5208
      },
      "MDL": {
          "ID": "R01500",
          "NumCode": "498",
          "CharCode": "MDL",
          "Nominal": 10,
          "Name": "Молдавских леев",
          "Value": 41.8227,
          "Previous": 41.7256
      },
      "NOK": {
          "ID": "R01535",
          "NumCode": "578",
          "CharCode": "NOK",
          "Nominal": 10,
          "Name": "Норвежских крон",
          "Value": 88.2412,
          "Previous": 87.9989
      },
      "PLN": {
          "ID": "R01565",
          "NumCode": "985",
          "CharCode": "PLN",
          "Nominal": 1,
          "Name": "Польский злотый",
          "Value": 19.9992,
          "Previous": 19.9479
      },
      "RON": {
          "ID": "R01585F",
          "NumCode": "946",
          "CharCode": "RON",
          "Nominal": 1,
          "Name": "Румынский лей",
          "Value": 18.244,
          "Previous": 18.2409
      },
      "XDR": {
          "ID": "R01589",
          "NumCode": "960",
          "CharCode": "XDR",
          "Nominal": 1,
          "Name": "СДР (специальные права заимствования)",
          "Value": 106.3089,
          "Previous": 106.2504
      },
      "SGD": {
          "ID": "R01625",
          "NumCode": "702",
          "CharCode": "SGD",
          "Nominal": 1,
          "Name": "Сингапурский доллар",
          "Value": 55.6129,
          "Previous": 55.5238
      },
      "TJS": {
          "ID": "R01670",
          "NumCode": "972",
          "CharCode": "TJS",
          "Nominal": 10,
          "Name": "Таджикских сомони",
          "Value": 64.5217,
          "Previous": 64.4086
      },
      "TRY": {
          "ID": "R01700J",
          "NumCode": "949",
          "CharCode": "TRY",
          "Nominal": 10,
          "Name": "Турецких лир",
          "Value": 85.9591,
          "Previous": 87.1491
      },
      "TMT": {
          "ID": "R01710A",
          "NumCode": "934",
          "CharCode": "TMT",
          "Nominal": 1,
          "Name": "Новый туркменский манат",
          "Value": 21.0549,
          "Previous": 21.018
      },
      "UZS": {
          "ID": "R01717",
          "NumCode": "860",
          "CharCode": "UZS",
          "Nominal": 10000,
          "Name": "Узбекских сумов",
          "Value": 69.4936,
          "Previous": 69.2353
      },
      "UAH": {
          "ID": "R01720",
          "NumCode": "980",
          "CharCode": "UAH",
          "Nominal": 10,
          "Name": "Украинских гривен",
          "Value": 26.7711,
          "Previous": 26.7026
      },
      "CZK": {
          "ID": "R01760",
          "NumCode": "203",
          "CharCode": "CZK",
          "Nominal": 10,
          "Name": "Чешских крон",
          "Value": 35.2715,
          "Previous": 35.2553
      },
      "SEK": {
          "ID": "R01770",
          "NumCode": "752",
          "CharCode": "SEK",
          "Nominal": 10,
          "Name": "Шведских крон",
          "Value": 88.7928,
          "Previous": 88.5474
      },
      "CHF": {
          "ID": "R01775",
          "NumCode": "756",
          "CharCode": "CHF",
          "Nominal": 1,
          "Name": "Швейцарский франк",
          "Value": 81.9911,
          "Previous": 81.9569
      },
      "ZAR": {
          "ID": "R01810",
          "NumCode": "710",
          "CharCode": "ZAR",
          "Nominal": 10,
          "Name": "Южноафриканских рэндов",
          "Value": 53.2275,
          "Previous": 53.6734
      },
      "KRW": {
          "ID": "R01815",
          "NumCode": "410",
          "CharCode": "KRW",
          "Nominal": 1000,
          "Name": "Вон Республики Корея",
          "Value": 66.0474,
          "Previous": 65.7987
      },
      "JPY": {
          "ID": "R01820",
          "NumCode": "392",
          "CharCode": "JPY",
          "Nominal": 100,
          "Name": "Японских иен",
          "Value": 66.9917,
          "Previous": 67.3525
      }
  }
},
{
  "Date": "2021-05-28T11:30:00+03:00",
  "PreviousDate": "2021-05-27T11:30:00+03:00",
  "PreviousURL": "\/\/www.cbr-xml-daily.ru\/archive\/2021\/05\/27\/daily_json.js",
  "Timestamp": "2021-05-27T23:00:00+03:00",
  "Valute": {
      "AUD": {
          "ID": "R01010",
          "NumCode": "036",
          "CharCode": "AUD",
          "Nominal": 1,
          "Name": "Австралийский доллар",
          "Value": 56.9667,
          "Previous": 57.1846
      },
      "AZN": {
          "ID": "R01020A",
          "NumCode": "944",
          "CharCode": "AZN",
          "Nominal": 1,
          "Name": "Азербайджанский манат",
          "Value": 43.236,
          "Previous": 43.2453
      },
      "GBP": {
          "ID": "R01035",
          "NumCode": "826",
          "CharCode": "GBP",
          "Nominal": 1,
          "Name": "Фунт стерлингов Соединенного королевства",
          "Value": 103.8549,
          "Previous": 103.9506
      },
      "AMD": {
          "ID": "R01060",
          "NumCode": "051",
          "CharCode": "AMD",
          "Nominal": 100,
          "Name": "Армянских драмов",
          "Value": 14.1081,
          "Previous": 14.1146
      },
      "BYN": {
          "ID": "R01090B",
          "NumCode": "933",
          "CharCode": "BYN",
          "Nominal": 1,
          "Name": "Белорусский рубль",
          "Value": 29.1269,
          "Previous": 29.3168
      },
      "BGN": {
          "ID": "R01100",
          "NumCode": "975",
          "CharCode": "BGN",
          "Nominal": 1,
          "Name": "Болгарский лев",
          "Value": 45.8625,
          "Previous": 46.0016
      },
      "BRL": {
          "ID": "R01115",
          "NumCode": "986",
          "CharCode": "BRL",
          "Nominal": 1,
          "Name": "Бразильский реал",
          "Value": 13.8284,
          "Previous": 13.7795
      },
      "HUF": {
          "ID": "R01135",
          "NumCode": "348",
          "CharCode": "HUF",
          "Nominal": 100,
          "Name": "Венгерских форинтов",
          "Value": 25.7224,
          "Previous": 25.7333
      },
      "HKD": {
          "ID": "R01200",
          "NumCode": "344",
          "CharCode": "HKD",
          "Nominal": 10,
          "Name": "Гонконгских долларов",
          "Value": 94.6477,
          "Previous": 94.6521
      },
      "DKK": {
          "ID": "R01215",
          "NumCode": "208",
          "CharCode": "DKK",
          "Nominal": 1,
          "Name": "Датская крона",
          "Value": 12.0631,
          "Previous": 12.0984
      },
      "USD": {
          "ID": "R01235",
          "NumCode": "840",
          "CharCode": "USD",
          "Nominal": 1,
          "Name": "Доллар США",
          "Value": 73.458,
          "Previous": 73.4737
      },
      "EUR": {
          "ID": "R01239",
          "NumCode": "978",
          "CharCode": "EUR",
          "Nominal": 1,
          "Name": "Евро",
          "Value": 89.6555,
          "Previous": 89.9392
      },
      "INR": {
          "ID": "R01270",
          "NumCode": "356",
          "CharCode": "INR",
          "Nominal": 10,
          "Name": "Индийских рупий",
          "Value": 10.114,
          "Previous": 10.1089
      },
      "KZT": {
          "ID": "R01335",
          "NumCode": "398",
          "CharCode": "KZT",
          "Nominal": 100,
          "Name": "Казахстанских тенге",
          "Value": 17.1289,
          "Previous": 17.1746
      },
      "CAD": {
          "ID": "R01350",
          "NumCode": "124",
          "CharCode": "CAD",
          "Nominal": 1,
          "Name": "Канадский доллар",
          "Value": 60.684,
          "Previous": 60.8427
      },
      "KGS": {
          "ID": "R01370",
          "NumCode": "417",
          "CharCode": "KGS",
          "Nominal": 100,
          "Name": "Киргизских сомов",
          "Value": 88.4606,
          "Previous": 88.2262
      },
      "CNY": {
          "ID": "R01375",
          "NumCode": "156",
          "CharCode": "CNY",
          "Nominal": 1,
          "Name": "Китайский юань",
          "Value": 11.5208,
          "Previous": 11.4882
      },
      "MDL": {
          "ID": "R01500",
          "NumCode": "498",
          "CharCode": "MDL",
          "Nominal": 10,
          "Name": "Молдавских леев",
          "Value": 41.7256,
          "Previous": 41.7583
      },
      "NOK": {
          "ID": "R01535",
          "NumCode": "578",
          "CharCode": "NOK",
          "Nominal": 10,
          "Name": "Норвежских крон",
          "Value": 87.9989,
          "Previous": 88.3427
      },
      "PLN": {
          "ID": "R01565",
          "NumCode": "985",
          "CharCode": "PLN",
          "Nominal": 1,
          "Name": "Польский злотый",
          "Value": 19.9479,
          "Previous": 20.0485
      },
      "RON": {
          "ID": "R01585F",
          "NumCode": "946",
          "CharCode": "RON",
          "Nominal": 1,
          "Name": "Румынский лей",
          "Value": 18.2409,
          "Previous": 18.2684
      },
      "XDR": {
          "ID": "R01589",
          "NumCode": "960",
          "CharCode": "XDR",
          "Nominal": 1,
          "Name": "СДР (специальные права заимствования)",
          "Value": 106.2504,
          "Previous": 106.2496
      },
      "SGD": {
          "ID": "R01625",
          "NumCode": "702",
          "CharCode": "SGD",
          "Nominal": 1,
          "Name": "Сингапурский доллар",
          "Value": 55.5238,
          "Previous": 55.5315
      },
      "TJS": {
          "ID": "R01670",
          "NumCode": "972",
          "CharCode": "TJS",
          "Nominal": 10,
          "Name": "Таджикских сомони",
          "Value": 64.4086,
          "Previous": 64.4224
      },
      "TRY": {
          "ID": "R01700J",
          "NumCode": "949",
          "CharCode": "TRY",
          "Nominal": 10,
          "Name": "Турецких лир",
          "Value": 87.1491,
          "Previous": 86.9769
      },
      "TMT": {
          "ID": "R01710A",
          "NumCode": "934",
          "CharCode": "TMT",
          "Nominal": 1,
          "Name": "Новый туркменский манат",
          "Value": 21.018,
          "Previous": 21.0225
      },
      "UZS": {
          "ID": "R01717",
          "NumCode": "860",
          "CharCode": "UZS",
          "Nominal": 10000,
          "Name": "Узбекских сумов",
          "Value": 69.2353,
          "Previous": 69.3047
      },
      "UAH": {
          "ID": "R01720",
          "NumCode": "980",
          "CharCode": "UAH",
          "Nominal": 10,
          "Name": "Украинских гривен",
          "Value": 26.7026,
          "Previous": 26.6655
      },
      "CZK": {
          "ID": "R01760",
          "NumCode": "203",
          "CharCode": "CZK",
          "Nominal": 10,
          "Name": "Чешских крон",
          "Value": 35.2553,
          "Previous": 35.3052
      },
      "SEK": {
          "ID": "R01770",
          "NumCode": "752",
          "CharCode": "SEK",
          "Nominal": 10,
          "Name": "Шведских крон",
          "Value": 88.5474,
          "Previous": 88.656
      },
      "CHF": {
          "ID": "R01775",
          "NumCode": "756",
          "CharCode": "CHF",
          "Nominal": 1,
          "Name": "Швейцарский франк",
          "Value": 81.9569,
          "Previous": 82.0752
      },
      "ZAR": {
          "ID": "R01810",
          "NumCode": "710",
          "CharCode": "ZAR",
          "Nominal": 10,
          "Name": "Южноафриканских рэндов",
          "Value": 53.6734,
          "Previous": 53.1113
      },
      "KRW": {
          "ID": "R01815",
          "NumCode": "410",
          "CharCode": "KRW",
          "Nominal": 1000,
          "Name": "Вон Республики Корея",
          "Value": 65.7987,
          "Previous": 65.7786
      },
      "JPY": {
          "ID": "R01820",
          "NumCode": "392",
          "CharCode": "JPY",
          "Nominal": 100,
          "Name": "Японских иен",
          "Value": 67.3525,
          "Previous": 67.5031
      }
  }
},
{
  "Date": "2021-05-27T11:30:00+03:00",
  "PreviousDate": "2021-05-26T11:30:00+03:00",
  "PreviousURL": "\/\/www.cbr-xml-daily.ru\/archive\/2021\/05\/26\/daily_json.js",
  "Timestamp": "2021-05-26T23:00:00+03:00",
  "Valute": {
      "AUD": {
          "ID": "R01010",
          "NumCode": "036",
          "CharCode": "AUD",
          "Nominal": 1,
          "Name": "Австралийский доллар",
          "Value": 57.1846,
          "Previous": 56.9775
      },
      "AZN": {
          "ID": "R01020A",
          "NumCode": "944",
          "CharCode": "AZN",
          "Nominal": 1,
          "Name": "Азербайджанский манат",
          "Value": 43.2453,
          "Previous": 43.1997
      },
      "GBP": {
          "ID": "R01035",
          "NumCode": "826",
          "CharCode": "GBP",
          "Nominal": 1,
          "Name": "Фунт стерлингов Соединенного королевства",
          "Value": 103.9506,
          "Previous": 104.0466
      },
      "AMD": {
          "ID": "R01060",
          "NumCode": "051",
          "CharCode": "AMD",
          "Nominal": 100,
          "Name": "Армянских драмов",
          "Value": 14.1146,
          "Previous": 14.0989
      },
      "BYN": {
          "ID": "R01090B",
          "NumCode": "933",
          "CharCode": "BYN",
          "Nominal": 1,
          "Name": "Белорусский рубль",
          "Value": 29.3168,
          "Previous": 29.3023
      },
      "BGN": {
          "ID": "R01100",
          "NumCode": "975",
          "CharCode": "BGN",
          "Nominal": 1,
          "Name": "Болгарский лев",
          "Value": 46.0016,
          "Previous": 45.9761
      },
      "BRL": {
          "ID": "R01115",
          "NumCode": "986",
          "CharCode": "BRL",
          "Nominal": 1,
          "Name": "Бразильский реал",
          "Value": 13.7795,
          "Previous": 13.7953
      },
      "HUF": {
          "ID": "R01135",
          "NumCode": "348",
          "CharCode": "HUF",
          "Nominal": 100,
          "Name": "Венгерских форинтов",
          "Value": 25.7333,
          "Previous": 25.8133
      },
      "HKD": {
          "ID": "R01200",
          "NumCode": "344",
          "CharCode": "HKD",
          "Nominal": 10,
          "Name": "Гонконгских долларов",
          "Value": 94.6521,
          "Previous": 94.5548
      },
      "DKK": {
          "ID": "R01215",
          "NumCode": "208",
          "CharCode": "DKK",
          "Nominal": 1,
          "Name": "Датская крона",
          "Value": 12.0984,
          "Previous": 12.0932
      },
      "USD": {
          "ID": "R01235",
          "NumCode": "840",
          "CharCode": "USD",
          "Nominal": 1,
          "Name": "Доллар США",
          "Value": 73.4737,
          "Previous": 73.3963
      },
      "EUR": {
          "ID": "R01239",
          "NumCode": "978",
          "CharCode": "EUR",
          "Nominal": 1,
          "Name": "Евро",
          "Value": 89.9392,
          "Previous": 89.9545
      },
      "INR": {
          "ID": "R01270",
          "NumCode": "356",
          "CharCode": "INR",
          "Nominal": 10,
          "Name": "Индийских рупий",
          "Value": 10.1089,
          "Previous": 10.0775
      },
      "KZT": {
          "ID": "R01335",
          "NumCode": "398",
          "CharCode": "KZT",
          "Nominal": 100,
          "Name": "Казахстанских тенге",
          "Value": 17.1746,
          "Previous": 17.1967
      },
      "CAD": {
          "ID": "R01350",
          "NumCode": "124",
          "CharCode": "CAD",
          "Nominal": 1,
          "Name": "Канадский доллар",
          "Value": 60.8427,
          "Previous": 60.9199
      },
      "KGS": {
          "ID": "R01370",
          "NumCode": "417",
          "CharCode": "KGS",
          "Nominal": 100,
          "Name": "Киргизских сомов",
          "Value": 88.2262,
          "Previous": 87.7379
      },
      "CNY": {
          "ID": "R01375",
          "NumCode": "156",
          "CharCode": "CNY",
          "Nominal": 1,
          "Name": "Китайский юань",
          "Value": 11.4882,
          "Previous": 11.453
      },
      "MDL": {
          "ID": "R01500",
          "NumCode": "498",
          "CharCode": "MDL",
          "Nominal": 10,
          "Name": "Молдавских леев",
          "Value": 41.7583,
          "Previous": 41.5843
      },
      "NOK": {
          "ID": "R01535",
          "NumCode": "578",
          "CharCode": "NOK",
          "Nominal": 10,
          "Name": "Норвежских крон",
          "Value": 88.3427,
          "Previous": 88.3526
      },
      "PLN": {
          "ID": "R01565",
          "NumCode": "985",
          "CharCode": "PLN",
          "Nominal": 1,
          "Name": "Польский злотый",
          "Value": 20.0485,
          "Previous": 20.0662
      },
      "RON": {
          "ID": "R01585F",
          "NumCode": "946",
          "CharCode": "RON",
          "Nominal": 1,
          "Name": "Румынский лей",
          "Value": 18.2684,
          "Previous": 18.2587
      },
      "XDR": {
          "ID": "R01589",
          "NumCode": "960",
          "CharCode": "XDR",
          "Nominal": 1,
          "Name": "СДР (специальные права заимствования)",
          "Value": 106.2496,
          "Previous": 105.971
      },
      "SGD": {
          "ID": "R01625",
          "NumCode": "702",
          "CharCode": "SGD",
          "Nominal": 1,
          "Name": "Сингапурский доллар",
          "Value": 55.5315,
          "Previous": 55.3266
      },
      "TJS": {
          "ID": "R01670",
          "NumCode": "972",
          "CharCode": "TJS",
          "Nominal": 10,
          "Name": "Таджикских сомони",
          "Value": 64.4224,
          "Previous": 64.3545
      },
      "TRY": {
          "ID": "R01700J",
          "NumCode": "949",
          "CharCode": "TRY",
          "Nominal": 10,
          "Name": "Турецких лир",
          "Value": 86.9769,
          "Previous": 87.2415
      },
      "TMT": {
          "ID": "R01710A",
          "NumCode": "934",
          "CharCode": "TMT",
          "Nominal": 1,
          "Name": "Новый туркменский манат",
          "Value": 21.0225,
          "Previous": 21.0004
      },
      "UZS": {
          "ID": "R01717",
          "NumCode": "860",
          "CharCode": "UZS",
          "Nominal": 10000,
          "Name": "Узбекских сумов",
          "Value": 69.3047,
          "Previous": 69.384
      },
      "UAH": {
          "ID": "R01720",
          "NumCode": "980",
          "CharCode": "UAH",
          "Nominal": 10,
          "Name": "Украинских гривен",
          "Value": 26.6655,
          "Previous": 26.7408
      },
      "CZK": {
          "ID": "R01760",
          "NumCode": "203",
          "CharCode": "CZK",
          "Nominal": 10,
          "Name": "Чешских крон",
          "Value": 35.3052,
          "Previous": 35.3751
      },
      "SEK": {
          "ID": "R01770",
          "NumCode": "752",
          "CharCode": "SEK",
          "Nominal": 10,
          "Name": "Шведских крон",
          "Value": 88.656,
          "Previous": 88.8693
      },
      "CHF": {
          "ID": "R01775",
          "NumCode": "756",
          "CharCode": "CHF",
          "Nominal": 1,
          "Name": "Швейцарский франк",
          "Value": 82.0752,
          "Previous": 82.0621
      },
      "ZAR": {
          "ID": "R01810",
          "NumCode": "710",
          "CharCode": "ZAR",
          "Nominal": 10,
          "Name": "Южноафриканских рэндов",
          "Value": 53.1113,
          "Previous": 52.9864
      },
      "KRW": {
          "ID": "R01815",
          "NumCode": "410",
          "CharCode": "KRW",
          "Nominal": 1000,
          "Name": "Вон Республики Корея",
          "Value": 65.7786,
          "Previous": 65.3754
      },
      "JPY": {
          "ID": "R01820",
          "NumCode": "392",
          "CharCode": "JPY",
          "Nominal": 100,
          "Name": "Японских иен",
          "Value": 67.5031,
          "Previous": 67.4877
      }
  }
},
{
  "Date": "2021-05-26T11:30:00+03:00",
  "PreviousDate": "2021-05-25T11:30:00+03:00",
  "PreviousURL": "\/\/www.cbr-xml-daily.ru\/archive\/2021\/05\/25\/daily_json.js",
  "Timestamp": "2021-05-25T23:00:00+03:00",
  "Valute": {
      "AUD": {
          "ID": "R01010",
          "NumCode": "036",
          "CharCode": "AUD",
          "Nominal": 1,
          "Name": "Австралийский доллар",
          "Value": 56.9775,
          "Previous": 56.8728
      },
      "AZN": {
          "ID": "R01020A",
          "NumCode": "944",
          "CharCode": "AZN",
          "Nominal": 1,
          "Name": "Азербайджанский манат",
          "Value": 43.1997,
          "Previous": 43.2764
      },
      "GBP": {
          "ID": "R01035",
          "NumCode": "826",
          "CharCode": "GBP",
          "Nominal": 1,
          "Name": "Фунт стерлингов Соединенного королевства",
          "Value": 104.0466,
          "Previous": 104.0916
      },
      "AMD": {
          "ID": "R01060",
          "NumCode": "051",
          "CharCode": "AMD",
          "Nominal": 100,
          "Name": "Армянских драмов",
          "Value": 14.0989,
          "Previous": 14.1251
      },
      "BYN": {
          "ID": "R01090B",
          "NumCode": "933",
          "CharCode": "BYN",
          "Nominal": 1,
          "Name": "Белорусский рубль",
          "Value": 29.3023,
          "Previous": 29.3063
      },
      "BGN": {
          "ID": "R01100",
          "NumCode": "975",
          "CharCode": "BGN",
          "Nominal": 1,
          "Name": "Болгарский лев",
          "Value": 45.9761,
          "Previous": 45.7853
      },
      "BRL": {
          "ID": "R01115",
          "NumCode": "986",
          "CharCode": "BRL",
          "Nominal": 1,
          "Name": "Бразильский реал",
          "Value": 13.7953,
          "Previous": 13.7092
      },
      "HUF": {
          "ID": "R01135",
          "NumCode": "348",
          "CharCode": "HUF",
          "Nominal": 100,
          "Name": "Венгерских форинтов",
          "Value": 25.8133,
          "Previous": 25.8061
      },
      "HKD": {
          "ID": "R01200",
          "NumCode": "344",
          "CharCode": "HKD",
          "Nominal": 10,
          "Name": "Гонконгских долларов",
          "Value": 94.5548,
          "Previous": 94.6837
      },
      "DKK": {
          "ID": "R01215",
          "NumCode": "208",
          "CharCode": "DKK",
          "Nominal": 1,
          "Name": "Датская крона",
          "Value": 12.0932,
          "Previous": 12.0654
      },
      "USD": {
          "ID": "R01235",
          "NumCode": "840",
          "CharCode": "USD",
          "Nominal": 1,
          "Name": "Доллар США",
          "Value": 73.3963,
          "Previous": 73.5266
      },
      "EUR": {
          "ID": "R01239",
          "NumCode": "978",
          "CharCode": "EUR",
          "Nominal": 1,
          "Name": "Евро",
          "Value": 89.9545,
          "Previous": 89.6877
      },
      "INR": {
          "ID": "R01270",
          "NumCode": "356",
          "CharCode": "INR",
          "Nominal": 10,
          "Name": "Индийских рупий",
          "Value": 10.0775,
          "Previous": 10.0903
      },
      "KZT": {
          "ID": "R01335",
          "NumCode": "398",
          "CharCode": "KZT",
          "Nominal": 100,
          "Name": "Казахстанских тенге",
          "Value": 17.1967,
          "Previous": 17.1809
      },
      "CAD": {
          "ID": "R01350",
          "NumCode": "124",
          "CharCode": "CAD",
          "Nominal": 1,
          "Name": "Канадский доллар",
          "Value": 60.9199,
          "Previous": 60.9572
      },
      "KGS": {
          "ID": "R01370",
          "NumCode": "417",
          "CharCode": "KGS",
          "Nominal": 100,
          "Name": "Киргизских сомов",
          "Value": 87.7379,
          "Previous": 87.7322
      },
      "CNY": {
          "ID": "R01375",
          "NumCode": "156",
          "CharCode": "CNY",
          "Nominal": 1,
          "Name": "Китайский юань",
          "Value": 11.453,
          "Previous": 11.4353
      },
      "MDL": {
          "ID": "R01500",
          "NumCode": "498",
          "CharCode": "MDL",
          "Nominal": 10,
          "Name": "Молдавских леев",
          "Value": 41.5843,
          "Previous": 41.6345
      },
      "NOK": {
          "ID": "R01535",
          "NumCode": "578",
          "CharCode": "NOK",
          "Nominal": 10,
          "Name": "Норвежских крон",
          "Value": 88.3526,
          "Previous": 88.1614
      },
      "PLN": {
          "ID": "R01565",
          "NumCode": "985",
          "CharCode": "PLN",
          "Nominal": 1,
          "Name": "Польский злотый",
          "Value": 20.0662,
          "Previous": 19.9909
      },
      "RON": {
          "ID": "R01585F",
          "NumCode": "946",
          "CharCode": "RON",
          "Nominal": 1,
          "Name": "Румынский лей",
          "Value": 18.2587,
          "Previous": 18.2132
      },
      "XDR": {
          "ID": "R01589",
          "NumCode": "960",
          "CharCode": "XDR",
          "Nominal": 1,
          "Name": "СДР (специальные права заимствования)",
          "Value": 105.971,
          "Previous": 106.2445
      },
      "SGD": {
          "ID": "R01625",
          "NumCode": "702",
          "CharCode": "SGD",
          "Nominal": 1,
          "Name": "Сингапурский доллар",
          "Value": 55.3266,
          "Previous": 55.2832
      },
      "TJS": {
          "ID": "R01670",
          "NumCode": "972",
          "CharCode": "TJS",
          "Nominal": 10,
          "Name": "Таджикских сомони",
          "Value": 64.3545,
          "Previous": 64.4687
      },
      "TRY": {
          "ID": "R01700J",
          "NumCode": "949",
          "CharCode": "TRY",
          "Nominal": 10,
          "Name": "Турецких лир",
          "Value": 87.2415,
          "Previous": 87.5702
      },
      "TMT": {
          "ID": "R01710A",
          "NumCode": "934",
          "CharCode": "TMT",
          "Nominal": 1,
          "Name": "Новый туркменский манат",
          "Value": 21.0004,
          "Previous": 21.0377
      },
      "UZS": {
          "ID": "R01717",
          "NumCode": "860",
          "CharCode": "UZS",
          "Nominal": 10000,
          "Name": "Узбекских сумов",
          "Value": 69.384,
          "Previous": 69.5071
      },
      "UAH": {
          "ID": "R01720",
          "NumCode": "980",
          "CharCode": "UAH",
          "Nominal": 10,
          "Name": "Украинских гривен",
          "Value": 26.7408,
          "Previous": 26.8063
      },
      "CZK": {
          "ID": "R01760",
          "NumCode": "203",
          "CharCode": "CZK",
          "Nominal": 10,
          "Name": "Чешских крон",
          "Value": 35.3751,
          "Previous": 35.3077
      },
      "SEK": {
          "ID": "R01770",
          "NumCode": "752",
          "CharCode": "SEK",
          "Nominal": 10,
          "Name": "Шведских крон",
          "Value": 88.8693,
          "Previous": 88.4031
      },
      "CHF": {
          "ID": "R01775",
          "NumCode": "756",
          "CharCode": "CHF",
          "Nominal": 1,
          "Name": "Швейцарский франк",
          "Value": 82.0621,
          "Previous": 81.8691
      },
      "ZAR": {
          "ID": "R01810",
          "NumCode": "710",
          "CharCode": "ZAR",
          "Nominal": 10,
          "Name": "Южноафриканских рэндов",
          "Value": 52.9864,
          "Previous": 52.5787
      },
      "KRW": {
          "ID": "R01815",
          "NumCode": "410",
          "CharCode": "KRW",
          "Nominal": 1000,
          "Name": "Вон Республики Корея",
          "Value": 65.3754,
          "Previous": 65.2697
      },
      "JPY": {
          "ID": "R01820",
          "NumCode": "392",
          "CharCode": "JPY",
          "Nominal": 100,
          "Name": "Японских иен",
          "Value": 67.4877,
          "Previous": 67.592
      }
  }
},
{
  "Date": "2021-05-25T11:30:00+03:00",
  "PreviousDate": "2021-05-22T11:30:00+03:00",
  "PreviousURL": "\/\/www.cbr-xml-daily.ru\/archive\/2021\/05\/22\/daily_json.js",
  "Timestamp": "2021-05-24T23:00:00+03:00",
  "Valute": {
      "AUD": {
          "ID": "R01010",
          "NumCode": "036",
          "CharCode": "AUD",
          "Nominal": 1,
          "Name": "Австралийский доллар",
          "Value": 56.8728,
          "Previous": 56.9879
      },
      "AZN": {
          "ID": "R01020A",
          "NumCode": "944",
          "CharCode": "AZN",
          "Nominal": 1,
          "Name": "Азербайджанский манат",
          "Value": 43.2764,
          "Previous": 43.308
      },
      "GBP": {
          "ID": "R01035",
          "NumCode": "826",
          "CharCode": "GBP",
          "Nominal": 1,
          "Name": "Фунт стерлингов Соединенного королевства",
          "Value": 104.0916,
          "Previous": 104.4104
      },
      "AMD": {
          "ID": "R01060",
          "NumCode": "051",
          "CharCode": "AMD",
          "Nominal": 100,
          "Name": "Армянских драмов",
          "Value": 14.1251,
          "Previous": 14.1299
      },
      "BYN": {
          "ID": "R01090B",
          "NumCode": "933",
          "CharCode": "BYN",
          "Nominal": 1,
          "Name": "Белорусский рубль",
          "Value": 29.3063,
          "Previous": 29.357
      },
      "BGN": {
          "ID": "R01100",
          "NumCode": "975",
          "CharCode": "BGN",
          "Nominal": 1,
          "Name": "Болгарский лев",
          "Value": 45.7853,
          "Previous": 45.9647
      },
      "BRL": {
          "ID": "R01115",
          "NumCode": "986",
          "CharCode": "BRL",
          "Nominal": 1,
          "Name": "Бразильский реал",
          "Value": 13.7092,
          "Previous": 13.9288
      },
      "HUF": {
          "ID": "R01135",
          "NumCode": "348",
          "CharCode": "HUF",
          "Nominal": 100,
          "Name": "Венгерских форинтов",
          "Value": 25.8061,
          "Previous": 25.7
      },
      "HKD": {
          "ID": "R01200",
          "NumCode": "344",
          "CharCode": "HKD",
          "Nominal": 10,
          "Name": "Гонконгских долларов",
          "Value": 94.6837,
          "Previous": 94.7675
      },
      "DKK": {
          "ID": "R01215",
          "NumCode": "208",
          "CharCode": "DKK",
          "Nominal": 1,
          "Name": "Датская крона",
          "Value": 12.0654,
          "Previous": 12.0915
      },
      "USD": {
          "ID": "R01235",
          "NumCode": "840",
          "CharCode": "USD",
          "Nominal": 1,
          "Name": "Доллар США",
          "Value": 73.5266,
          "Previous": 73.5803
      },
      "EUR": {
          "ID": "R01239",
          "NumCode": "978",
          "CharCode": "EUR",
          "Nominal": 1,
          "Name": "Евро",
          "Value": 89.6877,
          "Previous": 89.9446
      },
      "INR": {
          "ID": "R01270",
          "NumCode": "356",
          "CharCode": "INR",
          "Nominal": 10,
          "Name": "Индийских рупий",
          "Value": 10.0903,
          "Previous": 10.0764
      },
      "KZT": {
          "ID": "R01335",
          "NumCode": "398",
          "CharCode": "KZT",
          "Nominal": 100,
          "Name": "Казахстанских тенге",
          "Value": 17.1809,
          "Previous": 17.1534
      },
      "CAD": {
          "ID": "R01350",
          "NumCode": "124",
          "CharCode": "CAD",
          "Nominal": 1,
          "Name": "Канадский доллар",
          "Value": 60.9572,
          "Previous": 60.8856
      },
      "KGS": {
          "ID": "R01370",
          "NumCode": "417",
          "CharCode": "KGS",
          "Nominal": 100,
          "Name": "Киргизских сомов",
          "Value": 87.7322,
          "Previous": 87.6036
      },
      "CNY": {
          "ID": "R01375",
          "NumCode": "156",
          "CharCode": "CNY",
          "Nominal": 1,
          "Name": "Китайский юань",
          "Value": 11.4353,
          "Previous": 11.4358
      },
      "MDL": {
          "ID": "R01500",
          "NumCode": "498",
          "CharCode": "MDL",
          "Nominal": 10,
          "Name": "Молдавских леев",
          "Value": 41.6345,
          "Previous": 41.5943
      },
      "NOK": {
          "ID": "R01535",
          "NumCode": "578",
          "CharCode": "NOK",
          "Nominal": 10,
          "Name": "Норвежских крон",
          "Value": 88.1614,
          "Previous": 88.3222
      },
      "PLN": {
          "ID": "R01565",
          "NumCode": "985",
          "CharCode": "PLN",
          "Nominal": 1,
          "Name": "Польский злотый",
          "Value": 19.9909,
          "Previous": 19.9832
      },
      "RON": {
          "ID": "R01585F",
          "NumCode": "946",
          "CharCode": "RON",
          "Nominal": 1,
          "Name": "Румынский лей",
          "Value": 18.2132,
          "Previous": 18.2427
      },
      "XDR": {
          "ID": "R01589",
          "NumCode": "960",
          "CharCode": "XDR",
          "Nominal": 1,
          "Name": "СДР (специальные права заимствования)",
          "Value": 106.2445,
          "Previous": 106.1565
      },
      "SGD": {
          "ID": "R01625",
          "NumCode": "702",
          "CharCode": "SGD",
          "Nominal": 1,
          "Name": "Сингапурский доллар",
          "Value": 55.2832,
          "Previous": 55.2405
      },
      "TJS": {
          "ID": "R01670",
          "NumCode": "972",
          "CharCode": "TJS",
          "Nominal": 10,
          "Name": "Таджикских сомони",
          "Value": 64.4687,
          "Previous": 64.5158
      },
      "TRY": {
          "ID": "R01700J",
          "NumCode": "949",
          "CharCode": "TRY",
          "Nominal": 10,
          "Name": "Турецких лир",
          "Value": 87.5702,
          "Previous": 87.8896
      },
      "TMT": {
          "ID": "R01710A",
          "NumCode": "934",
          "CharCode": "TMT",
          "Nominal": 1,
          "Name": "Новый туркменский манат",
          "Value": 21.0377,
          "Previous": 21.053
      },
      "UZS": {
          "ID": "R01717",
          "NumCode": "860",
          "CharCode": "UZS",
          "Nominal": 10000,
          "Name": "Узбекских сумов",
          "Value": 69.5071,
          "Previous": 69.4301
      },
      "UAH": {
          "ID": "R01720",
          "NumCode": "980",
          "CharCode": "UAH",
          "Nominal": 10,
          "Name": "Украинских гривен",
          "Value": 26.8063,
          "Previous": 26.79
      },
      "CZK": {
          "ID": "R01760",
          "NumCode": "203",
          "CharCode": "CZK",
          "Nominal": 10,
          "Name": "Чешских крон",
          "Value": 35.3077,
          "Previous": 35.292
      },
      "SEK": {
          "ID": "R01770",
          "NumCode": "752",
          "CharCode": "SEK",
          "Nominal": 10,
          "Name": "Шведских крон",
          "Value": 88.4031,
          "Previous": 88.7633
      },
      "CHF": {
          "ID": "R01775",
          "NumCode": "756",
          "CharCode": "CHF",
          "Nominal": 1,
          "Name": "Швейцарский франк",
          "Value": 81.8691,
          "Previous": 82.0293
      },
      "ZAR": {
          "ID": "R01810",
          "NumCode": "710",
          "CharCode": "ZAR",
          "Nominal": 10,
          "Name": "Южноафриканских рэндов",
          "Value": 52.5787,
          "Previous": 52.6141
      },
      "KRW": {
          "ID": "R01815",
          "NumCode": "410",
          "CharCode": "KRW",
          "Nominal": 1000,
          "Name": "Вон Республики Корея",
          "Value": 65.2697,
          "Previous": 65.1932
      },
      "JPY": {
          "ID": "R01820",
          "NumCode": "392",
          "CharCode": "JPY",
          "Nominal": 100,
          "Name": "Японских иен",
          "Value": 67.592,
          "Previous": 67.7192
      }
  }
},
{
  "Date": "2021-05-22T11:30:00+03:00",
  "PreviousDate": "2021-05-21T11:30:00+03:00",
  "PreviousURL": "\/\/www.cbr-xml-daily.ru\/archive\/2021\/05\/21\/daily_json.js",
  "Timestamp": "2021-05-23T23:00:00+03:00",
  "Valute": {
      "AUD": {
          "ID": "R01010",
          "NumCode": "036",
          "CharCode": "AUD",
          "Nominal": 1,
          "Name": "Австралийский доллар",
          "Value": 56.9879,
          "Previous": 57.0847
      },
      "AZN": {
          "ID": "R01020A",
          "NumCode": "944",
          "CharCode": "AZN",
          "Nominal": 1,
          "Name": "Азербайджанский манат",
          "Value": 43.308,
          "Previous": 43.32
      },
      "GBP": {
          "ID": "R01035",
          "NumCode": "826",
          "CharCode": "GBP",
          "Nominal": 1,
          "Name": "Фунт стерлингов Соединенного королевства",
          "Value": 104.4104,
          "Previous": 103.9904
      },
      "AMD": {
          "ID": "R01060",
          "NumCode": "051",
          "CharCode": "AMD",
          "Nominal": 100,
          "Name": "Армянских драмов",
          "Value": 14.1299,
          "Previous": 14.1344
      },
      "BYN": {
          "ID": "R01090B",
          "NumCode": "933",
          "CharCode": "BYN",
          "Nominal": 1,
          "Name": "Белорусский рубль",
          "Value": 29.357,
          "Previous": 29.2787
      },
      "BGN": {
          "ID": "R01100",
          "NumCode": "975",
          "CharCode": "BGN",
          "Nominal": 1,
          "Name": "Болгарский лев",
          "Value": 45.9647,
          "Previous": 45.9143
      },
      "BRL": {
          "ID": "R01115",
          "NumCode": "986",
          "CharCode": "BRL",
          "Nominal": 1,
          "Name": "Бразильский реал",
          "Value": 13.9288,
          "Previous": 13.8613
      },
      "HUF": {
          "ID": "R01135",
          "NumCode": "348",
          "CharCode": "HUF",
          "Nominal": 100,
          "Name": "Венгерских форинтов",
          "Value": 25.7,
          "Previous": 25.6986
      },
      "HKD": {
          "ID": "R01200",
          "NumCode": "344",
          "CharCode": "HKD",
          "Nominal": 10,
          "Name": "Гонконгских долларов",
          "Value": 94.7675,
          "Previous": 94.8121
      },
      "DKK": {
          "ID": "R01215",
          "NumCode": "208",
          "CharCode": "DKK",
          "Nominal": 1,
          "Name": "Датская крона",
          "Value": 12.0915,
          "Previous": 12.0754
      },
      "USD": {
          "ID": "R01235",
          "NumCode": "840",
          "CharCode": "USD",
          "Nominal": 1,
          "Name": "Доллар США",
          "Value": 73.5803,
          "Previous": 73.6007
      },
      "EUR": {
          "ID": "R01239",
          "NumCode": "978",
          "CharCode": "EUR",
          "Nominal": 1,
          "Name": "Евро",
          "Value": 89.9446,
          "Previous": 89.7708
      },
      "INR": {
          "ID": "R01270",
          "NumCode": "356",
          "CharCode": "INR",
          "Nominal": 10,
          "Name": "Индийских рупий",
          "Value": 10.0764,
          "Previous": 10.062
      },
      "KZT": {
          "ID": "R01335",
          "NumCode": "398",
          "CharCode": "KZT",
          "Nominal": 100,
          "Name": "Казахстанских тенге",
          "Value": 17.1534,
          "Previous": 17.1581
      },
      "CAD": {
          "ID": "R01350",
          "NumCode": "124",
          "CharCode": "CAD",
          "Nominal": 1,
          "Name": "Канадский доллар",
          "Value": 60.8856,
          "Previous": 60.7668
      },
      "KGS": {
          "ID": "R01370",
          "NumCode": "417",
          "CharCode": "KGS",
          "Nominal": 100,
          "Name": "Киргизских сомов",
          "Value": 87.6036,
          "Previous": 87.6149
      },
      "CNY": {
          "ID": "R01375",
          "NumCode": "156",
          "CharCode": "CNY",
          "Nominal": 1,
          "Name": "Китайский юань",
          "Value": 11.4358,
          "Previous": 11.4356
      },
      "MDL": {
          "ID": "R01500",
          "NumCode": "498",
          "CharCode": "MDL",
          "Nominal": 10,
          "Name": "Молдавских леев",
          "Value": 41.5943,
          "Previous": 41.5588
      },
      "NOK": {
          "ID": "R01535",
          "NumCode": "578",
          "CharCode": "NOK",
          "Nominal": 10,
          "Name": "Норвежских крон",
          "Value": 88.3222,
          "Previous": 88.6862
      },
      "PLN": {
          "ID": "R01565",
          "NumCode": "985",
          "CharCode": "PLN",
          "Nominal": 1,
          "Name": "Польский злотый",
          "Value": 19.9832,
          "Previous": 19.8899
      },
      "RON": {
          "ID": "R01585F",
          "NumCode": "946",
          "CharCode": "RON",
          "Nominal": 1,
          "Name": "Румынский лей",
          "Value": 18.2427,
          "Previous": 18.2203
      },
      "XDR": {
          "ID": "R01589",
          "NumCode": "960",
          "CharCode": "XDR",
          "Nominal": 1,
          "Name": "СДР (специальные права заимствования)",
          "Value": 106.1565,
          "Previous": 106.2338
      },
      "SGD": {
          "ID": "R01625",
          "NumCode": "702",
          "CharCode": "SGD",
          "Nominal": 1,
          "Name": "Сингапурский доллар",
          "Value": 55.2405,
          "Previous": 55.2268
      },
      "TJS": {
          "ID": "R01670",
          "NumCode": "972",
          "CharCode": "TJS",
          "Nominal": 10,
          "Name": "Таджикских сомони",
          "Value": 64.5158,
          "Previous": 64.5337
      },
      "TRY": {
          "ID": "R01700J",
          "NumCode": "949",
          "CharCode": "TRY",
          "Nominal": 10,
          "Name": "Турецких лир",
          "Value": 87.8896,
          "Previous": 87.8584
      },
      "TMT": {
          "ID": "R01710A",
          "NumCode": "934",
          "CharCode": "TMT",
          "Nominal": 1,
          "Name": "Новый туркменский манат",
          "Value": 21.053,
          "Previous": 21.0589
      },
      "UZS": {
          "ID": "R01717",
          "NumCode": "860",
          "CharCode": "UZS",
          "Nominal": 10000,
          "Name": "Узбекских сумов",
          "Value": 69.4301,
          "Previous": 69.5265
      },
      "UAH": {
          "ID": "R01720",
          "NumCode": "980",
          "CharCode": "UAH",
          "Nominal": 10,
          "Name": "Украинских гривен",
          "Value": 26.79,
          "Previous": 26.7982
      },
      "CZK": {
          "ID": "R01760",
          "NumCode": "203",
          "CharCode": "CZK",
          "Nominal": 10,
          "Name": "Чешских крон",
          "Value": 35.292,
          "Previous": 35.2443
      },
      "SEK": {
          "ID": "R01770",
          "NumCode": "752",
          "CharCode": "SEK",
          "Nominal": 10,
          "Name": "Шведских крон",
          "Value": 88.7633,
          "Previous": 88.336
      },
      "CHF": {
          "ID": "R01775",
          "NumCode": "756",
          "CharCode": "CHF",
          "Nominal": 1,
          "Name": "Швейцарский франк",
          "Value": 82.0293,
          "Previous": 81.7059
      },
      "ZAR": {
          "ID": "R01810",
          "NumCode": "710",
          "CharCode": "ZAR",
          "Nominal": 10,
          "Name": "Южноафриканских рэндов",
          "Value": 52.6141,
          "Previous": 52.2907
      },
      "KRW": {
          "ID": "R01815",
          "NumCode": "410",
          "CharCode": "KRW",
          "Nominal": 1000,
          "Name": "Вон Республики Корея",
          "Value": 65.1932,
          "Previous": 65.064
      },
      "JPY": {
          "ID": "R01820",
          "NumCode": "392",
          "CharCode": "JPY",
          "Nominal": 100,
          "Name": "Японских иен",
          "Value": 67.7192,
          "Previous": 67.5546
      }
  }
},
{
  "Date": "2021-05-22T11:30:00+03:00",
  "PreviousDate": "2021-05-21T11:30:00+03:00",
  "PreviousURL": "\/\/www.cbr-xml-daily.ru\/archive\/2021\/05\/21\/daily_json.js",
  "Timestamp": "2021-05-23T23:00:00+03:00",
  "Valute": {
      "AUD": {
          "ID": "R01010",
          "NumCode": "036",
          "CharCode": "AUD",
          "Nominal": 1,
          "Name": "Австралийский доллар",
          "Value": 56.9879,
          "Previous": 57.0847
      },
      "AZN": {
          "ID": "R01020A",
          "NumCode": "944",
          "CharCode": "AZN",
          "Nominal": 1,
          "Name": "Азербайджанский манат",
          "Value": 43.308,
          "Previous": 43.32
      },
      "GBP": {
          "ID": "R01035",
          "NumCode": "826",
          "CharCode": "GBP",
          "Nominal": 1,
          "Name": "Фунт стерлингов Соединенного королевства",
          "Value": 104.4104,
          "Previous": 103.9904
      },
      "AMD": {
          "ID": "R01060",
          "NumCode": "051",
          "CharCode": "AMD",
          "Nominal": 100,
          "Name": "Армянских драмов",
          "Value": 14.1299,
          "Previous": 14.1344
      },
      "BYN": {
          "ID": "R01090B",
          "NumCode": "933",
          "CharCode": "BYN",
          "Nominal": 1,
          "Name": "Белорусский рубль",
          "Value": 29.357,
          "Previous": 29.2787
      },
      "BGN": {
          "ID": "R01100",
          "NumCode": "975",
          "CharCode": "BGN",
          "Nominal": 1,
          "Name": "Болгарский лев",
          "Value": 45.9647,
          "Previous": 45.9143
      },
      "BRL": {
          "ID": "R01115",
          "NumCode": "986",
          "CharCode": "BRL",
          "Nominal": 1,
          "Name": "Бразильский реал",
          "Value": 13.9288,
          "Previous": 13.8613
      },
      "HUF": {
          "ID": "R01135",
          "NumCode": "348",
          "CharCode": "HUF",
          "Nominal": 100,
          "Name": "Венгерских форинтов",
          "Value": 25.7,
          "Previous": 25.6986
      },
      "HKD": {
          "ID": "R01200",
          "NumCode": "344",
          "CharCode": "HKD",
          "Nominal": 10,
          "Name": "Гонконгских долларов",
          "Value": 94.7675,
          "Previous": 94.8121
      },
      "DKK": {
          "ID": "R01215",
          "NumCode": "208",
          "CharCode": "DKK",
          "Nominal": 1,
          "Name": "Датская крона",
          "Value": 12.0915,
          "Previous": 12.0754
      },
      "USD": {
          "ID": "R01235",
          "NumCode": "840",
          "CharCode": "USD",
          "Nominal": 1,
          "Name": "Доллар США",
          "Value": 73.5803,
          "Previous": 73.6007
      },
      "EUR": {
          "ID": "R01239",
          "NumCode": "978",
          "CharCode": "EUR",
          "Nominal": 1,
          "Name": "Евро",
          "Value": 89.9446,
          "Previous": 89.7708
      },
      "INR": {
          "ID": "R01270",
          "NumCode": "356",
          "CharCode": "INR",
          "Nominal": 10,
          "Name": "Индийских рупий",
          "Value": 10.0764,
          "Previous": 10.062
      },
      "KZT": {
          "ID": "R01335",
          "NumCode": "398",
          "CharCode": "KZT",
          "Nominal": 100,
          "Name": "Казахстанских тенге",
          "Value": 17.1534,
          "Previous": 17.1581
      },
      "CAD": {
          "ID": "R01350",
          "NumCode": "124",
          "CharCode": "CAD",
          "Nominal": 1,
          "Name": "Канадский доллар",
          "Value": 60.8856,
          "Previous": 60.7668
      },
      "KGS": {
          "ID": "R01370",
          "NumCode": "417",
          "CharCode": "KGS",
          "Nominal": 100,
          "Name": "Киргизских сомов",
          "Value": 87.6036,
          "Previous": 87.6149
      },
      "CNY": {
          "ID": "R01375",
          "NumCode": "156",
          "CharCode": "CNY",
          "Nominal": 1,
          "Name": "Китайский юань",
          "Value": 11.4358,
          "Previous": 11.4356
      },
      "MDL": {
          "ID": "R01500",
          "NumCode": "498",
          "CharCode": "MDL",
          "Nominal": 10,
          "Name": "Молдавских леев",
          "Value": 41.5943,
          "Previous": 41.5588
      },
      "NOK": {
          "ID": "R01535",
          "NumCode": "578",
          "CharCode": "NOK",
          "Nominal": 10,
          "Name": "Норвежских крон",
          "Value": 88.3222,
          "Previous": 88.6862
      },
      "PLN": {
          "ID": "R01565",
          "NumCode": "985",
          "CharCode": "PLN",
          "Nominal": 1,
          "Name": "Польский злотый",
          "Value": 19.9832,
          "Previous": 19.8899
      },
      "RON": {
          "ID": "R01585F",
          "NumCode": "946",
          "CharCode": "RON",
          "Nominal": 1,
          "Name": "Румынский лей",
          "Value": 18.2427,
          "Previous": 18.2203
      },
      "XDR": {
          "ID": "R01589",
          "NumCode": "960",
          "CharCode": "XDR",
          "Nominal": 1,
          "Name": "СДР (специальные права заимствования)",
          "Value": 106.1565,
          "Previous": 106.2338
      },
      "SGD": {
          "ID": "R01625",
          "NumCode": "702",
          "CharCode": "SGD",
          "Nominal": 1,
          "Name": "Сингапурский доллар",
          "Value": 55.2405,
          "Previous": 55.2268
      },
      "TJS": {
          "ID": "R01670",
          "NumCode": "972",
          "CharCode": "TJS",
          "Nominal": 10,
          "Name": "Таджикских сомони",
          "Value": 64.5158,
          "Previous": 64.5337
      },
      "TRY": {
          "ID": "R01700J",
          "NumCode": "949",
          "CharCode": "TRY",
          "Nominal": 10,
          "Name": "Турецких лир",
          "Value": 87.8896,
          "Previous": 87.8584
      },
      "TMT": {
          "ID": "R01710A",
          "NumCode": "934",
          "CharCode": "TMT",
          "Nominal": 1,
          "Name": "Новый туркменский манат",
          "Value": 21.053,
          "Previous": 21.0589
      },
      "UZS": {
          "ID": "R01717",
          "NumCode": "860",
          "CharCode": "UZS",
          "Nominal": 10000,
          "Name": "Узбекских сумов",
          "Value": 69.4301,
          "Previous": 69.5265
      },
      "UAH": {
          "ID": "R01720",
          "NumCode": "980",
          "CharCode": "UAH",
          "Nominal": 10,
          "Name": "Украинских гривен",
          "Value": 26.79,
          "Previous": 26.7982
      },
      "CZK": {
          "ID": "R01760",
          "NumCode": "203",
          "CharCode": "CZK",
          "Nominal": 10,
          "Name": "Чешских крон",
          "Value": 35.292,
          "Previous": 35.2443
      },
      "SEK": {
          "ID": "R01770",
          "NumCode": "752",
          "CharCode": "SEK",
          "Nominal": 10,
          "Name": "Шведских крон",
          "Value": 88.7633,
          "Previous": 88.336
      },
      "CHF": {
          "ID": "R01775",
          "NumCode": "756",
          "CharCode": "CHF",
          "Nominal": 1,
          "Name": "Швейцарский франк",
          "Value": 82.0293,
          "Previous": 81.7059
      },
      "ZAR": {
          "ID": "R01810",
          "NumCode": "710",
          "CharCode": "ZAR",
          "Nominal": 10,
          "Name": "Южноафриканских рэндов",
          "Value": 52.6141,
          "Previous": 52.2907
      },
      "KRW": {
          "ID": "R01815",
          "NumCode": "410",
          "CharCode": "KRW",
          "Nominal": 1000,
          "Name": "Вон Республики Корея",
          "Value": 65.1932,
          "Previous": 65.064
      },
      "JPY": {
          "ID": "R01820",
          "NumCode": "392",
          "CharCode": "JPY",
          "Nominal": 100,
          "Name": "Японских иен",
          "Value": 67.7192,
          "Previous": 67.5546
      }
  }
}

]
