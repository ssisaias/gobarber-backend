// Esse override do tipo Request que é declarado dentro do express, permite que o tipo
// 'user' seja acessivel dentro de Request onde é importado.
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}
