import * as conv from "./converters";
import { testData } from "./testdata.spec";
// b32
// code point

const normalizeHex = (s: string) =>
  s.replace(/^0+/, "0").replace(/^0(.)/, "$1").toLowerCase();

describe("hex2bigint", () => {
  for (const { hex, bigint } of testData) {
    it("passes testdata", () => {
      expect(conv.hexToBigInt(hex)).toEqual(BigInt(bigint));
    });
  }
});

describe("bigIntToHex", () => {
  for (const { hex, bigint } of testData) {
    it("passes testdata", () => {
      expect(conv.bigIntToHex(BigInt(bigint))).toEqual(normalizeHex(hex));
    });
  }
});

describe("hexToB64", () => {
  for (const { hex, b64 } of testData) {
    it("passes testdata", () => {
      expect(conv.hexToB64(hex)).toEqual(b64);
    });
  }
});

describe("hexToUint8", () => {
  for (const { hex, uint8 } of testData) {
    if (uint8) {
      it("passes testdata", () => {
        expect(conv.hexToUint8(hex)).toEqual(uint8);
      });
    }
  }
});

const x = "12345678901234567890";
const x2 = conv.codePointToUint8(x);
const x3 = conv.uint8ToHex(x2);

expect(x3).toEqual("3132333435363738393031323334353637383930");

const y =
  "EC851A69B8ACD843164E10CFF70CF9E86DC2FEE3CF6F374B43C854E3342A2F1AC3E30C741CC41E679DF6D07CE6FA3A66083EC9B8C8BF3AF05D8BDBB0AA6CB3EF8C5BAA2A5E531BA9E28592F99E0FE4F95169A6C63F635D0197E325C5EC76219B907E4EBDCD401FB1986E4E3CA661FF73E7E2B8FD9988E753B7042B2BBCA76679";
const y2 = conv.hexToUint8(y);
