package com.fullstack.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Range;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long empId;

    @Size(min = 2, message = "Employee Name should be at least 2 characters")
    private String empName;

    @NotBlank(message = "Employee Address should not be empty or null")
    private String empAddress;

    private double empSalary;

    @Range(min = 1000000000, max = 9999999999L, message = "Contact Number must be 10 Digit")
    private long empContactNumber;

    private LocalDate empDOB;

    @Email(message = "Email ID must be valid")
    private String empEmailId;

    @Size(min = 4, message = "EPassword should be at least 4 characters")
    private String empPassword;
}
