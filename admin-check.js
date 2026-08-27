// admin-check.js

// 1. Укажите ваш Telegram ID (замените 123456789 на ваш ID из @userinfobot)
const ADMIN_TELEGRAM_ID = 123456789;

document.addEventListener('DOMContentLoaded', () => {
  // Проверяем, запущено ли приложение в Telegram
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.ready();

    const user = tg.initDataUnsafe?.user;

    // Если зашёл администратор — автоматически создаём и вставляем кнопку
    if (user && user.id === ADMIN_TELEGRAM_ID) {
      createAdminButton();
    }
  }
});

function createAdminButton() {
  // Создаём контейнер для кнопки
  const btnContainer = document.createElement('div');
  btnContainer.id = 'adminPanelBtn';
  btnContainer.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
  `;

  // Создаём саму кнопку
  const btn = document.createElement('a');
  btn.href = 'kitsaigg-admin.html';
  btn.innerText = '⚙️ Админка';
  btn.style.cssText = `
    display: inline-block;
    padding: 10px 16px;
    background: #2563eb;
    color: #ffffff;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    font-size: 13px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    font-family: sans-serif;
  `;

  btnContainer.appendChild(btn);
  document.body.appendChild(btnContainer);
}
