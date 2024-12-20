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

  async store(request, response){
    const { name, email, phone, category_id } = request.body;

    if(!name){
      return response.status(400).json({error: "Name is required"});
    }

    const contactExists = await ContactsRepository.findByEmail(email);

    if(contactExists){
      return response.status(400).json({error: "This e-mail is already in use"});
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id
    });

    response.send(contact);
  }

  async update(request, response){
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    if(!name){
      return response.status(404).json({error: "Name is requered"});
    }

    const contactExists = await ContactsRepository.findById(id);
    if(!contactExists){
      return response.status(404).json({error: "User not found"});
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);
    if(!contactByEmail && contactByEmail.id !== id){
      return response.status(400).json({error: "This is e-mail is already in use"});
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id
    });

    response.json(contact);
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
