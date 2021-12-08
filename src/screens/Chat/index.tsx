import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';

import { RNView, RNHeaderPage, RNText } from '../../components/cores';
import { ChatProps } from './ChatProps';

import { renderSend } from './CustomViews';

const Chat = ({ componentId }: ChatProps) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Sajkdhsad sdam,mdsjadsnm adsj da asd das das sand dsajdsa sand das dsanads Adam daajsdm dsaads asdjmd asajsnm dasnads das dsajdmnsa djsamd asdjsam dasdasmbadsansdm adsmdasbsad asd Thanh Doan',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <RNView fill>
      <RNHeaderPage
        title="Doan Tien Thanh"
        componentId={componentId}
        iconRight="video"
        onPressRight={() => {}}
      />
      <RNView fill>
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderSend={renderSend}
        />
      </RNView>
    </RNView>
  );
};

export default Chat;

const styles = StyleSheet.create({});
