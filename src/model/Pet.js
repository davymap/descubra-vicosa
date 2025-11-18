import TutorsController from "@/controller/TutorsController";

export default class Pet {

  constructor(key, nome, raca, data_nascimento, tutor_id) {
    this.id = key;
    this.nome = nome;
    this.inicial = nome?.charAt(0).toUpperCase() || null;
    this.raca = raca;
    this.data_nascimento = data_nascimento;
    this.tutor_id = tutor_id;
    this.tutor = {};
  }

  async getTutor(tutor_id) {
    try {
      this.tutor = await TutorsController.capturarTutorId(tutor_id);
    } catch (error) {
      console.warn(error);
    }
  };

}
