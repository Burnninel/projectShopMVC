function addHeaderAccountSVG() {
    var svg = `
        <svg xmlns="http://www.w3.org/2000/svg" id="svgExit" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
    `;

    $('.item-dropdown').append(svg);
};

function setupHoverEffect() {
    $('.item-dropdown').hover(
        function () {
            $(this).css('color', '#ec2626');
            $('#signOut').css('color', '#ec2626');
        },
        function () {
            $(this).css('color', '#fff');
            $('#signOut').css('color', '#fff');
        }
    );
};

function addSignOutButton() {
    var item = `<form method="post" id="formSignOut" class="item-dropdown">
                    <button type="button" id="signOut">Sair</button>
                </form>`;
    $('.dropdown-menu').append(item);
};


function handleSignOut() {
    $(document).on('click', '#signOut', function () {
        const form = $('#formSignOut');

        $.ajax({
            url: 'http://localhost/shopMVC/signOut',
            type: 'POST',
            data: form.serialize(),
            dataType: 'json',
            complete: function (response) {
                setTimeout(function () {
                    $('body').html(` 
                        <div id="bodyLoading">
                            <span class="loader"></span>
                        </div>
                    `);
                });

                setTimeout(function () {
                    window.location.href = 'http://localhost/shopMVC/signIn';
                }, 3000);
            }
        });
    });
};

function initializePage() {
    addSignOutButton();
    addHeaderAccountSVG();
    setupHoverEffect();
    handleSignOut();
};

initializePage();