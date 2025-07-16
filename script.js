// 动态背景粒子效果
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width, height;
let particles = [];

function initCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(devicePixelRatio, devicePixelRatio);
}
function random(min, max) {
  return Math.random() * (max - min) + min;
}

class Particle {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.size = random(1, 3);
    this.speedX = random(-0.2, 0.2);
    this.speedY = random(-0.2, 0.2);
    this.opacity = random(0.2, 0.7);
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x < 0) this.x = width;
    else if(this.x > width) this.x = 0;
    if(this.y < 0) this.y = height;
    else if(this.y > height) this.y = 0;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
    ctx.shadowColor = 'rgba(59,130,246,0.6)';
    ctx.shadowBlur = 8;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function createParticles(num) {
  particles = [];
  for(let i=0; i<num; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  initCanvas();
  createParticles(80);
});

initCanvas();
createParticles(80);
animate();

// 卡片滚动动画
const cards = document.querySelectorAll('.animated-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('fade-up');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
cards.forEach(card => observer.observe(card));

// 点击波纹效果 + 按钮点击反馈
cards.forEach(card => {
  card.addEventListener('click', function(e) {
    if(e.target.tagName.toLowerCase() === 'button' || e.target.closest('button')) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const rect = this.getBoundingClientRect();
      ripple.style.left = (e.clientX - rect.left) + 'px';
      ripple.style.top = (e.clientY - rect.top) + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }
  });
});

// 深色模式切换按钮逻辑
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});
