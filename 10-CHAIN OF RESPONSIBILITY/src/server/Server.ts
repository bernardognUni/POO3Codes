import Middleware from "../middleware/Middleware";

export default class Server{
    private middleware: Middleware;

    public setMiddleware(middleware: Middleware) {
        this.middleware = middleware;
    }

    public logIn(email: string, password: string): boolean{
        if(this.middleware.check(email, password)){
            console.log("Autenticado");
            return true;
        }
        return false;
    }
}