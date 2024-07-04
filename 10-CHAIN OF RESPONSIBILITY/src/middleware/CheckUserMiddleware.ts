import Database from "../server/Database";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware{

    public check(email: string, password: string): boolean {
        if(email.indexOf("@") === -1){
            console.log("Email Inválido");
            return false;
        }

        if( !Database.filter(item => item.email === email && item.password === password).length){
            console.log("Usuário não encontrado");
            return false;
        }
        
        return this.checkNext(email,password);
    }

}