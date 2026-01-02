import { PriorityQueue, Prioridade } from "./PriorityQueue";

const fila = new PriorityQueue<string>(5);

fila.enqueue("Maria", Prioridade.NORMAL);
fila.enqueue("João", Prioridade.ALTA);
fila.enqueue("Carol", Prioridade.MUITO_ALTA);

console.log("Primeiro da fila:", fila.peek());
console.log("Removido:", fila.dequeue());
console.log("Tamanho atual:", fila.size());
