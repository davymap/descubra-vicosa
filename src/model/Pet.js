import { useTutor } from "@/composables/useTutor";

export default class Pet {

  constructor(nome, raca, data_nascimento, tutor) {
    this.nome = nome;
    this.inicial = nome;
    this.raca = raca;
    this.data_nascimento = data_nascimento;
    this.tutor = tutor
    this.tutor_id = this.getTutorId();
  }

  getTutorId = () => {
    const { capturarTutorId } = useTutor();
    return capturarTutorId(this.tutor);
  }

}
