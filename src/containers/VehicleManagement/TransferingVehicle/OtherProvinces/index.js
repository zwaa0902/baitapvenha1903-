import { useState, useEffect, useContext } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Col, Row } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { GridCustom, Title, Wrapper, Header2, TabCenter } from './styles';
import { Context } from '@/contexts/Transfer';
import MainScreenTrans from '../OtherProvinces/MainScreen';
const { TabPane } = Tabs;
const OtherPro = () => {
    const [value, setValue] = useContext(Context);

    return (
        <Layout>
            <Header>
                <Title>HỆ THỐNG ĐĂNG KÝ XE Ô TÔ</Title>
            </Header>
            <Content>
                <Row>
                    <Header2>ĐĂNG KÝ SANG TÊN KHÁC TỈNH</Header2>
                </Row>
                <TabCenter>
                    <Tabs defaultActiveKey="tabThongTin" centered>
                        <TabPane
                            tab="ĐĂNG KÝ DI CHUYỂN"
                            key="tabThongTin"
                            style={{ width: '90%', margin: 'auto' }}
                        >
                            <MainScreenTrans />
                        </TabPane>
                        <TabPane tab="HỒ SƠ DI CHUYỂN" key="tabChiTiet">
                            {/* <HoSoChiTiet /> */}
                        </TabPane>
                    </Tabs>
                </TabCenter>
            </Content>
        </Layout>
    );
};

export default OtherPro;
