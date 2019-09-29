import styled, { css } from 'styled-components';
import {
	fromEntries, entries, markedWithPrefix, removePrefix, lookupInTheme,
} from './utils';

function convertToBreakpoints(props) {
	const styleGroups = props.theme && props.theme.breakpoints
		? props.theme.breakpoints.length + 1
		: 1;
	const media = Array(styleGroups).fill(true);
	const propsPairs = entries(props)
		.filter(markedWithPrefix)
		.map(removePrefix);

	const mediaProps = media.map((__, i) => propsPairs.map(([name, value]) => {
		if (Array.isArray(value)) {
			return value[i] ? lookupInTheme(props.theme)([name, value[i]]) : undefined;
		}
		return i === 0 ? lookupInTheme(props.theme)([name, value]) : undefined;
	}));

	return mediaProps.reduce((all, breakpoint) => {
		const filteredBreakpoint = breakpoint.filter(b => b);
		return filteredBreakpoint.length > 0 ? [...all, fromEntries(filteredBreakpoint)] : all;
	}, []);
}

const mapBreakpoints = styles => props => props.theme
		&& props.theme.breakpoints
		&& props.theme.breakpoints.map((breakpoint, i) => css`
      @media (min-width: ${breakpoint}) {
        ${styles[i + 1]}
      }`);

const addStyles = props => {
	const styles = convertToBreakpoints(props);
	return css`
    	${styles[0]}
    	${mapBreakpoints(styles)}
 	`;
};

const Box = styled('div')`
  ${addStyles}
`;

const Block = styled('div')`
	display: block;
	${addStyles}
`;

const Col = styled('div')`
	display: flex;
	flex-direction: column;
	${addStyles}
`;

const Grid = styled('div')`
	display: grid;
	${addStyles}
`;

const Inline = styled('div')`
	display: inline;
	${addStyles}
`;

const InlineBlock = styled('div')`
	display: inline-block;
	${addStyles}
`;

const InlineCol = styled('div')`
	display: inline-flex;
	flex-direction: column;
	${addStyles}
`;

const InlineRow = styled('div')`
	display: inline-flex;
	flex-direction: row;
	${addStyles}
`;

const Row = styled('div')`
	display: flex;
	flex-direction: row;
	${addStyles}
`;

export {
	Block,
	Box,
	Col,
	Grid,
	Inline,
	InlineBlock,
	InlineCol,
	InlineRow,
	Row,
};
