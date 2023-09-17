import { FaMapMarkerAlt,  } from "react-icons/fa";
import css from "./Events.module.css"
import {Card, EventName, Info, Chip} from './Events.styled'
import PropTypes from 'prop-types';
import {iconSize} from "const"

import {formatTime} from 'utilities/formatTime'
import { formatDuration } from "utilities/formatDuration";

export const Event = ({name, location, speaker, type, start, end}) =>{
    const formatedStart = formatTime(start)
    const fromaredDuration = formatDuration(start, end)

    return <Card>
        <EventName>{name}</EventName>
        <Info>
            <FaMapMarkerAlt size={iconSize.sm}/>
            {location}</Info>
        <Info>{speaker}</Info>
        <Info>{formatedStart}</Info>
        <Info>{fromaredDuration}</Info>
        <Chip EventType={type} a={6} b={7}>{type}</Chip>
    </Card>
}

// className={`${css.chip} ${css[type]}`

Event.propTypes = {name: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    speaker: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    start: PropTypes.string.isRequired, 
    end: PropTypes.string.isRequired } 