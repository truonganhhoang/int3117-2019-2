# Hướng dẫn sử dụng Cypress chạy ca kiểm thử Tạo nhóm lớp 

Môi trường: Window 10

Yêu cầu: Máy tính cần có công cụ npm

Chuẩn bị:
- Thay đổi thư mục hiện tại đến thư mục 'Nhom6' và cài đặt thư viện: 
```sh
${ProjectLocation}> cd Nhom6
${ProjectLocation}\Nhom6> npm install
```

Chạy test bằng lệnh:

```sh
${ProjectLocation}\Nhom6> npm test
```

hoặc

```sh
${ProjectLocation}\Nhom6> npx cypress run --spec "cypress/integration/test_create_group.js"
```
