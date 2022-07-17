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
        error.innerHTML = "Họ người dùng bỏ trống";
        lastnameBox.focus();
    }
    else if (firstname.length === 0) {
        error.innerHTML = "Tên người dùng bỏ trống";
        firstnameBox.focus();

    } else if (email.length === 0) {
        error.innerHTML = "Email người dùng bỏ trống";
        emailBox.focus();

    } else if (username.length === 0) {
        error.innerHTML = "Tên tài khoản người dùng bỏ trống";
        usernameBox.focus();

    } else if (username.length < 6 || username.length > 15) {
        error.innerHTML = "Tên tài khoản nên có từ 6 tới 15 ký tự";
        usernameBox.focus();
    }
    else if (password.length === 0) {
        error.innerHTML = "Mật khẩu người dùng bỏ trống";
        passwordBox.focus();

    } else if (password.length < 6 || password.length > 15) {
        error.innerHTML = "Mật khẩu nên có từ 6 tới 15 ký tự";
        passwordBox.focus();

    } else if (repassword !== password) {
        error.innerHTML = "Mật khẩu không trùng khớp";
        repasswordBox.focus();

    }
    else if (address.length === 0) {
        error.innerHTML = "Địa chỉ người dùng bỏ trống";
        addressBox.focus();
    }
    else if (phone.length === 0) {
        error.innerHTML = "Số điện thoại người dùng bỏ trống";
        phoneBox.focus();

    }
    else if (gender.length === 0 ) {
        error.innerHTML = "Giới tính người dùng bỏ trống";
        genderBox.focus();

    } else if (birthday === "") {
        error.innerHTML = "Ngày sinh người dùng bỏ trống";
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
        error.innerHTML = "Mã đơn hàng bỏ trống";
        request_idBox.focus();
    }
    else if (note.length === 0) {
        error.innerHTML = "Ghi chú bỏ trống";
        noteBox.focus();

    } else if (stock.length === 0) {
        error.innerHTML = "Kho lưu trữ bỏ trống";
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
        error.innerHTML = "Tên người dùng bỏ trống";
        usernameBox.focus();
    }

    else if (password.length === 0) {
        error.innerHTML = "Mật khẩu người dùng bỏ trống";
        passwordBox.focus();

    } else if (password.length < 6 || password.length > 15) {
        error.innerHTML = "Mật khẩu phải có từ 6 tới 15 ký tự";
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
        error.innerHTML = "Họ tên người nhận bỏ trống";
        fullnameBox.focus();
    }
    else if (phone.length === 0) {
        error.innerHTML = "Số điện thoại người nhận bỏ trống";
        phoneBox.focus();

    } else if (address.length === 0) {
        error.innerHTML = "Địa chỉ người nhận bỏ trống";
        addressBox.focus();

    } else if (weight.length === 0) {
        error.innerHTML = "Trọng lượng đơn hàng bỏ trống";
        weightBox.focus();

    } else if (collect.length === 0) {
        error.innerHTML = "Chi phí thu hộ bỏ trống";
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
        error.innerHTML = "Họ và tên nhân viên bỏ trống";
        fullnameBox.focus();
    }
    else if (phone.length === 0) {
        error.innerHTML = "Số điện thoại nhân viên bỏ trống";
        phoneBox.focus();

    } else if (address.length === 0) {
        error.innerHTML = "Địa chỉ nhân viên bỏ trống";
        addressBox.focus();

    } else if (dob.length === 0) {
        error.innerHTML = "Ngày sinh nhân viên bỏ trống";
        dobBox.focus();

    } else if (email.length === 0) {
        error.innerHTML = "Địa chỉ email nhân viên bỏ trống";
        emailBox.focus();
    }
    else if (permission.length === 0) {
        error.innerHTML = "Phòng ban bỏ trống";
        permissionBox.focus();

    } else if (username.length === 0) {
        error.innerHTML = "Tên tài khoản nhân viên bỏ trống";
        usernameBox.focus();
    } else if (username.length < 6 || username.length > 15) {
        error.innerHTML = "Tên tài khoản nên có từ 6 tới 15 ký tự";
        usernameBox.focus();

    } else if (password.length === 0) {
        error.innerHTML = "Mật khẩu nhân viên bỏ trống";
        passwordBox.focus();

    } else if (password.length < 6 || password.length > 15) {
        error.innerHTML = "Mật khẩu nên có từ 6 tới 15 ký tự";
        passwordBox.focus();

    } else {
        return true;
    }
    return false;
}