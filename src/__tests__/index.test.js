import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import {
	Block,
	Box,
	Col,
	Grid,
	Inline,
	InlineBlock,
	InlineCol,
	InlineRow,
	Row,
} from '..';

let perfDuration;

describe('Primitives Styled components', () => {
	test('Renders component without theme', () => {
		const component = TestRenderer.create(<Block _color="red">test</Block>);
		expect(component.toJSON()).toMatchSnapshot();
	});
	test('Renders component with multiple breakpoints', () => {
		const theme = { breakpoints: ['10', '20'] };
		const component = TestRenderer.create(
			<ThemeProvider theme={theme}>
				<Block _color={['red', 'green', 'blue']} as="section">test</Block>
			</ThemeProvider>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
	test('Renders component with values from theme', () => {
		const theme = { breakpoints: ['10', '20'], $color: ['blue', 'dark-blue'] };
		const component = TestRenderer.create(
			<ThemeProvider theme={theme}>
				<Block _backgroundColor="$color.1" _color={['red', 'green', '$color.0']}>test</Block>
			</ThemeProvider>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});
	test('Renders Box component', () => {
		const theme = { breakpoints: ['10', '20'] };
		const component = TestRenderer.create(
			<ThemeProvider theme={theme}>
				<Box _color={['red', 'green', 'blue']}>test</Box>
			</ThemeProvider>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Renders Col component', () => {
		const theme = { breakpoints: ['10', '20'] };
		const component = TestRenderer.create(
			<ThemeProvider theme={theme}>
				<Col _color={['red', 'green', 'blue']}>test</Col>
			</ThemeProvider>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Renders Grid component', () => {
		const theme = { breakpoints: ['10', '20'] };
		const component = TestRenderer.create(
			<ThemeProvider theme={theme}>
				<Grid _color={['red', 'green', 'blue']}>test</Grid>
			</ThemeProvider>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Renders Inline component', () => {
		const theme = { breakpoints: ['10', '20'] };
		const component = TestRenderer.create(
			<ThemeProvider theme={theme}>
				<Inline _color={['red', 'green', 'blue']}>test</Inline>
			</ThemeProvider>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Renders InlineBlock component', () => {
		const theme = { breakpoints: ['10', '20'] };
		const component = TestRenderer.create(
			<ThemeProvider theme={theme}>
				<InlineBlock _color={['red', 'green', 'blue']}>test</InlineBlock>
			</ThemeProvider>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Renders InlineCol component', () => {
		const theme = { breakpoints: ['10', '20'] };
		const component = TestRenderer.create(
			<ThemeProvider theme={theme}>
				<InlineCol _color={['red', 'green', 'blue']}>test</InlineCol>
			</ThemeProvider>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Renders InlineRow component', () => {
		const theme = { breakpoints: ['10', '20'] };
		const component = TestRenderer.create(
			<ThemeProvider theme={theme}>
				<InlineRow _color={['red', 'green', 'blue']}>test</InlineRow>
			</ThemeProvider>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	test('Renders Row component', () => {
		const theme = { breakpoints: ['10', '20'] };
		const component = TestRenderer.create(
			<ThemeProvider theme={theme}>
				<Row _color={['red', 'green', 'blue']}>test</Row>
			</ThemeProvider>,
		);
		expect(component.toJSON()).toMatchSnapshot();
	});

	describe('PERFORMANCE CHECKS', () => {
		beforeEach(() => {
			perfDuration = new Date().getTime();
		});
		test('Renders component with acceptable performance', () => {
			const theme = {
				breakpoints: ['10', '20', '30', '40', '50'],
				a: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: 1 } } } } } } } } } } },
				b: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: 1 } } } } } } } } } } },
				c: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: 1 } } } } } } } } } } },
				d: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: 1 } } } } } } } } } } },
				e: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: 1 } } } } } } } } } } },
				f: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: 1 } } } } } } } } } } },
				g: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: 1 } } } } } } } } } } },
				h: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: 1 } } } } } } } } } } },
				i: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: { a: 1 } } } } } } } } } } },
			};
			const components = [];
			for (let i = 0, len = 1000; i < len; i += 1) {
				components.push(TestRenderer.create(
					<ThemeProvider theme={theme}>
						<Block _backgroundColor="z">test</Block>
					</ThemeProvider>,
				).toJSON());
			}
		});
		afterEach(() => {
			const maxDurationMs = 1000;
			const duration = new Date().getTime() - perfDuration;
			if (duration > maxDurationMs) {
				throw new Error(`Test took longer than ${maxDurationMs}ms! - ${duration}ms`);
			}
		});
	});
});
