type BtnProps = {

    className:string;
    click: () => void;
    label:string;

}


function CRUD_Button (props:BtnProps) {

const  { className, click, label }   = props


  return (


    <>
    <button  className={className} onClick={click}>{label}</button>
    </>


  )



}

export default CRUD_Button