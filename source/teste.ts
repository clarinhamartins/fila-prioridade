import { PriorityQueue, Prioridade } from "./PriorityQueue";

function textoPrioridade(p: Prioridade): string {
  switch (p) {
    case Prioridade.MUITO_BAIXA: return "Muito Baixa (1)";
    case Prioridade.BAIXA: return "Baixa (2)";
    case Prioridade.NORMAL: return "Normal (3)";
    case Prioridade.ALTA: return "Alta (4)";
    case Prioridade.MUITO_ALTA: return "Muito Alta (5)";
  }
}

const fila = new PriorityQueue<string>(6); 

// Registra quem entrou com qual prioridade
const registros: { nome: string, prioridade: Prioridade }[] = [];

console.log("====== TESTE FILA DE PRIORIDADE ======\n");

console.log("Fila está vazia?", fila.isEmpty());
console.log("Fila está cheia?", fila.isFull());
console.log("Quantidade atual:", fila.size());

console.log("\n--- Inserindo elementos ---");

function adicionar(nome: string, prioridade: Prioridade) {
  fila.enqueue(nome, prioridade);
  registros.push({ nome, prioridade });
  console.log(`Inserido: ${nome} | Prioridade: ${textoPrioridade(prioridade)}`);
}

adicionar("Maria", Prioridade.NORMAL);
adicionar("João", Prioridade.ALTA);
adicionar("Carol", Prioridade.MUITO_ALTA);
adicionar("Pedro", Prioridade.BAIXA);
adicionar("Ana", Prioridade.ALTA);
adicionar("Felipe", Prioridade.MUITO_BAIXA);

console.log("Quantidade após inserções:", fila.size());
console.log("Fila está cheia?", fila.isFull());

console.log("\n--- Tentando inserir com fila cheia ---");
try {
  fila.enqueue("Extra", Prioridade.NORMAL);
} catch (e) {
  console.log("Mensagem de erro:", (e as Error).message);
}

// Mostrar quem será atendido primeiro
console.log(
  "\nPróximo a ser removido (peek):",
  fila.peek()
);

// Remoção respeitando prioridade
console.log("\n--- Removendo elementos na ordem ---");

while (!fila.isEmpty()) {
  const removido = fila.dequeue();

  const registro = registros.find(r => r.nome === removido);

  console.log(
    `Removido: ${removido} | Prioridade: ${registro ? textoPrioridade(registro.prioridade) : "??"}`
  );
}

console.log("Quantidade após remover tudo:", fila.size());
console.log("Fila está vazia?", fila.isEmpty());

console.log("\n--- Tentando remover fila vazia ---");
try {
  fila.dequeue();
} catch (e) {
  console.log("Mensagem de erro:", (e as Error).message);
}

// ===================== CLEAR TEST =====================
console.log("\n--- Testando clear() ---");

fila.enqueue("Lucas", Prioridade.NORMAL);
fila.enqueue("Bianca", Prioridade.ALTA);

// Mostra elementos antes do clear
console.log("Elementos atualmente na fila antes do clear:");
console.log("- Lucas | Prioridade:", textoPrioridade(Prioridade.NORMAL));
console.log("- Bianca | Prioridade:", textoPrioridade(Prioridade.ALTA));

console.log("Quantidade antes do clear:", fila.size());

// Limpando a fila
fila.clear();

console.log("\n--- Após executar clear() ---");
console.log("Quantidade após clear:", fila.size());
console.log("Fila está vazia?", fila.isEmpty());

console.log("\n====== FIM DOS TESTES ======");