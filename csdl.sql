-- Bảng USER
CREATE TABLE qltdl.USER (
    email VARCHAR(100) UNIQUE NOT NULL, -- Thêm ràng buộc UNIQUE cho cột email
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(255) NOT NULL

);
-- Bảng ADMIN (dành cho người quản trị hệ thống)
CREATE TABLE qltdl.ADMIN (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    ho_ten VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);
-- Bảng CUSTOMER
CREATE TABLE qltdl.CUSTOMER (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    ho_ten VARCHAR(100) NOT NULL,
    cccd VARCHAR(20) UNIQUE NOT NULL,
    avatar VARCHAR(255),
    ngay_sinh DATE,
    sdt VARCHAR(20),
	email VARCHAR(100) UNIQUE, 
    FOREIGN KEY (email) REFERENCES USER(email) -- Tạo khóa ngoại tham chiếu đến USER.email
);

-- Bảng PARTNER
CREATE TABLE qltdl.PARTNER (
    partner_id INT AUTO_INCREMENT PRIMARY KEY,
    ten_doi_tac VARCHAR(255) NOT NULL,
    dia_chi VARCHAR(255),
    sdt VARCHAR(20),
    email VARCHAR(100),
    mo_ta TEXT
);

-- Bảng SUPPLIER
CREATE TABLE qltdl.SUPPLIER (
    supplier_id INT AUTO_INCREMENT PRIMARY KEY,
    ten_ncc VARCHAR(255) NOT NULL,
    dia_chi VARCHAR(255),
    sdt VARCHAR(20),
    email VARCHAR(100),
    mo_ta TEXT
);

-- Bảng TOUR
CREATE TABLE qltdl.TOUR (
    tour_id INT AUTO_INCREMENT PRIMARY KEY,
    ten_tour VARCHAR(255) NOT NULL,
    mo_ta TEXT,
    ngay_khoi_hanh DATE,
    ngay_ket_thuc DATE,
    gia_tien DECIMAL(10, 2) NOT NULL,
    partner_id INT,
    supplier_id INT,
    FOREIGN KEY (partner_id) REFERENCES PARTNER(partner_id),
    FOREIGN KEY (supplier_id) REFERENCES SUPPLIER(supplier_id)
);

-- Bảng BOOKING
CREATE TABLE qltdl.BOOKING (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    tour_id INT,
    ngay_dat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tong_tien DECIMAL(10, 2) NOT NULL,
    trang_thai_thanh_toan VARCHAR(50),
    FOREIGN KEY (customer_id) REFERENCES CUSTOMER(customer_id),
    FOREIGN KEY (tour_id) REFERENCES TOUR(tour_id)
);
