import * as React from 'react';

const useUrlStyle = (styleName: string, url: string) =>
    React.useMemo(
        () => ({
            [styleName]: `url(${url})`
        }),
        [styleName, url]
    );
export default useUrlStyle;
