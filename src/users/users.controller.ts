import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }
    @Get()
    findAll() {
        return this.userService.findAll()
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id)
    }
    @Post()
    create(@Body() user: { name: string, email: string }) {
        return this.userService.create(user)
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate: { name?: string, email?: string }) {
        return this.userService.update(+id, userUpdate)
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(+id)
    }

}
