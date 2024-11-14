# Tic Tac Toe Game 🎮

### Mô tả Dự án

Đây là một ứng dụng Tic Tac Toe (Cờ Caro) được xây dựng bằng **React** và sử dụng **TypeScript** để tăng tính an toàn cho mã nguồn. Dự án này được phát triển với giao diện thân thiện, có khả năng chọn cấp độ chơi từ dễ đến khó, tích hợp AI sử dụng thuật toán Minimax cho chế độ khó, mang lại trải nghiệm chơi phong phú và thử thách.

### Các tính năng chính

- Chơi đơn (Single Player) với chế độ AI nhiều cấp độ: Dễ, Trung Bình, và Khó.
- Giao diện trực quan và hiện đại.
- Docker image sẵn sàng để triển khai nhanh chóng.

### Công nghệ sử dụng

- **React** với **TypeScript** cho front-end.
- **Docker** để đóng gói và triển khai.
- **Nginx** phục vụ ứng dụng khi chạy trong Docker container.

## Hướng dẫn chạy ứng dụng

### 1. Chạy trên Docker

#### Yêu cầu

- Docker đã được cài đặt trên máy.

#### Các bước chạy

1. **Pull Docker Image**: Pull Docker image từ Docker Hub.

   ```bash
   docker pull xuanphuc2002/xuanphuc-tic-toc-toe
   ```

2. **Chạy Docker Container**: Chạy Docker container với image vừa pull.

   ```bash
   docker run -d -p 8080:80 xuanphuc2002/xuanphuc-tic-toc-toe
   ```

3. **Truy cập ứng dụng**: Mở trình duyệt và truy cập vào [localhost:8080](http://localhost:8080) để chơi Tic Tac Toe.

### 2. Chạy trên Vercel

**Truy cập ứng dụng**: Mở trình duyệt và truy cập vào [tic-tac-toe-game.vercel.app](https://draphony-tic-toc-toe.vercel.app/) để chơi Tic Tac Toe.

### 3. Link Docker Image

- [Docker Hub](https://hub.docker.com/r/xuanphuc2002/xuanphuc-tic-toc-toe)

### 4. Thông tin cá nhân

- Tác giả: Ngô Lê Xuân Phúc
- Email: phuc.ngolexuan@gmail.com
