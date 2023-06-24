package com.ae_crms_t18.crms.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ae_crms_t18.crms.model.Task;
import com.ae_crms_t18.crms.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    public ResponseEntity<Task> getTaskById(long id){
        Optional<Task> taskFound = taskRepository.findById(id);
        return taskFound.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    public ResponseEntity<Task> createTask(Task task){
        Task taskCreated = taskRepository.save(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(taskCreated);
    }

    public ResponseEntity<Task> updateTask(long id, Task task){
        Optional<Task> taskFound = taskRepository.findById(id);
        if(taskFound.isPresent()){
            task.setId(id);
            Task updatedTask = taskRepository.save(task);
            return ResponseEntity.ok(updatedTask);
        }
        return ResponseEntity.notFound().build();
    }

    public ResponseEntity<Void> deleteTask(long id){
        Optional<Task> taskFound = taskRepository.findById(id);
        if(taskFound.isPresent()){
            taskRepository.delete(taskFound.get());
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
