
import {PageTitle} from 'components/PageTitle/PageTitle'
import {EventBoard} from 'components/EventBoard/EventBoard'
import upcomingEvents from '../data.json'
import { Container } from './App.styled'

export const App = () => {
    return (
        <Container>
            <PageTitle text="Conferences" />
            <EventBoard events={upcomingEvents}/>
        </Container>
    )
}
