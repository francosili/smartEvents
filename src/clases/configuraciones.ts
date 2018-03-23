export class Configuraciones {

    //public static urlBase: string = "http://10.0.0.35:8080/CeryhacREST/ws"; //Test
    public static urlBase: string = "http://lucaslucas.net/smartevents/";  //Produccion
    //public static urlBase: string = "http://localhost:8080/CeryhacREST/ws";//Local
    public static authUrl: string = `${Configuraciones.urlBase}/login`;
    public static timeoutDefault : number = 30000;  //30 seg
}