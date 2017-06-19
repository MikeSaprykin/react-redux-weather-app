import React from 'react';
import {
    Sparklines,
    SparklinesLine,
    SparklinesReferenceLine
} from 'react-sparklines';
import _ from 'lodash';

const average = (data) => {
    return _.round(_.sum(data)/data.length)
};

export default ({ data, color = 'red', units }) => {
    return (
        <div>
            <Sparklines
                height={100}
                width={140}
                data={data}
            >
                <SparklinesLine color={color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>
                {average(data)} {units}
            </div>
        </div>
    )

};
