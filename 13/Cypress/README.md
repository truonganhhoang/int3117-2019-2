# Nhóm 13: Quản lý kết quả - Tài khoản học sinh
Thành viên:
  - Nguyễn Viết Chiến
  - Vương Quốc Cường
  - Nguyễn Văn Dũng
  - Trần Hải Dương
  - Ngô Đức Huy

Cài đặt:
  - Tạo thư mục mới CypressTest
  - Cài cypress qua cmd (cần npm - có thể cài nodejs)
    $npm init
    $npm install cypress --save-dev
  - Sau khi cài, trong thư mục CypressTest
    + Copy file test_exam_results.js vào cypress/integration
    + Thêm cuối file index.js trong cypress/support:
      Cypress.on('uncaught:exception', (err, runnable) => { return false; })
    + Thêm trong file cypress.json
      "chromeWebSecurity": false
    + Có thể tải 2 file trong thư mục và thay thế
  - Chạy lệnh sau trong cmd (cần npx: cài bằng $npm install -g npx)
    npx cypress open
  - Tìm mục test_exam_results.js và chạy trên cửa sổ cypress.
