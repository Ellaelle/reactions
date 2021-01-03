import React from 'react'
import styled from 'styled-components'

import paths from './paths'
import {Happy, Awestruck, Sad, Angry, Indifferent} from './Expressions'
import {IBlobProps} from './types'
import {fill, stroke} from '../styles'

const Wrapper = styled.div`
    position: relative;
    width: 300px;
`
const Blob: React.FC<IBlobProps> = ({expression, color = 'default'}) => {
    const blobFace = {
        "happy" : <Happy color={color}/>,
        "awestruck": <Awestruck color={color}/>,
        "sad": <Sad color={color}/>,
        "angry": <Angry color={color}/>,
        "indifferent": <Indifferent color={color}/>
    }

    return (
        <Wrapper>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.14 196.34">
                <path className="blob-body" d={paths.body} stroke-miterlimit="10" stroke={stroke[color]} fill={fill[color]} stroke-width="3.79"/>
                <path className="blob-light-shadow" d={paths.lightShadow} fill={stroke[color]} opacity=".1" transform="translate(-294.23 -178.65)"/>
                <path className="blob-dark-shadow" d={paths.darkShadow} fill={stroke[color]} opacity=".1" transform="translate(-294.23 -178.65)"/>
                <path className="blob-light-highlight" d={paths.lightHighlight} fill="#fff" opacity=".2" transform="translate(-294.23 -178.65)"/>
                <path className="blob-dark-highlight" d={paths.darkHighlight} fill="#fff" opacity=".2" transform="translate(-294.23 -178.65)"/>
                {
                    blobFace[expression]
                }
            </svg>
        </Wrapper>
    )
}

export default Blob