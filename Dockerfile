# Stage 1: build stage
FROM node:22-alpine as build-stage

# Thiết lập thư mục làm việc
WORKDIR /app

# Cấu hình Node.js để sử dụng bộ nhớ tối ưu
ENV NODE_OPTIONS=--max_old_space_size=8192

# Sao chép package.json và package-lock.json
COPY package.json package-lock.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Xây dựng dự án
RUN npm run build
RUN echo "Build successful 🎉 🎉 🎉"

# Stage 2: production stage
FROM nginx:latest as production-stage

# Sao chép các file đã build vào thư mục Nginx để phục vụ ứng dụng
COPY --from=build-stage /app/build /usr/share/nginx/html

# Mở cổng 80 để truy cập ứng dụng
EXPOSE 80

# Khởi động Nginx khi container chạy
CMD ["nginx", "-g", "daemon off;"]
RUN echo "Deploy to nginx successful 🎉 🎉 🎉"
