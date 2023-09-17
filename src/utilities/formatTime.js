import { format } from 'date-fns'

export const formatTime = start => {
    return format(Date.parse(start), 'dd MMMM yyyy. HH:mm')
}