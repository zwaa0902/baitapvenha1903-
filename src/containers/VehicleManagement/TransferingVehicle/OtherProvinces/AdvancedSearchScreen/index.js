import { Tabs, Col, Row, Input, Form, Button, Space, Select } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Wrapper } from './styles';
const AdvancedSearch = () => {
    const [form] = Form.useForm();
    const ChangedValue = (changedValues, allValues) => {
        console.log('allvalue', allValues);
    };

    return (
        <Wrapper>
            <Form form={form} onValuesChange={ChangedValue}>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <FormItem label="Số khung">
                            <Input />
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <FormItem label="Số máy 1">
                            <Input />
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <FormItem label="Số máy 2">
                            <Input />
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <FormItem label="Trạng thái đăng ký">
                            <Select />
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem label="Trạng thái hồ sơ">
                            <Select />
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        </Wrapper>
    );
};
export default AdvancedSearch;
