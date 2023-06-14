import React from 'react'
import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../imgs/logocinetec.png'
import logoUser from '../imgs/LogoUser.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import api from '../../api';
import swal from 'sweetalert';


function FormsCad() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [typeUser, setTypeUser] = useState('');

    async function handleRegister(event) {
        event.preventDefault();
        try {
            const data = {
                email,
                password,
                name: userName,
                typeUser
            };
            const response = await api.post('/user', data);

            swal(`Usuário cadastrado com sucesso.
            Bem-vindo(a) ao sistema ${userName}`);

            setEmail('');
            setPassword('');
            setUserName('');
        } catch (error) {
            swal(`Erro no cadastro. Tente novamente. \nCodigo Erro ${error}`);
        }

    }
    return (
        <div>
            <div className='forms'>
                <div className='logoReact'>
                    <img src={logo} alt="App-logo" className='img_logo' />
                </div>
                <h1 className='tituloCadUser'>Cadastro de Usuario</h1>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="formEmail" controlId="formGroupEmail">
                        <Form.Label>Digite seu Email: </Form.Label>
                        <Form.Control type="email" placeholder="seuemail@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="formPassword" controlId="formGroupPassword">
                        <Form.Label>Digite sua Senha: </Form.Label>
                        <Form.Control type="password" placeholder="********" value={password} onChange={e => setPassword(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="formName" controlId="formGroupPassword">
                        <Form.Label>Digite seu nome: </Form.Label>
                        <Form.Control type="userName" placeholder="" value={userName} onChange={e => setUserName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className="formTypeUser" controlId="formGroupPassword">
                        <Form.Label>Tipo de Usuário </Form.Label>
                        <select>
                            <option onChange={(event) => {
                                setTypeUser(event.target.value)
                            }} value="Comum">Comum
                            </option>
                            <option
                                onChange={(event) => {
                                    setTypeUser(event.target.value)
                                }}
                                value="Administrador">Administrador
                            </option>
                        </select>
                    </Form.Group>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '1rem' }}>
                        <Button variant="primary" type='submit' className="btCadUser">Cadastrar-se</Button>{' '}
                        <Link style={{ padding: '1rem' }} to='/ ' className="linkVoltar">Voltar</Link>{' '}
                    </div>
                </Form>
            </div>
        </div>
    );

}

export default FormsCad;
