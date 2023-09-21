export const size = {
	mobileMin: 320,
	mobileMax: 532,
	tabletMin: 533,
	tabletMax: 1023,
	laptopMin: 1024,
	laptopSMax: 1324,
	laptopMax: 1799,
	desktop: 1800,
};

const toFormat = (measure: number) => `${measure}px`;

export const device = {
	mobile: `(min-width: ${toFormat(size.mobileMin)}) and (max-width: ${toFormat(
		size.mobileMax
	)})`,
	mobileLandscape: `(max-height: ${toFormat(size.mobileMax)})`,
	tablet: `(min-width: ${toFormat(size.tabletMin)}) and (max-width: ${toFormat(
		size.laptopMin
	)})`,
	smallLaptop: `(min-width: ${toFormat(
		size.laptopMin
	)}) and (max-width: ${toFormat(size.laptopSMax)})`,
	laptop: `(min-width: ${toFormat(size.laptopMin)}) and (max-width: ${toFormat(
		size.laptopMax
	)})`,
	largeLaptop: `(min-width: ${toFormat(
		size.laptopSMax
	)}) and (max-width: ${toFormat(size.laptopMax)})`,
	desktop: `(min-width: ${toFormat(size.desktop)})`,
};
