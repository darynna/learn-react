import { formatDistanceStrict } from 'date-fns'

export const formatDuration = (start, end) => {
    return formatDistanceStrict(Date.parse(start), Date.parse(end))
}