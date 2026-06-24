---
name: gswitch
description: Google account switcher for Antigravity CLI. Giúp bạn lưu trữ nhiều tài khoản Google khác nhau và dễ dàng chuyển đổi qua lại khi một tài khoản bị hết hạn ngạch (quota limit).
---

# Antigravity Google Account Switcher (`gswitch`)

Skill này cho phép Antigravity Agent và người dùng quản lý nhiều tài khoản Google hoạt động trên Antigravity CLI (`agy`). Khi một tài khoản hết quota, bạn có thể dễ dàng chuyển sang tài khoản khác có sẵn để tiếp tục công việc mà không bị gián đoạn.

## Các Công cụ Khả dụng

1. **`gswitch_list_accounts`**
   - **Mô tả**: Liệt kê toàn bộ các tài khoản Google đã được lưu trong profiles và đánh dấu tài khoản nào đang hoạt động (`★ [ACTIVE]`).
   - **Khi nào sử dụng**: Dùng để kiểm tra danh sách tài khoản hiện có và xem tài khoản hiện tại là gì.

2. **`gswitch_add_current_account`**
   - **Mô tả**: Đọc token phiên đăng nhập Google hiện tại đang hoạt động trên Antigravity CLI, xác thực email của tài khoản này và lưu nó vào danh sách profile.
   - **Khi nào sử dụng**: Chạy công cụ này sau khi bạn vừa đăng nhập tài khoản mới bằng trình duyệt qua flow của `agy` để lưu tài khoản đó vào danh sách gswitch.

3. **`gswitch_prepare_login`**
   - **Mô tả**: Dọn dẹp và sao lưu phiên đăng nhập hiện tại. Sau khi gọi công cụ này, ở câu lệnh hoặc phiên chạy tiếp theo của `agy`, hệ thống sẽ yêu cầu bạn mở trình duyệt đăng nhập tài khoản Google mới.
   - **Khi nào sử dụng**: Dùng khi bạn muốn thêm một tài khoản Google mới vào danh sách.

4. **`gswitch_switch_account`**
   - **Mô tả**: Chuyển tài khoản Google đang hoạt động của Antigravity CLI sang một email đã được lưu từ trước.
   - **Tham số**:
     - `email` (string, required): Địa chỉ email của tài khoản muốn chuyển đổi.
   - **Khi nào sử dụng**: Khi tài khoản hiện tại hết quota (hết lượt sử dụng API), hãy gọi công cụ này để đổi sang tài khoản phụ.

5. **`gswitch_remove_account`**
   - **Mô tả**: Xóa profile tài khoản đã lưu khỏi danh sách.
   - **Tham số**:
     - `email` (string, required): Email của tài khoản cần xóa.

## Hướng dẫn Quy trình Thêm Tài khoản Mới

Để thêm một tài khoản Google mới vào danh sách chuyển đổi, hãy thực hiện các bước sau:
1. Đảm bảo tài khoản hiện tại đã được lưu: Gọi `gswitch_add_current_account`.
2. Chuẩn bị đăng nhập tài khoản mới: Gọi `gswitch_prepare_login`.
3. Khởi động lại hoặc thực thi một prompt với `agy` để CLI kích hoạt luồng đăng nhập OAuth qua trình duyệt.
4. Sau khi đăng nhập thành công tài khoản mới, gọi `gswitch_add_current_account` để lưu tài khoản mới này.
5. Giờ đây bạn có thể dùng `gswitch_switch_account` để chuyển qua lại giữa các tài khoản!
