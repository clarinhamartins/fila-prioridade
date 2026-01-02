export enum Prioridade {
  MUITO_BAIXA = 1,
  BAIXA = 2,
  NORMAL = 3,
  ALTA = 4,
  MUITO_ALTA = 5
}

export class PriorityQueue<T> {
  private filas: T[][]; 
  private capacidadeMaxima: number;

  constructor(capacidadeMaxima: number) {
    this.capacidadeMaxima = capacidadeMaxima;
    this.filas = [
      [], // 1 - Muito baixa
      [], // 2 - Baixa
      [], // 3 - Normal
      [], // 4 - Alta
      []  // 5 - Muito alta
    ];
  }

  size(): number {
    return this.filas.reduce((total, fila) => total + fila.length, 0);
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  isFull(): boolean {
    return this.size() >= this.capacidadeMaxima;
  }

  enqueue(elemento: T, prioridade: Prioridade): void {
    if (this.isFull()) {
      throw new Error("Fila cheia! Não é possível inserir.");
    }

    this.filas[prioridade - 1].push(elemento);
  }

  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Fila vazia! Não há elementos para remover.");
    }

    for (let i = this.filas.length - 1; i >= 0; i--) {
      if (this.filas[i].length > 0) {
        return this.filas[i].shift() as T;
      }
    }

    throw new Error("Erro inesperado.");
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error("Fila vazia!");
    }

    for (let i = this.filas.length - 1; i >= 0; i--) {
      if (this.filas[i].length > 0) {
        return this.filas[i][0];
      }
    }

    throw new Error("Erro inesperado.");
  }

  clear(): void {
    this.filas.forEach(fila => fila.length = 0);
  }
}
