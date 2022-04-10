import React, { Fragment, useState } from 'react';
import {
  Collapse,
  Container,
  Row,
  Col,
  Button,
  Table,
  Input
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
// import logo from './logo.svg';
import './App.css';

import { uploadCsv, testApi, testando, uploadFile } from './services/functions'

const App = ({ props, uploadCsv, testApi }) => {

  const [csv, setCsv] = useState({ csv: '' });
  const dadosCsv = {};

  console.log(csv)
  const funcUploadCsv = () => {
    uploadFile(csv)
  }

  return (
    <Container>

      <Row>
        <Col md="8">
          <Input name="csv" type='file' onChange={e => setCsv({ ...csv, csv: e.target.files[0] })}></Input>
        </Col>
        <Col md="4">
          <Button onClick={funcUploadCsv}> Upload </Button>
        </Col>
      </Row>


      <Table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>sexo</td>
            <td>ip</td>
            <td>data_aniversario</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>


    </Container >


  );
}

export default App;
