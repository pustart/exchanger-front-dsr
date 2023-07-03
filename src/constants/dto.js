/* eslint-disable */
export class UserDto {
  constructor(id, sex, name, surname, email, phone, birthday, photo, role) {
    this.id = id;
    this.sex = sex;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.birthday = birthday;
    this.photo = photo;
    this.role = role;
  }
}

export class UserThingsInfoDto extends UserDto {
  constructor(id, sex, name, surname, email, phone, birthday, photo, role, thingsCount) {
    super(id, sex, name, surname, email, phone, birthday, photo, role)
    this.thingsCount = thingsCount;
  }
}

export class CategoryDto {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

export class CategoryCreateDto {
  constructor(name) {
    this.name = name;
  }
}

export class CategoryInfoDto extends CategoryDto {
  constructor(id, name, amount) {
    super(id, name)
    this.amount = amount;
  }
}

export class ThingDto {
  constructor(id, name, description, address, photo, author, category, exchangeCategory) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
    this.photo = photo;
    this.author = author;
    this.category = category;
    this.exchangeCategory = exchangeCategory;
  }
}
