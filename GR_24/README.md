Tạo thư mục mới 
	* Cài đặt Cypress vào thư mục trên thông qua cmd: 
		npm init
		npm install cypress --save-dev
	* Tại thư mục vừa tạo: 
	- Copy tập tin 'test_notify.js' vào thư mục 'cypress/integration/'
	- Thêm dòng sau vào file cypress.json
		{ "chromeWebSecurity": false }
	* Thêm dòng sau vào file 'index.js' tại thư mục 'cypress/support/'
		Cypress.on('uncaught:exception', (err, runnable) => { return false })
	* Chạy lệnh sau trên cửa sổ cmd: npx cypress open