# Dự Án Du Lịch

Dự án du lịch của bạn được xây dựng với các công nghệ hiện đại và cung cấp nhiều tính năng hữu ích để quản lý người dùng, sự kiện, nhóm du lịch và nhiều hơn nữa. Dưới đây là chi tiết về các công nghệ sử dụng và các tính năng chính của dự án.

## Nội Dung

- Công Nghệ Sử Dụng
  - Frontend
  - CI/CD
  - Testing
  - CSS Frameworks
  - Deployment
- Tính Năng Chính
  - Xác Thực và Quản Lý Người Dùng
  - Điều Hướng và Giao Diện
  - Trang Dashboard
  - Trang Sự Kiện
  - Trang Nhóm
  - Trang Cài Đặt
  - Thông Báo
  - Tìm Kiếm
  - API và Quản Lý Trạng Thái
  - Responsive Design
  - Kiểm Thử

## Công Nghệ Sử Dụng

### Frontend

- React: Thư viện JavaScript để xây dựng giao diện người dùng.
- React Router: Quản lý điều hướng trong ứng dụng React.
- React Redux: Quản lý trạng thái ứng dụng.
- Redux Thunk: Middleware cho Redux để xử lý các hành động bất đồng bộ.
- Redux Persist: Lưu trữ trạng thái Redux trong `localStorage`.
- Redux State Sync: Đồng bộ trạng thái Redux giữa các tab trình duyệt.
- React Bootstrap: Thư viện giao diện người dùng dựa trên Bootstrap cho React.
- React Toastify: Hiển thị thông báo toast trong ứng dụng React.
- React Transition Group: Quản lý các hiệu ứng chuyển đổi trong React.
- Swiper: Thư viện tạo slider/carousel.

### CI/CD

- GitHub Actions: Tự động hóa quy trình CI/CD, bao gồm test và deploy lên GitHub Pages.

### Testing

- @testing-library/react: Thư viện test cho React.
- @testing-library/jest-dom: Thư viện mở rộng cho Jest để test DOM.

### CSS Frameworks

- Bootstrap: Framework CSS phổ biến.

### Deployment

- GitHub Pages: Nền tảng để deploy các trang web tĩnh.

## Tính Năng Chính

### Xác Thực và Quản Lý Người Dùng

- Đăng ký: Người dùng có thể đăng ký tài khoản mới thông qua form đăng ký hoặc sử dụng tài khoản Google/Facebook.
  - File liên quan: `src/components/Auth/Register.jsx`
- Đăng nhập: Người dùng có thể đăng nhập vào hệ thống.
- Đăng xuất: Người dùng có thể đăng xuất khỏi hệ thống.
- Quản lý hồ sơ: Người dùng có thể chỉnh sửa thông tin cá nhân.
  - File liên quan: `src/pages/EditProfile.jsx`

### Điều Hướng và Giao Diện

- Điều hướng: Sử dụng React Router để điều hướng giữa các trang.
  - File liên quan: `src/App.jsx`
- Giao diện người dùng: Sử dụng React Bootstrap để xây dựng các thành phần giao diện người dùng như Navbar, Footer, Modal, Button, v.v.
  - File liên quan: `src/components/Shared/NavBar.jsx`, `src/components/Shared/Footer.jsx`

### Trang Dashboard

- Hiển thị điểm đến: Hiển thị danh sách các điểm đến du lịch nổi bật.
  - File liên quan: `src/pages/Dashboard.jsx`
- Hiển thị thông tin host: Hiển thị thông tin các host (người tổ chức) du lịch.
  - File liên quan: `src/components/Dashboard/HostCard.jsx`

### Trang Sự Kiện

- Hiển thị sự kiện: Hiển thị danh sách các sự kiện du lịch.
  - File liên quan: `src/pages/Event.jsx`

### Trang Nhóm

- Hiển thị nhóm: Hiển thị danh sách các nhóm du lịch.
  - File liên quan: `src/pages/Group.jsx`

### Trang Cài Đặt

- Cài đặt tài khoản: Người dùng có thể thay đổi các cài đặt tài khoản.
  - File liên quan: `src/pages/Setting.jsx`

### Thông Báo

- Hiển thị thông báo: Sử dụng React Toastify để hiển thị thông báo cho người dùng.
  - File liên quan: `src/App.jsx`

### Tìm Kiếm

- Tìm kiếm điểm đến: Người dùng có thể tìm kiếm các điểm đến du lịch.

### API và Quản Lý Trạng Thái

- Gọi API: Sử dụng Axios để gọi API và lấy dữ liệu từ server.
  - File liên quan: `src/pages/Dashboard.jsx`
- Quản lý trạng thái: Sử dụng Redux để quản lý trạng thái ứng dụng.
  - File liên quan: `src/redux/reducers/authReducer.js`

### Responsive Design

- Thiết kế responsive: Sử dụng CSS và Bootstrap để đảm bảo giao diện hiển thị tốt trên các thiết bị khác nhau.
  - File liên quan: `src/assets/css/Shared/NavBar.css`, `src/assets/css/DashBoard/Dashboard.css`

### Kiểm Thử

- Kiểm thử frontend: Sử dụng các thư viện testing như `@testing-library/react` và `@testing-library/jest-dom` để đảm bảo chất lượng mã nguồn.


