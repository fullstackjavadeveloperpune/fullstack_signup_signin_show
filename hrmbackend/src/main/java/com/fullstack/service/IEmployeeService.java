package com.fullstack.service;

import com.fullstack.entity.Employee;

import java.util.List;

public interface IEmployeeService {

    Employee signUp(Employee employee);

    boolean signIn(String empEmailId, String empPassword);

    List<Employee> findAll();
}
