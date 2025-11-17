import TutorsController from "@/controller/TutorsController";
import { onMounted, ref } from "vue";

export function useTutor() {

  const tutor = ref({});
  const tutores = ref([]);

  const capturarTutores = async () => {
    tutores.value = await TutorsController.listarTutores();
  }

  const capturarTutorId = async (tutor) => {
    tutor.value = await TutorsController.capturarTutorId(tutor);
  }

  onMounted(() => {
    capturarTutores();
  });

  return {
    capturarTutores,
    capturarTutorId,
    tutores,
    tutor
  };

}
