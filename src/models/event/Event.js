export default class Event{

    constructor(name, capacity, price, description, ubication, time, date, image, typeEvent){
        this.name = name
        this.capacity = capacity
        this.price = price
        this.description = description
        this.ubication = ubication
        this.time = time
        this.date = date
        this.image = image
        this.typeEvent = typeEvent
    }

    getName() {
        return this.name;
    }

    getCapacity() {
        return this.capacity;
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.description;
    }

    getUbication() {
        return this.ubication;
    }

    getTime() {
        return this.time;
    }

    getDate() {
        return this.date;
    }

    getImage() {
        return this.image;
    }
    
    getTypeEvent() {
        return this.typeEvent;
    }

}