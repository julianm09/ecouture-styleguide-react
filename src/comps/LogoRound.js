import styled from 'styled-components';
import React, { useRef, useState } from 'react'



export const LogoRound = () => {


    return (
        <>

            <img
            className="spin"
            style={{
                position: 'absolute',
                width: '200px'
            }}
            src='/logo-round.svg'/>
            <img             
            style={{
            position: 'absolute',
            width: '100px'
            }}
            src='/earth.png'/>

        </>
        
    )

}