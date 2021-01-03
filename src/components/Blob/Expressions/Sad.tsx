import React from 'react'
import {IExpressionProps} from './types'
import {stroke} from '../../styles'

const Sad: React.FC<IExpressionProps> = ({color}) => (
    <g id="sad-face" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
            <circle className="cls-1" fill={stroke[color]} stroke={stroke[color]} stroke-miterlimit="10" cx="50.74" cy="111.47" r="5.9"/>
            <circle className="cls-1" fill={stroke[color]} stroke={stroke[color]} stroke-miterlimit="10" cx="154.05" cy="111.47" r="5.9"/>
            <path className="cls-2" stroke={stroke[color]} stroke-miterlimit="10" fill="none" stroke-linecap="round" stroke-width="4px" transform="translate(45,100)" d="M35.19,26.48C45.24,6.4,71.8,6.39,79.84,27"/>
        </g>
    </g>
)

export default Sad