import UserDTO from "../DTO/UserDTO";

export default class User implements UserDTO{
    name: string = "";
    secondName: string = "";    
    patronymicName: string = "";
    phone: number = 0;
    email: string = "";
    avatar: string = "";
    about: string = "";
    public constructor( user: UserDTO)
    {
        this.name = user.name;
        this.secondName = user.secondName;
        this.patronymicName = user.patronymicName;
        this.phone = user.phone;
        this.email = user.email;
        this.about = user.about;
        this.avatar = user.avatar
    }

    public isValid() : boolean {
        try {
            return (this.name.length !== 0 
                && this.secondName.length !== 0 
                && this.patronymicName.length !== 0 
                && this.phone !== 0
                && this.email.length !== 0 
                && this.about.length !== 0)    
        } catch (error) {
            return false;
        }
    }
}