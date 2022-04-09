import React, { Fragment } from 'react';
import { uploadCsv } from '../controllers/csv.controller'

const Index = ({uploadCsv}) => {
    return (
        <Fragment>
            <Container>
            <header className="App-header">
                <img className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <body>
                <div>
                <button> carregar </button>
                </div>   

                <table>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>sexo</td>
                        <td>ip</td>
                        <td>data_aniversario</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </table>   
            </body>
            <footer className="App-header">
                <h1 className="App-title">bye bye</h1>
            </footer>
            </Container>
        </Fragment>
    )
}

export default Index;