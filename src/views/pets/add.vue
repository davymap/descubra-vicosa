<template>
  <div class="w-full">
    <form @submit.prevent="adicionarPet(pet)">
      <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
        <legend class="fieldset-legend">Adicionando pets</legend>

        <label class="label">Nome do pet</label>
        <input type="text" class="input w-full" placeholder="Nome do pet" v-model="pet.nome" />

        <label class="label">Raça</label>
        <input type="text" class="input w-full" placeholder="Raça" v-model="pet.raca" />

        <label class="label">Data nascimento</label>
        <input
          type="text"
          class="input w-full"
          placeholder="Data nascimento"
          v-model="pet.data_nascimento"
        />

        <label class="label">Tutor</label>
        <select class="select" v-model="pet.tutor_id">
          <option v-for="tutor in tutores" :key="tutor.id" :value="tutor.id">
            {{ tutor.nome }}
          </option>
        </select>

        <button class="btn btn-neutral mt-4" type="submit">Adicionar</button>
      </fieldset>
    </form>
  </div>
</template>

<script setup>
import { usePet } from "@/composables/usePet";
import { useTutor } from "@/composables/useTutor";
const { adicionarPet, pet } = usePet();
const { tutores } = useTutor();
</script>

<style lang="scss" scoped></style>
