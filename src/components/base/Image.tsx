import * as React from 'react';
import useUrlStyle from "@/utils/hooks/useUrlStyle";


type Props = {
	src?: string;
	className?: string
	height?: string | number;
	width?: string | number
}

export const Image: React.FC<Props> = ({src = '', className, ...additionalProps}: Props) => {
	const backgroundStyle = useUrlStyle('backgroundImage', src)

	const additionalStyles = React.useMemo(()=>Object.keys(additionalProps).reduce((acc: any, styleName,  ) => (
	 	{
			...acc,
			[styleName]: Number(additionalProps[styleName]) || additionalProps[styleName]
		}
		),{}
	 ), [src, additionalProps])

	return (
		<div className={className}>
			<canvas style={{...backgroundStyle, ...additionalStyles}}/>
		</div>
	);
};

export default Image;
