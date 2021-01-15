import {notification} from 'antd';

const Notification = props => {
  const {response = {}, type = 'info', placement = 'bottomRight' } = props;

  return notification[type]({
      message: response.code,
      description: `${response.message} , Terima kasih.`,
      placement,
      ...props
    });
};

export default Notification;