import { Sala } from "@/types/Sala";
import { Ref } from "vue";

export interface IState {
    salas: Sala[];
    sala: Sala | null;
}
