import React from 'react'
import styled from 'styled-components'

import paths from './paths'
import {Excited, Awestruck, Sad, Angry} from './Expressions'

type TExpressions = "happy" | "sad" | "awestruck"

interface IBlobProps {
    expression: TExpressions
}

const Wrapper = styled.div`
    position: relative;
    width: 300px;
`
const Blob: React.FC<IBlobProps> = ({expression}) => {
    const blobFace = {
        "happy" : <Excited/>,
        "awestruck": <Awestruck/>,
        "sad": <Sad/>,
        "angry": <Angry/>
    }

    return (
        <Wrapper>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.14 196.34">
                <path className="blob-body" d={paths.body} stroke-miterlimit="10" stroke="#2b4570" fill="#a8d0db" stroke-width="3.79"/>
                <path className="blob-light-shadow" d={paths.lightShadow} fill="#2b4570" opacity=".1" transform="translate(-294.23 -178.65)"/>
                <path className="blob-dark-shadow" d={paths.darkShadow} fill="#2b4570" opacity=".1" transform="translate(-294.23 -178.65)"/>
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