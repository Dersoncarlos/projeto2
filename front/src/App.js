import React, { Fragment, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Input,
  Spinner
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
// import logo from './logo.svg';
import './App.css';
import { toast } from 'react-toastify';


import { uploadCsv } from './services/functions'

const App = ({ props }) => {

  const [csv, setCsv] = useState({ csv: '' });
  const [dadosCsv, setDadosCsv] = useState({ rows: [], link: null });

  const [loading, setLoading] = useState(false);

  const funcUploadCsv = async () => {
    try {
      setLoading(true);
      const data = await uploadCsv(csv)
      setDadosCsv({ rows: data.rows, link: null })
      setLoading(false);

    } catch (error) {
      toast.error('erro');
      setLoading(false);
    }

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

      {loading ?
        <Spinner />
        :
        <Table>
          <thead>
            <tr>
              <td>name</td>
              <td>email</td>
              <td>sexo</td>
              <td>data_aniversario</td>
            </tr>
          </thead>


          <tbody>
            {dadosCsv.rows.map((row) => {
              return (<tr>
                <td>{`${row?.name} ${row?.name}`}</td>
                <td>{row?.mail}</td>
                <td>{row?.sexo}</td>
                <td>{row?.birthdate}</td>
              </tr>)
            })}
          </tbody>
        </Table>

      }


    </Container >


  );
}

export default App;
