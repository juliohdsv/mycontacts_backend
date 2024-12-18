import { v4 as uuid } from "uuid";

let contacts = [
  {
    id: uuid(),
    name: 'Júlio',
    email: "julio@gmail.com",
    phone: '123456789',
    category: uuid(),
  },
  {
    id: uuid(),
    name: 'Tais',
    email: "tais@gmail.com",
    phone: '123456789',
    category: uuid(),
  },
  {
    id: uuid(),
    name: 'Marcia',
    email: "marcia@gmail.com",
    phone: '123456789',
    category: uuid(),
  },
];

class ContactaRepository{
  findAll(){
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id){
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id)
    ));
  }

  findByEmail(email){
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email)
    ));
  }

  create({
    name, email, phone, category_id
  }){
    return new Promise((resolve) => {
      const newContact = {
        id: uuid(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
  });
  }

  delete(id){
    return new Promise((resolve) => {
      contacts =  contacts.filter(contact => contact.id !== id)
      resolve();
  });
  }
}

export default new ContactaRepository;
