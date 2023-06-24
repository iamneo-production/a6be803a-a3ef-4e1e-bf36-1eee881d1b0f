package com.ae_crms_t18.crms.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.ae_crms_t18.crms.model.Task;

public interface TaskService {
    public List<Task> getAllTasks();
    public ResponseEntity<Task> getTaskById(long id);
    public ResponseEntity<Task> createTask(Task task);
    public ResponseEntity<Task> updateTask(long id, Task task);
    public ResponseEntity<Void> deleteTask(long id);
}
