// Lấy các phần tử cần thiết
const luckyMessageElement = document.getElementById("lucky-message");
const luckySound = document.getElementById("lucky-sound");
const fireworkSound = document.getElementById("firework-sound");

// Mảng 4 câu chúc mừng ngẫu nhiên
const messages = [
  "Chúc bạn một năm mới đầy ắp niềm vui, sức khỏe dồi dào và hạnh phúc viên mãn!",
  "Mong mọi điều tốt đẹp sẽ đến với bạn, năm mới an khang thịnh vượng, tài lộc phát đạt!",
  "Chúc bạn thành công trong công việc, may mắn trong cuộc sống và tình yêu ngọt ngào!",
  "Chúc bạn và gia đình luôn bình an, hạnh phúc, cùng nhau vượt qua mọi thử thách trong năm mới!"
];

// Mảng các màu chữ khác nhau cho mỗi bao lì xì
const textColors = [
  "#FF5733", // Màu đỏ
  "#33FF57", // Màu xanh lá
  "#FF1493", // Màu hồng
  "#32CD32"  // Màu xanh lá cây sáng
];

// Biến theo dõi tình trạng bao đã được mở hay chưa
let isEnvelopeOpened = false;

// Hàm khi người dùng nhấp vào bao lì xì
function openEnvelope(event) {
  if (isEnvelopeOpened) {
    alert("Bạn đã mở một bao lì xì rồi, chỉ có thể mở một bao duy nhất!");
    return; // Dừng lại nếu bao đã được mở
  }

  // Lấy câu chúc ngẫu nhiên từ mảng
  const messageIndex = parseInt(event.target.getAttribute('data-index')); // Lấy chỉ số của bao đã mở
  const randomMessage = messages[messageIndex];

  // Hiển thị lời chúc
  luckyMessageElement.textContent = randomMessage;  // Hiển thị lời chúc

  // Thay đổi màu chữ câu chúc
  luckyMessageElement.style.color = textColors[messageIndex];  // Màu sắc thay đổi tùy theo bao

  // Phát âm thanh
  luckySound.play();

  // Tạo hiệu ứng pháo bông
  createFireworksEffect();

  // Thêm lớp 'open' cho bao lì xì đã được mở
  event.target.classList.add("open");

  // Đánh dấu là bao đã được mở
  isEnvelopeOpened = true;
}

// Hàm tạo hiệu ứng pháo bông
function createFireworksEffect() {
  const fireworksContainer = document.querySelector(".container");
  const firework = document.createElement("div");
  firework.classList.add("fireworks-effect");

  // Vị trí ngẫu nhiên cho pháo bông
  firework.style.left = `${Math.random() * 100}%`;

  // Thêm pháo bông vào trang
  fireworksContainer.appendChild(firework);

  // Xóa pháo bông sau khi hiệu ứng kết thúc
  setTimeout(() => firework.remove(), 1000);
}

// Thêm sự kiện click cho từng bao lì xì (mỗi bao sẽ có một câu chúc riêng)
document.getElementById("envelope-1").addEventListener('click', openEnvelope);
document.getElementById("envelope-2").addEventListener('click', openEnvelope);
document.getElementById("envelope-3").addEventListener('click', openEnvelope);
document.getElementById("envelope-4").addEventListener('click', openEnvelope);
