// Toggle đổi mật khẩu
const changePassBtn = document.getElementById("changePasswordBtn");
const passwordBox = document.getElementById("passwordBox");

changePassBtn.addEventListener("click", () => {
    passwordBox.classList.toggle("active");
});

// Submit cập nhật tài khoản
const confirmBtn = document.getElementById("confirmAccountBtn");

confirmBtn.addEventListener("click", () => {
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validate cơ bản
    if (!phone || !email) {
        alert("Vui lòng nhập đầy đủ SĐT và Email");
        return;
    }

    if (passwordBox.classList.contains("active")) {
        if (!currentPassword || !newPassword || !confirmPassword) {
            alert("Vui lòng nhập đầy đủ thông tin đổi mật khẩu");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Mật khẩu xác nhận không khớp");
            return;
        }
    }

    // 📦 DATA GỬI BACKEND (SQL SAU NÀY)
    const accountData = {
        phone: phone,
        email: email,
        changePassword: passwordBox.classList.contains("active"),
        currentPassword: currentPassword || null,
        newPassword: newPassword || null
    };

    console.log("DATA GỬI BACKEND:", accountData);

    // Sau này chỉ cần mở đoạn này
    /*
    fetch("/api/account/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(accountData)
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => console.error(err));
    */

    alert("Dữ liệu hợp lệ – sẵn sàng gửi backend");
});
