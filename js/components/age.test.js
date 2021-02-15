import { age } from './age.js';

describe('Validuojamos tinkamo tipo reiksmes', () => {
    test('if 1990, tai uzeik', () => {
        expect(age(1990)).toBe('come in');
    });
    test('if 2010, tai wait', () => {
        expect(age(2010)).toBe('wait');
    });
});
