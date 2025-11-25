import Tutor from "@/model/Tutor";
import DBService from "@/services/DBService"

export default {

  colecao: 'tutores',

  async listarTutores() {
    const tutors = await DBService.listar(this.colecao);
    return tutors.map(tutor => new Tutor(tutor.key, tutor.data.nome, tutor.data.endereco, tutor.data.telefones));
  },

  async capturarTutorId (chave) {
    const tutor = await DBService.recuperarDocumento(this.colecao, chave);
    return new Tutor(tutor);
  },

  async deletarTutor(chave) {
    return await DBService.deletar(this.colecao, chave);
  }

}
