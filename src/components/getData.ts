import axios from "axios";

const getData = async (url: string) => {
    const res:any = await axios
    .request({url:url,headers:{"*":"*"}})
    .catch((error) => {
        console.error(error);
    });
    
   return res.data;
   
}
export default getData;