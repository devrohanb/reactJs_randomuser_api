import React, { useState, useEffect } from "react";
import { Container, Row, Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Axios from "axios"
import Card1 from "./Card1";

const App = () => {

  const [details, setDetails] = useState({})

  const fetchDetails = async () => {
    const url = 'https://randomuser.me/api/'
    const response = await Axios.get(url)
    const newData = response.data
    console.log("RESPONSE : ", newData)

    const details = newData.results[0]

    setDetails(details)

  }

  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <Container fluid className="p-4 bg-primary App" >
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <Card1 details={details}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
