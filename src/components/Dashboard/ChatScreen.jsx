import React, { useState, useRef } from "react";
import {
  Container,
  Button,
  Link,
  lightColors,
  darkColors,
} from "react-floating-action-button";
import Avatar from "./Avatar.png";
import logo from '../logo/imgpsh_fullsize_anim.jfif';

const ChatScreen = (props ) => {
  const [index, setIndex] = useState(false);
  // const  hiddenFileInputClip = useRef(null);

  const hiddenFileInputFile = useRef(null);
  const hiddenFileInputImage = useRef(null);
  const  hiddenFileInputVideo = useRef(null);
  
 const [chats , setChats] = useState('Chat 1');
 const[chatHours , setChatHours] = useState('last online 3 hours ago');
  // const handleClickClip = event => {
  //   hiddenFileInputClip.current.click();
  // };
  // const handleChangeClip = event => {
  //   const VideoUpload = event.target.files[0];
  //   console.log('Video wali file',VideoUpload )
  // };
  const handleClick = event => {
    hiddenFileInputFile.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    console.log('File wali file',fileUploaded)
  };

  const handleClickImage = event => {
    hiddenFileInputImage.current.click();
  };
  const handleChangeImage = event => {
    const ImageUpload = event.target.files[0];
    console.log('Image wali file',ImageUpload )
  };

  const handleClickVideo = event => {
    hiddenFileInputVideo.current.click();
  };
  const handleChangeVideo = event => {
    const VideoUpload = event.target.files[0];
    console.log('Video wali file',VideoUpload )
  };
  
 
  return (
    <>
      <div className="container p-1 mb-3">
        <div className="row">
          <div className="col-lg-5">
            <div className="d-flex mb-3 mt-3">
              <div >
                <h3 className="chat-heading align-self-center">
                  {/* Chats and Dex Spaces */}
                  <img className="img-fluid logo rounded" src={logo} alt="" style={{width:'26em', height:"5.5em"}}/>
                </h3>
                <select
                  className="form-select bg-transparent recent-chat-select"
                  aria-label="Default select example"
                >
                  <option selected>Recent Chats</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="text-end">
                <button className="btn btn-light create-new-chat-btn">
                  <i className="fa-solid fa-plus me-2"></i> Create New Chat
                </button>
                <button className="btn btn-light create-dex-space-btn">
                  <i className="fa-solid fa-plus me-1"></i> Create Dex Space
                </button>
              </div>
            </div>

            <div className="card chat-card search-card shadow-sm  bg-body rounded">
              <div className="card-body">
                <div className=" d-flex">
                  {/* <div className=""> */}
                    <i className="fa-solid fa-magnifying-glass align-self-center"></i>
                    <input
                      type="text"
                      className="p-1"
                      id="exampleFormControlInput1"
                      placeholder="Search"
                      style={{ border: "0", outline: "0" }}
                    />
                  {/* </div> */}
                  <div className="vr ms-2"></div>
                  <select
                    className="form-select bg-transparent recent-chat-select"
                    aria-label="Default select example"
                    style={{width:"7em"}}
                  >
                    <option selected>Messages</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="scroll-view scrollbar-secondary mt-4">

              <div className="card chat-card p-5 shadow-sm  bg-body rounded" onClick={()=>{

            setChats('Chat 1')
            setChatHours('last online 3 hours ago') 
              }}
              >
                <div className="card-body">
                  <div class="hstack gap-5">
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#0D1C2E",
                        fontWeight: "700",
                      }}
                    >
                      Chat 1
                      <p className="last-seen-two text-start"> last online 3 hours ago </p>
                    </p>

                    <p className="ms-auto message-time">3 days ago</p>
                  </div>
                </div>
              </div>
           
                 
              <div className="card chat-card p-5 shadow-sm  bg-body rounded mt-2"  onClick={()=>{
                setChats('Chat 2')
                setChatHours('last online 4 hours ago')
              }}>
                <div className="card-body">
                  <div className="hstack gap-5">
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#0D1C2E",
                        fontWeight: "700",
                      }}
                    >
                      Chat 2
                      <p className="last-seen-two text-start"> last online 4 hours ago </p>

                    </p>

                    <p className="ms-auto message-time">3 days ago</p>
                  </div>
                </div>
              </div>

                    
              <div className="card chat-card p-5 shadow-sm  bg-body rounded mt-2"  onClick={()=>{
                setChats('Chat 3')
                setChatHours('last online 5 hours ago')
              }}>
                <div className="card-body">
                  <div class="hstack gap-5">
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#0D1C2E",
                        fontWeight: "700",
                      }}
                    >
                      Chat 3
                      <p className="last-seen-two text-start"> last online 5 hours ago </p>

                    </p>

                    <p className="ms-auto message-time">3 days ago</p>
                  </div>
                </div>
              </div>

                    
              <div className="card chat-card p-5 shadow-sm  bg-body rounded mt-2"   onClick={()=>{
                setChats('Chat 4')
                setChatHours('last online 6 hours ago')
              }}>
                <div className="card-body">
                  <div class="hstack gap-5">
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#0D1C2E",
                        fontWeight: "700",
                      }}
                    >
                      Chat 4
                      <p className="last-seen-two text-start"> last online 6 hours ago </p>

                    </p>

                    <p className="ms-auto message-time">3 days ago</p>
                  </div>
                </div>
              </div>

              <div className="card chat-card p-5 shadow-sm  bg-body rounded mt-2 mb-2"  onClick={()=>{
                setChats('Dex Space 1')
                setChatHours('last online 8 hours ago')
              }}>
                <div className="card-body">
                  <div class="hstack gap-5">
                    <p
                      style={{
                        fontSize: "18px",
                        color: "#0D1C2E",
                        fontWeight: "700",
                      }}
                    >
                      Dex Space 1
                      <p className="last-seen-two text-start"> last online 8 hours ago </p>

                   
                    </p>

                    <p className="ms-auto message-time">3 days ago</p>
                  </div>
                  <div className="card video-chat-card" style={{width:"7em"}}>
                        <div className="d-flex align-items-center p-2">
                        <i className="fa-solid fa-film" style={{color:"#00C305"}}></i>&nbsp;
                        <div style={{fontSize:"15px",color:"#00C305"}}>Video (x3)</div> 
                        </div>

                      </div>
                </div>
              </div>

       

            </div>
          </div>

          <div className="col-lg-7 mt-5 ">
            <div className="card shadow-sm  bg-body rounded ">
              <div className="card-header  dex-space-chat-heading-two">
                <div className="d-flex">
                  <div>
                    <p className="main-header">{chats}</p>
                    <p className="last-seen"> {chatHours} </p>
                  </div>

                  <div className="ms-auto">
                    <button className="btn btn-light rounded-circle clip-btn me-1" >
                      <i
                        className="fa-solid fa-video p-1"
                        style={{ color: "#707C97", fontSize: "12px" }}
                      ></i>
                     
                    </button>

                    <button className="btn btn-light rounded-circle clip-btn" >
                      <i
                        className="fa-solid fa-phone p-1"
                        style={{ color: "#707C97", fontSize: "12px" }}
                      ></i>
                     
                    </button>

                    <button className="btn btn-light rounded-circle dots-btn ms-1">
                      <i
                        className="fa-solid fa-ellipsis-vertical p-1"
                        style={{ color: "#707C97", fontSize: "14px" }}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body p-2 mt-2">
              <div className="scroll-view-two scrollbar-secondary-two mt-4">

                <div className="d-flex align-items-center messages-one mt-2">
                  <img
                    className="img-fluid rounded-circle border border-2"
                    src={Avatar}
                    alt="User-img"
                    width={43}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <div className="card message-card ">
                    <div className="card-text p-3  ms-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aperiam, eligendi?
                    </div>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <span className="message-actions align-self-center">
                    <i
                      className="fa-solid fa-ellipsis"
                      style={{ color: "#B7BDCB" }}
                    ></i>
                  </span>
                </div>

                <div className="d-flex">
                  <div
                    className="card message-card mt-3"
                    style={{ marginLeft: "3.7em" }}
                  >
                    <div className="card-text p-1  ms-3">Lorem ipsum dolor</div>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <span className="message-actions  align-self-center mt-3">
                    <i
                      className="fa-solid fa-ellipsis"
                      style={{ color: "#B7BDCB" }}
                    ></i>
                  </span>
                </div>
                <div className="message-time" style={{ marginLeft: "4.5em" }}>
                  <span>4 days ago</span>
                </div>

                <div className="d-flex justify-content-end  message-two me-2">
                  <i
                    className="fa-solid fa-ellipsis mt-3"
                    style={{ color: "#B7BDCB" }}
                  ></i>
                  &nbsp;&nbsp;&nbsp;
                  <div className="card message-card-two p-2">
                    <p className="text-two">Hey! Okay, send out</p>
                  </div>
                </div>
                <div className="message-time text-end me-3">
                  <span>4 days ago</span>
                </div>

                {
                  chats === "Dex Space 1"?null
                  
                  :
                  <>

                <div className="d-flex align-items-center messages-one">
                  <img
                    className="img-fluid rounded-circle border border-2"
                    src={Avatar}
                    alt="User-img"
                    width={43}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <div className="card message-card">
                    <div className="d-flex card-text p-2">
                      <i className="fa-solid fa-file p-2"></i>
                      <div className="me-3">
                        <p className="card-text">Style.zip</p>
                        <span className="card-text-two">41.36Mb</span>
                      </div>
                    </div>
                  </div>
                  &nbsp;&nbsp;&nbsp;
                  <span className="message-actions align-self-center">
                    <i
                      className="fa-solid fa-ellipsis "
                      style={{ color: "#B7BDCB" }}
                    ></i>
                  </span>
                </div>
                <div className="message-time" style={{ marginLeft: "4.5em" }}>
                  <span>4 days ago</span>
                </div>

                <p className="hr-lines">
                  <span className="message-time">3 days ago</span>
                </p>

                <div className="d-flex justify-content-end  message-two me-2">
                  <i
                    className="fa-solid fa-ellipsis"
                    style={{ color: "#B7BDCB",marginTop:"2.1em" }}
                  ></i>
                  &nbsp;&nbsp;&nbsp;
                  <div className="card message-card-two w-50">
                    <p className="text-two pe-5 ps-3">Here’s what I modified</p>
                    <div className="text-end">
                      <p className="new-style-zip">
                        (52.05 Mb) New_Style.zip{" "}
                        <i className="fa-solid fa-file me-3"></i>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="message-time text-end me-3">
                  <span>3 days ago</span>
                </div>
                </>
}
            </div>
                <div className="card type-area-upper-line mx-auto"></div>
 

                <div className="floating-container mt-3 p-3">
                  <div className="d-flex align-self-center">
                    <div
                      className="d-flex flex-column-reverse"
                      style={{ marginTop: "-7.5em" }}
                    >
                     {
                      chats === "Dex Space 1"?
                        <button
                        className="btn btn-light rounded-circle plus-btn mt-1 shadow-sm"
                        onClick={() => setIndex((prev) => !prev)}
                      >
                        <i className="fa-solid fa-plus  text-white shadow-sm "></i>
                      </button>
                      :
                      null
                     } 
                    
                      {index === true && (
                        <>
                          {/* <input type="file" name="my_file" id="my-file" onClick={showFile}/>   */}
                          <button className="btn btn-light rounded-circle plus-btn" onClick={handleClick}>
                            <i className="fa-solid fa-file text-white"></i>
                            <input  type="file" name="my_file" id="my-file"
                              ref={hiddenFileInputFile}
                              onChange={handleChange}
                            />
                          </button>

                          <button className=" btn btn-light  rounded-circle plus-btn" onClick={handleClickImage}>
                            <i className="fa-solid fa-image text-white"></i>
                            
                            <input  type="file" name="my_file" id="my-file"
                              ref={hiddenFileInputImage}
                              onChange={handleChangeImage}
                            />
                          </button>
                          <button className=" btn btn-light  rounded-circle plus-btn" onClick={handleClickVideo}>
                            <i className="fa-solid fa-film text-white"></i>
                            <input  type="file" name="my_file" id="my-file"
                              ref={hiddenFileInputVideo}
                              onChange={handleChangeVideo}
                            />
                          </button>
                        </>
                      )}
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                      className="type-message p-1"
                      placeholder="Type a message here"
                      style={{ flex: 1, border: "0", outline: "0" }}
                    />
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-light  rounded-circle ms-auto"
                      style={{
                        background:
                          "linear-gradient(325.78deg, #2A8BF2 14.76%, #7CB8F7 87.3%)",
                      }}
                    >
                      <i className="fa-solid fa-location-arrow  text-white"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatScreen;
