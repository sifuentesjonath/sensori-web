import styled from 'styled-components';

export const HomeContainer = styled.div`
	overflow-x: hidden; // avoid horizontal scroll
	:target {
		/* Scrolling offset to respect fixed header */
		scroll-margin-top: 100px !important;
	}
`;
