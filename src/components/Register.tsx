import React, {useState} from "react";
import {GiArchiveRegister} from "react-icons/gi";
import getData from "./getData";
import UseAxios from './UseAxios';


 const Register = (props : any) => {

    //Lagrar dess informationen som state
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [eMail, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [bookName, setBookName] = useState<string>('');

    const [placeHolderDate, setPlaceHolderDate] = useState<string>("1989-04-15");
    const [publishDate, setPublishDate] = useState<Date>(new Date("1989-04-15"));

    const [author, setAuthor] = useState<string>('');
    const [ntiID, setNtiID] = useState<string>('');
    const [publisher, setPublisher] = useState<string>('');
    const [coverLink, setCoverLink] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const [pages, setPages] = useState<string>('');

    const [ISBN, setISBN] = useState<string>('');

    const getInfo = () => {
        getData("http://Williams-macbook-pro.local:3001/bookTemplate/" + ISBN)
        .then((data) => {
            console.log(data);
            setBookName(data.Name);
            setPublisher(data.Company);
            setCoverLink("https://image.bokus.com/images/" + ISBN);
        })
        
    }
    
    //Skickar koden till backend med hjälp av Axios, den skickar allt genom en objekt namn
    const submitFormBook = (event: React.FormEvent<HTMLFormElement>) => {
      // Preventing the page from reloading
      event.preventDefault();

      let book = {
        isbn: ISBN,
        title: bookName,
        author: author,
        date: publishDate,
        id: ntiID,
        publisher: publisher,
        lang: language,
        coverLink: ("https://image.bokus.com/images/" + ISBN),
        desc: description,
        pages: pages,
      }

      UseAxios("http://Williams-macbook-pro.local:3001/registerBook", book);
    }

    const submitFormStudent = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();
  
        let student = {
          FirstName: firstName,
          LastName: lastName,
          Email: eMail,
          PhoneNumber: phone,
        }
  
        UseAxios("http://Williams-macbook-pro.local:3001/registerStudent", student);
    }

    return (
    
    <>
        {/* Register member */}
        {props.isMember && 
            <div className=" bg-white h-[75vh] w-[70vw] fixed right-[10%] top-[15%] items-center flex rounded-xl overflow-auto">
                    {/* När formens butten submit tryckes med hjälp av onSubmit körs funktionen submitFormStudent */}
                <form className="w-[100%] h-[100%] ml-[6%] " onSubmit={submitFormStudent} method="post">

                    <h1 className=" text-3xl text-center p-10  mt-[5%] mr-[5%] -z-10" >Registrera medlem</h1>

                    <div className="mt-[2%] -z-10">
                            {/* Ger inputen ett värde och sedan lagrar den till useState */}
                        <input className="bookInput border-solid border-2 border-indigo-600" type="text"    placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                        <input className="bookInput border-solid border-2 border-indigo-600" type="text"    placeholder="Last Name"  value={lastName} onChange={(e) => setLastName(e.target.value)}/>

                        <input className="bookInput border-solid border-2 border-indigo-600" type="email"   placeholder="Email"      value={eMail} onChange={(e) => setEmail(e.target.value)}/>

                        <input className="bookInput border-solid border-2 border-indigo-600" type="text"    placeholder="Klass"      value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <button type="submit" value="submit" className="p-[1%] bg-purple-700 w-[40%] text-white rounded-xl ml-[25%] mt-[4%]">Registrera</button>
                </form>
            </div>
        }

        {/* Register Books */}
        {!props.isMember && 
            <div className=" bg-purple-100 h-[75vh] w-[75vw] fixed right-[3%] top-[15%] items-center flex rounded-xl overflow-auto">

                {/* När formens butten submit tryckes med hjälp av onSubmit körs funktionen submitFormBook */}
                <form className="w-[60%] h-[100%]" onSubmit={submitFormBook} method="post">

                    <img src="/../assets/frown-regular.svg" alt="" />

                    <h1 className=" text-3xl p-10 ml-[25%] mt-[5%]" >Registrera din bok</h1>
                        
                        {/* ger inputen ett värde och sedan lagrar den till useState */}
                        <input className="bookInput" type="number" placeholder="NTI ID"   value={ntiID} onChange={(e) => setNtiID(e.target.value)}/>

                        <input className="bookInput" type="text" placeholder="Book Title"   value={bookName} onChange={(e) => setBookName(e.target.value)}/>
                        
                        <input className="bookInput" type="date" placeholder="Published"    value={placeHolderDate} onChange={(e) => {{setPlaceHolderDate(e.target.value); setPublishDate(new Date(e.target.value))}}}/>

                        <input className="bookInput" type="text" placeholder="Author"       value={author} onChange={(e) => setAuthor(e.target.value)}/>
                        
                        <input className="bookInput" type="text" placeholder="Description"  value={description} onChange={(e) => setDescription(e.target.value)}/>

                        <input className="bookInput" type="text" placeholder="Cover"        value={coverLink} onChange={(e) => setCoverLink(e.target.value)}/>

                        <input className="bookInput" type="text" placeholder="Publisher"  value={publisher} onChange={(e) => setPublisher(e.target.value)}/>

                        <input className="bookInput" type="number" placeholder="Pages"       value={pages} onChange={(e) => setPages(e.target.value)}/>
                    
                    <input className="m-5 mt-[3%] mb-[10%] w-[66%] p-[1%] rounded-xl" type="text" placeholder="ISBN-Nummer" name="ISBN-Nr" value={ISBN} onChange={(e) => setISBN(e.target.value)}/>
                    <button type="button" className="p-[1%] bg-purple-700 w-[20%] text-white rounded-xl" onClick={() => getInfo()}>Scan</button>
                    <button type="submit" className="p-[1%] bg-purple-700 w-[90%] ml-[3%] text-white rounded-xl">Submit</button>
                </form>

                <div className="w-[40%] h-[100%]">
                    <h1 className=" text-3xl ml-[35%] mt-[10%]">{bookName ? bookName : "Boknamn"}</h1>
                    <div className="bg-cyan-700 rounded-xl w-[70%] h-[70%] ml-[15%] mt-[5%] object-cover">
                        {coverLink && <img src={coverLink} alt={"Cover for scanned book"}/>}
                    </div>
                </div>
            </div>
        }
    </>) };

 

export default Register;