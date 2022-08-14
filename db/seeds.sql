use employeedata_db;

INSERT INTO department 
(name)
VALUES 
(1, "Engineering" ),
       (2, "Finance" ),
       (3, "Legal" ),
       (4, "Sales" );

INSERT INTO role 
(title, salary, department_id)
VALUES 
(1, "Software Engineer", 40.000, 1  ),
       (2, "Accountant", 35.000, 2 ),
       (3, "Solicitor", 50.000, 3 ),
       (4, "SalesRep", 55.000, 4);
       
 INSERT INTO employee 
 (first_name, last_name, role_id, manager_id)
VALUES
 (1, "Anfal", "Ali", 1, 1),
       (2, "Matt", "Woodland",4, NULL),
       (2, "Ian", "Hull",4, 2),
       (2, "Tom", "Griffin",3, NULL),
       (2, "Ian", "Hull",4, 2),
       (2, "Paul", "Whitham",4, NULL),
       (3, "Peter", "Greenwood", 3, 4),
       (4, "Yasmin", "Khan", 2, 9);     