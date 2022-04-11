import React, { useState } from 'react';

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
import './App.css';

import { getAge } from './utils';

import { uploadCsv } from './services/csv.service.js'

const App = () => {

  const [csv, setCsv] = useState({ csv: '', big: false });
  const [dadosCsv, setDadosCsv] = useState({ rows: [], link: null });
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const funcUploadCsv = async () => {
    try {
      setLoading(true);
      const data = await uploadCsv(csv)
      setDadosCsv({ rows: data.rows, link: data.link })
      setLoading(false);

    } catch (error) {
      setLoading(false);
    }

  }

  return (
    <Container>

      <Row>
        <Col md="8">
          <Input type='checkbox' defaultChecked={checked} onChange={() => { setChecked(!checked); setCsv({ ...csv, big: !checked }) }} /> + 18
          <Input name="csv" type='file' onChange={e => setCsv({ ...csv, csv: e.target.files[0] })} />
        </Col>
        <Col md="4">
          <Button onClick={funcUploadCsv}> Upload </Button>
        </Col>
      </Row>

      {
        loading ?
          <Spinner />
          :
          <>
            <Row>
              <a href={`${dadosCsv?.link}`} >Download</a>
            </Row>
            <Table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Sexo</td>
                  <td>Data Aniversario</td>
                </tr>
              </thead>

              <tbody>
                {
                  dadosCsv.rows.map((row) => {
                    if (checked) {
                      if (getAge(row?.birthdate) >= 18)
                        return (<tr>
                          <td>{`${row?.name} ${row?.name}`}</td>
                          <td>{row?.mail}</td>
                          <td>{row?.sexo}</td>
                          <td>{row?.birthdate}</td>
                        </tr>)
                    } else {
                      return (<tr>
                        <td>{`${row?.name} ${row?.name}`}</td>
                        <td>{row?.mail}</td>
                        <td>{row?.sexo}</td>
                        <td>{row?.birthdate}</td>
                      </tr>)
                    }
                  })
                }
              </tbody>
            </Table>
          </>
      }


    </Container >


  );
}

export default App;
