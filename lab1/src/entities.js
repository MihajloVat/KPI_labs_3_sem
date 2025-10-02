
class Location {

     // @param {string} address
     // @param {boolean} is_open
     // @type {number} profit (derived)
     // @type {number} costs (derived)
     // @type {number} income (derived)
     // @type {number} staff_count (derived)

    constructor(address, is_open) {
        this.address = address; // PK
        this.is_open = is_open;
    }

    get profit(){}
    get costs(){}
    get income(){}
    get staff_count(){}
}

class Document {

     // @param {string} title
     // @param {string} loc_address
     // @param {Date} issue_date
     // @param {Date} expire_date
     // @param {string} emp_name (optional)
     // @type {boolean} is_active (derived)

    constructor(title, loc_address, issue_date, expire_date,emp_name) {
        this.title = title; // partial key
        this.loc_address = loc_address; // FK
        this.issue_date = issue_date;
        this.expire_date = expire_date;
        this.emp_name = emp_name || null; //FK
    }

    get is_active() {}

}

class Employee {

     // @param {string} full_name
     // @param {number} age
     // @param {string} shift
     // @param {string} position
     // @param {number} salary
     // @param {string} phone
     // @param {string} loc_address

    constructor(full_name, age, shift, position, salary, phone, loc_address, doc_title) {
        this.full_name = full_name; // PK
        this.age = age;
        this.shift = shift;
        this.position = position;
        this.salary = salary;
        this.phone = phone;
        this.loc_address = loc_address; //FK
        this.doc_title = doc_title || null;//FK
    }
}

class Menu {

     // @param {string} title
     // @param {string} loc_address

    constructor(title, loc_address) {
        this.title = title; // PK
        this.loc_address = loc_address; //FK
    }
}

class Item {

     // @param {string} title
     // @param {string} recipe (optional)
     // @param {string} loc_address

    constructor(title, price, sold_num, menu_title, recipe) {
        this.title = title; // PK
        this.price = price;
        this.sold_num = sold_num;
        this.menu_title = menu_title; //FK
        this.recipe = recipe || null;
    }
}

class Sold {

    // @param {data} date
    // @param {number} price

    constructor(date, price, item) {
        this.date = date; // partial key
        this.item = item; //FK
        this.price = price;
    }
}