import Pet from "@/model/Pet";
import DBService from "@/services/DBService"

export default {

  colecao: 'pets',

  async adicionarPet(pet) {
    const PetModel = new Pet(null, pet.nome, pet.raca, pet.data_nascimento, pet.tutor_id);
    await PetModel.getTutor(PetModel.tutor_id);
    await DBService.adicionar(this.colecao, PetModel);
  },

  async listarPets() {
    const pets = await DBService.listar(this.colecao);
    return pets.map(pet => new Pet(pet.key, pet.data.nome, pet.data.raca, pet.data.data_nascimento, pet.data.tutor_id));
  },

}
