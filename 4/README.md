# Nhóm 4 kiểm thử cypress
## Thành viên:
<p>1, Nguyễn Kim Hùng</p>
<p>2, Nguyễn Thị Khanh</p>
<p>3, Nguyễn Trọng Thưởng</p>
<p>4, Đỗ Thị Hương</p>

## Chức năng: Tham gia làm bài tập trên hoclieu.vn.
## Chú ý:

  - Install Cypress: npm install cypress --save-dev

  - Để chạy được cần cho file test.spec.js vào trong thu mục cypress\integration\examples
  
  - Để Cypress chạy được với https, cần sửa file cypress.json như sau:
  { "chromeWebSecurity": false }
  
  - Nếu chạy bị lỗi exception thì thêm vào file cypress/support/index.js dòng sau:
   Cypress.on('uncaught:exception', (err, runnable) => { return false })
### Chạy test
  - Vào cmd chuyển đến thư mục gốc cài cypress
  - Gõ lệnh npx cypress open,màn hình cypress hiện ra 
  - Chọn file test.spec.js xem kết quả các ca test.