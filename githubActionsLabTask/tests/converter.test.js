const {CtoF, FtoC} = require('../controllers/converter.js');

test('Convert 0°C → should return 32°F', () => {
    expect(CtoF(0)).toBe(32);
});

test('Convert 100°C → should return 212°F', () => {
    expect(CtoF(100)).toBe(212);
});

test('Convert 212°F → should return 100°C', () => {
    expect(FtoC(212)).toBe(100);
});