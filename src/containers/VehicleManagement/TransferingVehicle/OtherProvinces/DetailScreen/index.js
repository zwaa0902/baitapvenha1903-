import {
    Button,
    Card,
    Col,
    Divider,
    Form,
    Input,
    Row,
    Select,
    Space,
} from 'antd';
import 'antd/dist/antd.css';
import Grid from 'antd/lib/card/Grid';
import { useState, useEffect, useContext } from 'react';
import { Context } from '@/contexts/Transfer';
import { Wrapper, CenterButton } from './styles';

const TransferProfile = () => {
    const [form] = Form.useForm();
    const { selectData } = useContext(Context);

    console.log('Name:', selectData.get[0].ten);
    console.log('BKS:', selectData.get[0].bienso_DAYDU);

    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    const onValuesChange = (changedValues, allValues) => {};

    return (
        <Wrapper>
            <Form
                form={form}
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
                colon={false}
                onFinish={onFinish}
                onValuesChange={onValuesChange}
                scrollToFirstError
                labelAlign="left"
                spellCheck={{ width: '100%' }}
            >
                <Row gutter={(16, 16)}>
                    <Col span={14}>
                        <Divider>Thông tin chủ sở hữu mới</Divider>
                        <Row gutter={(16, 16)}>
                            <Col span={12}>
                                <Form.Item
                                    initialValue={selectData.get[0].ten}
                                    label="Chủ sở hữu"
                                    name={['otoChuSoHuu', 'ten']}
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Năm sinh"
                                    name={['otoChuSoHuu', 'namsinh']}
                                    rules={[{ required: true }]}
                                >
                                    <input type="date" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={(16, 16)}>
                            <Col span={12}>
                                <Form.Item
                                    label="Quốc gia"
                                    name={['otoChuSoHuu', 'quocGiaId']}
                                    rules={[{ required: true }]}
                                >
                                    <Select />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Tỉnh/Thành phố"
                                    name={['otoChuSoHuu', 'tinhThanhPho']}
                                    rules={[{ required: true }]}
                                >
                                    <Select />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={(16, 16)}>
                            <Col span={12}>
                                <Form.Item
                                    label="Quận/Huyện"
                                    name={['otoChuSoHuu', 'quanHuyen']}
                                    rules={[{ required: true }]}
                                >
                                    <Select />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Phường/Xã"
                                    name={['otoChuSoHuu', 'phuongXa']}
                                    rules={[{ required: true }]}
                                >
                                    <Select />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={(16, 16)}>
                            <Col span="24">
                                <Form.Item
                                    label="Địa chỉ"
                                    name={['otoChuSoHuu', 'diaChi']}
                                    rules={[{ required: true }]}
                                    labelCol={{ span: 5 }}
                                    wrapperCol={{ span: 19 }}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={(16, 16)}>
                            <Col span="24">
                                <Form.Item
                                    label="Số CCCD/CMND/ Hộ chiếu của chủ xe"
                                    name={['otoChuSoHuu', 'soCMND']}
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={(16, 16)}>
                            <Col span={12}>
                                <Form.Item
                                    label="Cấp ngày"
                                    name={['otoChuSoHuu', 'ngayCapCMND']}
                                    rules={[{ required: true }]}
                                >
                                    <input type="date" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Nơi cấp"
                                    name={['otoChuSoHuu', 'noiCapCMND']}
                                    rules={[{ required: true }]}
                                >
                                    <Select />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={(16, 16)}>
                            <Col span="24">
                                <Form.Item
                                    label="Số CCCD/CMND/ Hộ chiếu của NLTT"
                                    name={['otoChuSoHuu', 'soCMND_nltt']}
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={(16, 16)}>
                            <Col span={12}>
                                <Form.Item
                                    label="Cấp ngày"
                                    name={['otoChuSoHuu', 'ngayCapCMND_nltt']}
                                >
                                    <input type="date" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Nơi cấp"
                                    name={['otoChuSoHuu', 'noiCapCMND_nltt']}
                                >
                                    <Select />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={(16, 16)}>
                            <Col span={12}>
                                <Form.Item
                                    label="Điện thoại chủ xe"
                                    name={['otoChuSoHuu', 'sdt']}
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Email chủ xe"
                                    name={['otoChuSoHuu', 'email']}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={(16, 16)}>
                            <Col span={12}>
                                <Form.Item
                                    label="Điện thoại NLTT"
                                    name={['otoChuSoHuu', 'sdt_nltt']}
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Email của NLTT"
                                    name={['otoChuSoHuu', 'email_nltt']}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={(16, 16)}>
                            <Col span={12}>
                                <Form.Item
                                    label="Ngày đăng ký sang tên"
                                    name={['otoChuSoHuu', 'ngaySangTen']}
                                >
                                    <input type="date" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={10}>
                        <Divider>Thông tin xe</Divider>

                        <Form.Item
                            initialValue={selectData.get[0].bienso_DAYDU}
                            label="Biển số"
                            name="bienso_DAYDU"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Loại cải tạo"
                            name={['oto', 'loaiCaiTao']}
                        >
                            <Select />
                        </Form.Item>

                        <Form.Item label="Loại xe">
                            <Input disabled />
                        </Form.Item>

                        <Form.Item label="Nhãn hiệu">
                            <Input disabled />
                        </Form.Item>

                        <Form.Item label="Số loại">
                            <Input disabled />
                        </Form.Item>

                        <Form.Item
                            initialValue={selectData.get[0].so_KHUNG}
                            label="Số khung"
                            name="so_KHUNG"
                        >
                            <Input disabled />
                        </Form.Item>

                        <Form.Item
                            initialValue={selectData.get[0].so_may}
                            label="Số máy 1"
                        >
                            <Input disabled />
                        </Form.Item>

                        <Form.Item label="Số máy 2">
                            <Input disabled />
                        </Form.Item>

                        <Form.Item label="Màu sơn">
                            <Input disabled />
                        </Form.Item>

                        <Form.Item label="Đầu biển theo tỉnh">
                            <Input disabled />
                        </Form.Item>

                        <Form.Item label="Đầu biển quốc gia">
                            <Input disabled />
                        </Form.Item>

                        <Form.Item label="Seri chữ">
                            <Input disabled />
                        </Form.Item>

                        <Form.Item label="Màu biển">
                            <Input disabled />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <CenterButton>
                            <Space>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Lưu
                                    </Button>
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        htmlType="button"
                                        onClick={() => {
                                            form.resetFields();
                                        }}
                                    >
                                        Làm mới
                                    </Button>
                                </Form.Item>
                            </Space>
                        </CenterButton>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </Form>
        </Wrapper>
    );
};

export default TransferProfile;
