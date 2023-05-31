import React from 'react'
import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../imgs/logocinetec.png'
import logoUser from '../imgs/LogoUser.png'
import { Link } from 'react-router-dom'


function FormsLogin(){
    return(
        <>
        <center>
        <div className='forms'>
            <div className='logoReact'>
                <img src= {logo} alt="App-logo" className='img_logo'/>
                <img src= {logoUser} alt="logo_user" className='logoUser'/>
            </div>
                <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email: </Form.Label>
                <Form.Control type="email" placeholder="seuemail@email.com" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formGroupPassword">
                <Form.Label>Senha: </Form.Label>
                <Form.Control type="password" placeholder="********" />
            </Form.Group>
            <div className='parteInferior'>
            <Button variant="primary" className="bt-entrar">Entrar</Button>{' '}
            <p className='pCadUser'>Não tem uma conta? 😭</p>
            <Link to = "/registrar" className="linkCad">Cadastre-se</Link>{' '}
            </div>
        </Form>
        </div>
        </center>
        </>
    );

}

export default FormsLogin;