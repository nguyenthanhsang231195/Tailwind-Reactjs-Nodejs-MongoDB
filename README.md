I. Khởi tạo ReactJs và GitHub
1) Các npm thường dùng: npx create-react-app Frontend. cd Frontend ->
- npm install redux
- npm install react-redux
- npm install @reduxjs/toolkit
- npm install redux-thunk
- npm install react-router
- npm install react-router-dom
- npm react-elastic-carousel
- npm install styled-components
2) Tạo các file chứa data
- src/Data
- public/images/
3) Lưu ý nhớ chuyển file .gitignore và README.md ra ngoài folder frontend
4) Github:
- Tạo tài khoản
+ Làm theo các bước hướng dẫn:
- git init
- git add README.md (sau này dùng git add . = lấy tất cả các file)
- git commit -m "first commit" (đặt tên commit cho dễ nhớ)
- git branch -M main
- git remote add origin https://github.com/nguyenthanhsang231195/Tailwind-Reactjs-Nodejs-MongoDB.git
- git push -u origin main (sau này chỉ dùng git push)

II. Tailwind
1) npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
2) npm install @craco/craco
3) craco.config.js
4) npx tailwindcss-cli@latest init
5) Sửa file tailwind.config.js: purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
6) Sửa file index.css -> thêm file .env: SKIP_PREFLIGHT_CHECK = true

III. HeaderComponents
1) Navbar.js
2) Dropdown.js

IV. HomeScreen
1) HomeScreen.js
2) Footer.js

V. CategoryScreen - ProductScreen(I)
1) CategoryScreen.js
2) ProductScreen.js
3) Fix HomeScreen.js, Dropdown.js

V. CartScreen(I)

VI. Backend - REST API (I)
1) cd Backend -> npm init
2) npm install express
3) npm install moongoose
4) npm install dotenv
5) npm install nodemon
6) Thêm vào: "start": "nodemon Backend/index.js"(Tự cập nhật bên Backend)

VII. MongoDB
1) Tạo Database Access
2) IP Network Access
3) Giấu file liên kết .env