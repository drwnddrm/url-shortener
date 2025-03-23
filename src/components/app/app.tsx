import React from 'react';
import { FaCopy } from 'react-icons/fa';

const App = () => {
  const copyText = (event: React.MouseEvent<HTMLElement>) => {
    const text = event.currentTarget.previousSibling?.textContent;
    if (text) {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <>
      <header>
        <h1>LOGO</h1>
      </header>
      <section>
        <form method='post'>
          <label htmlFor='url'>Вставьте вашу ссылку:</label>
          <input id='url' name='url' type='url' />
          <button type='submit'>Получить короткую ссылку</button>
        </form>
      </section>
      <section>
        <h2>Список ссылок</h2>
        <div>
          <ul>
            <li>Ссылка</li>
            <li>Короткая ссылка</li>
          </ul>
          <ul>
            <li>
              <div>
                <span>Ссылка</span>
                <button onClick={copyText} children={<FaCopy />} />
              </div>
              <div>
                <span>Короткая ссылка</span>
                <button onClick={copyText} children={<FaCopy />} />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default App;
