import React from 'react'
import {IExpressionProps} from './types'
import {stroke} from '../../styles'

const Angry: React.FC<IExpressionProps> = ({color}) => (
    <g id="angry-face" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
            <circle className="cls-1" fill={stroke[color]} stroke={stroke[color]} stroke-miterlimit="10" cx="50.74" cy="111.47" r="5.9"/>
            <circle className="cls-1" fill={stroke[color]} stroke={stroke[color]} stroke-miterlimit="10" cx="154.05" cy="111.47" r="5.9"/>
            <line className="cls-2" fill="none" stroke-linecap="round" stroke-width="4px" stroke={stroke[color]} stroke-miterlimit="10" x1="145" y1="100" x2="165" y2="92"/>
            <line className="cls-2" fill="none" stroke-linecap="round" stroke-width="4px" stroke={stroke[color]} stroke-miterlimit="10" x1="88" y1="129" x2="119" y2="129"/>
            <line className="cls-2" fill="none" stroke-linecap="round" stroke-width="4px" stroke={stroke[color]} stroke-miterlimit="10" x1="40" y1="92" x2="60" y2="100"/>
        </g>
    </g>
)

export default Angry