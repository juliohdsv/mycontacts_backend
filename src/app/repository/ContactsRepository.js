import { v4 as uuid } from "uuid";

let contacts = [
  {
    id: uuid(),
    name: 'Júlio',
    phone: '123456789',
    category: uuid(),
  },
  {
    id: uuid(),
    name: 'Tais',
    phone: '123456789',
    category: uuid(),
  },
  {
    id: uuid(),
    name: 'Marcia',
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

  delete(id){
    return new Promise((resolve) => {
      contacts =  contacts.filter(contact => contact.id !== id)
      resolve();
  });
  }
}

export default new ContactaRepository;
