// task 1
const Emploee = function (employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname;
    this.salary = employee.salary;
    this.workExperience = employee.workExperience;
    this.isPrivileges = employee.isPrivileges;
    this.gender = employee.gender;

    //task 2
    this.getFullName = function () {
        return `${this.surname} ${this.name}`;
    }
    
    //task 7
    Object.defineProperty(this, 'fullInfo', {
        get() {
            const keys = Object.keys(employeeObj);
            const values = Object.values(employeeObj);
            let element = '';

            for (let i = 0; i < keys.length - 1; i++) {
                if (i === keys.length - 2) {
                    element = element + `${keys[i]} - ${values[i]}`;
                } else {
                    element = element + `${keys[i]} - ${values[i]}, `;
                }
            }

            return element;
        },

        set(value) {
            this.id = value.id || employee.id;
            this.name = value.name || employee.name;
            this.surname = value.surname || employee.surname;
            this.salary = value.salary || employee.salary;
            this.workExperience = value.workExperience || employee.workExperience;
            this.isPrivileges = value.isPrivileges || employee.isPrivileges;
            this.gender = value.gender || employee.gender;
        }
    });
}


// task 7 (result)
const employeeObj = new Emploee(emplyeeArr[6]);
employeeObj.fullInfo = {name: 'Вася', salary: 9000, email: 'ex@mail.ua'};

console.log(employeeObj.fullInfo)


// task 3
const createEmployesFromArr = (arr) => {
    const emplyeeList = [];

    for (const employee of arr) {
        const emploee = new Emploee(employee);
        emplyeeList.push(emploee);
    }

    return emplyeeList;
}

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);

console.log(emplyeeConstructArr);


// task 4
const getFullNamesFromArr = (arr) => {
    const fullNameList = [];

    for (const employee of arr) {
        const fullName = new Emploee(employee).getFullName();
        fullNameList.push(fullName);
    }

    return fullNameList;
}

const emplyeeFullNameConstructArr = getFullNamesFromArr(emplyeeConstructArr);

console.log(emplyeeFullNameConstructArr);

//task 5
const getMiddleSalary = (arr) => {
    let totalSalary = 0;

    for (const employee of arr) {
        totalSalary = totalSalary + new Emploee(employee).salary;
    }

    let middleSalary = totalSalary / arr.length

    return middleSalary;
}

const emplyeeMiddleSalary = getMiddleSalary(emplyeeConstructArr);

console.log(emplyeeMiddleSalary);


// task 6
const getRandomEmployee = (arr) => {
    const randomEmployeeNumber = Math.floor(Math.random() * (arr.length - 1));

    return new Emploee(emplyeeConstructArr[randomEmployeeNumber])
}

const randomEmployee = getRandomEmployee(emplyeeConstructArr);

console.log(randomEmployee);