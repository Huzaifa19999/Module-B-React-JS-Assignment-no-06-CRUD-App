import axios from "axios";
import CRUD_Button from "../Components/CRUD_Button"
import 'bootstrap/dist/css/bootstrap.css'; 
import { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import CommentIcon from '@mui/icons-material/Comment';
import PostAddIcon from '@mui/icons-material/PostAdd';
import '../App.css'


function Crud() {

    const [ comment, setComment ] = useState<any>([])

    const getCommentData = () => {

        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((res) => {
            console.log(res.data)
            setComment([...res.data])
        }).catch((err) => {
            console.log(err)
        })
    }

    const postCommentData = () => {
        
        axios.post('https://jsonplaceholder.typicode.com/comments',{
            postId:1,
            name:"Huzaifa Abdul Qadir",
            email:"huzaifaqadir10@rocketmail.com",
            body:"Bachelor of Science in Software Engineering"
        }).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    const deleteCommentData = () => {

        axios.delete('https://jsonplaceholder.typicode.com/comments/1')
        .then((res) => {
            console.log(res.data)
            setComment([])
        }).catch((err)=>{
            console.log(err)
        })

    }


    const deleteComment = (i:any) => {

        comment.splice( i, 1 ) 
        setComment([...comment])
    }

    function clickMe () {
        axios.delete('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => {
          console.log(res.data);
        }).catch((err) => {
          console.log(err)
        })
    }

     return (
    <>
        <h1 className="text-center mt-3 mb-4">API CRUD COMMMENT APP </h1>
        <center>
        <CRUD_Button className="btn fw-bold btn-primary m-1" label="Get Comment" click={getCommentData}/>
        <CRUD_Button className="btn fw-bold btn-success m-1" label="Post Comment" click={postCommentData}/>
        <CRUD_Button className="btn fw-bold btn-secondary m-1" label="Put Comment" click={clickMe}/>
        <CRUD_Button className="btn fw-bold btn-danger m-1" label="Delete Comment" click={deleteCommentData}/>
        </center>
        <div className="parent-comment mt-5 container" >
        {comment.map((e:any,i:any) => (
            <div className="card mb-5" style={{width: '18rem'}}>
            <ul key={i} className="list-group list-group-flush">
              <li className="list-group-item text-center"><h4 className="fw-bolder text-primary">ID<br /> {e.id} </h4></li>
              <li className="list-group-item"><label className="fw-bolder"><PostAddIcon/> Post ID:</label> <br /> {e.postId}</li>
              <li className="list-group-item"><label className="fw-bolder"><AccountCircleIcon className=""/> Name:</label> <br /> {e.name}</li>
              <li className="list-group-item"><label className="fw-bolder"><MailIcon/> Email:</label> <br /> {e.email}</li>
              <li className="list-group-item"><label className="fw-bolder"><CommentIcon/> Body:</label> <br /> {e.body} <br /></li>
              <li className="d-flex p-4 justify-content-center"><button onClick={deleteComment} className="fw-bold btn w-100 btn-danger">Delete</button></li>
            </ul>
          </div>
        ))}
                </div>
    </>
  )
}

export default Crud;