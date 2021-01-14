import * as React from 'react';
import {confuse} from "@/utils/confuse";

export default ({children, ...props}) => {
	//Регулярное выражение во втором тесте в RenderComponents
	// " /м.*о.*с.*к.*в.*а/i " Выдает true при поиске при отрисовке верхнего блока.
	// Ниже выделил буквы рекламного блока в "<>", видимо так не задумывалось изначально.
	//10 <м>иʜ. <o>т ᴍ. <С>xoдʜeʜc<κ>aя. Рaз<в>итaя иʜфp<a>cтpуκтуpa. Иʜдивидуaльʜыe cκидκи. Звoʜитe!/

	if (typeof children === 'string') {
		return (
			<div
				{...props}
				dangerouslySetInnerHTML={{__html: confuse(children)}}
			/>
		);
	}

	return (
		<div
			{...props}
		>{children}</div>
	);
};
