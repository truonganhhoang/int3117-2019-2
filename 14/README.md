<h3>Nhóm 14 </h3>
<h4>Thành Viên</h4>
1. Nguyễn Thị Vân Anh <br/>
2. Đỗ Minh Anh <br/>
3. Trần Thị Thu Trang <br/>
<h4>Chức năng: Chỉnh sửa tên thư mục / bộ câu hỏi </h4>
<h4>1. Phân vùng tương đương</h4>
-Phân vùng tương đương là phương pháp kiểm thử hộp đen chia miền đầu vào của một chương trình thành các lớp dữ liệu, từ đó suy dẫn ra các ca kiểm thử.<br/>
-Lớp tương đương hợp lệ mô tả các đầu vào hợp lệ của chương trình, và lớp tương đương không hợp lệ mô tả tất cả các trạng thái có thể khác của điều kiện.<br/>
<h4>2.Kiểm thử chỉnh sửa tên thư mục/ bộ câu hỏi</h4>
<strong>*Áp dụng phân vùng tương đương ta có:</strong><br/>
+Các lớp tương đương hợp lệ:<br/>
- Nhập vào các ký tự là chữ, số, khoảng trắng và dấu gạch dưới<br/>
- Nhập vào chuỗi ký tự với chiều dài nhỏ hơn 50 lớn hơn 0<br/>
- Nhập vào ký tự viết Hoa<br/>
- Không thay đổi mà cập nhập luôn<br/>
+Các lớp tương đương không hợp lệ<br/>
- Bắt đầu bằng '_'<br/>
- Nhập các ký tự có chứa ký tự đặc biệt như @, &,..<br/>
- Nhập vào các ký tự có độ dài hơn 50 <br/>
- Nhập vào chuỗi có độ dài là 0<br/>
- Đổi tên với tên đã tồn tại<br/>
<strong>* Ta chọn được các testcase sau:</strong><br/>
ten_thu_muc  123    ->hợp lệ<br/>
_t ->không hợp lệ<br/>
Không thay đổi mà cập nhập luôn -> hợp lệ<br/>
abcyz12435abcyz12435abcyz12435abcyz12455abcyz12435abcyz12435
ten_thu_muc@ -> không hợp lệ<br/>
chuỗi có độ dài 0 -> không hợp lệ<br/>
Đổi tên trùng tên đã tồn tại ->không hợp lệ<br/>
<h4>Để chạy test </h4>
1. Tạo 1 folder<br/>
2. mở cmd tại folder gõ lệnh npm init và npm install cypress<br/>
3. Đặt file test vào thư mục integration trong cypress của thư mục<br/>
4. mở cypress bằng lệnh npx cypress open<br/>
5. tìm file test rồi click vào<br/>
hoặc nếu bạn có sẵn folder chứa cypress thì chỉ cần ném file test vào thư mục integration rồi mở cypress để chạy file test<br/>
<h4>Kết Quả </h4>
<img src="/14/testcase.png"/>
