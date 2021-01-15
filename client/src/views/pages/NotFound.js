import React from 'react';
import { Result,Button } from 'antd';
import BaseLayout from "../frame/Base";

export default (props) => {
  return (<BaseLayout>
    <Result
      status="404"
      title="404"
      subTitle="Maaf, Halaman yang Anda cari tidak ada."
      extra={<Button type="primary" onClick={() => props.history.goBack()}>Back</Button>}
    />
  </BaseLayout>
  );
};