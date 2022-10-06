import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    {
      id:0,
      title: 'read nest',
      description: 'basic knowledge of nest',
      status: false,
    },
  ];
  create(createTodoDto: CreateTodoDto) {
    
    const newTask = {id:this.todos.length, ...createTodoDto, status:false};
    return this.todos.push(newTask);
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    const task = this.todos.find(task => task.id === id);
    if(!task){
    throw new NotFoundException(`task #${id} not found`);
    }
    return task;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
   const existingTask = this.findOne(id);
   if(existingTask){
    // update the existing entity
   }
    
  }

  remove(id: number) {
    const taskIndex = this.todos.findIndex(task => task.id === id);
    if(taskIndex >= 0){
      this.todos.splice(taskIndex,1);
    }
  }
}
