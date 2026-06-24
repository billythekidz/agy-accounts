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

2. **`gswitch_add_account`**
   - **Mô tả**: Công cụ 2 giai đoạn (stateful) để thêm một tài khoản mới:
     - **Giai đoạn 1** (khi chưa đăng ký tài khoản mới): Tự động sao lưu phiên đăng nhập hiện tại và chuẩn bị cho trình duyệt kích hoạt OAuth đăng nhập mới.
     - **Giai đoạn 2** (khi chạy lại sau khi đăng nhập): Quét token mới để lưu vào profile và dọn dẹp file tạm. Nếu không phát hiện đăng nhập mới, hệ thống tự động khôi phục (restore) lại token hoạt động trước đó.
   - **Khi nào sử dụng**: Chạy khi muốn thêm tài khoản Google mới vào danh sách.

3. **`gswitch_switch_account`**
   - **Mô tả**: Chuyển tài khoản Google đang hoạt động của Antigravity CLI sang một email đã được lưu từ trước.
   - **Tham số**:
     - `email` (string, required): Địa chỉ email của tài khoản muốn chuyển đổi.
   - **Khi nào sử dụng**: Khi tài khoản hiện tại hết quota (hết lượt sử dụng API), hãy gọi công cụ này để đổi sang tài khoản phụ.

4. **`gswitch_remove_account`**
   - **Mô tả**: Xóa profile tài khoản đã lưu khỏi danh sách.
   - **Tham số**:
     - `email` (string, required): Email của tài khoản cần xóa.

## Hướng dẫn Quy trình Thêm Tài khoản Mới

Để thêm một tài khoản Google mới vào danh sách chuyển đổi, hãy thực hiện các bước sau:
1. Chạy `gswitch_add_account` lần đầu. Hệ thống sẽ sao lưu tài khoản hiện tại và báo đã chuẩn bị xong.
2. Khởi động lại hoặc thực thi một prompt với `agy` để CLI kích hoạt luồng đăng nhập OAuth qua trình duyệt. Hoàn tất đăng nhập.
3. Chạy `gswitch_add_account` lần thứ hai để hệ thống xác nhận và lưu tài khoản mới thành profile.
*(Nếu bạn thay đổi ý định hoặc đăng nhập thất bại, việc chạy lại `gswitch_add_account` ở bước 3 khi chưa có token mới sẽ tự động khôi phục lại tài khoản ban đầu).*
