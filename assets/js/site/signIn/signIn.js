form('templateSignIn', 'post', 'signInComponent')

titleForm('titleSingIn', 'Acesse sua conta', 'templateSignIn')

formBody('formSignIn', 'templateSignIn');

btnForm('buttonSubmitForm', 'Entrar', 'templateSignIn');

inputsForms('emailSingInContent', 'email', 'email', 'emailSingIn', 'Digite seu email', 'formSignIn');
inputsForms('pwSingInContent', 'password', 'password', 'pwSingIn', 'Digite sua senha', 'formSignIn');

console.log('ola')