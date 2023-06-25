import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @ApiOperation({summary: 'Создание задачи'})
    @ApiResponse({status: 200, type: Task})
    @Post()
    create(@Body() taskDto: CreateTaskDto) {
        return this.tasksService.createTask(taskDto);
    }

    @ApiOperation({summary: 'Получить все задачи'})
    @ApiResponse({status: 200, type: [Task]})
    @Get()
    getAll() {
        return this.tasksService.getAllTasks();
    }

}
