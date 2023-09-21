import colorPalette from '@styles/color-palette';
import Swal, { SweetAlertOptions } from 'sweetalert2';

export default function SweetAlert({
	position = 'bottom',
	icon = 'success',
	showConfirmButton = false,
	toast = true,
	timer = 4000,
	background = colorPalette.green,
	color = colorPalette.white,
	...options
}: SweetAlertOptions) {
	Swal.fire({
		position,
		icon,
		showConfirmButton,
		toast,
		timer,
		background,
		color,
		...options,
	});
}

export type { SweetAlertOptions };
