import { useState, useContext } from 'react';
import 'antd/dist/antd.css';
import { Tabs, Col, Row, Input, Form, Button, Space } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { Context } from '@/contexts/Transfer';
import FormItem from 'antd/lib/form/FormItem';
import TableScr from '../TableScreen';
import AdvScr from '../AdvancedSearchScreen';
import DetailProf from '../DetailScreen';
const { TabPane } = Tabs;

const MainScreenTransfer = () => {
    const [click, setClick] = useState(true);
    const { activeKeyTab } = useContext(Context);
    const [data, setData] = useState([]);
    const { dataSource, setDataSource, selectData } = useContext(Context);
    const [bks, setBks] = useState('');
    const searchBKS = (e) => {
        e.preventDefault();
        if (bks === '') {
            console.log(bks);
            fetch(
                'http://10.0.25.184:8089/DkOtoFull/api/GetSTDC?limit=10&page=1&donViCsgtID=29&isKhacTinh=true&api_key=123',
            )
                .then((res) => res.json())
                .then((result) => {
                    setData(result.result.data);
                    setDataSource(result.result.data);
                    console.log('datas', result.result.data);
                })
                .catch((error) => {});
        } else {
            console.log(bks);
            fetch(
                'http://10.0.25.184:8089/DkOtoFull/api/GetSTDCTimKiemNangCao?bienSo=' +
                    bks +
                    '&limit=10&page=1&donViCsgtID=29&isKhacTinh=true&api_key=123',
            )
                .then((res) => res.json())
                .then((result) => {
                    setData(result.result.data);
                    setDataSource(result.result.data);
                    console.log('répone', result);
                })
                .catch((error) => {});
        }
    };

    // const handleChange = (e) => {
    //     setBks({
    //         [e.target.name]: e.target.value,
    //     });
    // };

    const visibleButton = () => {
        click === false ? setClick(true) : setClick(false);
    };
    console.log('Active' + activeKeyTab.get);

    const onChangValueBKS = (event) => {
        setBks(event.target.value);
    };

    return (
        <Layout>
            <Row>
                <Col span={8}>
                    <Row>
                        <FormItem name="timKiem" label="Biển kiểm soát">
                            <Input onChange={onChangValueBKS} />
                        </FormItem>
                    </Row>
                </Col>
                <Col span={8}>
                    <Space>
                        <Button onClick={searchBKS}>Tìm kiếm</Button>
                        <Button onClick={visibleButton}>
                            Tìm kiếm nâng cao
                        </Button>
                    </Space>
                </Col>
            </Row>
            <Row style={{ display: click === false ? '' : 'none' }}>
                <AdvScr />
            </Row>
            <Tabs defaultActiveKey={activeKeyTab}>
                <TabPane
                    value={dataSource}
                    tab="Thông tin phương tiện"
                    key="tabThongTin"
                    style={{ width: '90%', margin: 'auto' }}
                >
                    <TableScr />
                </TabPane>
                <TabPane tab="Thông tin chi tiết" key="tabChiTiet">
                    <DetailProf />
                </TabPane>
            </Tabs>
        </Layout>
    );
};
export default MainScreenTransfer;
