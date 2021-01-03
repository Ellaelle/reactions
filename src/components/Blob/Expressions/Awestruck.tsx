import React from 'react'
import {IExpressionProps} from './types'
import {stroke} from '../../styles'

const Awestruck: React.FC<IExpressionProps> = ({color}) => (
    <g id='awestruck-face'>
        <path className="mouth" stroke-linecap="round" fill="none" stroke-width="4" stroke-miterlimit="10" stroke={stroke[color]} d="M92.27 126.81h21.49"/>
                <circle className="eyes-outline" fill="#fff" stroke="#fff" stroke-linecap="round" cx="50.74" cy="111.47" r="20"/>
                <circle className="eyes-left-pupil" stroke-width=".65px" stroke={stroke[color]} stroke-miterlimit="10" fill={stroke[color]} stroke-linecap="round" cx="50.74" cy="111.47" r="13.07"/>
                <circle className="eyes-left-top" fill="#fff" cx="56.9" cy="102.97" r="6.91"/>
                <circle className="eyes-left-bottom" fill="#fff" cx="48.12" cy="115.49" r="4.02"/>
                <circle className="eyes-right-iris" fill="#fff" stroke="#fff" stroke-linecap="round" cx="154.05" cy="111.47" r="20"/>
                <circle className="eyes-right-pupil" stroke-width=".65px" stroke={stroke[color]} stroke-linecap="round" stroke-miterlimit="10" fill={stroke[color]} cx="154.05" cy="111.47" r="13.07"/>
                <circle className="eyes-right-top" fill="#fff" cx="160.21" cy="102.97" r="6.91"/>
                <circle className="eyes-right-bottom" fill="#fff" cx="151.42" cy="115.49" r="4.02"/>
                <ellipse className="eyes-left-highlight" opacity=".34" fill="#fff" cx="339.21" cy="280.76" rx="7.94" ry="3.91" transform="rotate(-30 -141.268 740.467)"/>
                <ellipse className="eyes-right-highlight" opacity=".34" fill="#fff" cx="442.36" cy="280.76" rx="7.94" ry="3.91" transform="rotate(-30 -38.108 740.469)"/>
    </g>
)

export default Awestruck