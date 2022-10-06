import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users: User[] = [{ id:0, name:'tedros'}];

    findAll(name?: string): User[] {
        if(name){
            return this.users.filter(user => user.name === name);
        }
        return this.users;
    }
    findById(userId:number): User {
        return this.users.find(user => user.id === userId);
    }
    createUser(createUserDto: createUserDto): User {
        const newUser = {id:Date.now(), ...createUserDto};

        this.users.push(newUser);

        return newUser;
    }
    // Search(name?: string): User[] {
    //     if(name){
    //         return this.users.filter(user => user.name === name);
    //     }
    //     return this.users;
    // }
}
