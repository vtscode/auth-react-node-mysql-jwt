import React from 'react';
import { Button } from 'antd';

export default ({ text = '', propsBtn }) => 
(<>
  {text ? 
    <Button
      {...propsBtn}
    >
      {text}
    </Button> 
  :
    <Button
      {...propsBtn}
    />
  }
</>);