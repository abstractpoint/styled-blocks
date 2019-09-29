import {
	fromEntries, entries, lookupInTheme, markedWithPrefix, removePrefix,
} from '../utils';

describe('fromEntries and entries utility functions', () => {
	test('entries function create an array of pairs', () => {
		const list = {
			colour: 'red',
			someProperty: 123,
			another: ['a', 'b', 'c'],
			anotherWithObject: { some: 'value' },
			badProperty: undefined,
			nullProperty: null,
		};

		expect(entries(list)).toEqual(
			[
				['colour', 'red'],
				['someProperty', 123],
				['another', ['a', 'b', 'c']],
				['anotherWithObject', { some: 'value' }],
				['badProperty', undefined],
				['nullProperty', null],
			],
		);
	});

	test('fromEntries function create an object from array of pairs', () => {
		const list = [
			['colour', 'red'],
			['someProperty', 123],
			['another', ['a', 'b', 'c']],
			['anotherWithObject', { some: 'value' }],
			['badProperty', undefined],
			['nullProperty', null],
		];

		expect(fromEntries(list)).toEqual({
			colour: 'red',
			someProperty: 123,
			another: ['a', 'b', 'c'],
			anotherWithObject: { some: 'value' },
			badProperty: undefined,
			nullProperty: null,
		});
	});
	test('lookupInTheme function returns original value if theme is not supplied', () => {
		expect(lookupInTheme(undefined)([null, '$color'])).toEqual([null, '$color']);
	});

	test('lookupInTheme function gets a value from theme', () => {
		const theme = { breakpoints: ['10', '20'], $color: ['blue', 'dark-blue'] };
		const lookup = lookupInTheme(theme);
		expect(lookup([null, '$color'])).toEqual([null, ['blue', 'dark-blue']]);
		expect(lookup([null, '$color.0'])).toEqual([null, 'blue']);
		expect(lookup([null, '$color.1'])).toEqual([null, 'dark-blue']);
		expect(lookup([null, '$color[0]'])).toEqual([null, 'blue']);
		expect(lookup([null, 'passthrough'])).toEqual([null, 'passthrough']);
	});

	test('markedWithPrefix function returns true if string starts with underscore', () => {
		expect(markedWithPrefix(['_color', null])).toBe(true);
		expect(markedWithPrefix(['__olor', null])).toBe(true);
		expect(markedWithPrefix(['', null])).toBe(false);
	});

	test('removePrefix function removes the underscore prefix from name string', () => {
		expect(removePrefix(['_color', 'value'])).toEqual(['color', 'value']);
		expect(removePrefix(['_', 'value'])).toEqual(['', 'value']);
	});
});
