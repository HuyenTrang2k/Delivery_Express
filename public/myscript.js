$(document).ready(function() {
    $(".delete_order").click(function () {
        let id = $(this).attr('id');
        console.log(id);

        $('#deleteOrder').modal('show');

        $('#sure').on('click', function () {
            window.location.replace("../../Home/DeleteOrder/" + id);
        });
    });

    $(".delete_employer").click(function () {
        let id = $(this).attr('id');

        $('#deleteEmployer').modal('show');

        $('#sure').on('click', function () {
            window.location.replace("../../Home/DeleteEmployer/" + id);
        });
    });

    $(".stock_out").click(function () {
        let id = $(this).attr('id');

        $('#export').modal('show');

        $('#sure').on('click', function () {
            window.location.replace("../Home/StockOut/" + id);
        })
    })

    $(".delete_request_stock_in").click(function () {
        let id = $(this).attr('id');

        $('#deleteRequest').modal('show');

        $('#sure').on('click', function () {
            window.location.replace("../../Home/DeleteRequest/" + id);
        });
    });

    $('.table-row-order').click(function () {
        let id = $(this).attr('id');
        window.location.replace("../Home/DetailOrder/" + id)
    });

    $('.table-row-employer').click(function () {
        let id = $(this).attr('id');
        window.location.replace("../Home/DetailEmployer/" + id)
    });

    $('.table-row-stock-in').click(function () {
        let id = $(this).attr('id');
        window.location.replace("../Home/DetailStockInRequest/" + id)
    });

    if ($(".change-permission-alert").length) {
        setTimeout(function () {
            $('.change-permission-alert').hide();
        }, 5000);
    }
})

function clearError() {
    document.getElementById("error_register").innerHTML = "";
    document.getElementById("error_login").innerHTML = "";
    document.getElementById("error_manage").innerHTML = "";
    document.getElementById("error_order").innerHTML = "";
    document.getElementById("error_stock_in").innerHTML = "";
}

function checkRegister() {
    let usernameBox = document.getElementById('user');
    let passwordBox = document.getElementById('pass');
    let repasswordBox = document.getElementById('pass2');
    let firstnameBox = document.getElementById('firstname');
    let lastnameBox = document.getElementById('lastname');
    let emailBox = document.getElementById('email');
    let phoneBox = document.getElementById('phone');/////////////////////////////////////////////
    let birthdayBox = document.getElementById('birthday');
    let genderBox = document.getElementById("gender");
    let addressBox = document.getElementById("address");
    let error = document.getElementById("error_register");

    let username = usernameBox.value.trim();
    let password = passwordBox.value;
    let repassword = repasswordBox.value;
    let firstname = firstnameBox.value.trim();
    let lastname = lastnameBox.value.trim();
    let email = emailBox.value.trim();
    let phone = phoneBox.value;
    let birthday = birthdayBox.value;
    let gender = genderBox.value;
    let address = addressBox.value;

    error.style.color = "red";
    if (lastname.length === 0) {
        error.innerHTML = "H??? ng?????i d??ng b??? tr???ng";
        lastnameBox.focus();
    }
    else if (firstname.length === 0) {
        error.innerHTML = "T??n ng?????i d??ng b??? tr???ng";
        firstnameBox.focus();

    } else if (email.length === 0) {
        error.innerHTML = "Email ng?????i d??ng b??? tr???ng";
        emailBox.focus();

    } else if (username.length === 0) {
        error.innerHTML = "T??n t??i kho???n ng?????i d??ng b??? tr???ng";
        usernameBox.focus();

    } else if (username.length < 6 || username.length > 15) {
        error.innerHTML = "T??n t??i kho???n n??n c?? t??? 6 t???i 15 k?? t???";
        usernameBox.focus();
    }
    else if (password.length === 0) {
        error.innerHTML = "M???t kh???u ng?????i d??ng b??? tr???ng";
        passwordBox.focus();

    } else if (password.length < 6 || password.length > 15) {
        error.innerHTML = "M???t kh???u n??n c?? t??? 6 t???i 15 k?? t???";
        passwordBox.focus();

    } else if (repassword !== password) {
        error.innerHTML = "M???t kh???u kh??ng tr??ng kh???p";
        repasswordBox.focus();

    }
    else if (address.length === 0) {
        error.innerHTML = "?????a ch??? ng?????i d??ng b??? tr???ng";
        addressBox.focus();
    }
    else if (phone.length === 0) {
        error.innerHTML = "S??? ??i???n tho???i ng?????i d??ng b??? tr???ng";
        phoneBox.focus();

    }
    else if (gender.length === 0 ) {
        error.innerHTML = "Gi???i t??nh ng?????i d??ng b??? tr???ng";
        genderBox.focus();

    } else if (birthday === "") {
        error.innerHTML = "Ng??y sinh ng?????i d??ng b??? tr???ng";
        birthdayBox.focus();

    } else {
        return true;
    }
    return false;
}

