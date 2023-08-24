itemDropdownHeader('signInDropdown', 'Entrar');
itemDropdownHeader('signUp', 'Cadastre-se');

form('templateSignIn', 'post', 'signInComponent')

titleForm('titleSingIn', 'Acesse sua conta', 'templateSignIn')

formBody('formSignIn', 'templateSignIn');

btnForm('buttonSubmitForm', 'Entrar', 'templateSignIn');

inputsForms('emailSingInContent', 'email', 'email', 'emailSingIn', 'Digite seu email', 'formSignIn');
inputsForms('pwSingInContent', 'password', 'password', 'pwSingIn', 'Digite sua senha', 'formSignIn');