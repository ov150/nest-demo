import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",

        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",

        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",

        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
        }
    ]

    findAll() {
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find((user) => user.id === id)
        return user
    }

    create(user: { name: string, email: string }) {
        const userByhighId = [...this.users].sort((a, b) => b.id - a.id)
        const Newuser = {
            id: userByhighId[0].id + 1,
            ...user
        }
        this.users.push(Newuser)
        return Newuser

    }
    update(id: number, updatedUser: { name?: string, email?: string }) {
        this.users = this.users.map((user) => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })
        return this.findOne(id)
    }
    delete(id: number) {
        const removedUser = this.findOne(id)
        this.users = this.users.filter((user) => user.id !== id)
    }
}
