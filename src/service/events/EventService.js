import Event from "@/models/event/Event";

export default class EventService {

    events = []

    constructor(repository) {
        this.repository = repository
    }

    async index() {
        const events = await this.repository.getAll()
        
        events.forEach(event => {
            const eventToAdd = new Event(event.name, event.capacity, event.price, event.description, event.ubication, event.time, event.date, event.image, event.typeEvent)
            this.events.push(eventToAdd)
        });

        return this.events
    }

}