import ContactsRepository from "../repository/ContactsRepository.js";

class ContactController {
  async index(request, response){

    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response){
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact){
      return response.status(404).json({ error: "User not found" });
    }

    response.json(contact);
  }

  store(){

  }

  updated(){

  }

  async delete(request, response){
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if(!contact){
      return response.status(404).json({ error: "User not found" });
    }

    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

export default new ContactController();
