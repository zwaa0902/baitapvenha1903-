import { FormProvider } from 'antd/lib/form/context';
import Link from 'next/link';
import { Card, GridCustom, Title, Wrapper } from './styles';

const Moving = () => {
    return (
        <Wrapper>
            <Title>HỆ THỐNG ĐĂNG KÝ XE Ô TÔ VÀ MÔ TÔ</Title>
            <GridCustom>
                <Card href="/vehicle/transfer/diff">Sang tên khác tỉnh</Card>

                <Card href="/">Sang tên cùng tỉnh</Card>
            </GridCustom>
        </Wrapper>
    );
};

export default Moving;
