
class Location {

     // @param {string} address
     // @param {number} profit
     // @param {number} costs
     // @param {number} income
     // @param {number} staff_count
     // @param {boolean} is_open

    constructor(address, profit, costs, income, staff_count, is_open) {
        this.address = address; // PK
        this.profit = profit;
        this.costs = costs;
        this.income = income;
        this.staff_count = staff_count;
        this.is_open = is_open;
    }
}

class Document {

     // @param {string} title
     // @param {string} loc_address
     // @param {Date} issue_date
     // @param {Date} expire_date
     // @param {boolean} is_active

    constructor(title, loc_address, issue_date, expire_date, is_active) {
        this.title = title; // PK
        this.loc_address = loc_address; // FK
        this.issue_date = issue_date;
        this.expire_date = expire_date;
        this.is_active = is_active;
    }
}

class Employee {

     // @param {string} full_name
     // @param {number} age
     // @param {string} shift
     // @param {string} position
     // @param {number} salary
     // @param {string} phone

    constructor(full_name, age, shift, position, salary, phone) {
        this.full_name = full_name; // PK
        this.age = age;
        this.shift = shift;
        this.position = position;
        this.salary = salary;
        this.phone = phone;
    }
}

class Menu {

     // @param {string} title

    constructor(title) {
        this.title = title; // PK

    }
}

class Item {

     // @param {string} title
     // @param {number} price
     // @param {number} sold_num
     // @param {string} recipe

    constructor(title, price, sold_num, recipe) {
        this.title = title; // PK
        this.price = price;
        this.sold_num = sold_num;
        this.recipe = recipe;
    }
}