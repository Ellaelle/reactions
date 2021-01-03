import React from 'react'
import {IExpressionProps} from './types'
import {stroke} from '../../styles'

const Indifferent: React.FC<IExpressionProps> = ({color}) => (
    <g id="indifferent-face" data-name="Layer 2">
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
                <circle className="cls-1" fill={stroke[color]} stroke={stroke[color]} stroke-miterlimit="10" cx="50.74" cy="111.47" r="5.9"/>
                <circle className="cls-1" fill={stroke[color]} stroke={stroke[color]} stroke-miterlimit="10" cx="154.05" cy="111.47" r="5.9"/>
                <line className="cls-2" stroke={stroke[color]} stroke-miterlimit="10" fill="none" stroke-linecap="round" stroke-width="4px" x1="88" y1="129" x2="119" y2="129"/>
            </g>
        </g>
    </g>
)

export default Indifferent