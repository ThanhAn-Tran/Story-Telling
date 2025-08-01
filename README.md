# Story-Telling Website

Website kể chuyện tương tác với chatbot AI về hai chủ đề:
- **Đờn ca tài tử**
- **Lô tô**

## Tính năng

- Chatbot AI trả lời về từng chủ đề bằng tiếng Việt.
- Giao diện web hiện đại, dễ sử dụng.
- Tích hợp audio, hình ảnh minh họa.

## Hướng dẫn cài đặt & chạy

### 1. Yêu cầu

- Python 3.x
- Trình duyệt web hiện đại (Chrome, Edge, Firefox...)

### 2. Chạy server

Mở terminal/cmd, di chuyển vào thư mục project và chạy:

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