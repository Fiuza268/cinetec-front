import React from 'react'
import './style.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import logo from '../imgs/logocinetec.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import api from '../../api';
import swal from 'sweetalert';


function FormsCad() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [typeUser, setTypeUser] = useState('Comum');
    const navigate = useNavigate();

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
            navigate('/catalog');
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
                        <select onChange={(event) => {
                            console.log('event', event.target.value)
                            setTypeUser(event.target.value);
                        }}>
                            <option value="Comum">Comum</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </Form.Group>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '1rem' }}>
                        <Button variant="primary" type='submit' className="btCadUser">Cadastrar-se</Button>{' '}
                        <Link style={{ padding: '1rem', textDecoration: 'none' }} to='/ ' className="linkVoltar">Voltar</Link>{' '}
                    </div>
                </Form>
            </div>
        </div>
    );

}

export default FormsCad;
