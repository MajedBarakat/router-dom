import React ,{useState} from 'react'
import {Button , Modal , Form , } from "react-bootstrap"


function Add({handleMovies}) {
  const [show, setShow] = useState(false);
  const[name,setname] = useState("");
  const[year,setyear] = useState("");
  const[rating,setrating] = useState(0);
  const[url,seturl] = useState("");
  const[discription,setdiscription] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movies
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name..." name='name' onChange={(e)=>setname(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Yaer</Form.Label>
        <Form.Control type="text" placeholder="year..." name='year' onChange={(e)=>setyear(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>rating</Form.Label>
        <Form.Control type="number" placeholder="rating..." name='rating' onChange={(e)=>setrating(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>discription</Form.Label>
        <Form.Control type="text" placeholder="..." name='discription' onChange={(e)=>setdiscription(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>img</Form.Label>
        <Form.Control type="text" placeholder="url..." name='url' onChange={(e)=>seturl(e.target.value)} />
      </Form.Group>
    </Form>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary" onClick={()=>{handleMovies({name,url,discription,year,rating,id:Math.random()});handleClose()}}>
            save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add