# 📖 Website Kể Chuyện và Tương Tác với AI

Website kể chuyện tương tác bằng chatbot AI về hai chủ đề văn hóa Việt Nam:
- **Đờn ca tài tử**
- **Lô tô**

Người dùng có thể trò chuyện với chatbot để khám phá các câu chuyện, hình ảnh, và âm thanh đặc sắc liên quan đến từng chủ đề.

---

## 🎯 Tính Năng

- Chatbot AI hiểu tiếng Việt, trả lời theo từng chủ đề.
- Giao diện hiện đại, hỗ trợ hình ảnh và âm thanh minh họa.
- Dễ sử dụng, không cần cài đặt phức tạp.
- Hỗ trợ trên các trình duyệt phổ biến (Chrome, Edge, Firefox...).

---

## 🎥 Video Demo

👉 [Xem video demo tại đây](https://drive.google.com/file/d/17fQ7giZWfamFzdqUmlyX7UZ1eqBLQxNn/view?usp=sharing)

---

## 🚀 Cài Đặt & Sử Dụng

### 1. Yêu Cầu

- Python 3.x
- Trình duyệt hiện đại

### 2. Chạy Server

```bash
python server.py
```

Server sẽ chạy tại địa chỉ: [http://localhost:8000/web/](http://localhost:8000/web/)

### 3. Cấu hình API Key cho Chatbot

#### a. Lấy API key OpenAI

1. Đăng ký tài khoản tại: https://platform.openai.com/
2. Vào trang: https://platform.openai.com/api-keys
3. Nhấn "Create new secret key" và copy API key.

#### b. Dán API key vào project

- Mở file:
  - `web/web-lo-lo/chatbot.js`
  - `web/web-don-ca-tai-tu/chatbot.js`
- Tìm dòng:
  ```js
  const apiKey = 'your-api-key';
  ```
- Thay `'your-api-key'` hoặc key mẫu bằng API key bạn vừa lấy.

**Lưu ý:**  
Không chia sẻ API key công khai để tránh bị lạm dụng.

### 4. Sử dụng

- Truy cập [http://localhost:8000/web/web-lo-lo/](http://localhost:8000/web/web-lo-lo/) để trải nghiệm chatbot Lô Tô.
- Truy cập [http://localhost:8000/web/web-don-ca-tai-tu/](http://localhost:8000/web/web-don-ca-tai-tu/) để trải nghiệm chatbot Đờn ca tài tử.

---

## Thư mục

- `server.py`: Chạy server tĩnh.
- `web/`: Chứa mã nguồn frontend.
- `audio/`, `images/`: Tư liệu minh họa.

---

## Đóng góp

Mọi ý kiến đóng góp, vui lòng gửi issue hoặc pull request!