import React, { useState } from 'react';
import UserAction from '../components/molecules/UserAction';
import Result from '../components/organisms/Result';
import styles from  '../styles/Home.module.css';

import { getResponse } from '@/api';

const Home = () => {
  const [messages, setMessages] = useState<{ content: string, role: string, avatar: string }[]>([]);

  const handleQuestionSubmit = async (question: string) => {

    const userMessage = {
      role: "user",
      content: question,
      avatar: 'image.png'
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {

      const rdata = await getResponse({question: question})
      console.log(rdata)

      const data = rdata.choices[0]?.message?.content || '';
      const botMessage = { content: data, role: '"assistant"', avatar: 'image.png' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div className="App">
      <div className={styles.userActionContainer}>
        <UserAction
          titleText="Simple ChatGPT"
          titleColor="#333"
          buttonText="Send"
          buttonTextColor="#fff"
          buttonBgColor="#007bff"
          onButtonClick={handleQuestionSubmit}
        />
      </div>
      <div className={styles.resultContainer}>
        <Result
          messages={messages}
        />
      </div>
    </div>
  );
};

export default Home;