function checkStock_in() {
    let request_idBox = document.getElementById('request_id');
    let noteBox = document.getElementById('note');
    let stockBox = document.getElementById('stock');
    let error = document.getElementById("error_stock_in");

    let request_id = request_idBox.value;
    let note = noteBox.value;
    let stock = stockBox.value;

    error.style.color = "red";
    if (request_id.length === 0) {
        error.innerHTML = "M?? ????n h??ng b??? tr???ng";
        request_idBox.focus();
    }
    else if (note.length === 0) {
        error.innerHTML = "Ghi ch?? b??? tr???ng";
        noteBox.focus();

    } else if (stock.length === 0) {
        error.innerHTML = "Kho l??u tr??? b??? tr???ng";
        stockBox.focus();

    } else {
        return true;
    }
    return false;
}

function checkLogin() {
    let usernameBox = document.getElementById('username');
    let passwordBox = document.getElementById('password');
    let error = document.getElementById("error_login");

    let username = usernameBox.value;
    let password = passwordBox.value;

    error.style.color = "red";
    if (username.length === 0) {
        error.innerHTML = "T??n ng?????i d??ng b??? tr???ng";
        usernameBox.focus();
    }

    else if (password.length === 0) {
        error.innerHTML = "M???t kh???u ng?????i d??ng b??? tr???ng";
        passwordBox.focus();

    } else if (password.length < 6 || password.length > 15) {
        error.innerHTML = "M???t kh???u ph???i c?? t??? 6 t???i 15 k?? t???";
        passwordBox.focus();

    } else {
        return true;
    }
    return false;
}

function checkOrder() {
    let fullnameBox = document.getElementById('fullname');
    let phoneBox = document.getElementById('phone2'); ////////////////////////////////////////////////////
    let addressBox = document.getElementById('address');
    let weightBox = document.getElementById('weight');
    let collectBox = document.getElementById('collect');
    let error = document.getElementById("error_order");

    let fullname = fullnameBox.value;
    let phone = phoneBox.value;
    let address = addressBox.value;
    let weight = weightBox.value;
    let phone2 = phoneBox.value;
    let collect = collectBox.value;

    error.style.color = "red";
    if (fullname.length === 0) {
        error.innerHTML = "H??? t??n ng?????i nh???n b??? tr???ng";
        fullnameBox.focus();
    }
    else if (phone.length === 0) {
        error.innerHTML = "S??? ??i???n tho???i ng?????i nh???n b??? tr???ng";
        phoneBox.focus();

    } else if (address.length === 0) {
        error.innerHTML = "?????a ch??? ng?????i nh???n b??? tr???ng";
        addressBox.focus();

    } else if (weight.length === 0) {
        error.innerHTML = "Tr???ng l?????ng ????n h??ng b??? tr???ng";
        weightBox.focus();

    } else if (collect.length === 0) {
        error.innerHTML = "Chi ph?? thu h??? b??? tr???ng";
        collectBox.focus();

    } else {
        return true;
    }
    return false;
}

function checkManage() {
    let fullnameBox = document.getElementById('fullname');
    let phoneBox = document.getElementById('phone1'); //////////////////////////////////////////////////////////////
    let addressBox = document.getElementById('address');
    let dobBox = document.getElementById('dob');
    let emailBox = document.getElementById('email');
    let permissionBox = document.getElementById('permission');
    let usernameBox = document.getElementById('username');
    let passwordBox = document.getElementById('password');
    let error = document.getElementById("error_manage");

    let fullname = fullnameBox.value;
    let phone1 = phoneBox.value;
    let address = addressBox.value;
    let dob = dobBox.value;
    let email = emailBox.value;
    let permission = permissionBox.value;
    let username =usernameBox.value;
    let password = passwordBox.value;

    error.style.color = "red";
    if (fullname.length === 0) {
        error.innerHTML = "H??? v?? t??n nh??n vi??n b??? tr???ng";
        fullnameBox.focus();
    }
    else if (phone.length === 0) {
        error.innerHTML = "S??? ??i???n tho???i nh??n vi??n b??? tr???ng";
        phoneBox.focus();

    } else if (address.length === 0) {
        error.innerHTML = "?????a ch??? nh??n vi??n b??? tr???ng";
        addressBox.focus();

    } else if (dob.length === 0) {
        error.innerHTML = "Ng??y sinh nh??n vi??n b??? tr???ng";
        dobBox.focus();

    } else if (email.length === 0) {
        error.innerHTML = "?????a ch??? email nh??n vi??n b??? tr???ng";
        emailBox.focus();
    }
    else if (permission.length === 0) {
        error.innerHTML = "Ph??ng ban b??? tr???ng";
        permissionBox.focus();

    } else if (username.length === 0) {
        error.innerHTML = "T??n t??i kho???n nh??n vi??n b??? tr???ng";
        usernameBox.focus();
    } else if (username.length < 6 || username.length > 15) {
        error.innerHTML = "T??n t??i kho???n n??n c?? t??? 6 t???i 15 k?? t???";
        usernameBox.focus();

    } else if (password.length === 0) {
        error.innerHTML = "M???t kh???u nh??n vi??n b??? tr???ng";
        passwordBox.focus();

    } else if (password.length < 6 || password.length > 15) {
        error.innerHTML = "M???t kh???u n??n c?? t??? 6 t???i 15 k?? t???";
        passwordBox.focus();

    } else {
        return true;
    }
    return false;
}