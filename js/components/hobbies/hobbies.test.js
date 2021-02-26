import { hobbies } from "./hobbies.js";

describe("Testai su neigiamu rezultatu", () => {
	test("neduota parametru", () => {
		expect(hobbies()).toBealsy();
	});
	test("duotas netinkamo tipo parametras: skaicius", () => {
		expect(hobbies(5)).toBealsy();
	});
});
