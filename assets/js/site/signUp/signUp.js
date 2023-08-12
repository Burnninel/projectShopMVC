form('templateSignUp', '../php/validationCreateAccount', 'post', 'signUpComponent')

titleForm('titleSingUp', 'Criar uma conta', 'templateSignUp')

formBody('form', 'templateSignUp');

inputsForms('myName', 'text', 'name', 'name', 'insira seu nome', 'form');
inputsForms('myLastName', 'text', 'lastName', 'lastName', 'insira seu sobrenome', 'form');
inputsForms('myEmail', 'email', 'email', 'email', 'insira seu email', 'form');
inputsForms('myPassword', 'password', 'password', 'password', 'insira sua senha', 'form');

btnForm('createNewAccount', 'Enviar', 'form');