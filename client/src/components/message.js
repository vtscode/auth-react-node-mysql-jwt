import { message } from 'antd';
export const options = {
  top: 100,
  duration: 2,
  maxCount: 3,
  rtl: false,
}

message.config(options);

const Message = props => {
  const {type = 'info', text = '', duration = 2, onClose} = props;

  switch (type) {
    case '':
      message[type](`${text}`, duration, onClose);
      break;
    default:
      message[type](`${text}`, duration, onClose);
      break;
  }
};

export const MessageContent = props => {
  const { type = '' } = props;
  
  switch (type) {
    case '':
      message.info({...props});
      break;
    default:
      message[type]({...props});
      break;
  }
}

export default Message;