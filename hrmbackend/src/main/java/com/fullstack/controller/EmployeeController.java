package com.fullstack.controller;

import com.fullstack.dto.LogInRequest;
import com.fullstack.entity.Employee;
import com.fullstack.service.IEmployeeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")

@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
@Slf4j
public class EmployeeController {

    private final IEmployeeService employeeService;

    @PostMapping("/signup")
    public ResponseEntity<Employee> signUp(@RequestBody @Valid Employee employee) {

        return new ResponseEntity<>(employeeService.signUp(employee), HttpStatus.CREATED);

    }

    @PostMapping("/signin")
    public ResponseEntity<Boolean> signIn(@RequestBody LogInRequest logInRequest) {

        return new ResponseEntity<>(employeeService.signIn(logInRequest.empEmailId(), logInRequest.empPassword()), HttpStatus.OK);
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Employee>> findAll() {

        return new ResponseEntity<>(employeeService.findAll(), HttpStatus.OK);
    }
}
