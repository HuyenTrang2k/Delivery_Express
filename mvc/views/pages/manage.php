<?php
$isShow = false;
if (isset($data["EmployerList"]) and $data["EmployerList"] != false) {
    $isShow = true;
    $listEmployer = $data["EmployerList"];
}

if (isset($data["error"])) {
    $error = $data["error"];
}

$error = "";
?>

<script src="<?= $root . "public/myscript.js" ?>"></script>

<div class="col-lg-12 shadow p-2 mb-3 bg-light rounded">
    <h5 class="text-center my-3">DANH SÁCH NHÂN VIÊN</h5>
    <div class="d-flex flex-row-reverse">
        <a role="button" aria-pressed="true" class="mb-3" data-toggle="modal" data-target="#newEmployer">
            <button class="btn btn-primary">
                Thêm nhân viên
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </button>
        </a>
    </div>
    <table class="table text-center table-hover">
        <thead>
        <tr>
            <th scope="col">STT</th>
            <th scope="col">Mã nhân viên</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Ngày sinh</th>
            <th scope="col">Email</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Thâm niên</th>
        </tr>
        </thead>
        <tbody>
        <?php

        if ($isShow) {
            $number = 1;
            while ($row = $listEmployer->fetch_assoc()) {
                $id = $row["IdNv"];
                ?>
                <tr id="<?= $id ?>" class="table-row-employer">
                    <th scope="row"><?= $number ?></th>
                    <td><?= $id ?></td>
                    <td><?= $row["LastName"] . " " . $row["FirstName"] ?></td>
                    <td><?= $row["DOB"] ?></td>
                    <td><?= $row["Email"] ?></td>
                    <td><?= $row["Phone"] ?></td>
                    <td><?= $row["Senior"] ?></td>
                </tr>
                <?php
                $number++;
            }
        } else { ?>
            <td colspan="6">Chua co nhan vien</td>
            <?php
        }
        ?>
        </tbody>
    </table>
</div>

<!-- Tạo mới nhân viên -->
<div class="modal fade" id="newEmployer" tabindex="-1" role="dialog" aria-labelledby="newEmployerLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="newEmployerLabel">Thêm nhân viên mới</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form action="<?= $root . "Home/NewEmployer" ?>" method="post" onsubmit="return checkManage()">
                <div class="modal-body">
                    <div class="form-group">
                        <input name="fullname" type="text" class="form-control" id="fullname" placeholder="Nhập họ và tên" onkeypress="clearError()">
                    </div>
                    <div class="form-group">
                        <input name="phone" type="text" class="form-control" id="phone1" placeholder="Nhập số điện thoại" onkeypress="clearError()">
                    </div>
                    <div class="form-group">
                        <input name="address" type="text" class="form-control" id="address" placeholder="Nhập địa chỉ" onkeypress="clearError()">
                    </div>
                    <div class="form-group">
                        <input name="dob" type="text" class="form-control" id="dob" placeholder="Nhập ngày sinh" onkeypress="clearError()">
                    </div>
                    <div class="form-group">
                        <input name="email" type="text" class="form-control" id="email" placeholder="Nhập địa chỉ email" onkeypress="clearError()">
                    </div>
                    <div class="form-group">
                        <select class="form-control" name="permission" id="permission" class="w-100" onkeypress="clearError()">
                            <option value="" selected disabled hidden>Chọn phòng ban</option>
                            <option value="1">Quản lý hệ thống</option>
                            <option value="2">Nhân viên kho</option>
                            <option value="3">Nhân viên xử lý đơn hàng</option>
                        </select>
                    </div>
                    <div class="form-group row">
                        <div class="input-group mb-3 col-md-6">
                            <div class="input-group-append">
                                <span class="input-group-text">Tài khoản</span>
                            </div>
                            <input name="username" type="text" class="form-control" id="username" placeholder="Tên tài khoản" onkeypress="clearError()">
                        </div>

                        <div class="input-group mb-3 col-md-6">
                            <div class="input-group-append">
                                <span class="input-group-text">Mật khẩu</span>
                            </div>
                            <input name="password" type="password" class="form-control" id="password" placeholder="Mật khẩu" onkeypress="clearError()">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy bỏ</button>
                    <button type="submit" class="btn btn-primary">Thêm nhân viên</button>
                </div>
                <div style="padding: 0 0 20px 10px" id="error_manage"><?= $error ?></div>
            </form>
        </div>
    </div>
</div>
