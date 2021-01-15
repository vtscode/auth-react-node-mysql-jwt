import React from 'react';
import { Link } from "react-router-dom";
import { Breadcrumb, PageHeader, Typography } from "antd";

const Container = ({children,title,subtitle,extra}) => (<PageHeader
  onBack={() => window.history.back()}
  title={title || ''}
  subTitle={subtitle || ''}
  className="contenpage__header"
  {...extra}
>
  {children}
</PageHeader>);

export default (props) => {
  const {breadcrumb,children,title,subtitle,extra = {}} = props;
  const propsContainer = {children,title,subtitle,extra};

  if(breadcrumb){
    return(<>
      <Breadcrumb style={{ margin: '.5em 0 0 1rem'}}>
        {
          breadcrumb.map((x,idx) => {
            return(<React.Fragment key={idx}>
              <Breadcrumb.Item>
                {x.link ? 
                  <Link to={x.link}>{x.text}</Link>
                  :
                  <Typography.Text>{x.text}</Typography.Text>
                }
              </Breadcrumb.Item>
            </React.Fragment>)
          })
        }
      </Breadcrumb>
      <Container {...propsContainer} />
    </>);
  }

  return (<Container {...propsContainer} />);
}