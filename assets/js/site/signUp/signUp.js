form('templateSignUp', 'post', 'signUpComponent')

titleForm('titleSingUp', 'Criar uma conta', 'templateSignUp')

formBody('form', 'templateSignUp');

inputsForms('nameComponent', 'text', 'name', 'name', 'insira seu nome', 'form');
inputsForms('lastnameComponent', 'text', 'lastname', 'lastname', 'insira seu sobrenome', 'form');
inputsForms('emailComponent', 'email', 'email', 'email', 'insira seu email', 'form');
inputsForms('passwordComponent', 'password', 'password', 'password', 'insira sua senha', 'form');

btnForm('btnCreateAccount', 'Enviar', 'form');