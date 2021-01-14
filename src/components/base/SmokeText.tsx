import * as React from "react";
import ReverseMask from "../../utils/ReverseMask";


export default ({children, transform = null}) => {

	if (typeof children === 'string') {
		return (
			<>
				{
					children.split(' ').map((word, i) => (
						<ReverseMask
							transform={transform}
							i={i}
							key={i}>
							{word}
						</ReverseMask>
					)
					)
				}
				</>
		);
	}

	return children;
};
