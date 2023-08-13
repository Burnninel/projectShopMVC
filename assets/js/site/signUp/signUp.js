form('templateSignUp', 'post', 'signUpComponent')

titleForm('titleSingUp', 'Criar uma conta', 'templateSignUp')

formBody('form', 'templateSignUp');

inputsForms('myName', 'text', 'name', 'name', 'insira seu nome', 'form');
inputsForms('myLastName', 'text', 'lastname', 'lastname', 'insira seu sobrenome', 'form');
inputsForms('myEmail', 'email', 'email', 'email', 'insira seu email', 'form');
inputsForms('myPassword', 'password', 'password', 'password', 'insira sua senha', 'form');

btnForm('btnCreateAccount', 'Enviar', 'form');