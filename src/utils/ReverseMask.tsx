import {confuseSymbol} from "../utils/confuse";
import * as React from "react";

export default ({children, i, transform}) =>{
    if(typeof children !== 'string'){
        return children
    }
    return(
        <bdi dir='rtl' key={i}>
            <bdo dir='rtl' className={transform ? transform(`nobr`): null}>
                <span className={transform ? transform(`invisible`): null}>.</span>
                {children ? children.split('').reverse().map(ch=>confuseSymbol(ch)) : null}
            </bdo>
        </bdi>
    );
}

