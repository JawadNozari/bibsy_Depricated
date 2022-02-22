//Needed imports for file.
import axios from "axios";

//Assynchronous const declaration of "getData".
const getData = async (url: string) => {
  //Await following method execution for fetching data needed with promises.
  const res: any = await axios.get(url).catch((error) => {
    //Log any errors encountered in the promises.
    console.error(error);
  });
  //Promise returns response.
  return res.data;
};
//Exports constant. So it can be used as a module import.
export default getData;
