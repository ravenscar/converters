// some mercilessly stolen from random places on the internet
type TTestData = {
  hex: string;
  bigint: string;
  b64: string;
  uint8: Uint8Array;
}[];

export const testData: TTestData = [
  { hex: "0", bigint: "0", b64: "AA==", uint8: new Uint8Array([0]) },
  { hex: "1", bigint: "1", b64: "AQ==", uint8: new Uint8Array([1]) },
  { hex: "01", bigint: "1", b64: "AQ==", uint8: new Uint8Array([1]) },
  { hex: "00", bigint: "0", b64: "AA==", uint8: new Uint8Array([0]) },
  { hex: "a", bigint: "10", b64: "Cg==", uint8: new Uint8Array([10]) },
  { hex: "f", bigint: "15", b64: "Dw==", uint8: new Uint8Array([15]) },
  { hex: "10", bigint: "16", b64: "EA==", uint8: new Uint8Array([16]) },
  { hex: "ff", bigint: "255", b64: "/w==", uint8: new Uint8Array([255]) },
  {
    hex: "abcd",
    bigint: "43981",
    b64: "q80=",
    uint8: new Uint8Array([171, 205]),
  },
  {
    hex:
      "EC851A69B8ACD843164E10CFF70CF9E86DC2FEE3CF6F374B43C854E3342A2F1AC3E30C741CC41E679DF6D07CE6FA3A66083EC9B8C8BF3AF05D8BDBB0AA6CB3EF8C5BAA2A5E531BA9E28592F99E0FE4F95169A6C63F635D0197E325C5EC76219B907E4EBDCD401FB1986E4E3CA661FF73E7E2B8FD9988E753B7042B2BBCA76679",
    bigint:
      "166089946137986168535368849184301740204613753693156360462575217560130904921953976324839782808018277000296027060873747803291797869684516494894741699267674246881622658654267131250470956587908385447044319923040838072975636163137212887824248575510341104029461758594855159174329892125993844566497176102668262139513",
    b64:
      "7IUaabis2EMWThDP9wz56G3C/uPPbzdLQ8hU4zQqLxrD4wx0HMQeZ5320Hzm+jpmCD7JuMi/OvBdi9uwqmyz74xbqipeUxup4oWS+Z4P5PlRaabGP2NdAZfjJcXsdiGbkH5Ovc1AH7GYbk48pmH/c+fiuP2ZiOdTtwQrK7ynZnk=",
    uint8: new Uint8Array([
      236,
      133,
      26,
      105,
      184,
      172,
      216,
      67,
      22,
      78,
      16,
      207,
      247,
      12,
      249,
      232,
      109,
      194,
      254,
      227,
      207,
      111,
      55,
      75,
      67,
      200,
      84,
      227,
      52,
      42,
      47,
      26,
      195,
      227,
      12,
      116,
      28,
      196,
      30,
      103,
      157,
      246,
      208,
      124,
      230,
      250,
      58,
      102,
      8,
      62,
      201,
      184,
      200,
      191,
      58,
      240,
      93,
      139,
      219,
      176,
      170,
      108,
      179,
      239,
      140,
      91,
      170,
      42,
      94,
      83,
      27,
      169,
      226,
      133,
      146,
      249,
      158,
      15,
      228,
      249,
      81,
      105,
      166,
      198,
      63,
      99,
      93,
      1,
      151,
      227,
      37,
      197,
      236,
      118,
      33,
      155,
      144,
      126,
      78,
      189,
      205,
      64,
      31,
      177,
      152,
      110,
      78,
      60,
      166,
      97,
      255,
      115,
      231,
      226,
      184,
      253,
      153,
      136,
      231,
      83,
      183,
      4,
      43,
      43,
      188,
      167,
      102,
      121,
    ]),
  },
  {
    hex:
      "e239f9b3d621a86f8b1ab51cbfa73900d40cc2830fb414dae813e29a20949de0093b395ce2b3a9cd52657fb39ca47ffbdf3a5bd40cb84f2a034ab87f9fcc5cbb3022d9dc180890a8a7f2938215ed9ee121f108d62b481c5d4bc6a9b40cdd3c182e40898920992da08d119075ef5957d07e28f5e766d2a9c4fda2be261fa1746ed1da63491419fce1e7bb323720b5fde8558e0f61a95f1c506d076c4db88321c0f61f7159761041c4e0967d98537355bae2fe2a9fc823ef4ebaa9c6072d6fe3d170b33199702f9c3fca61970aba0284948cc6907bf5b5222adbdd5eda5755bb95e4278c313be16f612256ec705a5edcd0283352af414f00caa21b80ddfe606c645cafc7334cf8cf75a4393297084f44b5f872fa2bdc711cd2bfe304e2101516dbd7c7ce8a87db232e8e760ae008dba1b45cecff7a31c2adfa61d48ef77c622bf488ef1b20c78e2de0be9e7ca23413c29867721082965e1d66e18f2c32e2ffd04448c365972bcebcc305014a948fd0f04bfce60dcb42d190fb03b71c2c352ef02ef84831991a37541ff6839a3a1e6f41d015d226cc169cc1525fccaaf04ba12aebcd9ec87df873fb47f8044dbfee05ecfdfbbf8176a93193f59c5a2745c45a6d62250363937ecd449291f8ecc82082c1442b454f86ff59841310faa300fd4a4fd48297150786421b7c6f8251fd0145e56bb7b801d647fd6c4e4193e3f3c32d8193",
    bigint:
      "922923461708774413010226913725168908708466555132070245698887061250368743312952673036313966819398632407102846968892765356821005136657966815420323307418739035664361058911490053961899585041971890729173854358617747223706721016298117336589155868720521779368229594078978367928327550320332621082268077165957928962685384707583792722933933703966735440755223076803115368810481847421637741955267041440398877722871507020053028491208765270272192484359713914657488139256516649781807459729673615346648653046758970406327299896376745899259725729133929372712744043084657063055855248381785009750431485551976256555049845591705911076849653308673958057466248353724042927165073500236161252867340011667785055677590409380017463307064184803736156894237738045297375539574058750088905115744988618545159931250161962622734844730789424230992348759410806825720597304576113373255239759690455760252311724762340024887824351230657659176500774276412142296644371428521663266704083613743610085519606995815258226361916867589280092083484908862267833374139796245179076527641498249102202444817478362607097105606904585424744635589622480423339290762781522813900151254826644745194126252564133240650752116344969273628868307509440210544684815341857614419277789812364044276677312915",
    b64:
      "4jn5s9YhqG+LGrUcv6c5ANQMwoMPtBTa6BPimiCUneAJOzlc4rOpzVJlf7OcpH/73zpb1Ay4TyoDSrh/n8xcuzAi2dwYCJCop/KTghXtnuEh8QjWK0gcXUvGqbQM3TwYLkCJiSCZLaCNEZB171lX0H4o9edm0qnE/aK+Jh+hdG7R2mNJFBn84ee7Mjcgtf3oVY4PYalfHFBtB2xNuIMhwPYfcVl2EEHE4JZ9mFNzVbri/iqfyCPvTrqpxgctb+PRcLMxmXAvnD/KYZcKugKElIzGkHv1tSIq291e2ldVu5XkJ4wxO+FvYSJW7HBaXtzQKDNSr0FPAMqiG4Dd/mBsZFyvxzNM+M91pDkylwhPRLX4cvor3HEc0r/jBOIQFRbb18fOiofbIy6OdgrgCNuhtFzs/3oxwq36YdSO93xiK/SI7xsgx44t4L6efKI0E8KYZ3IQgpZeHWbhjywy4v/QREjDZZcrzrzDBQFKlI/Q8Ev85g3LQtGQ+wO3HCw1LvAu+EgxmRo3VB/2g5o6Hm9B0BXSJswWnMFSX8yq8EuhKuvNnsh9+HP7R/gETb/uBez9+7+Bdqkxk/WcWidFxFptYiUDY5N+zUSSkfjsyCCCwUQrRU+G/1mEExD6owD9Sk/UgpcVB4ZCG3xvglH9AUXla7e4AdZH/WxOQZPj88MtgZM=",
    uint8: new Uint8Array([
      226,
      57,
      249,
      179,
      214,
      33,
      168,
      111,
      139,
      26,
      181,
      28,
      191,
      167,
      57,
      0,
      212,
      12,
      194,
      131,
      15,
      180,
      20,
      218,
      232,
      19,
      226,
      154,
      32,
      148,
      157,
      224,
      9,
      59,
      57,
      92,
      226,
      179,
      169,
      205,
      82,
      101,
      127,
      179,
      156,
      164,
      127,
      251,
      223,
      58,
      91,
      212,
      12,
      184,
      79,
      42,
      3,
      74,
      184,
      127,
      159,
      204,
      92,
      187,
      48,
      34,
      217,
      220,
      24,
      8,
      144,
      168,
      167,
      242,
      147,
      130,
      21,
      237,
      158,
      225,
      33,
      241,
      8,
      214,
      43,
      72,
      28,
      93,
      75,
      198,
      169,
      180,
      12,
      221,
      60,
      24,
      46,
      64,
      137,
      137,
      32,
      153,
      45,
      160,
      141,
      17,
      144,
      117,
      239,
      89,
      87,
      208,
      126,
      40,
      245,
      231,
      102,
      210,
      169,
      196,
      253,
      162,
      190,
      38,
      31,
      161,
      116,
      110,
      209,
      218,
      99,
      73,
      20,
      25,
      252,
      225,
      231,
      187,
      50,
      55,
      32,
      181,
      253,
      232,
      85,
      142,
      15,
      97,
      169,
      95,
      28,
      80,
      109,
      7,
      108,
      77,
      184,
      131,
      33,
      192,
      246,
      31,
      113,
      89,
      118,
      16,
      65,
      196,
      224,
      150,
      125,
      152,
      83,
      115,
      85,
      186,
      226,
      254,
      42,
      159,
      200,
      35,
      239,
      78,
      186,
      169,
      198,
      7,
      45,
      111,
      227,
      209,
      112,
      179,
      49,
      153,
      112,
      47,
      156,
      63,
      202,
      97,
      151,
      10,
      186,
      2,
      132,
      148,
      140,
      198,
      144,
      123,
      245,
      181,
      34,
      42,
      219,
      221,
      94,
      218,
      87,
      85,
      187,
      149,
      228,
      39,
      140,
      49,
      59,
      225,
      111,
      97,
      34,
      86,
      236,
      112,
      90,
      94,
      220,
      208,
      40,
      51,
      82,
      175,
      65,
      79,
      0,
      202,
      162,
      27,
      128,
      221,
      254,
      96,
      108,
      100,
      92,
      175,
      199,
      51,
      76,
      248,
      207,
      117,
      164,
      57,
      50,
      151,
      8,
      79,
      68,
      181,
      248,
      114,
      250,
      43,
      220,
      113,
      28,
      210,
      191,
      227,
      4,
      226,
      16,
      21,
      22,
      219,
      215,
      199,
      206,
      138,
      135,
      219,
      35,
      46,
      142,
      118,
      10,
      224,
      8,
      219,
      161,
      180,
      92,
      236,
      255,
      122,
      49,
      194,
      173,
      250,
      97,
      212,
      142,
      247,
      124,
      98,
      43,
      244,
      136,
      239,
      27,
      32,
      199,
      142,
      45,
      224,
      190,
      158,
      124,
      162,
      52,
      19,
      194,
      152,
      103,
      114,
      16,
      130,
      150,
      94,
      29,
      102,
      225,
      143,
      44,
      50,
      226,
      255,
      208,
      68,
      72,
      195,
      101,
      151,
      43,
      206,
      188,
      195,
      5,
      1,
      74,
      148,
      143,
      208,
      240,
      75,
      252,
      230,
      13,
      203,
      66,
      209,
      144,
      251,
      3,
      183,
      28,
      44,
      53,
      46,
      240,
      46,
      248,
      72,
      49,
      153,
      26,
      55,
      84,
      31,
      246,
      131,
      154,
      58,
      30,
      111,
      65,
      208,
      21,
      210,
      38,
      204,
      22,
      156,
      193,
      82,
      95,
      204,
      170,
      240,
      75,
      161,
      42,
      235,
      205,
      158,
      200,
      125,
      248,
      115,
      251,
      71,
      248,
      4,
      77,
      191,
      238,
      5,
      236,
      253,
      251,
      191,
      129,
      118,
      169,
      49,
      147,
      245,
      156,
      90,
      39,
      69,
      196,
      90,
      109,
      98,
      37,
      3,
      99,
      147,
      126,
      205,
      68,
      146,
      145,
      248,
      236,
      200,
      32,
      130,
      193,
      68,
      43,
      69,
      79,
      134,
      255,
      89,
      132,
      19,
      16,
      250,
      163,
      0,
      253,
      74,
      79,
      212,
      130,
      151,
      21,
      7,
      134,
      66,
      27,
      124,
      111,
      130,
      81,
      253,
      1,
      69,
      229,
      107,
      183,
      184,
      1,
      214,
      71,
      253,
      108,
      78,
      65,
      147,
      227,
      243,
      195,
      45,
      129,
      147,
    ]),
  },
];

it("has testdata", () => {
  expect(testData).toBeDefined();
});
