import React, { useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { copyText } from '../../utils/utils';
import { getShortenerApi } from '../../utils/api';

const App = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const changeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.currentTarget.value);
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(url);

    getShortenerApi(url);
  };

  // useEffect(() => {
  //   getShortenerApi(url);
  // }, [url, setUrl]);

  return (
    <>
      <header>
        <h1>LOGO</h1>
      </header>
      <section>
        <form method='post' onSubmit={submitForm}>
          <label htmlFor='url'>Вставить ссылку:</label>
          <input
            id='url'
            name='url'
            type='url'
            value={url}
            onChange={changeUrl}
            required
          />
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
                <span>{shortUrl === '' ? 'Короткая ссылка' : shortUrl}</span>
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
