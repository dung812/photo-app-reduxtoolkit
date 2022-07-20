# Giới thiệu dự án thực tế: Photo App

## Mục tiêu
Xây dựng một project mini đơn giản để ứng dụng kiến thức redux vào project ReactJS

- Đơn giản, không phức tạp
- Tập trung nhiều vào `Redux` với `Redux Toolkit`
- Sử dụng toàn bộ là `hooks`
- Học sử dụng UI lib: `Reactstrap` (bootstrap)
- Học cách sử dụng form `Formik`

## Project này build cái gì?

`PHOTO APP`

* App đơn giản để quản lý hình ảnh yêu thích, được chọn lựa từ https://picsum.photos/
* CRUD operators
* Gồm có 2 trang:
	* `Home`: listting + view + delete
	* `AddEdit`: dùng để tạo mới + sửa thông tin của một photo.
* Mỗi photo gồm: `title` + `categoryId` + `imageUrl`
* Các chức năng:
	* Render danh sách photo yêu thích
	* Lọc photo theo category
	* Thêm mới một photo
	* Chỉnh sửa một photo
	* Remove một photo
	* Persist dữ liệu khi reload browser.
	* Random photo ngẫu nhiên
	* Hiển thị danh sách photo để lựa chọn

## Công nghệ sử dụng trong project này
* ReactJS (CRA)
* Redux (Redux toolkit)
* Form management: Formik
* Routings: React Router
* UI lib: Reactstrap
* Redux-Persist

## Knowledge
* Tổ chức folder, file trong thực tế
* Sử dụng Redux tốt hơn với Redux Toolkit.
* Biết cách tạo các custom field trong `Formik`.
* Thiết kế routing trong ReactJS App.
* Sử dụng một thư viện UI bên ngoài để làm UI nhanh
