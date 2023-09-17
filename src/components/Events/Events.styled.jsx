import styled from "@emotion/styled";


export const Card = styled.div`
position: relative;
border: 2px dashed black;
padding: 8px;
border-radius: 4px;
`

export const EventName = styled.h2`
margin-top: 0;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
`
export const Info = styled.p`
display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 8px;
    color: blue;
    font-size: 16px;
    svg{
        color: red;
    }
`

export const Chip = styled.span`
width: 20px;
    height: 20px;
    background-color: black;
    color: white;

    background-color: ${props => {
        switch(props.EventType){
            case 'free':
            return 'aqua';
            case 'paid':
                return 'red';
                default:
                    return 'black'
        }
    }};
`