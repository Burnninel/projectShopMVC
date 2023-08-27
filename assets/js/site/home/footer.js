function svgSocialFooter(svg) {
    var img = `<img src="${PATH}/assets/img/svg/${svg}.svg" alt="" class="svgSocialFooter">`
    $('#svgSocialFooter').append(img);
};

function interactiveElementsFooter() {
    var titleCreateAccount = 'Crie uma conta';
    var btnCreateAccount = 'cadastre-se aqui';
    var titleSocial = 'Siga-nos nas redes sociais';
    var titlepromotions = 'fique por dentro das novidade e promoções';

    var interactiveElementsFooter = 
                                    `
                                    <div id="interactiveElementsFooter" class="">
                                        <div id="createAccountFooter" class="itensFooter">
                                            <h2 class="titleFooter">${titleCreateAccount}</h2>
                                            <div id="containerCreateFooter">
                                                <button id="btnCreateAccountFooter">${btnCreateAccount}</button>
                                            </div>
                                        </div>
                                        <div id="socialFooter" class="itensFooter">
                                            <h2 class="titleFooter">${titleSocial}</h2>
                                            <div id="svgSocialFooter"> </div>
                                        </div>
                                        <div id="promotionsFooter" class="itensFooter">
                                            <h2 class="titleFooter">${titlepromotions}</h2>
                                            <div id="formFooter">
                                                <input id="inputFooter" type="text" placeholder="Digite seu e-mail...">
                                                <button type="button" id="btnFooter">Enviar</button>
                                            </div>
                                        </div>
                                    </div>
                                    `;

    $('#footerHome').append(interactiveElementsFooter);

    svgSocialFooter('logo-instagram');
    svgSocialFooter('logo-facebook');
    svgSocialFooter('logo-twitter');
    svgSocialFooter('logo-linkedin');
    svgSocialFooter('logo-gmail');

};

interactiveElementsFooter();

function infoFooter() {
    var ie = '999.999.99-9';
    var cnpj = '99.999.999/9999-99';
    var cep = '99999-999';
    var state = 'Estado - BR';

    var infoFooter = 
                    `
                    <div id="infoFooter">
                        <span id="infoShopFooter">CNPJ: ${cnpj} | IE: ${ie} | CEP: ${cep} | ${state}</span>
                        <span id="infoWebShopFooter">Todos os direitos reservados. Eventuais promoções, descontos e prazos de pagamento expostos aqui são válidos apenas para compras via internet.</span>
                    </div>

                    <div id="logoFooter">StreetSoul</div>
                    
                    `;

    $('#footerHome').append(infoFooter);
};

infoFooter();