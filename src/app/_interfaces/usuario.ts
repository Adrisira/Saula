export interface Usuario {
    id: number,
    email: string,
    password: string,
    nombre: string,
    apellidos: string,
    edad: number,
    dirImg: string
}

export interface UsuarioLogin {
    email : string,
    password: string
}