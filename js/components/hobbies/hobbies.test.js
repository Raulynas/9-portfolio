import { hobbies } from "./hobbies.js";

describe("Tikrinimas parametru formatas", () => {
	test("neduota parametru", () => {
		expect(hobbies()).toBe("Neduoti parametrai");
	});
	test("duotas netinkamo tipo parametras: skaicius", () => {
		expect(hobbies(5)).toBe("Duotas netinkamo tipo parametras");
	});
	test("duotas netinkamo tipo parametras: array", () => {
		expect(hobbies([])).toBe("Duotas netinkamo tipo parametras");
	});
});
describe("Parametro raktazodziu formatas", () => {
	test("Tuscias objektas yra negalimas", () => {
		expect(hobbies({})).toBe("Netinkamas raktazodziu kiekis");
	});
	test("Nepakanka raktazodziu", () => {
		expect(hobbies({ selector: "#hobbies" })).toBe("Netinkamas raktazodziu kiekis");
	});
	test("Objektas sudarytas is netinkamu raktazodziu", () => {
		expect(hobbies({ selector: "#hobbies", school: "name" })).toBe("Netinkama parametro struktura");
	});
	test("Objektas sudarytas is netinkamu raktazodziu", () => {
		expect(hobbies({ selector: "#hobbies", list: [], school: "name" })).toBe("Netinkamas raktazodziu kiekis");
	});
	test("Selectoriaus formatas netinkamas", () => {
		expect(hobbies({ selector: 5, list: [] })).toBe("Selectorius netinkamo formato");
	});
	test("Selectorius turi buti ne tuscias", () => {
		expect(hobbies({ selector: "", list: [] })).toBe("Selectorius netinkamo formato");
	});
	test("List turi buti ne tuscias", () => {
		expect(hobbies({ selector: "#hobbies", list: 5 })).toBe("List netinkamo formato");
	});
	test("List turi buti ne tuscias", () => {
		expect(hobbies({ selector: "#hobbies", list: [] })).toBe("List netinkamo formato");
	});
});
