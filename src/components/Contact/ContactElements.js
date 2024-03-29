import styled from 'styled-components'

export const ContactContainer = styled.div`

    @media screen and (max-width: 760px){
        padding: 100px 0;
    }
`

export const ContactWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 760px){
        height: 560px;
    }
`

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 760px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top:0;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
`

export const TopLine = styled.p`
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`

export const Link = styled.a`
    line-height: 1.8rem;
    color: grey;
    text-decoration: none;
`