import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { query } from 'express';
import { User } from 'src/users/entities/user.entity';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @ApiOkResponse({type: User, isArray: true})
    @ApiQuery({ name: 'name', required: false })
    @Get()
    getUsers(@Query('name') name?: string): User[] {
        return this.usersService.findAll(name);
    }

    @ApiOkResponse({type: User, isArray: true})
    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number): User {
        const user = this.usersService.findById(id);
        if(!user){
            throw new NotFoundException();
        }
        return user;
    }

    @ApiCreatedResponse({type: User})
    @ApiBadRequestResponse()
    @Post()
    createUser(@Body() body: createUserDto): User {
        return this.usersService.createUser(body);
    }

    // @ApiOkResponse({type: User, isArray: true})
    // @ApiQuery({ name: 'name', required: false })
    // @Get('/search')
    // Search(@Query('name') name?: string): User[] {
    //     return this.usersService.Search(name);
    // }
    
}
