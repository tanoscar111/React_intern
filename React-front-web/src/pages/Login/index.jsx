import { Input, Form, Card } from 'antd';
import { connect } from 'react-redux';
import { loginUser as loginAction } from '../../redux/actions';
import { Button } from 'react-bootstrap';
function LoginPage(props) {
  const { onLogin } = props;
  
  return (
    <div style={{ width: 500, margin: '16px auto' }}>
      <Card size="small">
        <h3>Login:</h3>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={(values) => onLogin(values)}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16, offset: 8 }} style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {  status, userInfo } = state.userReducer;
  return {
    userInfo: userInfo,
    status: status,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (params) => dispatch(loginAction(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
