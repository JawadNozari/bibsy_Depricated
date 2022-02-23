//Import of "axios" component from module "axios" as "axios".
import axios from "axios";

//Declaration of constant for export. (Asynchronous)
const UseAxios = async (url: string, body: any) => {

    //Await response.
    const res:any = await axios
    .post(url, body)

    //Incase error occurs, log it in the terminal.
    .catch((error) => {
        console.error(error);
    });
    
    //Otherwise, return the response.
    return res.data;

}

//Export const as "UseAxios" for use.
export default UseAxios