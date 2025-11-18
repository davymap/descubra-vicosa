export default class Tutor {

  constructor(key, nome, endereco, telefones) {
    this.id = key;
    this.nome = nome;
    this.inicial = nome?.charAt(0).toUpperCase() || null;
    this.endereco = endereco;
    this.telefones = telefones;
  }

}
