export default class EventRepository{

    uri = import.meta.env.VITE_API_ENDPOINT_EVENTS

    async getAll() {

        try {
            const response = await fetch(this.uri) 
            const data = await response.json()
            console.log(data)
            return data.event
        } catch (error) {
            throw new Error('Ups!!! Something happened')
        }

    }

}