module.exports = class UserDto {
    email;
    id;
    isAvtivated;

    constructor(model){
        this.email = model.email;
        this.id = model._id;
        this.isAvtivated = model.isAvtivated;
    }
}